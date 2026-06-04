import requests
#from bs4 import BeautifulSoup
from lxml import etree
import csv
from concurrent.futures import ThreadPoolExecutor, as_completed
import re
import os
import random
import time
from pymongo import MongoClient
from pymongo.errors import PyMongoError
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0',
    'Cookie': 'ab_jid=9d4d9afc42950b85b5b064ed07a1f3812147; ab_jid_BFESS=9d4d9afc42950b85b5b064ed07a1f3812147; BDUSS_BFESS=VlcUkyODV0OUVLMDZ0amIxd29heE1IYkx-OWFFU3lYN2xOQVoxcmVGUGctU3RvSVFBQUFBJCQAAAAAAAAAAAEAAABXbyPOQkJ4dWFuOTk5MDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBsBGjgbARodG; BAIDUID_BFESS=26046D94B9DB2C291BC9167F122F9653:FG=1; ZFY=UO18mAIRr:A6hy3Tw3cpa0OF6ZTueSSGY5v4BDHj9VXM:C; ab_bid=8c40c8e37dcf5cfd23c070be1f65b82ea8d8; ab_sr=1.0.1_ZmJiMWYyYTlhNmVlOTI5ZDc1YjZhYTE0NDMxYzgzNzY3NzBjZDU5MjQ3NDk2YjY0NDkxOGNmMmQxYWZkMmI3YTY4ZmU3YzcyYWZiNzE5NDNjNGE3MGQzYjMxZGM5ODc2ZTA5NmU5ZjAzY2RjYjgzZTZmYzJkZTE1MzMzMDE3MTcyMDkxNWI0MjgxMDQxMmZjYmEwODRhOGI2YWU0NzZlMg==',
    'Referer': 'https://gz.lianjia.com/'
}
basic_url = 'https://gz.lianjia.com/zufang/'

#代理池
#proxy_pool = [
#    'http://49.79.138.241:20347',
#    'http://18.162.158.218:80',
#    'http://27.124.3.251:9000'
#]
# MongoDB配置
mongo_host = 'localhost'
mongo_port = 27017
mongo_db_name = 'lianjia_rent'
mongo_collection_name = 'gz_rent_houses'
# CSV文件保存路径
csv_file_path = 'lianjia_gz_rent.csv'

#请求页面
def page_request(url):
    #代理池
    #proxy = random.choice(proxy_pool)
    #proxies = {
    #    'http': proxy,
    #    'https': proxy
    #}
    #response = requests.get(url = url, proxies=proxies,timeout=10, headers = headers)
    #设置休眠时间
    sleep_time = random.uniform(60, 120)
    time.sleep(sleep_time)
    response = requests.get(url = url,timeout=10, headers = headers)
    html = response.content.decode('utf-8')
    return html

#价格区间处理
def parse_price(price_text):
    if not price_text:
        return None
    price_text = price_text.strip()
    # 情况1：纯数字（如 3800）
    if price_text.isdigit():
        return int(price_text)
    # 情况2：价格区间（如 2149-2192）
    elif '-' in price_text:
        # 提取区间内的所有数字
        nums = re.findall(r'\d+', price_text)
        if len(nums) == 2:
            # 可选：取最小值、最大值或中间值（这里取中间值，也可以改 nums[0] 取最小值）
            return (int(nums[0]) + int(nums[1])) // 2
    # 其他异常情况（返回 None 或保留原字符串）
    return None  # 或 return price_text（想保留原区间字符串就用这个）

#解析单个网页
def page_parse(html):
    if not html:
        return []
    tree = etree.HTML(html)
    house_items = tree.xpath('//div[contains(@class, "content__list--item") and @data-el="listItem"]')
    print(f"找到 {len(house_items)} 条房源容器")
    all_houses = []
    for item in house_items:
        house = {}
        # 1. 标题
        house['title'] = item.xpath('.//p[@class="content__list--item--title"]/a/text()')[0].strip() if item.xpath('.//p[@class="content__list--item--title"]/a/text()') else None
        # 2. 区域（天河）：第1个 a 标签
        house['area'] = item.xpath('.//p[@class="content__list--item--des"]/a[1]/text()')[0].strip() if item.xpath('.//p[@class="content__list--item--des"]/a[1]/text()') else None
        # 3. 详细地块（天河公园）：第2个 a 标签
        house['detailplace'] = item.xpath('.//p[@class="content__list--item--des"]/a[2]/text()')[0].strip() if item.xpath('.//p[@class="content__list--item--des"]/a[2]/text()') else None
        # 4. 面积（75.00）：第2个 text()（去掉㎡）
        desc_text = item.xpath('.//p[@class="content__list--item--des"]/text()')
        square_text = None
        # 第一步：正则提取
        if desc_text:
            full_desc = ''.join([t.strip() for t in desc_text])
            square_match = re.search(r'(\d+(?:\.\d+)?)㎡', full_desc)
            if square_match:
                square_text = square_match.group(1)
        # 第二步：正则匹配不到时，用你的XPath兜底
        if not square_text:
            square_xpath = item.xpath('.//*[@id="content"]/div[1]/div[1]/div[3]/div/p[2]/text()[3]')
            if square_xpath:
                square_str = square_xpath[0].strip().replace('㎡', '')
                if square_str.isdigit() or ('.' in square_str and square_str.replace('.','').isdigit()):
                    square_text = square_str
        house['square'] = float(square_text) if square_text else None
        # 5. 朝向（南）：第4个 text()
        position_text = None
        # 第一步：正则提取
        if desc_text:
            full_desc = ''.join([t.strip() for t in desc_text])
            position_match = re.search(r'(东|南|西|北|东南|西南|东北|西北|南北|东西)', full_desc)
            if position_match:
                position_text = position_match.group(1)
        # 第二步：正则匹配不到时，用你的XPath兜底（替换成实际路径）
        if not position_text:
            position_xpath = item.xpath('.//*[@id="content"]/div[1]/div[1]/div[3]/div/p[2]/text()[5]')
            if position_xpath:
                pos_str = position_xpath[0].strip()
                position_match = re.search(r'(东|南|西|北|东南|西南|东北|西北|南北|东西)', pos_str)
                if position_match:
                    position_text = position_match.group(1)
        house['position'] = position_text
        # 6. 户型（包含卫，可选匹配）
        roomtype_text = None
        if desc_text:
            full_desc = ''.join([t.strip() for t in desc_text])
            # 可选匹配卫：(\d+室\d+厅(?:\d+卫)?)
            roomtype_match = re.search(r'(\d+室\d+厅(?:\d+卫)?)', full_desc)
            if roomtype_match:
                roomtype_text = roomtype_match.group(1)
        house['roomtype'] = roomtype_text
        # 7. 价格（3800）：em 标签文本转整数
        price_list = item.xpath('.//span[@class="content__list--item-price"]/em/text()')
        house['price'] = parse_price(price_list[0]) if price_list else None

        if house['title'] and house['area']:
            all_houses.append(house)
        else:
            print(f"跳过无效房源：{house}")  # 方便调试

    print(f"共提取 {len(all_houses)} 条房源")
    for idx, house in enumerate(all_houses, 1):
        print(f"\n第 {idx} 条房源：")
        print(house)
    return all_houses

#多线程爬取
def multi_page_multi_thread_crawl():
    print("=== 链家租房：多线程爬多页（pg分页）===")
    max_page = 210
    
    # 1. 生成所有要爬的URL（pg1=第1页，pg2=第2页...）
    urls = [f"{basic_url}pg{page}/#contentList" for page in range(200, max_page + 1)]
    
    # 2. 多线程爬取+解析（核心）
    all_houses = []
    with ThreadPoolExecutor(max_workers=2) as executor:
        # 提交所有页面的任务：每个URL对应一个“请求+解析”任务
        future_tasks = {
            #键为前面的，值为url
            #括号内url传给u
            executor.submit(lambda u: page_parse(page_request(u)), url): url
            #for 循环
            for url in urls
        }
        
        # 收集每个页面的解析结果
        #这个for循环以完成顺序执行
        for future in as_completed(future_tasks):
            url = future_tasks[future]
            try:
                page_data = future.result()  # 获取单个页面的房源数据
                if page_data:
                    all_houses.extend(page_data)  # 汇总到总列表
                    print(f"✅ 成功爬取 {url} → {len(page_data)} 条房源")
                else:
                    print(f"❌ {url} 未爬取到数据")
            except Exception as e:
                print(f"⚠️ {url} 爬取异常：{e}")
    
    # 3. 汇总结果
    print(f"\n=== 爬取完成 ===")
    print(f"总爬取房源数：{len(all_houses)}")
    write_to_csv(all_houses)
    write_to_mongodb(all_houses)

#写入csv文件
def write_to_csv(all_houses):
    if not all_houses:
         print("⚠️ 无房源数据，跳过CSV写入")
         return
    fieldnames = ['title', 'area', 'detailplace', 'square', 'position', 'roomtype', 'price']
    try:
        with open(csv_file_path, 'a', encoding='utf-8-sig', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(all_houses)
        print(f"✅ CSV文件已保存至：{os.path.abspath(csv_file_path)}")
    except Exception as e:
        print(f"❌ CSV写入失败：{e}")

#写入mongodb
def write_to_mongodb(all_houses):
    if not all_houses:
        print("⚠️ 无房源数据，跳过MongoDB写入")
        return
    try:
        # 连接MongoDB
        client = MongoClient(host=mongo_host, port=mongo_port)
        db = client.get_database(mongo_db_name)
        collection = db.get_collection(mongo_collection_name)
        result = collection.insert_many(all_houses)
        print(f"✅ MongoDB写入成功，插入 {len(result.inserted_ids)} 条数据")
        print(f"   数据库：{mongo_db_name} | 集合：{mongo_collection_name}")
        client.close()
    except PyMongoError as e:
        print(f"❌ MongoDB写入失败：{e}")
    except Exception as e:
        print(f"❌ MongoDB连接/操作异常：{e}")

if __name__ == "__main__":
    multi_page_multi_thread_crawl()
    print("******************************************")
    
