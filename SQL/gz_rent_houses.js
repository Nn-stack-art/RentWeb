/*
 Navicat Premium Data Transfer

 Source Server         : MongoConnection
 Source Server Type    : MongoDB
 Source Server Version : 80200
 Source Host           : localhost:27017
 Source Schema         : lianjia_rent

 Target Server Type    : MongoDB
 Target Server Version : 80200
 File Encoding         : 65001

 Date: 27/12/2025 00:53:12
*/


// ----------------------------
// Collection structure for gz_rent_houses
// ----------------------------
db.getCollection("gz_rent_houses").drop();
db.createCollection("gz_rent_houses");

// ----------------------------
// Documents of gz_rent_houses
// ----------------------------
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab6b"),
    title: "整租·倾城酒店 1室0厅 西南",
    area: "越秀",
    detailplace: "盘福",
    square: 56.01,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab6c"),
    title: "整租·番禺华景新城 3室2厅 南",
    area: "番禺",
    detailplace: "桥南",
    square: 86.6,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab6d"),
    title: "整租·黄埔中央城 3室2厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 102.09,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab6e"),
    title: "整租·珠江帝景苑 5室2厅 西北",
    area: "海珠",
    detailplace: "广州塔",
    square: 197,
    position: "西",
    roomtype: "5室2厅3卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab6f"),
    title: "整租·敏捷绿湖首府二期 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 122,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab70"),
    title: "整租·环市东路 2室2厅 南",
    area: "越秀",
    detailplace: "环市东",
    square: 81,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab71"),
    title: "整租·实地蔷薇国际 3室2厅 南",
    area: "增城",
    detailplace: "荔城西区",
    square: 114,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab72"),
    title: "整租·实地常春藤 3室2厅 东南",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 99,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab73"),
    title: "整租·碧桂园凤凰城凤妍苑 3室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 100,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab74"),
    title: "整租·祈福新村A区 4室2厅 南",
    area: "番禺",
    detailplace: "祈福新村",
    square: 192,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab75"),
    title: "整租·保利中航城二期 4室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 108.8,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab76"),
    title: "整租·中广大厦 2室1厅 西北",
    area: "海珠",
    detailplace: "江南大道中",
    square: 87,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab77"),
    title: "整租·招商臻园 4室2厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 126.74,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab78"),
    title: "整租·时尚广场 3室2厅 南/北",
    area: "增城",
    detailplace: "新塘北",
    square: 120.22,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab79"),
    title: "整租·光大花园榕城尚品公寓 1室1厅 东南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 39.34,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1750")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab7a"),
    title: "整租·实地蔷薇国际 4室2厅 南",
    area: "增城",
    detailplace: "荔城西区",
    square: 117,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab7b"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 93,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab7c"),
    title: "整租·碧桂园海湾1号 1室0厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 15,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab7d"),
    title: "整租·南沙湾东苑 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 147,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab7e"),
    title: "整租·万科元培里 3室2厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 93.55,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab7f"),
    title: "整租·奥园莲峰圣境 4室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 173,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab80"),
    title: "整租·荔城花园 3室2厅 东",
    area: "增城",
    detailplace: "荔城西区",
    square: 131,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab81"),
    title: "整租·富力盈丰大厦 2室1厅 西南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 102,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab82"),
    title: "整租·万科海上明月 3室2厅 复式 东南",
    area: "南沙",
    detailplace: "黄阁",
    square: 86.15,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab83"),
    title: "整租·东方名都花园 1室1厅 北",
    area: "增城",
    detailplace: "白江",
    square: 50.32,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab84"),
    title: "整租·君立国际公寓 3室1厅 南",
    area: "白云",
    detailplace: "同和",
    square: 81.53,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4140")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab85"),
    title: "整租·天河广场 3室1厅 南/西/北",
    area: "天河",
    detailplace: "东圃",
    square: 107.97,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab86"),
    title: "整租·逢源路 1室0厅 南",
    area: "荔湾",
    detailplace: "龙津",
    square: 30,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("5600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab87"),
    title: "整租·中交蓝色海湾 3室2厅 北",
    area: "南沙",
    detailplace: "南沙港",
    square: 93,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab88"),
    title: "整租·东港花园 3室2厅 南",
    area: "黄埔",
    detailplace: "文冲",
    square: 110,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab89"),
    title: "整租·盈港国际 3室1厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 140,
    position: "北",
    roomtype: "3室1厅0卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab8a"),
    title: "整租·恒大山水城 3室2厅 北",
    area: "增城",
    detailplace: "中新镇",
    square: 130,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab8b"),
    title: "整租·东川路 2室1厅 东北",
    area: "越秀",
    detailplace: "东川路",
    square: 32,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab8c"),
    title: "整租·华丰金湾 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 98,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab8d"),
    title: "整租·湖滨小区 4室1厅 东北",
    area: "越秀",
    detailplace: "东湖",
    square: 130,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab8e"),
    title: "整租·富雅都市华庭 3室2厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 97,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab8f"),
    title: "整租·南国奥园 3室2厅 错层 东南/南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 156,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab90"),
    title: "整租·大壮国际广场 1室0厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 38,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab91"),
    title: "整租·海伦堡流金岁月 3室2厅 东南",
    area: "番禺",
    detailplace: "桥南",
    square: 150,
    position: "东",
    roomtype: "3室2厅3卫",
    price: NumberInt("4700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab92"),
    title: "整租·珠江华景里 1室1厅 西南",
    area: "天河",
    detailplace: "华景新城",
    square: 45,
    position: "西",
    roomtype: "1室1厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab93"),
    title: "整租·穗园小区 4室2厅 西南",
    area: "天河",
    detailplace: "天润路",
    square: 145,
    position: "西",
    roomtype: "4室2厅1卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab94"),
    title: "整租·保利林语山庄 5室1厅 复式 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 295,
    position: "南",
    roomtype: "5室1厅1卫",
    price: NumberInt("11500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab95"),
    title: "整租·越秀可逸江畔 0室0厅 南",
    area: "番禺",
    detailplace: "桥南",
    square: 22,
    position: "南",
    roomtype: null,
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab96"),
    title: "整租·保利中航城二期 4室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 109.99,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab97"),
    title: "整租·佳兆业城市广场 3室1厅 南",
    area: "黄埔",
    detailplace: "南岗",
    square: 50,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab98"),
    title: "整租·万博翠湖花园 7室2厅 复式 南/北",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 398,
    position: "南",
    roomtype: "7室2厅4卫",
    price: NumberInt("15000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab99"),
    title: "整租·蓬莱路 2室1厅 南",
    area: "荔湾",
    detailplace: "黄沙",
    square: 57.16,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2480")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab9a"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 105,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab9b"),
    title: "合租·新世界逸彩庭园 3居室 西卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 7.3,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("1144")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab9c"),
    title: "合租·小东园 4居室 南卧",
    area: "越秀",
    detailplace: "东山口",
    square: 10.45,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1921")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab9d"),
    title: "整租·保利西海岸星海花园 1室1厅 东南",
    area: "白云",
    detailplace: "金沙洲",
    square: 45.58,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab9e"),
    title: "整租·耀星华庭 1室1厅 东",
    area: "天河",
    detailplace: "林和",
    square: 24.75,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdab9f"),
    title: "整租·时代风华 1室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 33,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba0"),
    title: "整租·奥园中新城市天地 3室2厅 北/东北",
    area: "增城",
    detailplace: "中新镇",
    square: 76,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba1"),
    title: "整租·汇金国际金融中心 1室0厅 东",
    area: "天河",
    detailplace: "金融城",
    square: 42,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba2"),
    title: "整租·金茂万科都会四季 3室1厅 南",
    area: "增城",
    detailplace: "白江",
    square: 87.56,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2390")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba3"),
    title: "整租·金地天河公馆 3室2厅 西北",
    area: "天河",
    detailplace: "黄村",
    square: 89,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba4"),
    title: "整租·好世界公寓 1室0厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 36,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("3285")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba5"),
    title: "整租·马蹄岗大街 3室2厅 东南",
    area: "天河",
    detailplace: "燕塘",
    square: 70,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba6"),
    title: "整租·民航小区松云街 3室2厅 南",
    area: "白云",
    detailplace: "机场路",
    square: 103,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba7"),
    title: "整租·奥园中新城市天地 4室2厅 东南/南",
    area: "增城",
    detailplace: "中新镇",
    square: 98,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba8"),
    title: "整租·星河壹号公馆 3室1厅 东南",
    area: "南沙",
    detailplace: "金洲",
    square: 40,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdaba9"),
    title: "整租·奥园中新城市天地 3室2厅 北/东北",
    area: "增城",
    detailplace: "中新镇",
    square: 76,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabaa"),
    title: "整租·万科云城米酷 1室1厅 北",
    area: "天河",
    detailplace: "智慧城",
    square: 26,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2001")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabab"),
    title: "整租·翔韵雅居 1室0厅 东南",
    area: "海珠",
    detailplace: "滨江东",
    square: 11,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabac"),
    title: "整租·锦绣新天地 3室2厅 东南",
    area: "增城",
    detailplace: "新塘南",
    square: 89,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabad"),
    title: "整租·奥园中新城市天地 3室2厅 北/东北",
    area: "增城",
    detailplace: "中新镇",
    square: 76,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabae"),
    title: "整租·富力天朗明居 2室1厅 北",
    area: "天河",
    detailplace: "棠下",
    square: 65.39,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabaf"),
    title: "整租·怡乐路 1室0厅 南",
    area: "海珠",
    detailplace: "中大",
    square: 43,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("5590")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb0"),
    title: "整租·百灵路 2室1厅 东南",
    area: "越秀",
    detailplace: "盘福",
    square: 50,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb1"),
    title: "整租·自在城市花园一二期 4室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 100.76,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb2"),
    title: "整租·南沙金茂湾 3室2厅 东",
    area: "南沙",
    detailplace: "明珠湾",
    square: 97,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4470")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb3"),
    title: "整租·恒大阳光半岛 3室2厅 南",
    area: "南沙",
    detailplace: "万顷沙",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb4"),
    title: "整租·中国铁建国际花园 3室1厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 92,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb5"),
    title: "整租·青菜岗 2室1厅 东/南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 50,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb6"),
    title: "整租·翠微庄园 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb7"),
    title: "整租·骏景花园 2室2厅 北",
    area: "天河",
    detailplace: "棠下",
    square: 75.75,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb8"),
    title: "整租·恒大阳光半岛 3室2厅 南",
    area: "南沙",
    detailplace: "万顷沙",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabb9"),
    title: "整租·中国铁建国际花园 3室1厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 92,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabba"),
    title: "整租·青菜岗 2室1厅 东/南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 50,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabbb"),
    title: "整租·翠微庄园 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabbc"),
    title: "整租·华景新城怡景园 2室2厅 南",
    area: "天河",
    detailplace: "华景新城",
    square: 70,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabbd"),
    title: "整租·萝岗敏捷广场 2室2厅 东",
    area: "黄埔",
    detailplace: "科学城",
    square: 61,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabbe"),
    title: "整租·广垦天河1号 1室1厅 北",
    area: "天河",
    detailplace: "沙太南",
    square: 36,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabbf"),
    title: "整租·五羊商住中心 3室2厅 东南",
    area: "越秀",
    detailplace: "五羊新城",
    square: 92.55,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc0"),
    title: "整租·合景天峻 2室1厅 西南",
    area: "黄埔",
    detailplace: "知识城",
    square: 42,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc1"),
    title: "整租·时代中国时代天韵 3室2厅 北",
    area: "黄埔",
    detailplace: "知识城",
    square: 115,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc2"),
    title: "整租·南沙金茂湾 3室1厅 西南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 83,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc3"),
    title: "整租·奥园中新城市天地 3室2厅 东南/南",
    area: "增城",
    detailplace: "中新镇",
    square: 87,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc4"),
    title: "整租·光复中路 1室1厅 东",
    area: "荔湾",
    detailplace: "龙津",
    square: 37.57,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc5"),
    title: "整租·奥园中新城市天地 3室1厅 北/东北",
    area: "增城",
    detailplace: "中新镇",
    square: 76,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc6"),
    title: "整租·南国奥园 4室2厅 东/南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 340,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc7"),
    title: "整租·奥园中新城市天地 4室2厅 东/东南/南",
    area: "增城",
    detailplace: "中新镇",
    square: 98,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc8"),
    title: "整租·逸泉映翠 3室2厅 南",
    area: "从化",
    detailplace: "江埔街",
    square: 95,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabc9"),
    title: "整租·远洋小区 2室1厅 南/北",
    area: "天河",
    detailplace: "林和",
    square: 74,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabca"),
    title: "整租·茶景园 3室2厅 南",
    area: "天河",
    detailplace: "五山",
    square: 80,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabcb"),
    title: "整租·第三金碧花园 1室0厅 南",
    area: "海珠",
    detailplace: "金碧",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabcc"),
    title: "整租·温馨家园 3室2厅 南",
    area: "从化",
    detailplace: "新城片区",
    square: 127.24,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabcd"),
    title: "整租·万科尚城御府 1室1厅 复式 南",
    area: "黄埔",
    detailplace: "南岗",
    square: 32,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabce"),
    title: "整租·大德路 1室0厅 北",
    area: "越秀",
    detailplace: "解放南",
    square: 30,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabcf"),
    title: "整租·环翠小区 3室2厅 南",
    area: "增城",
    detailplace: "荔城中区",
    square: 110,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd0"),
    title: "整租·来福园 3室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 100,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd1"),
    title: "整租·隆辉创意公馆  1室1厅 北",
    area: "番禺",
    detailplace: "钟村",
    square: 72,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd2"),
    title: "整租·沙园路(海珠) 1室1厅 东",
    area: "海珠",
    detailplace: "沙园",
    square: 38,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd3"),
    title: "整租·中海观园国际 3室2厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 197,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("25000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd4"),
    title: "整租·南华东路 2室1厅 东南/南",
    area: "海珠",
    detailplace: "滨江中",
    square: 50,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd5"),
    title: "整租·骏文雅苑 4室2厅 东",
    area: "越秀",
    detailplace: "农讲所",
    square: 141.84,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("12500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd6"),
    title: "整租·时代风华 3室2厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 90,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd7"),
    title: "整租·祈福新村祈福名都 4室2厅 南/北",
    area: "番禺",
    detailplace: "祈福新村",
    square: 163,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd8"),
    title: "整租·碧桂园城市花园花岸苑 3室2厅 北",
    area: "增城",
    detailplace: "朱村",
    square: 116,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabd9"),
    title: "整租·招商城市主场 2室1厅 复式 北",
    area: "番禺",
    detailplace: "万博",
    square: 45,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabda"),
    title: "合租·云景花园云枫苑 4居室 东卧",
    area: "白云",
    detailplace: "京溪",
    square: 11.53,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1921")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabdb"),
    title: "整租·易丰大厦 1室1厅 西",
    area: "天河",
    detailplace: "天河公园",
    square: 28.97,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("3559")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabdc"),
    title: "合租·瑞东花园 4居室 北卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 13.8,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabdd"),
    title: "整租·应元路 2室1厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 75,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabde"),
    title: "整租·培正一横路 2室1厅 东",
    area: "越秀",
    detailplace: "东山口",
    square: 52,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabdf"),
    title: "整租·金沙路 2室1厅 东",
    area: "海珠",
    detailplace: "工业大道北",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe0"),
    title: "整租·招商城市主场 1室1厅 东南/南",
    area: "番禺",
    detailplace: "万博",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe1"),
    title: "整租·鹤亭新村 3室1厅 东北",
    area: "白云",
    detailplace: "太和",
    square: 65,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe2"),
    title: "整租·兴普紫园 1室0厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 32,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe3"),
    title: "整租·六榕路 1室3厅 南/西南",
    area: "越秀",
    detailplace: "西门口",
    square: 90,
    position: "南",
    roomtype: "1室3厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe4"),
    title: "整租·中泰天境 2室2厅 北",
    area: "黄埔",
    detailplace: "知识城",
    square: 72,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe5"),
    title: "整租·芳草园 2室1厅 北",
    area: "天河",
    detailplace: "天润路",
    square: 86.02,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("7234")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe6"),
    title: "整租·凯德山海连城一期 4室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 186,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe7"),
    title: "整租·青菜岗 1室1厅 南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe8"),
    title: "整租·广发花园 2室1厅 西北",
    area: "越秀",
    detailplace: "东风东",
    square: 90.15,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("7339")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabe9"),
    title: "整租·翰林国际 3室2厅 南",
    area: "从化",
    detailplace: "旧城区",
    square: 139.93,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabea"),
    title: "整租·雅居乐·岭会 3室2厅 东南",
    area: "花都",
    detailplace: "狮岭镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabeb"),
    title: "整租·尚东阳光 2室2厅 南",
    area: "增城",
    detailplace: "沙村",
    square: 86,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabec"),
    title: "整租·水荫路 1室1厅 东/西",
    area: "越秀",
    detailplace: "水荫",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabed"),
    title: "整租·水荫四横路 2室1厅 南",
    area: "天河",
    detailplace: "水荫",
    square: 60,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabee"),
    title: "整租·SOLO禺意湾8号 1室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabef"),
    title: "合租·逸景翠园 4居室 西南卧",
    area: "海珠",
    detailplace: "广州大道南",
    square: 10.02,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1533")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf0"),
    title: "整租·东山创意园 1室1厅 东南",
    area: "白云",
    detailplace: "新市",
    square: 67,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf1"),
    title: "整租·艺景明苑 3室2厅 南",
    area: "花都",
    detailplace: "铁路西",
    square: 72.63,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf2"),
    title: "整租·凯旋新世界广粤尊府 4室2厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 280,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("76000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf3"),
    title: "整租·永福路永福西约 1室1厅 西南",
    area: "越秀",
    detailplace: "黄花岗",
    square: 30,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf4"),
    title: "合租·萝岗和苑 5居室 东卧",
    area: "黄埔",
    detailplace: "科学城",
    square: 11.9,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf5"),
    title: "整租·阳光城丽景湾 3室2厅 东北",
    area: "南沙",
    detailplace: "进港大道",
    square: 131,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf6"),
    title: "整租·珠江大家庭花园 3室1厅 南/北",
    area: "海珠",
    detailplace: "琶洲中",
    square: 138,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("6200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf7"),
    title: "整租·南沙万达广场 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf8"),
    title: "整租·英豪花园 3室2厅 东",
    area: "海珠",
    detailplace: "东晓南",
    square: 90,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabf9"),
    title: "整租·保利平方花园 4室2厅 北",
    area: "增城",
    detailplace: "永宁",
    square: 106,
    position: "北",
    roomtype: "4室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabfa"),
    title: "整租·中国铁建环球中心 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙区府",
    square: 128,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabfb"),
    title: "整租·星汇云锦 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabfc"),
    title: "合租·东成花苑 4居室 北卧",
    area: "天河",
    detailplace: "天河公园",
    square: 7.18,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabfd"),
    title: "整租·琶洲新村公寓 1室0厅 南",
    area: "海珠",
    detailplace: "琶洲东",
    square: 38,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabfe"),
    title: "合租·海丝知识中心 4居室 南卧",
    area: "黄埔",
    detailplace: "知识城",
    square: 30,
    position: "南",
    roomtype: "4室0厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdabff"),
    title: "整租·纵横公寓 3室2厅 南/北",
    area: "海珠",
    detailplace: "赤岗",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac00"),
    title: "合租·江南西路 4居室 西南卧",
    area: "海珠",
    detailplace: "江南西",
    square: 26,
    position: "西",
    roomtype: "4室0厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac01"),
    title: "合租·珊瑚湾畔 4居室 南卧",
    area: "番禺",
    detailplace: "厦滘",
    square: 20,
    position: "南",
    roomtype: "4室0厅0卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac02"),
    title: "合租·文冲回迁房八期 5居室 南卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 11.76,
    position: "南",
    roomtype: "5室1厅3卫",
    price: NumberInt("1879")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac03"),
    title: "合租·保利心语 4居室 南卧",
    area: "天河",
    detailplace: "珠江新城中",
    square: 10.85,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2299")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac04"),
    title: "合租·广海花园 4居室 北卧",
    area: "天河",
    detailplace: "天河公园",
    square: 9.4,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1984")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac05"),
    title: "整租·湾区·金融城 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 136,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3059")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac06"),
    title: "整租·环市东路 2室1厅 东南",
    area: "越秀",
    detailplace: "环市东",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac07"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 东",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac08"),
    title: "合租·侨苑小区(天河区) 4居室 北卧",
    area: "天河",
    detailplace: "体育中心",
    square: 30,
    position: "北",
    roomtype: "4室0厅0卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac09"),
    title: "整租·华南碧桂园芳翠苑 3室2厅 北",
    area: "番禺",
    detailplace: "华南碧桂园",
    square: 107,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac0a"),
    title: "合租·嘉富广场 4居室 东卧",
    area: "越秀",
    detailplace: "水荫",
    square: 7.22,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac0b"),
    title: "整租·珠江帝景苑 4室2厅 南/北",
    area: "海珠",
    detailplace: "广州塔",
    square: 200,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("23000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac0c"),
    title: "整租·广州敏捷绿湖首府 4室2厅 东南",
    area: "增城",
    detailplace: "石滩镇",
    square: 127,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac0d"),
    title: "整租·侨怡苑 2室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 80,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac0e"),
    title: "合租·珠江大家庭花园 4居室 南卧",
    area: "海珠",
    detailplace: "琶洲中",
    square: 11.5,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2131")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac0f"),
    title: "整租·滨江西路 3室1厅 东南",
    area: "海珠",
    detailplace: "滨江西",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693528d959b2b8e588bdac10"),
    title: "整租·广州雅居乐花园上善若水 1室0厅 南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c083b"),
    title: "合租·侨林苑 3居室 北卧",
    area: "天河",
    detailplace: "林和",
    square: 8.25,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("1669")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c083c"),
    title: "整租·广州大道中 3室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 83.6,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c083d"),
    title: "整租·颐德公馆 3室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 173,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("36000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c083e"),
    title: "整租·共和西路 2室1厅 南",
    area: "越秀",
    detailplace: "杨箕",
    square: 57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c083f"),
    title: "合租·惠城花园 3居室 东卧",
    area: "荔湾",
    detailplace: "龙津",
    square: 12.7,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1879")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0840"),
    title: "合租·福金莲花园 5居室 西卧",
    area: "天河",
    detailplace: "员村",
    square: 18.01,
    position: "西",
    roomtype: "5室1厅3卫",
    price: NumberInt("2341")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0841"),
    title: "整租·钧明欢乐世界 1室1厅 北",
    area: "增城",
    detailplace: "永宁",
    square: 55,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0842"),
    title: "整租·富力泉天下 4室2厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 146.48,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0843"),
    title: "整租·榕溪花园 1室1厅 南",
    area: "白云",
    detailplace: "石井",
    square: 33,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0844"),
    title: "合租·金海花园 4居室 北卧",
    area: "天河",
    detailplace: "龙口东",
    square: 8.35,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2089")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0845"),
    title: "合租·紫丹阁 4居室 北卧",
    area: "海珠",
    detailplace: "江南大道中",
    square: 7,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1533")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0846"),
    title: "合租·英豪花园 3居室 北卧",
    area: "海珠",
    detailplace: "东晓南",
    square: 12.8,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0847"),
    title: "合租·新庆花园 4居室 西卧",
    area: "天河",
    detailplace: "珠江新城东",
    square: 13,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("2026")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0848"),
    title: "合租·翠湖山庄 4居室 东卧",
    area: "天河",
    detailplace: "天河公园",
    square: 26.2,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("2268")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0849"),
    title: "合租·六运小区 3居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 11.7,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1879")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c084a"),
    title: "整租·都府社区 2室2厅 西北",
    area: "越秀",
    detailplace: "公园前",
    square: 61,
    position: "西",
    roomtype: "2室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c084b"),
    title: "整租·万科爱地住宅区 1室0厅 南",
    area: "白云",
    detailplace: "金沙洲",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("550")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c084c"),
    title: "整租·五羊小区 1室1厅 东",
    area: "越秀",
    detailplace: "五羊新城",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("8300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c084d"),
    title: "整租·德兴路(番禺) 3室2厅 南/北",
    area: "番禺",
    detailplace: "市桥",
    square: 141.5,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c084e"),
    title: "整租·时代新世界 3室2厅 东南/西北",
    area: "天河",
    detailplace: "林和",
    square: 121,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c084f"),
    title: "整租·恒大山水郡 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 106,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1260")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0850"),
    title: "合租·海龙湾 5居室 南卧",
    area: "番禺",
    detailplace: "南浦",
    square: 6.21,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("1008")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0851"),
    title: "合租·东怡新区东倩园 4居室 北卧",
    area: "番禺",
    detailplace: "东怡新区",
    square: 9,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1113")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0852"),
    title: "整租·元邦明月水岸 1室0厅 东/东南/南/西南/西/西北/北/东北",
    area: "荔湾",
    detailplace: "西朗",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0853"),
    title: "整租·名门大厦 1室1厅 东",
    area: "天河",
    detailplace: "珠江新城西",
    square: 137,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0854"),
    title: "整租·龙湖首开云峰原著 4室2厅 复式 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 113,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0855"),
    title: "合租·高教花园 4居室 南卧",
    area: "海珠",
    detailplace: "琶洲西",
    square: 10.1,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1953")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0856"),
    title: "整租·新世界锦云峰 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0857"),
    title: "整租·小北路 1室1厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0858"),
    title: "合租·金海花园 4居室 东卧",
    area: "天河",
    detailplace: "龙口东",
    square: 5.11,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0859"),
    title: "整租·大城云山 2室1厅 西南",
    area: "从化",
    detailplace: "太平镇",
    square: 83.19,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c085a"),
    title: "合租·文冲安置房七期 4居室 南卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 16.97,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2299")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c085b"),
    title: "合租·南雅苑 4居室 东南卧",
    area: "天河",
    detailplace: "天河南",
    square: 18,
    position: "东",
    roomtype: "4室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c085c"),
    title: "整租·合景天峻 1室0厅 东南",
    area: "黄埔",
    detailplace: "知识城",
    square: 29.5,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c085d"),
    title: "整租·假日花园 2室2厅 东南",
    area: "增城",
    detailplace: "白江",
    square: 110,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c085e"),
    title: "整租·香江天赋 5室2厅 东南",
    area: "增城",
    detailplace: "凤凰城",
    square: 130,
    position: "东",
    roomtype: "5室2厅3卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c085f"),
    title: "整租·增城万达广场 1室0厅 东北",
    area: "增城",
    detailplace: "增城区府",
    square: 53,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0860"),
    title: "整租·东风中路 3室1厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 37.44,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0861"),
    title: "合租·丽晶大厦 4居室 北卧",
    area: "越秀",
    detailplace: "淘金",
    square: 8.5,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1774")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0862"),
    title: "整租·丽晴轩 4室2厅 南",
    area: "天河",
    detailplace: "粤垦",
    square: 148,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0863"),
    title: "合租·文冲安置房七期 4居室 南卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 10.4,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1428")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0864"),
    title: "整租·实地常春藤 5室2厅 南/西南",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 140,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0865"),
    title: "合租·瑞东花园 4居室 北卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 10.11,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0866"),
    title: "整租·中大城 2室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 87,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0867"),
    title: "合租·天河峰景 5居室 西卧",
    area: "天河",
    detailplace: "燕塘",
    square: 9.64,
    position: "西",
    roomtype: "5室1厅2卫",
    price: NumberInt("1774")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0868"),
    title: "整租·顺德碧桂园彩虹居 4室2厅 西",
    area: "番禺",
    detailplace: "顺德碧桂园",
    square: 185,
    position: "西",
    roomtype: "4室2厅3卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0869"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 143,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c086a"),
    title: "整租·新河浦二横路 4室2厅 南/北",
    area: "越秀",
    detailplace: "东山口",
    square: 183,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("28000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c086b"),
    title: "整租·金科景业·雍景园 4室2厅 东南",
    area: "增城",
    detailplace: "中新镇",
    square: 98,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c086c"),
    title: "整租·中国铁建环球中心 2室1厅 西南",
    area: "南沙",
    detailplace: "南沙区府",
    square: 129.3,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c086d"),
    title: "整租·敏捷尚品国际 1室0厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 66,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c086e"),
    title: "整租·淘金北路 2室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 60,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c086f"),
    title: "合租·丽晶华庭 4居室 北卧",
    area: "天河",
    detailplace: "珠江新城西",
    square: 10.2,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2299")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0870"),
    title: "整租·中交汇通中心 1室1厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 56,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0871"),
    title: "整租·碧桂园凤凰城凤锦苑 4室2厅 东北",
    area: "增城",
    detailplace: "凤凰城",
    square: 198,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0872"),
    title: "整租·三育路 1室0厅 北",
    area: "越秀",
    detailplace: "东山口",
    square: 15,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0873"),
    title: "合租·天誉华庭 4居室 西卧",
    area: "天河",
    detailplace: "龙口西",
    square: 6.17,
    position: "西",
    roomtype: "4室1厅1卫",
    price: NumberInt("1711")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0874"),
    title: "合租·珠江大家庭花园 4居室 北卧",
    area: "海珠",
    detailplace: "琶洲中",
    square: 13.29,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2551")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0875"),
    title: "整租·保利丰花园 4室1厅 南",
    area: "海珠",
    detailplace: "洪德",
    square: 93,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0876"),
    title: "整租·六运小区 1室1厅 南",
    area: "天河",
    detailplace: "天河南",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0877"),
    title: "整租·越秀明珠天悦江湾 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0878"),
    title: "整租·星河畔月湾 3室2厅 东",
    area: "南沙",
    detailplace: "横沥",
    square: 125.69,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0879"),
    title: "整租·华江花园 2室1厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 96.41,
    position: "南",
    roomtype: "2室1厅2卫",
    price: NumberInt("6289")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c087a"),
    title: "整租·南珠广场 2室1厅 南",
    area: "海珠",
    detailplace: "江燕路",
    square: 99,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c087b"),
    title: "整租·保利中航城花园一期 4室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 104,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c087c"),
    title: "整租·纵横公寓 1室1厅 北",
    area: "海珠",
    detailplace: "赤岗",
    square: 62.46,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("4546")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c087d"),
    title: "整租·会展世界城 2室1厅 南",
    area: "海珠",
    detailplace: "琶洲东",
    square: 86.22,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("7339")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c087e"),
    title: "整租·耀星华庭 2室1厅 北",
    area: "天河",
    detailplace: "林和",
    square: 89.53,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("6468")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c087f"),
    title: "整租·碧海大厦 3室1厅 东",
    area: "海珠",
    detailplace: "客村",
    square: 60.04,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0880"),
    title: "整租·星河畔月湾 3室2厅 东",
    area: "南沙",
    detailplace: "横沥",
    square: 125.69,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0881"),
    title: "合租·瑞东花园 4居室 北卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 13.8,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0882"),
    title: "整租·芳草园 2室1厅 北",
    area: "天河",
    detailplace: "天润路",
    square: 86.02,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("7234")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0883"),
    title: "整租·叠溪花园 3室2厅 东南",
    area: "增城",
    detailplace: "朱村",
    square: 95.3,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0884"),
    title: "合租·第三金碧花园 4居室 东北卧",
    area: "海珠",
    detailplace: "金碧",
    square: 16,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("2299")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0885"),
    title: "整租·广州绿地城 1室1厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 46.12,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1050")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0886"),
    title: "整租·广州足球公园 1室1厅 南",
    area: "番禺",
    detailplace: "钟村",
    square: 53.57,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0887"),
    title: "整租·共和苑 2室1厅 南/北",
    area: "越秀",
    detailplace: "杨箕",
    square: 57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0888"),
    title: "合租·葛洲坝保利曼城 4居室 北卧",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 12,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1588")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0889"),
    title: "整租·海龙湾 4室2厅 南",
    area: "番禺",
    detailplace: "南浦",
    square: 173.8,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c088a"),
    title: "整租·富景花园 1室1厅 北",
    area: "海珠",
    detailplace: "新港西",
    square: 35,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3286")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c088b"),
    title: "整租·五矿招商·鹭山府 3室2厅 东南",
    area: "黄埔",
    detailplace: "大沙地",
    square: 98,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c088c"),
    title: "合租·广州雅居乐花园雅逸庭 4居室 西北卧",
    area: "番禺",
    detailplace: "雅居乐",
    square: 13.5,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c088d"),
    title: "合租·逸景翠园 4居室 西南卧",
    area: "海珠",
    detailplace: "广州大道南",
    square: 10.02,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1533")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c088e"),
    title: "整租·碧桂园玺悦 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 97.84,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c088f"),
    title: "合租·锦安苑 3居室 南卧",
    area: "海珠",
    detailplace: "客村",
    square: 17.73,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2131")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0890"),
    title: "整租·富力金港城南区 2室2厅 北",
    area: "花都",
    detailplace: "花东镇",
    square: 82,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0891"),
    title: "整租·耀星华庭 1室1厅 西",
    area: "天河",
    detailplace: "林和",
    square: 24.74,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("3318")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0892"),
    title: "整租·黄金广场 9室2厅 南/西",
    area: "荔湾",
    detailplace: "黄沙",
    square: 2000,
    position: "南",
    roomtype: "9室2厅1卫",
    price: NumberInt("176000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0893"),
    title: "整租·雪域澜庭A2区 3室2厅 南",
    area: "花都",
    detailplace: "花城街",
    square: 98,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0894"),
    title: "整租·尚东阳光 2室1厅 北",
    area: "增城",
    detailplace: "沙村",
    square: 50,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2050")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0895"),
    title: "整租·广兴华花园 5室2厅 东",
    area: "越秀",
    detailplace: "五羊新城",
    square: 303,
    position: "东",
    roomtype: "5室2厅3卫",
    price: NumberInt("30000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0896"),
    title: "合租·群星新邨 5居室 北卧",
    area: "增城",
    detailplace: "白江",
    square: 13.1,
    position: "北",
    roomtype: "5室1厅3卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0897"),
    title: "整租·中交港湾国际 1室1厅 南",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0898"),
    title: "整租·兰亭盛荟 2室2厅 北",
    area: "天河",
    detailplace: "东圃",
    square: 70.88,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c0899"),
    title: "整租·成业小区 3室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 122,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c089a"),
    title: "整租·光大花园中海锦榕湾 1室0厅 东南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c089b"),
    title: "整租·解放中路 2室1厅 东南",
    area: "越秀",
    detailplace: "公园前",
    square: 80,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c089c"),
    title: "整租·越秀中路 1室0厅 北",
    area: "越秀",
    detailplace: "农讲所",
    square: 25,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("1750")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c089d"),
    title: "整租·万科城 4室2厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 173,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c089e"),
    title: "整租·大北路 1室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 33.7,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c089f"),
    title: "合租·越秀万力·星悦峯 4居室 北卧",
    area: "黄埔",
    detailplace: "夏园",
    square: 20,
    position: "北",
    roomtype: "4室0厅4卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a0"),
    title: "整租·半山雍景苑 4室2厅 南/北",
    area: "天河",
    detailplace: "汇景新城",
    square: 119,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a1"),
    title: "合租·越秀万力·星悦峯 4居室 南卧",
    area: "黄埔",
    detailplace: "夏园",
    square: 20,
    position: "南",
    roomtype: "4室0厅4卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a2"),
    title: "整租·荔富湖畔 2室1厅 东南",
    area: "增城",
    detailplace: "朱村",
    square: 76,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a3"),
    title: "整租·敏捷尚品国际 4室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 80.88,
    position: "北",
    roomtype: "4室2厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a4"),
    title: "整租·合汇·中央广场 3室2厅 南",
    area: "增城",
    detailplace: "荔城中区",
    square: 119.38,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a5"),
    title: "整租·珠实大院 3室2厅 南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 123,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a6"),
    title: "整租·中交蓝色海湾 4室2厅 东南/西北",
    area: "南沙",
    detailplace: "南沙港",
    square: 177,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a7"),
    title: "整租·广州敏捷绿湖首府 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 95,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a8"),
    title: "合租·嘉宝华庭 4居室 西卧",
    area: "天河",
    detailplace: "龙口西",
    square: 13.24,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("2089")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08a9"),
    title: "合租·耀星华庭 4居室 南卧",
    area: "天河",
    detailplace: "林和",
    square: 9.66,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1848")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08aa"),
    title: "整租·碧桂园凤凰城凤馨苑 1室0厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ab"),
    title: "整租·时代风华 1室0厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 25,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("220")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ac"),
    title: "整租·时代风华 1室0厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 25,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("198")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ad"),
    title: "合租·盈嘉花园 5居室 北卧",
    area: "天河",
    detailplace: "珠江新城中",
    square: 13.71,
    position: "北",
    roomtype: "5室1厅3卫",
    price: NumberInt("2268")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ae"),
    title: "整租·时代风华 1室0厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 25,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("220")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08af"),
    title: "整租·时代风华 1室0厅 北",
    area: "增城",
    detailplace: "新塘北",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("160")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b0"),
    title: "整租·时代风华 1室0厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 25,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("220")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b1"),
    title: "整租·时代风华 1室0厅 北",
    area: "增城",
    detailplace: "新塘北",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b2"),
    title: "合租·纵横公寓 4居室 南卧",
    area: "海珠",
    detailplace: "赤岗",
    square: 8.7,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b3"),
    title: "整租·敏捷绿湖首府三期 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 103.46,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b4"),
    title: "合租·丽晶华庭 4居室 南卧",
    area: "天河",
    detailplace: "珠江新城西",
    square: 9.67,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2299")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b5"),
    title: "合租·聚侨苑 4居室 北卧",
    area: "天河",
    detailplace: "天河南",
    square: 6.86,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1533")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b6"),
    title: "合租·磨碟沙花苑 4居室 南卧",
    area: "海珠",
    detailplace: "琶洲西",
    square: 10.5,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("3034")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b7"),
    title: "整租·奥园康威广场 3室2厅 北",
    area: "增城",
    detailplace: "新塘北",
    square: 70,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1633")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b8"),
    title: "整租·凯旋国际 1室1厅 南/北",
    area: "花都",
    detailplace: "新区",
    square: 55,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08b9"),
    title: "合租·骏景花园 5居室 南卧",
    area: "天河",
    detailplace: "棠下",
    square: 20,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("2131")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ba"),
    title: "整租·星辰财富港 0室0厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 12,
    position: "南",
    roomtype: null,
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08bb"),
    title: "合租·中海名都 4居室 西卧",
    area: "海珠",
    detailplace: "滨江中",
    square: 7.12,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08bc"),
    title: "整租·保利世纪绿洲二期 5室2厅 南",
    area: "天河",
    detailplace: "龙洞",
    square: 210,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("10500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08bd"),
    title: "整租·尚东尚筑 4室2厅 南",
    area: "番禺",
    detailplace: "番禺客运站",
    square: 92,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08be"),
    title: "整租·精彩生活大厦 3室2厅 东/东南/南",
    area: "越秀",
    detailplace: "北京路",
    square: 117,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("11500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08bf"),
    title: "整租·保利西海岸瀚海花园 1室0厅 东",
    area: "白云",
    detailplace: "金沙洲",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("750")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c0"),
    title: "合租·历德雅舍 4居室 南卧",
    area: "天河",
    detailplace: "华景新城",
    square: 10.6,
    position: "南",
    roomtype: "4室1厅3卫",
    price: NumberInt("1953")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c1"),
    title: "整租·东风中路 3室1厅 东南",
    area: "越秀",
    detailplace: "小北",
    square: 55,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c2"),
    title: "合租·时代玫瑰园 4居室 东卧",
    area: "白云",
    detailplace: "黄边",
    square: 8,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1501")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c3"),
    title: "合租·佰利山 4居室 西北卧",
    area: "番禺",
    detailplace: "雅居乐",
    square: 10.2,
    position: "西",
    roomtype: "4室1厅1卫",
    price: NumberInt("1669")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c4"),
    title: "整租·碧桂园凤凰城凤妍苑 3室2厅 西北",
    area: "增城",
    detailplace: "凤凰城",
    square: 100,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c5"),
    title: "整租·广州敏捷绿湖首府 3室1厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 93,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1660")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c6"),
    title: "整租·湾区·金融城 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 102.44,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c7"),
    title: "整租·南沙万达广场 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 270,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c8"),
    title: "整租·周门小区周门北路 2室1厅 东/北",
    area: "荔湾",
    detailplace: "周门",
    square: 75.5,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08c9"),
    title: "整租·东风广场 2室2厅 北",
    area: "越秀",
    detailplace: "东风东",
    square: 70,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ca"),
    title: "整租·南沙万达广场 3室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 95,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08cb"),
    title: "整租·科慧花园 3室1厅 北",
    area: "增城",
    detailplace: "朱村",
    square: 90.93,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("2450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08cc"),
    title: "整租·万科春风十里 4室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 99,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08cd"),
    title: "整租·信基玥岛 1室1厅 东",
    area: "番禺",
    detailplace: "厦滘",
    square: 36,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1985")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ce"),
    title: "整租·馨泉花园 1室0厅 北",
    area: "花都",
    detailplace: "新区",
    square: 47.53,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08cf"),
    title: "整租·南沙万达广场 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1480")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d0"),
    title: "整租·逸泉山庄 2室2厅 北",
    area: "从化",
    detailplace: "赤草",
    square: 97.99,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d1"),
    title: "整租·城启荔港南湾 1室0厅 东南",
    area: "荔湾",
    detailplace: "南岸路",
    square: 15,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d2"),
    title: "整租·东方文德森岛湖 3室1厅 南",
    area: "花都",
    detailplace: "花城街",
    square: 98,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d3"),
    title: "整租·敏捷绿湖首府三期 3室1厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d4"),
    title: "合租·愉景南苑 4居室 南卧",
    area: "海珠",
    detailplace: "新港西",
    square: 9.1,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d5"),
    title: "合租·壹诚大厦 1居室 南卧",
    area: "荔湾",
    detailplace: "东塱",
    square: 28,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2280")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d6"),
    title: "合租·中海康城 4居室 南卧",
    area: "天河",
    detailplace: "黄村",
    square: 15.93,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2509")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d7"),
    title: "整租·敏捷绿湖首府三期 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 85.02,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d8"),
    title: "整租·贵贤上品 1室0厅 北",
    area: "荔湾",
    detailplace: "龙津",
    square: 45,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08d9"),
    title: "整租·敏捷科创中心 4室2厅 南",
    area: "白云",
    detailplace: "太和",
    square: 90,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08da"),
    title: "整租·好信广场 1室1厅 南",
    area: "海珠",
    detailplace: "南洲",
    square: 42,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08db"),
    title: "整租·迎翠春庭 2室1厅 北",
    area: "天河",
    detailplace: "棠下",
    square: 47,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08dc"),
    title: "合租·金泽大厦 4居室 北卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08dd"),
    title: "合租·南国奥园 4居室 北卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 15,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08de"),
    title: "整租·新鸿花园二期 3室2厅 南/西南",
    area: "海珠",
    detailplace: "广州塔",
    square: 105,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("5400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08df"),
    title: "整租·金利大厦 3室2厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 102.1,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e0"),
    title: "整租·天河东远洋宿舍 3室1厅 东南",
    area: "天河",
    detailplace: "体育中心",
    square: 82.37,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e1"),
    title: "合租·远洋明珠大厦 4居室 北卧",
    area: "天河",
    detailplace: "珠江新城西",
    square: 16.52,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("3496")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e2"),
    title: "整租·梅花路 1室1厅 南",
    area: "越秀",
    detailplace: "东风东",
    square: 28.88,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e3"),
    title: "整租·时代长岛 3室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 83,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e4"),
    title: "整租·时代倾城(中新镇) 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 85,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e5"),
    title: "合租·萝岗和苑 4居室 北卧",
    area: "黄埔",
    detailplace: "科学城",
    square: 12.3,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1501")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e6"),
    title: "整租·锦城花园 4室1厅 东南/南",
    area: "越秀",
    detailplace: "东风东",
    square: 159,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e7"),
    title: "整租·信业悦都荟 2室1厅 复式 北",
    area: "番禺",
    detailplace: "市桥北",
    square: 48,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e8"),
    title: "整租·先烈南路青菜东街 3室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 70,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08e9"),
    title: "整租·星河丹堤 5室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 218,
    position: "南",
    roomtype: "5室2厅4卫",
    price: NumberInt("14700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ea"),
    title: "合租·新世界东逸花园 5居室 东卧",
    area: "天河",
    detailplace: "天河公园",
    square: 21,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("3034")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08eb"),
    title: "整租·泮塘 2室1厅 东南",
    area: "荔湾",
    detailplace: "中山八",
    square: 80,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4698")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ec"),
    title: "整租·越秀明珠天悦江湾 3室2厅 东北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 89,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ed"),
    title: "整租·上横南路 3室2厅 北",
    area: "从化",
    detailplace: "旺城片区",
    square: 78.12,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69352bcb38d5c43d7e6c08ee"),
    title: "整租·丽苑大厦(花都区) 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 90.13,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b47"),
    title: "整租·小北路 1室1厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 36.85,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b48"),
    title: "整租·东园小区西区 3室2厅 东南",
    area: "天河",
    detailplace: "石牌",
    square: 110,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b49"),
    title: "整租·南沙建滔广场 3室1厅 东北",
    area: "南沙",
    detailplace: "南沙区府",
    square: 96,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("5280")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b4a"),
    title: "整租·新源雅居 3室2厅 南",
    area: "花都",
    detailplace: "新区",
    square: 124.22,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b4b"),
    title: "整租·德若青年社区 1室0厅 南",
    area: "番禺",
    detailplace: "市桥东",
    square: 20,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b4c"),
    title: "整租·万科海上传奇 0室0厅 东南/南",
    area: "荔湾",
    detailplace: "芳村",
    square: 12,
    position: "东",
    roomtype: null,
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b4d"),
    title: "整租·南沙金茂湾 1室1厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 74,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b4e"),
    title: "整租·机场路 3室1厅 南",
    area: "白云",
    detailplace: "新市",
    square: 42,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b4f"),
    title: "整租·南华中路 1室1厅 东",
    area: "海珠",
    detailplace: "滨江西",
    square: 36,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1750")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b50"),
    title: "整租·南华中路 1室1厅 东",
    area: "海珠",
    detailplace: "滨江西",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b51"),
    title: "整租·保利金沙大都汇 1室1厅 东南",
    area: "白云",
    detailplace: "金沙洲",
    square: 42,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b52"),
    title: "整租·阳光城丽景湾澜悦 1室0厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 25.44,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b53"),
    title: "整租·方圆月岛轩 4室2厅 南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 175,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b54"),
    title: "整租·保利金沙大都汇 1室1厅 东南",
    area: "白云",
    detailplace: "金沙洲",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b55"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 89.77,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b56"),
    title: "整租·岭南新世界 1室0厅 南/北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12.5,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b57"),
    title: "整租·保利翡翠山 1室0厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 46,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b58"),
    title: "整租·时代天逸 4室2厅 东南",
    area: "南沙",
    detailplace: "黄阁",
    square: 106,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b59"),
    title: "整租·碧桂园天玺湾 2室2厅 东",
    area: "南沙",
    detailplace: "进港大道",
    square: 69,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b5a"),
    title: "整租·富力爱丁堡国际公寓 2室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 126,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b5b"),
    title: "整租·敏捷时空壹号 1室1厅 南",
    area: "番禺",
    detailplace: "广州南站",
    square: 60,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b5c"),
    title: "整租·越秀明珠天悦江湾 3室2厅 东北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b5d"),
    title: "整租·领南星河荣誉 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 95,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b5e"),
    title: "整租·广州龙湖·揽境 4室1厅 南",
    area: "黄埔",
    detailplace: "长岭居",
    square: 122,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b5f"),
    title: "整租·中交国际邮轮广场 3室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 138,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b60"),
    title: "整租·汇东国际花园 3室2厅 东",
    area: "增城",
    detailplace: "白江",
    square: 88,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b61"),
    title: "整租·富力盈力大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 45,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b62"),
    title: "整租·康富花园 3室2厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 121.5,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b63"),
    title: "整租·琶洲新村公寓 1室1厅 北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 59,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("4700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b64"),
    title: "整租·禺秀园 3室2厅 南/北",
    area: "番禺",
    detailplace: "市桥",
    square: 117,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b65"),
    title: "整租·美阁花园 3室1厅 东",
    area: "花都",
    detailplace: "旧区",
    square: 140,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b66"),
    title: "整租·朝晖苑 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 98,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b67"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 45,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b68"),
    title: "整租·中交蓝色海湾 3室2厅 西北",
    area: "南沙",
    detailplace: "南沙港",
    square: 96,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b69"),
    title: "整租·时代南湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 179,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b6a"),
    title: "整租·新城海滨花园N区 3室2厅 东南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 149,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b6b"),
    title: "整租·湾区·金融城 3室2厅 东南/南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 101.2,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b6c"),
    title: "整租·宝华路(荔湾) 2室1厅 南/西",
    area: "荔湾",
    detailplace: "西关",
    square: 55,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b6d"),
    title: "整租·中冶·逸璟台 4室2厅 复式 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 137,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("7200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b6e"),
    title: "整租·海滨花园 3室2厅 东南",
    area: "番禺",
    detailplace: "洛溪",
    square: 80,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b6f"),
    title: "整租·中山一路 1室1厅 北",
    area: "越秀",
    detailplace: "东风东",
    square: 51,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b70"),
    title: "整租·时代云图 3室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 96,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b71"),
    title: "整租·海珠中路 1室1厅 东/东南/南/西南",
    area: "越秀",
    detailplace: "西门口",
    square: 70,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b72"),
    title: "整租·天雅居 2室1厅 东南/北",
    area: "天河",
    detailplace: "东圃",
    square: 76,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b73"),
    title: "整租·富力天海湾 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b74"),
    title: "整租·佳兆业天墅 1室0厅 东南",
    area: "白云",
    detailplace: "同和",
    square: 70,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b75"),
    title: "合租·金泽大厦 4居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 25,
    position: "南",
    roomtype: "4室0厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b76"),
    title: "合租·江南美景花园 5居室 北卧",
    area: "海珠",
    detailplace: "新港西",
    square: 12.8,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("2614")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b77"),
    title: "整租·客村苑 2室1厅 北",
    area: "海珠",
    detailplace: "广州大道南",
    square: 47.9,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b78"),
    title: "合租·逸景翠园 4居室 东卧",
    area: "海珠",
    detailplace: "广州大道南",
    square: 9,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1669")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b79"),
    title: "合租·逸景翠园 3居室 北卧",
    area: "海珠",
    detailplace: "广州大道南",
    square: 15,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("1848")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b7a"),
    title: "整租·富力东山新天地公寓 1室0厅 北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b7b"),
    title: "整租·佳兆业悦江府 4室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 125,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3127")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b7c"),
    title: "整租·星河湾半岛一号园 3室2厅 北",
    area: "番禺",
    detailplace: "厦滘",
    square: 99.94,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("7300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b7d"),
    title: "整租·长风国际公寓 2室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 80,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b7e"),
    title: "整租·龙璟山 4室2厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 170,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b7f"),
    title: "整租·实地常春藤 3室2厅 南",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 99,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b80"),
    title: "整租·尚东数字居 1室1厅 东",
    area: "番禺",
    detailplace: "星河湾",
    square: 56,
    position: "东",
    roomtype: "1室1厅2卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b81"),
    title: "合租·罗马家园 5居室 南卧",
    area: "海珠",
    detailplace: "沥滘",
    square: 9.4,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b82"),
    title: "合租·天文苑 2居室 西南卧",
    area: "天河",
    detailplace: "体育中心",
    square: 20,
    position: "西",
    roomtype: "2室0厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b83"),
    title: "合租·黄埔中央城 4居室 北卧",
    area: "黄埔",
    detailplace: "香雪",
    square: 7.37,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1186")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b84"),
    title: "合租·江南新苑 4居室 北卧",
    area: "海珠",
    detailplace: "新港西",
    square: 17.26,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2373")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b85"),
    title: "整租·北丽园 1室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b86"),
    title: "合租·体育西路 4居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 13.52,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2089")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b87"),
    title: "合租·利雅湾 4居室 南卧",
    area: "天河",
    detailplace: "珠江新城中",
    square: 9.6,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2614")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b88"),
    title: "整租·水荫路 1室1厅 南",
    area: "越秀",
    detailplace: "水荫",
    square: 49.04,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b89"),
    title: "整租·中海名都 3室2厅 东北",
    area: "海珠",
    detailplace: "滨江中",
    square: 120.21,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b8a"),
    title: "整租·奥园中新誉府 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 93,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b8b"),
    title: "整租·德若青年社区 1室1厅 东南",
    area: "番禺",
    detailplace: "市桥东",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b8c"),
    title: "合租·华骏花园 5居室 西卧",
    area: "天河",
    detailplace: "珠江新城东",
    square: 9.6,
    position: "西",
    roomtype: "5室1厅2卫",
    price: NumberInt("1848")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b8d"),
    title: "整租·保利金沙大都汇 1室1厅 东南",
    area: "白云",
    detailplace: "金沙洲",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b8e"),
    title: "合租·中海名都 4居室 东北卧",
    area: "海珠",
    detailplace: "滨江中",
    square: 14.01,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("2583")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b8f"),
    title: "合租·美景花苑 4居室 北卧",
    area: "天河",
    detailplace: "车陂",
    square: 17.35,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1743")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b90"),
    title: "整租·越秀明珠天悦江湾 3室2厅 东南/南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 98,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b91"),
    title: "整租·中山三路 2室1厅 南/北",
    area: "越秀",
    detailplace: "农讲所",
    square: 54,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b92"),
    title: "合租·骏景花园 4居室 北卧",
    area: "天河",
    detailplace: "棠下",
    square: 15.2,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1774")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b93"),
    title: "整租·融创御园 4室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 120,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b94"),
    title: "整租·萝岗奥园广场 3室1厅 北",
    area: "黄埔",
    detailplace: "香雪",
    square: 80,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b95"),
    title: "整租·领江壹号 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b96"),
    title: "合租·信步闲庭 3居室 南卧",
    area: "海珠",
    detailplace: "赤岗",
    square: 7.5,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1564")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b97"),
    title: "合租·紫丹阁 3居室 西卧",
    area: "海珠",
    detailplace: "江南大道中",
    square: 8.2,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b98"),
    title: "整租·越秀东坡 4室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 110,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b99"),
    title: "合租·鸿景园 3居室 东卧",
    area: "天河",
    detailplace: "天润路",
    square: 14.97,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2131")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b9a"),
    title: "合租·骏景花园 4居室 南卧",
    area: "天河",
    detailplace: "棠下",
    square: 6.02,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b9b"),
    title: "整租·合汇·中央广场 3室2厅 东南",
    area: "增城",
    detailplace: "荔城中区",
    square: 101.88,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b9c"),
    title: "整租·金影花园 3室2厅 东南",
    area: "海珠",
    detailplace: "客村",
    square: 105,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b9d"),
    title: "整租·碧桂园城市花园漫绿苑 3室2厅 北",
    area: "增城",
    detailplace: "朱村",
    square: 89,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b9e"),
    title: "整租·富宾星悦国际 2室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥北",
    square: 48,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3b9f"),
    title: "合租·岭南新世界 5居室 西卧",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 9.6,
    position: "西",
    roomtype: "5室1厅2卫",
    price: NumberInt("1323")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba0"),
    title: "整租·广南公司宿舍 3室2厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 90,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba1"),
    title: "合租·北丽园 4居室 北卧",
    area: "番禺",
    detailplace: "市桥",
    square: 9.3,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("906")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba2"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 东",
    area: "花都",
    detailplace: "花城街",
    square: 48,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba3"),
    title: "合租·雅郡花园 5居室 东南卧",
    area: "海珠",
    detailplace: "琶洲东",
    square: 28.56,
    position: "东",
    roomtype: "5室2厅3卫",
    price: NumberInt("2793")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba4"),
    title: "整租·尚东数字居 1室1厅 东/西南",
    area: "番禺",
    detailplace: "星河湾",
    square: 56.5,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba5"),
    title: "整租·华芳花园 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 116.4,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba6"),
    title: "整租·合景睿峰L7 3室2厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 114,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("11150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba7"),
    title: "合租·天誉华庭 4居室 南卧",
    area: "天河",
    detailplace: "龙口西",
    square: 19.4,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("3286")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba8"),
    title: "整租·保利东江首府 3室2厅 东南",
    area: "增城",
    detailplace: "新塘南",
    square: 140,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3ba9"),
    title: "整租·湾区·金融城 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 101,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3baa"),
    title: "合租·华景新城荷景园 4居室 南卧",
    area: "天河",
    detailplace: "华景新城",
    square: 9.7,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1428")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bab"),
    title: "整租·粤海广场 1室1厅 东南/南",
    area: "番禺",
    detailplace: "万博",
    square: 58,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bac"),
    title: "整租·誉山国际13期誉璟公寓 2室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 49,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bad"),
    title: "整租·碧桂园豪进左岸 4室2厅 南/北",
    area: "增城",
    detailplace: "石滩镇",
    square: 142,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bae"),
    title: "合租·广州雅居乐花园雅翠庭 5居室 西北卧",
    area: "番禺",
    detailplace: "雅居乐",
    square: 6.9,
    position: "西",
    roomtype: "5室1厅2卫",
    price: NumberInt("1291")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3baf"),
    title: "整租·东风东路 1室1厅 西",
    area: "越秀",
    detailplace: "环市东",
    square: 30,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb0"),
    title: "整租·天雅居 2室1厅 东南/北",
    area: "天河",
    detailplace: "东圃",
    square: 76,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb1"),
    title: "整租·恒业楼 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 133,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb2"),
    title: "整租·祈福缤纷汇 2室1厅 北",
    area: "番禺",
    detailplace: "祈福新村",
    square: 52.5,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb3"),
    title: "整租·东城国际大厦 1室1厅 西",
    area: "黄埔",
    detailplace: "大沙地",
    square: 64,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb4"),
    title: "整租·云顶花园 1室0厅 南",
    area: "白云",
    detailplace: "机场路",
    square: 300,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb5"),
    title: "整租·招商城市主场 1室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 39,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb6"),
    title: "整租·中大城 2室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 72,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb7"),
    title: "整租·小港路 1室1厅 东南",
    area: "海珠",
    detailplace: "滨江中",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb8"),
    title: "整租·南沙珠江湾 3室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bb9"),
    title: "整租·丛桂路 1室1厅 东/东南/西南",
    area: "荔湾",
    detailplace: "黄沙",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bba"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 49.27,
    position: "西",
    roomtype: "1室1厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bbb"),
    title: "整租·星河丹堤 5室2厅 复式 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 370.3,
    position: "南",
    roomtype: "5室2厅4卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bbc"),
    title: "整租·保利大都汇 2室2厅 复式 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 68.8,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bbd"),
    title: "整租·龙光棕榈水岸北区 3室2厅 东南",
    area: "南沙",
    detailplace: "南沙区府",
    square: 97,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bbe"),
    title: "整租·校园路 1室1厅 东",
    area: "白云",
    detailplace: "罗冲围",
    square: 35,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bbf"),
    title: "整租·品秀星樾 3室1厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 141,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc0"),
    title: "整租·南沙金茂湾 1室1厅 西北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 40,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc1"),
    title: "整租·时代新世界 5室2厅 西南",
    area: "天河",
    detailplace: "林和",
    square: 240,
    position: "西",
    roomtype: "5室2厅2卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc2"),
    title: "整租·佛奥广场 1室0厅 东",
    area: "天河",
    detailplace: "珠江新城西",
    square: 50,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc3"),
    title: "整租·华润置地·瑞府 4室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 112,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc4"),
    title: "整租·富力泉天下 3室2厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 100,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc5"),
    title: "整租·大新路 1室1厅 东",
    area: "越秀",
    detailplace: "解放南",
    square: 1800,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("100000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc6"),
    title: "整租·奥园城市天地 1室1厅 复式 西北",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc7"),
    title: "整租·金地天河公馆 1室0厅 南/北",
    area: "天河",
    detailplace: "黄村",
    square: 12.5,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc8"),
    title: "整租·新汤路 3室2厅 南/北",
    area: "增城",
    detailplace: "荔城富鹏",
    square: 150,
    position: "南",
    roomtype: "3室2厅3卫",
    price: NumberInt("1380")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bc9"),
    title: "整租·城市家园一期 3室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 164,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bca"),
    title: "整租·东方新世界 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 15,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bcb"),
    title: "整租·雅郡花园 5室2厅 复式 南/北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 245,
    position: "南",
    roomtype: "5室2厅4卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bcc"),
    title: "整租·保利中航城花园一期 3室2厅 复式 南",
    area: "增城",
    detailplace: "朱村",
    square: 95,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1380")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bcd"),
    title: "整租·金地天河公馆 1室0厅 南/北",
    area: "天河",
    detailplace: "黄村",
    square: 12.5,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bce"),
    title: "整租·东华西路 2室1厅 南",
    area: "越秀",
    detailplace: "东川路",
    square: 30,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bcf"),
    title: "整租·佰利山 3室2厅 东南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 137,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("7500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bd0"),
    title: "整租·新世界星辉 3室2厅 南/北",
    area: "增城",
    detailplace: "永宁",
    square: 74,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bd1"),
    title: "整租·银业国际公寓 2室1厅 西",
    area: "海珠",
    detailplace: "广州大道南",
    square: 67,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bd2"),
    title: "整租·小北路 2室1厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 60,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bd3"),
    title: "整租·星品 3室2厅 复式 南",
    area: "海珠",
    detailplace: "琶洲西",
    square: 103,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("7600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bd4"),
    title: "整租·绿地城凤语湾 3室2厅 南/北",
    area: "黄埔",
    detailplace: "知识城",
    square: 115,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69353344f97dd4ba51aa3bd5"),
    title: "整租·万科尚城御府 4室2厅 南",
    area: "黄埔",
    detailplace: "南岗",
    square: 88,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dc7"),
    title: "整租·越秀东坡 4室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 110,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dc8"),
    title: "整租·珠光新城御景二期回迁房 2室2厅 南/北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("7200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dc9"),
    title: "整租·广州万科城 3室2厅 北",
    area: "增城",
    detailplace: "永宁",
    square: 78,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dca"),
    title: "整租·城启荔港南湾 3室2厅 西北/北",
    area: "荔湾",
    detailplace: "南岸路",
    square: 142,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("6700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dcb"),
    title: "整租·石牌东法院宿舍 2室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dcc"),
    title: "整租·保利大都汇 1室0厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 33,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dcd"),
    title: "整租·保利丰花园 1室0厅 南/北",
    area: "海珠",
    detailplace: "洪德",
    square: 33,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dce"),
    title: "整租·丽江花园如英居 1室0厅 西南",
    area: "番禺",
    detailplace: "南浦",
    square: 12,
    position: "西",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dcf"),
    title: "整租·敏捷绿湖首府三期 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 116,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd0"),
    title: "整租·广州足球公园 2室2厅 南",
    area: "番禺",
    detailplace: "钟村",
    square: 68,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd1"),
    title: "整租·芙蓉春晓 3室2厅 南",
    area: "花都",
    detailplace: "狮岭镇",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd2"),
    title: "合租·聚德花苑 4居室 西卧",
    area: "海珠",
    detailplace: "赤岗",
    square: 10.8,
    position: "西",
    roomtype: "4室1厅1卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd3"),
    title: "合租·西门口广场 4居室 东卧",
    area: "荔湾",
    detailplace: "西华路",
    square: 13,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1774")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd4"),
    title: "整租·融达领寓 3室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 65,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd5"),
    title: "合租·北丽园 4居室 南卧",
    area: "番禺",
    detailplace: "市桥",
    square: 12.8,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1039")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd6"),
    title: "整租·广州星河湾悦心园 3室2厅 东南",
    area: "番禺",
    detailplace: "星河湾",
    square: 161,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("6156")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd7"),
    title: "整租·亚太新城亚太银座二期 2室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 78,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd8"),
    title: "合租·第三金碧花园 4居室 北卧",
    area: "海珠",
    detailplace: "金碧",
    square: 7.8,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1291")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dd9"),
    title: "整租·丽晶大厦 2室1厅 西",
    area: "越秀",
    detailplace: "淘金",
    square: 83,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dda"),
    title: "合租·麓苑路 3居室 西卧",
    area: "越秀",
    detailplace: "淘金",
    square: 9.4,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902ddb"),
    title: "合租·美的江上沄启 2居室 东南卧",
    area: "南沙",
    detailplace: "明珠湾",
    square: 18,
    position: "东",
    roomtype: "2室1厅2卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902ddc"),
    title: "整租·一品灏景 3室2厅 西",
    area: "番禺",
    detailplace: "市桥",
    square: 115.83,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902ddd"),
    title: "整租·康裕园 3室2厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 125,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2835")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dde"),
    title: "整租·时代珑星 2室1厅 东南",
    area: "番禺",
    detailplace: "南村",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902ddf"),
    title: "整租·中国铁建海悦国际 3室2厅 南",
    area: "南沙",
    detailplace: "万顷沙",
    square: 87,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de0"),
    title: "合租·金羊花园 4居室 南卧",
    area: "越秀",
    detailplace: "杨箕",
    square: 7.5,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1501")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de1"),
    title: "整租·敏捷上品公馆 2室1厅 复式 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 53,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de2"),
    title: "合租·盈嘉花园 4居室 南卧",
    area: "天河",
    detailplace: "珠江新城中",
    square: 8.4,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1921")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de3"),
    title: "整租·锦绣半岛西区 3室2厅 东南",
    area: "番禺",
    detailplace: "南浦",
    square: 93,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de4"),
    title: "合租·珠江大家庭花园 4居室 北卧",
    area: "海珠",
    detailplace: "琶洲中",
    square: 15.77,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2026")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de5"),
    title: "合租·丽晶华庭 3居室 北卧",
    area: "天河",
    detailplace: "珠江新城西",
    square: 7.48,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("2058")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de6"),
    title: "合租·佳兆业城市广场 2居室 南卧",
    area: "黄埔",
    detailplace: "南岗",
    square: 30,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de7"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 52.87,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5670")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de8"),
    title: "合租·嘉怡苑 4居室 北卧",
    area: "天河",
    detailplace: "林和",
    square: 8.76,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1774")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902de9"),
    title: "合租·骏景花园 5居室 南卧",
    area: "天河",
    detailplace: "棠下",
    square: 9.2,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dea"),
    title: "整租·中国铁建国际花园 4室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 112,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902deb"),
    title: "整租·万科幸福悦B区 3室2厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 75,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dec"),
    title: "合租·瑞东花园 4居室 北卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 10.1,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902ded"),
    title: "合租·高教花园 5居室 东卧",
    area: "海珠",
    detailplace: "琶洲西",
    square: 7,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("1743")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dee"),
    title: "整租·时代印象 3室2厅 东南",
    area: "从化",
    detailplace: "太平镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902def"),
    title: "合租·检察院宿舍 4居室 东卧",
    area: "天河",
    detailplace: "棠下",
    square: 8.83,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1564")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df0"),
    title: "合租·第三金碧花园 4居室 东卧",
    area: "海珠",
    detailplace: "金碧",
    square: 14,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("2058")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df1"),
    title: "整租·侨怡苑 3室1厅 东南",
    area: "天河",
    detailplace: "体育中心",
    square: 89,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df2"),
    title: "整租·南沙万达广场 3室1厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 99,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df3"),
    title: "整租·新都盛世名门 4室2厅 南",
    area: "增城",
    detailplace: "白江",
    square: 147,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df4"),
    title: "合租·新世界逸彩庭园 4居室 东卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 6.46,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df5"),
    title: "合租·珠岛花园 4居室 北卧",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 7.2,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1039")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df6"),
    title: "整租·山水庭苑 4室2厅 东/东南",
    area: "白云",
    detailplace: "南湖",
    square: 154,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df7"),
    title: "整租·碧桂园豪园鹤鸣苑 3室1厅 东",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 116,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df8"),
    title: "合租·珠岛花园 4居室 东卧",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 17.4,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902df9"),
    title: "整租·光华大厦 2室1厅 北",
    area: "天河",
    detailplace: "体育中心",
    square: 83,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dfa"),
    title: "合租·新世界逸彩庭园 4居室 东卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 6.9,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1186")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dfb"),
    title: "合租·珠岛花园 4居室 东卧",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 7.82,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dfc"),
    title: "合租·珠岛花园 4居室 南卧",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 5.61,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dfd"),
    title: "整租·南沙保利城 3室2厅 北",
    area: "南沙",
    detailplace: "黄阁",
    square: 90,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dfe"),
    title: "合租·珠岛花园 5居室 北卧",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 6.3,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902dff"),
    title: "整租·锦绣半岛西区 4室2厅 南",
    area: "番禺",
    detailplace: "南浦",
    square: 168,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e00"),
    title: "整租·富力广场S区 1室0厅 东",
    area: "荔湾",
    detailplace: "中山八",
    square: 38,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e01"),
    title: "合租·穗园小区 4居室 西北卧",
    area: "天河",
    detailplace: "天润路",
    square: 14.1,
    position: "西",
    roomtype: "4室1厅1卫",
    price: NumberInt("1711")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e02"),
    title: "整租·中交汇通中心 1室0厅 西",
    area: "南沙",
    detailplace: "明珠湾",
    square: 56,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e03"),
    title: "合租·金雅苑 3居室 南卧",
    area: "海珠",
    detailplace: "滨江东",
    square: 6,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1323")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e04"),
    title: "整租·华新·333 1室1厅 南",
    area: "海珠",
    detailplace: "江燕路",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e05"),
    title: "整租·淘金路 2室2厅 东南",
    area: "越秀",
    detailplace: "淘金",
    square: 60,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e06"),
    title: "整租·时代新世界 4室2厅 东",
    area: "天河",
    detailplace: "林和",
    square: 245,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("7500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e07"),
    title: "整租·锐丰中心 2室1厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 64,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e08"),
    title: "整租·星汇城 1室1厅 东",
    area: "黄埔",
    detailplace: "知识城",
    square: 39.8,
    position: "东",
    roomtype: "1室1厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e09"),
    title: "整租·缝纫机厂宿舍 2室1厅 南/北",
    area: "海珠",
    detailplace: "新港西",
    square: 36,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e0a"),
    title: "整租·敏捷绿湖首府三期 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 107,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e0b"),
    title: "合租·新庆花园 5居室 南卧",
    area: "天河",
    detailplace: "珠江新城东",
    square: 10.5,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("2058")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e0c"),
    title: "整租·东圃大马路 1室0厅 南/西南",
    area: "天河",
    detailplace: "东圃",
    square: 30,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e0d"),
    title: "整租·信业悦都荟 1室0厅 东",
    area: "番禺",
    detailplace: "市桥北",
    square: 30,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e0e"),
    title: "整租·恒大山水城 4室2厅 北",
    area: "增城",
    detailplace: "中新镇",
    square: 130,
    position: "北",
    roomtype: "4室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e0f"),
    title: "整租·起义路 1室1厅 北",
    area: "越秀",
    detailplace: "解放南",
    square: 35,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e10"),
    title: "整租·领南星河荣誉 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 126,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e11"),
    title: "整租·合景睿峰L7 3室2厅 复式 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 157,
    position: "南",
    roomtype: "3室2厅3卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e12"),
    title: "整租·颐和雅轩 2室1厅 东南",
    area: "越秀",
    detailplace: "小北",
    square: 65,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e13"),
    title: "合租·东浚荔景苑 4居室 西卧",
    area: "荔湾",
    detailplace: "中山八",
    square: 12.5,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("2236")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e14"),
    title: "合租·珠江大家庭花园 4居室 南卧",
    area: "海珠",
    detailplace: "琶洲中",
    square: 9.5,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e15"),
    title: "整租·中山大学宿舍 2室1厅 南/北",
    area: "海珠",
    detailplace: "中大",
    square: 80,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e16"),
    title: "整租·实地常春藤 3室2厅 东南",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 99,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e17"),
    title: "整租·四航局机电公司大院 2室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 65,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e18"),
    title: "合租·天河路 4居室 西卧",
    area: "天河",
    detailplace: "体育中心",
    square: 12.5,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1879")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e19"),
    title: "整租·翡翠绿洲森林半岛 4室2厅 南/北",
    area: "增城",
    detailplace: "凤凰城",
    square: 179.47,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e1a"),
    title: "整租·广州星河湾荟心园 4室2厅 复式 南/北",
    area: "番禺",
    detailplace: "星河湾",
    square: 314,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("15000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e1b"),
    title: "整租·赤岗二街1号大院 3室1厅 南",
    area: "海珠",
    detailplace: "赤岗",
    square: 67,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e1c"),
    title: "整租·建设路（正果） 4室2厅 南",
    area: "增城",
    detailplace: "正果镇",
    square: 106,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e1d"),
    title: "整租·珠江广场 3室2厅 东南",
    area: "海珠",
    detailplace: "滨江东",
    square: 95,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e1e"),
    title: "合租·星汇园 4居室 北卧",
    area: "天河",
    detailplace: "珠江新城西",
    square: 12.5,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("3213")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e1f"),
    title: "整租·富颐华庭T区 3室2厅 南",
    area: "黄埔",
    detailplace: "大沙地",
    square: 113.69,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("5200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e20"),
    title: "合租·骏逸苑 4居室 南卧",
    area: "天河",
    detailplace: "珠江新城东",
    square: 9.4,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1711")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e21"),
    title: "整租·恒大山水郡 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 87,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e22"),
    title: "合租·云景花园云桂苑 4居室 东卧",
    area: "白云",
    detailplace: "京溪",
    square: 8.9,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e23"),
    title: "整租·奥园莲峰圣境 4室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 220,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e24"),
    title: "整租·碧桂园凤凰城凤妍苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 93.96,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e25"),
    title: "整租·德政中路 2室1厅 西",
    area: "越秀",
    detailplace: "越秀南",
    square: 42,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e26"),
    title: "合租·金湾明珠 4居室 西卧",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 7.62,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1354")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e27"),
    title: "整租·小北路 2室1厅 东",
    area: "越秀",
    detailplace: "小北",
    square: 57.24,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e28"),
    title: "合租·骏景花园 5居室 北卧",
    area: "天河",
    detailplace: "棠下",
    square: 22.8,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("2719")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e29"),
    title: "整租·华南新城北区 3室2厅 南/北",
    area: "番禺",
    detailplace: "华南新城",
    square: 133,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e2a"),
    title: "整租·碧桂园云顶 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 91,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e2b"),
    title: "整租·越秀和樾府三期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e2c"),
    title: "整租·荔嘉公馆 1室0厅 南",
    area: "番禺",
    detailplace: "桥南",
    square: 35,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e2d"),
    title: "整租·远洋天骄广场 3室1厅 南/西北",
    area: "天河",
    detailplace: "天河客运站",
    square: 145,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e2e"),
    title: "整租·卓盈公寓 1室1厅 东",
    area: "番禺",
    detailplace: "厦滘",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e2f"),
    title: "整租·嘉裕君玥公馆 3室2厅 西北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 155,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("13500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e30"),
    title: "合租·中海康城 4居室 西卧",
    area: "天河",
    detailplace: "黄村",
    square: 7.46,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e31"),
    title: "整租·五矿招商·鹭山府 3室1厅 南",
    area: "黄埔",
    detailplace: "大沙地",
    square: 98,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("4700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e32"),
    title: "合租·珠光新城御景二期回迁房 4居室 北卧",
    area: "天河",
    detailplace: "珠江新城东",
    square: 19.8,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2474")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e33"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 南",
    area: "花都",
    detailplace: "花城街",
    square: 54,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e34"),
    title: "整租·广州雅居乐花园雅逸庭 3室2厅 南/北",
    area: "番禺",
    detailplace: "雅居乐",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e35"),
    title: "整租·西华路 1室1厅 南",
    area: "荔湾",
    detailplace: "西华路",
    square: 27.39,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e36"),
    title: "合租·检察院宿舍 4居室 东卧",
    area: "天河",
    detailplace: "棠下",
    square: 8.83,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1564")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e37"),
    title: "合租·第三金碧花园 4居室 东卧",
    area: "海珠",
    detailplace: "金碧",
    square: 14,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("2058")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e38"),
    title: "整租·广州足球公园 2室1厅 西",
    area: "番禺",
    detailplace: "钟村",
    square: 48,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e39"),
    title: "整租·英豪花园 2室1厅 东南",
    area: "海珠",
    detailplace: "东晓南",
    square: 75,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e3a"),
    title: "合租·新世界逸彩庭园 4居室 南卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 12.1,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e3b"),
    title: "合租·新世界逸彩庭园 4居室 东卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 6.46,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e3c"),
    title: "整租·建发明珠湾玺 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e3d"),
    title: "合租·美的江上沄启 2居室 东南卧",
    area: "南沙",
    detailplace: "明珠湾",
    square: 18,
    position: "东",
    roomtype: "2室1厅2卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e3e"),
    title: "合租·珠岛花园 4居室 北卧",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 7.2,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1039")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e3f"),
    title: "整租·金碧新城 1室0厅 东",
    area: "白云",
    detailplace: "石井",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e40"),
    title: "合租·省工艺大院 6居室 南卧",
    area: "天河",
    detailplace: "体育中心",
    square: 20,
    position: "南",
    roomtype: "6室0厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e41"),
    title: "整租·保利香雪山花园 4室2厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 128,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("5199")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e42"),
    title: "整租·越秀天荟江湾 1室1厅 东南",
    area: "海珠",
    detailplace: "工业大道南",
    square: 36,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e43"),
    title: "整租·上九路 3室2厅 东南",
    area: "荔湾",
    detailplace: "人民路",
    square: 80,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("5600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e44"),
    title: "整租·叠溪花园 3室2厅 北",
    area: "增城",
    detailplace: "朱村",
    square: 87.87,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e45"),
    title: "整租·四季花园 0室1厅 东南",
    area: "荔湾",
    detailplace: "坑口",
    square: 12,
    position: "东",
    roomtype: null,
    price: NumberInt("916")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e46"),
    title: "整租·淘金北路 3室1厅 南/北",
    area: "越秀",
    detailplace: "淘金",
    square: 87.42,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e47"),
    title: "整租·宏宇广场 2室1厅 东",
    area: "海珠",
    detailplace: "宝岗",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e48"),
    title: "整租·保利天悦公寓 2室2厅 西",
    area: "海珠",
    detailplace: "琶洲东",
    square: 93,
    position: "西",
    roomtype: "2室2厅1卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e49"),
    title: "整租·丽景湾 3室2厅 北",
    area: "海珠",
    detailplace: "滨江东",
    square: 125.19,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e4a"),
    title: "整租·新世界嘉云府 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e4b"),
    title: "整租·雅居乐花园浅山小筑 3室1厅 北",
    area: "番禺",
    detailplace: "雅居乐",
    square: 88.17,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e4c"),
    title: "整租·纵横公寓 2室1厅 南",
    area: "海珠",
    detailplace: "赤岗",
    square: 87,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e4d"),
    title: "整租·金碧新城 1室0厅 东",
    area: "白云",
    detailplace: "石井",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e4e"),
    title: "整租·景业荔都 3室2厅 南",
    area: "从化",
    detailplace: "江埔街",
    square: 100,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e4f"),
    title: "整租·岭南新世界 1室0厅 南/北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12.5,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e50"),
    title: "整租·东兴小区 2室1厅 南",
    area: "越秀",
    detailplace: "五羊新城",
    square: 70,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e51"),
    title: "整租·美的江上沄启 4室2厅 西北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 118,
    position: "西",
    roomtype: "4室2厅2卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e52"),
    title: "整租·中山八路 1室0厅 东南",
    area: "荔湾",
    detailplace: "中山八",
    square: 30,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e53"),
    title: "整租·招商湾区1872 3室2厅 东/东北",
    area: "南沙",
    detailplace: "东涌",
    square: 79,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e54"),
    title: "整租·星河山海湾 3室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 87,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e55"),
    title: "整租·金科景业·雍景园 4室2厅 东南",
    area: "增城",
    detailplace: "中新镇",
    square: 98,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e56"),
    title: "整租·龙光棕榈水岸南区 5室2厅 复式 南",
    area: "南沙",
    detailplace: "南沙区府",
    square: 351,
    position: "南",
    roomtype: "5室2厅5卫",
    price: NumberInt("14500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e57"),
    title: "整租·星河丹堤 2室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 79,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e58"),
    title: "整租·先烈南路青龙坊 3室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 100,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e59"),
    title: "整租·华润置地·瑞府 3室2厅 东南/南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e5a"),
    title: "整租·邮电新村 1室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e5b"),
    title: "整租·民间金融大厦 1室1厅 南",
    area: "越秀",
    detailplace: "解放南",
    square: 46,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e5c"),
    title: "整租·光华大厦 2室1厅 西",
    area: "天河",
    detailplace: "体育中心",
    square: 86,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e5d"),
    title: "整租·德政北路 1室1厅 东南",
    area: "越秀",
    detailplace: "农讲所",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e5e"),
    title: "整租·龙光棕榈水岸南区 3室2厅 南",
    area: "南沙",
    detailplace: "南沙区府",
    square: 113,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e5f"),
    title: "整租·东风中路 1室0厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 30,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e60"),
    title: "整租·合景花漫里 2室2厅 北",
    area: "增城",
    detailplace: "永宁",
    square: 88,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e61"),
    title: "整租·经典居 3室1厅 东",
    area: "海珠",
    detailplace: "滨江东",
    square: 140,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e62"),
    title: "整租·光大花园水岸榕城 2室1厅 南/北",
    area: "海珠",
    detailplace: "工业大道北",
    square: 80,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e63"),
    title: "整租·增城万达广场 1室0厅 东北",
    area: "增城",
    detailplace: "增城区府",
    square: 53,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e64"),
    title: "整租·景业荔都 3室2厅 南",
    area: "从化",
    detailplace: "江埔街",
    square: 111.3,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e65"),
    title: "整租·红云大厦 2室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 46.6,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3550")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e66"),
    title: "整租·星汇园 3室2厅 东南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 129,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936bf086c2308dab7902e67"),
    title: "整租·中交汇通中心 1室1厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 56,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac6171fb"),
    title: "整租·金溪大厦 1室0厅 东南",
    area: "海珠",
    detailplace: "江燕路",
    square: 42,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac6171fc"),
    title: "整租·时代南湾 3室1厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 128,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac6171fd"),
    title: "合租·辉洋苑 3居室 东卧",
    area: "荔湾",
    detailplace: "黄沙",
    square: 14.4,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1558")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac6171fe"),
    title: "整租·福达广场 1室1厅 东",
    area: "花都",
    detailplace: "新区",
    square: 67,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac6171ff"),
    title: "整租·越秀明珠天悦江湾 3室2厅 复式 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 80,
    position: "北",
    roomtype: "3室2厅3卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617200"),
    title: "整租·侨鑫保利汇景台 3室2厅 北",
    area: "天河",
    detailplace: "汇景新城",
    square: 126,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617201"),
    title: "整租·保利天悦花园 3室1厅 南",
    area: "海珠",
    detailplace: "琶洲东",
    square: 142,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("13800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617202"),
    title: "整租·丽景花苑 3室2厅 东南",
    area: "海珠",
    detailplace: "琶洲西",
    square: 80,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617203"),
    title: "整租·大东门华庭 2室1厅 西北",
    area: "越秀",
    detailplace: "农讲所",
    square: 48,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617204"),
    title: "合租·旭日雅苑 4居室 西卧",
    area: "天河",
    detailplace: "员村",
    square: 5.1,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617205"),
    title: "整租·锦绣生态园 3室2厅 北",
    area: "番禺",
    detailplace: "钟村",
    square: 80,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617206"),
    title: "合租·金域蓝湾 5居室 东卧",
    area: "白云",
    detailplace: "金沙洲",
    square: 7.24,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("976")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617207"),
    title: "合租·线坑花园 4居室 南卧",
    area: "黄埔",
    detailplace: "科学城",
    square: 7.6,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617208"),
    title: "整租·珠江华景里 2室1厅 东",
    area: "天河",
    detailplace: "华景新城",
    square: 48,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617209"),
    title: "整租·海天花园 1室0厅 南",
    area: "番禺",
    detailplace: "洛溪",
    square: 17,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("650")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61720a"),
    title: "整租·骏昇广场 1室0厅 东北",
    area: "黄埔",
    detailplace: "开发东区",
    square: 40,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61720b"),
    title: "整租·珠江广场 3室2厅 南",
    area: "海珠",
    detailplace: "滨江东",
    square: 152,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("8600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61720c"),
    title: "整租·天伦花园 1室1厅 南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61720d"),
    title: "整租·珠江国际城 3室2厅 东北",
    area: "从化",
    detailplace: "神岗镇",
    square: 83,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1440")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61720e"),
    title: "整租·珠光路 3室2厅 南",
    area: "越秀",
    detailplace: "越秀南",
    square: 172.15,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61720f"),
    title: "整租·奥园城市天地 2室1厅 东南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617210"),
    title: "合租·石化生活区 4居室 北卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 8.1,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1008")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617211"),
    title: "整租·十年小雅 1室0厅 南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617212"),
    title: "合租·亚运城天荟 5居室 东北卧",
    area: "番禺",
    detailplace: "亚运城",
    square: 15.4,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("1558")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617213"),
    title: "合租·星汇湾花园 2居室 北卧",
    area: "海珠",
    detailplace: "工业大道中",
    square: 13,
    position: "北",
    roomtype: "2室1厅2卫",
    price: NumberInt("2446")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617214"),
    title: "整租·富力现代广场 1室0厅 东",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617215"),
    title: "整租·亚运城天峯1区 4室2厅 南/北",
    area: "番禺",
    detailplace: "亚运城",
    square: 146,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617216"),
    title: "整租·松岗东路 4室1厅 东",
    area: "越秀",
    detailplace: "东山口",
    square: 111.97,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617217"),
    title: "整租·流花路 2室1厅 南/北",
    area: "荔湾",
    detailplace: "流花站前",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617218"),
    title: "整租·锦绣半岛金月湾 4室2厅 东南",
    area: "番禺",
    detailplace: "南浦",
    square: 171,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("5200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617219"),
    title: "整租·棠德花苑 2室1厅 西北",
    area: "天河",
    detailplace: "棠下",
    square: 60,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61721a"),
    title: "整租·珠江华景里 2室1厅 东",
    area: "天河",
    detailplace: "华景新城",
    square: 48,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61721b"),
    title: "整租·环市西路 1室0厅 东南/南",
    area: "荔湾",
    detailplace: "流花站前",
    square: 30,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61721c"),
    title: "整租·海珠合创中心(珠江壹号） 4室2厅 南",
    area: "海珠",
    detailplace: "广州大道南",
    square: 95,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61721d"),
    title: "整租·水西商业广场 1室0厅 南",
    area: "黄埔",
    detailplace: "长岭居",
    square: 30.48,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61721e"),
    title: "整租·万科欧泊 3室2厅 东南",
    area: "番禺",
    detailplace: "万博",
    square: 95,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4480")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61721f"),
    title: "整租·雅居乐花园一尺山居 2室1厅 西南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 80.36,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617220"),
    title: "整租·华润置地公园上城 3室2厅 北",
    area: "增城",
    detailplace: "沙村",
    square: 75,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617221"),
    title: "整租·柳岸晓风 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 96,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617222"),
    title: "整租·佳兆业城市广场 2室2厅 南",
    area: "黄埔",
    detailplace: "南岗",
    square: 52,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617223"),
    title: "整租·东郊市场 2室1厅 南",
    area: "越秀",
    detailplace: "杨箕",
    square: 58,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617224"),
    title: "整租·大都汇 1室1厅 南",
    area: "白云",
    detailplace: "人和",
    square: 63,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617225"),
    title: "整租·十年小雅 1室0厅 南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617226"),
    title: "整租·合景誉山国际三区 3室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 102,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1755")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617227"),
    title: "整租·越秀滨海御城 3室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617228"),
    title: "整租·富力金禧花园 1室0厅 东/东南/南/西南/西/西北/北/东北",
    area: "海珠",
    detailplace: "同福",
    square: 10,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617229"),
    title: "整租·松岗东路 4室1厅 东",
    area: "越秀",
    detailplace: "东山口",
    square: 111.97,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61722a"),
    title: "整租·合景花䕕四季 3室2厅 南",
    area: "从化",
    detailplace: "鳌头镇",
    square: 82,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61722b"),
    title: "整租·文昌花园 1室1厅 南",
    area: "荔湾",
    detailplace: "西关",
    square: 24,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2070")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61722c"),
    title: "整租·跑马地大厦 1室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 58,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61722d"),
    title: "整租·海逸半岛 3室1厅 东南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 45,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61722e"),
    title: "整租·金时花园 3室2厅 南",
    area: "增城",
    detailplace: "荔城增江",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61722f"),
    title: "整租·南沙万达广场 1室1厅 东南",
    area: "南沙",
    detailplace: "金洲",
    square: 63.8,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617230"),
    title: "合租·保利西子湾 4居室 东卧",
    area: "白云",
    detailplace: "金沙洲",
    square: 6.7,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("1039")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617231"),
    title: "整租·保利星满花园 3室2厅 南",
    area: "南沙",
    detailplace: "榄核镇",
    square: 100,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617232"),
    title: "合租·远洋天骄 5居室 北卧",
    area: "天河",
    detailplace: "天河客运站",
    square: 7.63,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("1354")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617233"),
    title: "整租·西城路(番禺区) 2室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 70,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617234"),
    title: "整租·保利南沙天汇 3室1厅 北",
    area: "南沙",
    detailplace: "黄阁",
    square: 95,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617235"),
    title: "整租·湾区·金融城 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 140,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617236"),
    title: "整租·中海誉城北苑 1室0厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617237"),
    title: "合租·珠江大家庭花园 4居室 南卧",
    area: "海珠",
    detailplace: "琶洲中",
    square: 18.91,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2089")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617238"),
    title: "整租·深业金翠湾 3室2厅 东南",
    area: "白云",
    detailplace: "金沙洲",
    square: 83,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3591")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617239"),
    title: "整租·优山美墅 3室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 105,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61723a"),
    title: "合租·润粤大厦 4居室 南卧",
    area: "越秀",
    detailplace: "水荫",
    square: 9,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1816")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61723b"),
    title: "整租·荔湾路 3室2厅 东/南/西",
    area: "荔湾",
    detailplace: "陈家祠",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61723c"),
    title: "整租·中海璟晖华庭 3室2厅 北",
    area: "天河",
    detailplace: "珠江新城中",
    square: 122,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("14000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61723d"),
    title: "整租·海天花苑 4室2厅 南/北",
    area: "海珠",
    detailplace: "滨江东",
    square: 152,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61723e"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 南",
    area: "花都",
    detailplace: "花城街",
    square: 38,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61723f"),
    title: "整租·江湾298 1室1厅 西南",
    area: "越秀",
    detailplace: "越秀南",
    square: 84,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617240"),
    title: "整租·十八甫南路菜栏横街 2室1厅 南",
    area: "荔湾",
    detailplace: "和平西",
    square: 37.88,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617241"),
    title: "合租·佰利山 4居室 东北卧",
    area: "番禺",
    detailplace: "雅居乐",
    square: 12.5,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1816")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617242"),
    title: "整租·丰庭花园 2室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 82,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617243"),
    title: "整租·敏捷上城商务中心 1室0厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 12.82,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617244"),
    title: "整租·罗马家园 4室1厅 南/北",
    area: "海珠",
    detailplace: "沥滘",
    square: 156,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617245"),
    title: "整租·力迅领筑 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617246"),
    title: "合租·东怡新区东景园 4居室 西卧",
    area: "番禺",
    detailplace: "东怡新区",
    square: 12.5,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1619")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617247"),
    title: "合租·都市兰亭花园 4居室 南卧",
    area: "天河",
    detailplace: "员村",
    square: 7.92,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617248"),
    title: "整租·南湖山庄 5室2厅 复式 南",
    area: "白云",
    detailplace: "南湖",
    square: 211.57,
    position: "南",
    roomtype: "5室2厅4卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac617249"),
    title: "合租·美林海岸 4居室 南卧",
    area: "天河",
    detailplace: "员村",
    square: 9.2,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61724a"),
    title: "合租·育蕾小区 4居室 北卧",
    area: "天河",
    detailplace: "天河南",
    square: 8.26,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1669")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6936c3858cc25b89ac61724b"),
    title: "整租·富力盈力大厦 4室1厅 东南/西北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 213,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("17000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d6396"),
    title: "整租·万科海上明月 3室2厅 西",
    area: "南沙",
    detailplace: "黄阁",
    square: 75,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d6397"),
    title: "整租·景南苑 3室1厅 南",
    area: "黄埔",
    detailplace: "大沙地",
    square: 110,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d6398"),
    title: "合租·育兰小区 5居室 东卧",
    area: "天河",
    detailplace: "天河南",
    square: 20,
    position: "东",
    roomtype: "5室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d6399"),
    title: "整租·逸涛半岛 1室1厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 38,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("899")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d639a"),
    title: "整租·恒宝华庭 2室2厅 西南",
    area: "荔湾",
    detailplace: "西关",
    square: 70,
    position: "西",
    roomtype: "2室2厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d639b"),
    title: "整租·江源半岛花园 3室2厅 南",
    area: "天河",
    detailplace: "金融城",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d639c"),
    title: "整租·淘金路 3室1厅 东南",
    area: "越秀",
    detailplace: "淘金",
    square: 90,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d639d"),
    title: "整租·博雅御轩 1室1厅 北",
    area: "天河",
    detailplace: "珠江新城中",
    square: 74,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d639e"),
    title: "合租·体育西路 2居室 东南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2980")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d639f"),
    title: "整租·恒大山水城 3室2厅 西南",
    area: "增城",
    detailplace: "中新镇",
    square: 96,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a0"),
    title: "整租·万科城市之光A区 3室2厅 东南",
    area: "黄埔",
    detailplace: "文冲",
    square: 96,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a1"),
    title: "整租·碧桂园豪园林湖苑 3室2厅 东北",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 117.05,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a2"),
    title: "整租·富力公园28 1室0厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 12.5,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a3"),
    title: "整租·铂林国际公寓 1室0厅 西",
    area: "天河",
    detailplace: "珠江新城西",
    square: 33,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a4"),
    title: "整租·红棉苑北区 5室1厅 东南",
    area: "荔湾",
    detailplace: "芳村",
    square: 260,
    position: "东",
    roomtype: "5室1厅5卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a5"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a6"),
    title: "整租·美的江上沄启 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 118,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a7"),
    title: "整租·保利堂悦 3室1厅 南",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 85,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("6300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a8"),
    title: "整租·凤安花园 3室1厅 东南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63a9"),
    title: "整租·同福中路 2室1厅 东",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63aa"),
    title: "整租·富力天朗明居 1室0厅 东南/南",
    area: "天河",
    detailplace: "棠下",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63ab"),
    title: "整租·荔福路 2室2厅 东南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 88,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63ac"),
    title: "整租·金碧御水山庄 5室2厅 复式 东/西",
    area: "花都",
    detailplace: "狮岭镇",
    square: 339,
    position: "东",
    roomtype: "5室2厅4卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63ad"),
    title: "整租·康乐园 3室2厅 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 86,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63ae"),
    title: "整租·汇景新城中央庭院 1室0厅 东",
    area: "天河",
    detailplace: "汇景新城",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63af"),
    title: "整租·南沙金湾 3室1厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 85,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b0"),
    title: "合租·碧桂园朝花 3居室 南/西南卧",
    area: "荔湾",
    detailplace: "鹤洞",
    square: 30,
    position: "南",
    roomtype: "3室1厅3卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b1"),
    title: "整租·海丝知识中心 3室1厅 东南",
    area: "黄埔",
    detailplace: "知识城",
    square: 83,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b2"),
    title: "整租·龙苑大厦 1室1厅 东北",
    area: "天河",
    detailplace: "龙口西",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b3"),
    title: "整租·中盈一海里 3室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 99.83,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1890")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b4"),
    title: "整租·奥园养生广场 1室0厅 南",
    area: "番禺",
    detailplace: "桥南",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b5"),
    title: "整租·南洲花苑AB区 2室2厅 东南",
    area: "海珠",
    detailplace: "南洲",
    square: 62,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b6"),
    title: "整租·华德信创 1室1厅 东",
    area: "黄埔",
    detailplace: "科学城",
    square: 33,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b7"),
    title: "整租·恒大悦府 3室2厅 南",
    area: "花都",
    detailplace: "花城街",
    square: 87,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b8"),
    title: "整租·实地蔷薇国际 3室2厅 东南",
    area: "增城",
    detailplace: "荔城西区",
    square: 94,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63b9"),
    title: "整租·兰园·凤翎台 4室2厅 南",
    area: "花都",
    detailplace: "镜湖大道",
    square: 117,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63ba"),
    title: "整租·合景花漫里 3室2厅 北",
    area: "增城",
    detailplace: "永宁",
    square: 86,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63bb"),
    title: "整租·南沙万达广场 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 46.93,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1292")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63bc"),
    title: "整租·奥园养生广场 1室0厅 南",
    area: "番禺",
    detailplace: "桥南",
    square: 26,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63bd"),
    title: "整租·鸿燕居 1室0厅 南",
    area: "天河",
    detailplace: "燕塘",
    square: 11,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("750")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63be"),
    title: "整租·富颐华庭R区 4室2厅 南",
    area: "黄埔",
    detailplace: "大沙地",
    square: 138,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63bf"),
    title: "整租·小新塘大未来 3室1厅 南",
    area: "天河",
    detailplace: "智慧城",
    square: 100,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c0"),
    title: "整租·绿地越秀海玥 2室1厅 南",
    area: "海珠",
    detailplace: "工业大道中",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c1"),
    title: "合租·美林海岸 1居室 南卧",
    area: "天河",
    detailplace: "员村",
    square: 109,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c2"),
    title: "整租·东海花园 3室2厅 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 94,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c3"),
    title: "整租·东方广场 1室0厅 南",
    area: "越秀",
    detailplace: "环市东",
    square: 40,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c4"),
    title: "整租·奥园广场 1室1厅 南",
    area: "番禺",
    detailplace: "桥南",
    square: 66,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c5"),
    title: "整租·革新路 1室0厅 南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 35,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c6"),
    title: "合租·天河直街武警宿舍 4居室 南卧",
    area: "天河",
    detailplace: "体育中心",
    square: 30,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c7"),
    title: "整租·越秀中国铁建南投海语天悦湾 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 142,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c8"),
    title: "整租·合生湖山国际7期珑境 3室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 118,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63c9"),
    title: "整租·建设大马路 3室1厅 南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 70,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63ca"),
    title: "整租·力迅·西关雅筑 1室0厅 北",
    area: "荔湾",
    detailplace: "西华路",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63cb"),
    title: "整租·上元岗大占角六巷 2室1厅 东北",
    area: "天河",
    detailplace: "天河客运站",
    square: 50,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63cc"),
    title: "整租·万科白鹭郡 5室3厅 东南",
    area: "南沙",
    detailplace: "黄阁",
    square: 80,
    position: "东",
    roomtype: "5室3厅2卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63cd"),
    title: "整租·三宝墟教职工新村 3室2厅 南/北",
    area: "天河",
    detailplace: "长兴",
    square: 113,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63ce"),
    title: "整租·东方新世界 2室2厅 西",
    area: "天河",
    detailplace: "天河公园",
    square: 86.87,
    position: "西",
    roomtype: "2室2厅1卫",
    price: NumberInt("5600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63cf"),
    title: "合租·七星岗1号大院 5居室 东南卧",
    area: "海珠",
    detailplace: "赤岗",
    square: 20,
    position: "东",
    roomtype: "5室0厅2卫",
    price: NumberInt("1250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("6939500001ff2863301d63d0"),
    title: "整租·邮通小区 2室2厅 南",
    area: "天河",
    detailplace: "华景新城",
    square: 60,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94ed"),
    title: "整租·合生湖山国际6期峰上 3室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 122,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94ee"),
    title: "整租·北京路 3室1厅 东",
    area: "越秀",
    detailplace: "北京路",
    square: 54,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94ef"),
    title: "整租·华筑翡翠湾 4室2厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 138,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f0"),
    title: "整租·中山六路 2室1厅 东",
    area: "越秀",
    detailplace: "西门口",
    square: 42,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f1"),
    title: "整租·时代印记 3室1厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 136,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f2"),
    title: "整租·风神花园 3室2厅 南",
    area: "花都",
    detailplace: "铁路西",
    square: 92.14,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f3"),
    title: "整租·信业悦都荟 2室2厅 南",
    area: "番禺",
    detailplace: "市桥北",
    square: 47,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f4"),
    title: "整租·溪悦西花园 3室1厅 南",
    area: "花都",
    detailplace: "花东镇",
    square: 85,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f5"),
    title: "整租·信业悦都荟 1室1厅 南",
    area: "番禺",
    detailplace: "市桥北",
    square: 49,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f6"),
    title: "整租·番禺万达广场 4室1厅 西南",
    area: "番禺",
    detailplace: "万博",
    square: 536.8,
    position: "西",
    roomtype: "4室1厅0卫",
    price: NumberInt("37100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f7"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f8"),
    title: "整租·万方园 1室0厅 南",
    area: "白云",
    detailplace: "机场路",
    square: 37,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94f9"),
    title: "整租·保利大都汇 3室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 63,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94fa"),
    title: "整租·金口岸大厦 3室2厅 东",
    area: "番禺",
    detailplace: "市桥",
    square: 138.8,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94fb"),
    title: "整租·珠江帝景苑 4室1厅 西",
    area: "海珠",
    detailplace: "广州塔",
    square: 133,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94fc"),
    title: "整租·天晟明苑 1室0厅 东",
    area: "天河",
    detailplace: "石牌",
    square: 22,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94fd"),
    title: "整租·石宦路 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 48,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2680")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94fe"),
    title: "整租·共和路 2室1厅 东南",
    area: "越秀",
    detailplace: "杨箕",
    square: 52,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb94ff"),
    title: "整租·万科兰乔圣菲 3室2厅 北",
    area: "花都",
    detailplace: "狮岭镇",
    square: 115,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9500"),
    title: "整租·招商城市主场 1室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9501"),
    title: "整租·东沙路 1室0厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 28,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9502"),
    title: "整租·磨碟沙花苑 1室1厅 北",
    area: "海珠",
    detailplace: "琶洲西",
    square: 53,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9503"),
    title: "整租·阳光城悦然府 3室2厅 南/北",
    area: "南沙",
    detailplace: "进港大道",
    square: 96.77,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9504"),
    title: "整租·尚塬颐都汇 2室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4380")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9505"),
    title: "整租·东华东路 3室1厅 西",
    area: "越秀",
    detailplace: "东川路",
    square: 95,
    position: "西",
    roomtype: "3室1厅2卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9506"),
    title: "整租·紫荆小区 3室1厅 东南",
    area: "天河",
    detailplace: "林和",
    square: 74,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9507"),
    title: "整租·北较场路 1室0厅 东",
    area: "越秀",
    detailplace: "小北",
    square: 30,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9508"),
    title: "整租·南沙保利南怡湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "黄阁",
    square: 127,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2280")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9509"),
    title: "整租·碧桂园天玺湾 3室2厅 西北",
    area: "南沙",
    detailplace: "进港大道",
    square: 103,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb950a"),
    title: "整租·中旅名门府 3室2厅 南",
    area: "花都",
    detailplace: "镜湖大道",
    square: 88,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb950b"),
    title: "整租·淘金家园峯璟 2室1厅 北",
    area: "越秀",
    detailplace: "淘金",
    square: 80,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb950c"),
    title: "整租·小新塘大未来 2室1厅 南",
    area: "天河",
    detailplace: "智慧城",
    square: 65,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb950d"),
    title: "整租·广州设计之都 1室1厅 南",
    area: "白云",
    detailplace: "黄边",
    square: 35,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2480")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb950e"),
    title: "整租·朝天路 2室2厅 南",
    area: "越秀",
    detailplace: "西门口",
    square: 97,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb950f"),
    title: "整租·华贵路 2室1厅 南",
    area: "荔湾",
    detailplace: "龙津",
    square: 68,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9510"),
    title: "整租·赤岗一街大院赤岗一街 2室1厅 南",
    area: "海珠",
    detailplace: "赤岗",
    square: 48.9,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9511"),
    title: "整租·叠溪花园 3室2厅 东",
    area: "增城",
    detailplace: "朱村",
    square: 83,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9512"),
    title: "整租·富力悦禧花园 3室2厅 南/北",
    area: "黄埔",
    detailplace: "开发东区",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9513"),
    title: "整租·万科海上明月 4室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 82,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1753")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9514"),
    title: "整租·白云路 2室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9515"),
    title: "整租·奥园中新城市天地 3室2厅 东南/南",
    area: "增城",
    detailplace: "中新镇",
    square: 87,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9516"),
    title: "合租·育蕾小区 4居室 西南卧",
    area: "天河",
    detailplace: "天河南",
    square: 20,
    position: "西",
    roomtype: "4室0厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9517"),
    title: "整租·保利天悦花园 3室2厅 南/北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 142,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9518"),
    title: "整租·时代印记 4室2厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 136,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9519"),
    title: "整租·美的江上沄启 4室2厅 东北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 119,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb951a"),
    title: "整租·黄埔中央城 4室2厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 125,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb951b"),
    title: "整租·中海花湾壹号B区 2室2厅 南",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 60,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb951c"),
    title: "整租·金信大厦 1室0厅 东/西",
    area: "荔湾",
    detailplace: "西华路",
    square: 65,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb951d"),
    title: "整租·南浦时代 1室1厅 东南",
    area: "番禺",
    detailplace: "南浦",
    square: 33,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb951e"),
    title: "整租·碧桂园假日半岛映翠苑 5室2厅 复式 南",
    area: "花都",
    detailplace: "山前大道",
    square: 242.79,
    position: "南",
    roomtype: "5室2厅4卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb951f"),
    title: "整租·名门国际 1室1厅 北",
    area: "花都",
    detailplace: "新区",
    square: 110,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9520"),
    title: "整租·惠福西路 2室1厅 东南",
    area: "越秀",
    detailplace: "西门口",
    square: 55,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9521"),
    title: "整租·税务综合楼 2室1厅 北",
    area: "番禺",
    detailplace: "大石",
    square: 70,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9522"),
    title: "整租·御景壹号C区 1室0厅 东南",
    area: "荔湾",
    detailplace: "黄沙",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9523"),
    title: "整租·邮电新村青龙坊 1室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 25,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9524"),
    title: "整租·琶洲新村公寓 1室1厅 北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 64,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9525"),
    title: "整租·碧桂园朝花 1室1厅 东",
    area: "荔湾",
    detailplace: "鹤洞",
    square: 22,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9526"),
    title: "整租·丽江花园如英居 3室2厅 西南",
    area: "番禺",
    detailplace: "南浦",
    square: 97,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9527"),
    title: "整租·中铁盛德国际 3室2厅 东南",
    area: "天河",
    detailplace: "石牌",
    square: 145.55,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9528"),
    title: "整租·天俊阁 2室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 118.66,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9529"),
    title: "整租·龙湖首开云峰原著 4室2厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 115,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb952a"),
    title: "整租·翠湖山庄 1室1厅 西",
    area: "天河",
    detailplace: "天河公园",
    square: 63,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb952b"),
    title: "整租·碧桂园凤凰城凤仪苑 5室2厅 复式 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 159,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb952c"),
    title: "整租·西门口广场 3室2厅 西南",
    area: "荔湾",
    detailplace: "西华路",
    square: 133,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("8200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb952d"),
    title: "整租·越秀江海潮鸣 3室2厅 西南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 99,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb952e"),
    title: "合租·佳兆业城市广场 2居室 北卧",
    area: "黄埔",
    detailplace: "南岗",
    square: 30,
    position: "北",
    roomtype: "2室0厅2卫",
    price: NumberInt("1350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb952f"),
    title: "整租·阳光城丽景湾·星悦 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 86,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9530"),
    title: "整租·广州足球公园 1室1厅 北",
    area: "番禺",
    detailplace: "钟村",
    square: 51,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9531"),
    title: "整租·名城御景绿洲 4室2厅 南",
    area: "从化",
    detailplace: "江埔街",
    square: 140,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9532"),
    title: "整租·珠江帝景苑 3室2厅 南",
    area: "海珠",
    detailplace: "广州塔",
    square: 150,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("14600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9533"),
    title: "整租·合汇·中央广场 2室2厅 北",
    area: "增城",
    detailplace: "荔城中区",
    square: 80.8,
    position: "北",
    roomtype: "2室2厅0卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9534"),
    title: "整租·万科尚城御府 3室2厅 南",
    area: "黄埔",
    detailplace: "南岗",
    square: 80,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9535"),
    title: "整租·新达城广场 1室1厅 东南",
    area: "越秀",
    detailplace: "水荫",
    square: 39,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9536"),
    title: "整租·天河桃苑 3室1厅 南/北",
    area: "天河",
    detailplace: "东圃",
    square: 89,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9537"),
    title: "整租·碧桂园星悦台 1室1厅 南/北",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 32,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9538"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 72,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9539"),
    title: "整租·晓港湾 1室1厅 东/东南",
    area: "海珠",
    detailplace: "东晓南",
    square: 33.57,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb953a"),
    title: "整租·银建小区 1室1厅 东南",
    area: "荔湾",
    detailplace: "周门",
    square: 52,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb953b"),
    title: "整租·敏捷御峰国际 1室1厅 南",
    area: "番禺",
    detailplace: "会江",
    square: 52,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2070")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb953c"),
    title: "整租·天河智荟 1室1厅 南",
    area: "天河",
    detailplace: "广氮",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb953d"),
    title: "整租·接龙里小区 2室1厅 南",
    area: "荔湾",
    detailplace: "芳村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb953e"),
    title: "整租·中冶·逸璟台 4室2厅 复式 东南",
    area: "黄埔",
    detailplace: "科学城",
    square: 168,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb953f"),
    title: "整租·沙园 2室1厅 南",
    area: "海珠",
    detailplace: "沙园",
    square: 55,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9540"),
    title: "整租·城丰路 3室2厅 南",
    area: "增城",
    detailplace: "荔城富鹏",
    square: 83,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9541"),
    title: "整租·时代长岛 1室0厅 东",
    area: "南沙",
    detailplace: "进港大道",
    square: 12.61,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9542"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 103,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9543"),
    title: "整租·大德路 1室0厅 东",
    area: "越秀",
    detailplace: "解放南",
    square: 35,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9544"),
    title: "整租·大德路 1室0厅 东",
    area: "越秀",
    detailplace: "解放南",
    square: 25,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9545"),
    title: "整租·景业壹方天地 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 77,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9546"),
    title: "整租·佳润云凯雅寓 1室1厅 东/北",
    area: "白云",
    detailplace: "同和",
    square: 41,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9547"),
    title: "合租·辉煌大厦 4居室 北卧",
    area: "越秀",
    detailplace: "东川路",
    square: 25,
    position: "北",
    roomtype: "4室4厅4卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9548"),
    title: "整租·同和路 3室1厅 南",
    area: "白云",
    detailplace: "同和",
    square: 85,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9549"),
    title: "整租·站前横路 3室1厅 南",
    area: "荔湾",
    detailplace: "流花站前",
    square: 80,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb954a"),
    title: "整租·东川路 2室1厅 北",
    area: "越秀",
    detailplace: "东川路",
    square: 45,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb954b"),
    title: "整租·富力桃园 1室0厅 南",
    area: "白云",
    detailplace: "罗冲围",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1170")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb954c"),
    title: "整租·福景居 2室1厅 南",
    area: "海珠",
    detailplace: "赤岗",
    square: 60,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2998")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb954d"),
    title: "整租·南沙万达广场 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 39,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb954e"),
    title: "整租·星汇云锦 1室0厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb954f"),
    title: "整租·碧桂园天玺湾 2室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 69,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9550"),
    title: "整租·东风西路 2室1厅 南/北",
    area: "越秀",
    detailplace: "东风西",
    square: 60,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9551"),
    title: "整租·时代新世界 3室1厅 南",
    area: "天河",
    detailplace: "林和",
    square: 121,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9552"),
    title: "整租·云星钱隆天誉 3室2厅 东南",
    area: "从化",
    detailplace: "太平镇",
    square: 123,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9553"),
    title: "整租·纵横花园 1室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 44.93,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9554"),
    title: "整租·保利中航城二期 3室1厅 复式 西南",
    area: "增城",
    detailplace: "朱村",
    square: 96,
    position: "西",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9555"),
    title: "整租·环市东路468号大院 3室2厅 南/北",
    area: "越秀",
    detailplace: "环市东",
    square: 116,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9556"),
    title: "合租·龙口小区 5居室 南/北卧",
    area: "天河",
    detailplace: "龙口西",
    square: 20,
    position: "南",
    roomtype: "5室0厅5卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9557"),
    title: "整租·保利南沙天汇 3室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 93,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9558"),
    title: "整租·西湾路 2室1厅 东南",
    area: "荔湾",
    detailplace: "西村",
    square: 61,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb9559"),
    title: "整租·高德公馆 1室1厅 东",
    area: "天河",
    detailplace: "珠江新城中",
    square: 54,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("6300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb955a"),
    title: "整租·嘉禧天和 1室1厅 东",
    area: "天河",
    detailplace: "黄村",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb955b"),
    title: "整租·汇景新城龙熹山 5室2厅 东南",
    area: "天河",
    detailplace: "汇景新城",
    square: 405,
    position: "东",
    roomtype: "5室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb955c"),
    title: "整租·涌边一马路 1室1厅 东南",
    area: "荔湾",
    detailplace: "黄沙",
    square: 28,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb955d"),
    title: "整租·金碧华府 3室2厅 东",
    area: "天河",
    detailplace: "珠江新城东",
    square: 126,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("19800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693952802aef57d29ddb955e"),
    title: "整租·广州足球公园 3室1厅 西",
    area: "番禺",
    detailplace: "钟村",
    square: 47,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efae4"),
    title: "整租·新世界逸彩庭园 2室1厅 东南",
    area: "荔湾",
    detailplace: "滘口",
    square: 64,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efae5"),
    title: "整租·自在城市花园一二期 3室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 91,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efae6"),
    title: "整租·东方文德森岛湖 3室2厅 南",
    area: "花都",
    detailplace: "花城街",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2380")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efae7"),
    title: "整租·敏捷科创中心 3室1厅 南",
    area: "白云",
    detailplace: "太和",
    square: 114,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efae8"),
    title: "整租·天平架公交宿舍 2室1厅 南",
    area: "天河",
    detailplace: "沙河",
    square: 43.89,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efae9"),
    title: "整租·顺德碧桂园芷兰湾 3室2厅 北",
    area: "番禺",
    detailplace: "顺德碧桂园",
    square: 94,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaea"),
    title: "整租·南沙云山诗意 3室1厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 114,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaeb"),
    title: "整租·华标荔苑 2室2厅 南",
    area: "从化",
    detailplace: "太平镇",
    square: 71,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaec"),
    title: "整租·岭南湾畔 3室2厅 东/东南",
    area: "荔湾",
    detailplace: "西村",
    square: 100,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaed"),
    title: "整租·时代维港 1室1厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 58,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaee"),
    title: "整租·亚运城媒体村(南区) 2室1厅 北/东北",
    area: "番禺",
    detailplace: "亚运城",
    square: 77.26,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaef"),
    title: "整租·碧桂园天玺湾 3室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 98,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf0"),
    title: "整租·中怡城市花园 2室1厅 西南",
    area: "天河",
    detailplace: "林和",
    square: 70,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf1"),
    title: "整租·雅居乐锦城花漾集 2室1厅 北",
    area: "花都",
    detailplace: "秀全街",
    square: 66,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf2"),
    title: "整租·金利大厦 3室2厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 123,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf3"),
    title: "整租·金地香山湖香榭院 3室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 100,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf4"),
    title: "整租·天立俊园 3室2厅 东北",
    area: "海珠",
    detailplace: "滨江东",
    square: 131,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf5"),
    title: "整租·敏捷华美国际 1室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2465")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf6"),
    title: "整租·富力泉天下 2室2厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 83,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf7"),
    title: "整租·成业小区 3室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 122,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf8"),
    title: "整租·大华东郡府 4室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 98,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaf9"),
    title: "整租·沙和路 1室1厅 南/北",
    area: "天河",
    detailplace: "沙河",
    square: 30,
    position: "南",
    roomtype: "1室1厅0卫",
    price: NumberInt("1650")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efafa"),
    title: "整租·多宝华厦 9室1厅 东/东南/南/西北",
    area: "荔湾",
    detailplace: "西关",
    square: 1200,
    position: "东",
    roomtype: "9室1厅9卫",
    price: NumberInt("180000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efafb"),
    title: "整租·广州碧桂园美苑 3室2厅 南",
    area: "番禺",
    detailplace: "南浦",
    square: 107,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efafc"),
    title: "整租·越秀东坡 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 93,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efafd"),
    title: "整租·中交汇通中心 2室1厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efafe"),
    title: "整租·中交汇通中心 2室1厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efaff"),
    title: "整租·越秀明珠天悦江湾 3室2厅 东",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb00"),
    title: "整租·荔富湖畔 2室1厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 77,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb01"),
    title: "整租·富力半岛 1室0厅 西南",
    area: "白云",
    detailplace: "罗冲围",
    square: 14,
    position: "西",
    roomtype: "1室0厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb02"),
    title: "整租·百事佳花园 5室2厅 西南",
    area: "番禺",
    detailplace: "南浦",
    square: 112,
    position: "西",
    roomtype: "5室2厅2卫",
    price: NumberInt("7500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb03"),
    title: "整租·中交蓝色海湾 4室2厅 东南/西北",
    area: "南沙",
    detailplace: "南沙港",
    square: 177,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb04"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 121,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb05"),
    title: "整租·敏捷尚品国际 4室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 80.88,
    position: "北",
    roomtype: "4室2厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb06"),
    title: "整租·广州敏捷绿湖首府 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 95,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb07"),
    title: "整租·灵山岛金茂湾二期 4室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 170,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb08"),
    title: "整租·珠实大院 3室2厅 南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 123,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb09"),
    title: "整租·碧桂园凤凰城凤馨苑 1室0厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb0a"),
    title: "整租·万科东荟城 1室0厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb0b"),
    title: "整租·逸泉韵翠花园 3室2厅 东南",
    area: "花都",
    detailplace: "北兴镇",
    square: 110,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb0c"),
    title: "整租·荔富湖畔 5室2厅 北",
    area: "增城",
    detailplace: "朱村",
    square: 99,
    position: "北",
    roomtype: "5室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb0d"),
    title: "整租·合生骏景广场 2室2厅 南",
    area: "天河",
    detailplace: "棠下",
    square: 107,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb0e"),
    title: "整租·汇景新城上城勋堡 3室2厅 北",
    area: "天河",
    detailplace: "汇景新城",
    square: 160.12,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb0f"),
    title: "整租·星河山海湾 4室2厅 西南/东北",
    area: "南沙",
    detailplace: "南沙港",
    square: 123,
    position: "西",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb10"),
    title: "合租·富和花园 4居室 东南卧",
    area: "白云",
    detailplace: "同和",
    square: 25,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb11"),
    title: "整租·珠江花园 3室2厅 南/西南",
    area: "番禺",
    detailplace: "厦滘",
    square: 101,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb12"),
    title: "整租·宜安小区 2室1厅 东北",
    area: "越秀",
    detailplace: "建设路",
    square: 57.19,
    position: "东",
    roomtype: "2室1厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb13"),
    title: "整租·番禺万达广场 1室1厅 北",
    area: "番禺",
    detailplace: "万博",
    square: 50,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb14"),
    title: "整租·茅岗新村 3室1厅 南",
    area: "黄埔",
    detailplace: "大沙地",
    square: 95,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb15"),
    title: "整租·莲港花园 3室2厅 南",
    area: "番禺",
    detailplace: "石楼",
    square: 84,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb16"),
    title: "整租·东方夏湾拿 3室2厅 南",
    area: "从化",
    detailplace: "太平镇",
    square: 148,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1880")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb17"),
    title: "整租·泓景花园 0室0厅 南",
    area: "海珠",
    detailplace: "赤岗",
    square: 12,
    position: "南",
    roomtype: null,
    price: NumberInt("1150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb18"),
    title: "整租·黄花新村 2室1厅 东南",
    area: "越秀",
    detailplace: "淘金",
    square: 65,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb19"),
    title: "整租·香江国际金融中心 2室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 39.6,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb1a"),
    title: "整租·力诚凯怡湾 1室1厅 西",
    area: "增城",
    detailplace: "新塘南",
    square: 39.21,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb1b"),
    title: "整租·方圆滨江壹号 3室2厅 西",
    area: "海珠",
    detailplace: "客村",
    square: 86,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("7800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb1c"),
    title: "整租·富力天海湾 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 96,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb1d"),
    title: "整租·方圆滨江壹号 2室2厅 东/北",
    area: "海珠",
    detailplace: "客村",
    square: 80,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("7800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb1e"),
    title: "整租·珠江国际城 3室2厅 北",
    area: "从化",
    detailplace: "神岗镇",
    square: 88,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb1f"),
    title: "整租·中海花湾壹号B区 1室1厅 南",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb20"),
    title: "整租·电视台大院 2室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 70,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb21"),
    title: "整租·实地常春藤 3室1厅 南",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 86,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb22"),
    title: "整租·金地香山湖香景花园 3室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 99.77,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1280")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb23"),
    title: "整租·新中路 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 87,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb24"),
    title: "整租·合景誉山国际三区 4室2厅 南/北",
    area: "增城",
    detailplace: "永宁",
    square: 170,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb25"),
    title: "整租·敏捷华美国际 2室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 54.36,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb26"),
    title: "整租·中达广场 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 63.5,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb27"),
    title: "合租·侨兴苑 4居室 南卧",
    area: "天河",
    detailplace: "石牌",
    square: 25,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb28"),
    title: "整租·金龙城财富广场 4室2厅 南",
    area: "番禺",
    detailplace: "亚运大道中",
    square: 70,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb29"),
    title: "整租·花都银丰大厦 1室1厅 西",
    area: "花都",
    detailplace: "旧区",
    square: 50,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb2a"),
    title: "整租·中铁诺德·阅泷 4室2厅 东/东南/南",
    area: "白云",
    detailplace: "江高镇",
    square: 105,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb2b"),
    title: "整租·昌乐园 1室1厅 南/北",
    area: "天河",
    detailplace: "员村",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb2c"),
    title: "整租·广州融创文旅城商务公寓 1室0厅 西南",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb2d"),
    title: "整租·昌岗东路 1室1厅 东南",
    area: "海珠",
    detailplace: "昌岗",
    square: 45,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb2e"),
    title: "整租·万科山景城 3室2厅 东南",
    area: "黄埔",
    detailplace: "长岭居",
    square: 92,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb2f"),
    title: "整租·保利翡翠山 2室2厅 LOFT 东",
    area: "花都",
    detailplace: "旧区",
    square: 48,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb30"),
    title: "合租·越秀国际总部广场 2居室 南卧",
    area: "南沙",
    detailplace: "金洲",
    square: 30,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb31"),
    title: "整租·碧桂园联合广场 1室1厅 南",
    area: "花都",
    detailplace: "狮岭镇",
    square: 56,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb32"),
    title: "整租·坚真花园 4室1厅 南",
    area: "海珠",
    detailplace: "赤岗",
    square: 142.41,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("6300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb33"),
    title: "整租·尚东阳光 3室2厅 南",
    area: "增城",
    detailplace: "沙村",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb34"),
    title: "整租·万科欧泊 1室0厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb35"),
    title: "整租·万科金色城品 2室1厅 东北",
    area: "番禺",
    detailplace: "沙湾",
    square: 70,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb36"),
    title: "整租·环市中路 1室0厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 25,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb37"),
    title: "整租·利都大厦 1室1厅 北",
    area: "白云",
    detailplace: "新市",
    square: 30,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb38"),
    title: "整租·清河东路 3室1厅 东",
    area: "番禺",
    detailplace: "番禺广场",
    square: 105,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb39"),
    title: "整租·广州渔人码头SOHO54公寓 1室1厅 南",
    area: "番禺",
    detailplace: "洛溪",
    square: 37,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb3a"),
    title: "整租·碧桂园豪进广场 2室2厅 南",
    area: "增城",
    detailplace: "白江",
    square: 81,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb3b"),
    title: "整租·海珠北路 1室0厅 南",
    area: "越秀",
    detailplace: "西门口",
    square: 28,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb3c"),
    title: "合租·六运小区 5居室 西南/西卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "西",
    roomtype: "5室0厅1卫",
    price: NumberInt("3480")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb3d"),
    title: "整租·萝岗万达广场 1室0厅 东",
    area: "黄埔",
    detailplace: "科学城",
    square: 48,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb3e"),
    title: "合租·壹诚大厦 2居室 东南卧",
    area: "荔湾",
    detailplace: "东塱",
    square: 28,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb3f"),
    title: "整租·海珠北路 1室0厅 东南",
    area: "越秀",
    detailplace: "西门口",
    square: 30,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb40"),
    title: "整租·富力千禧花园 2室1厅 南",
    area: "海珠",
    detailplace: "中大",
    square: 76,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb41"),
    title: "整租·会展世界城 3室1厅 南/北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 90,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb42"),
    title: "整租·中海联同福睿府 1室0厅 南",
    area: "海珠",
    detailplace: "宝岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb43"),
    title: "整租·保利心语 3室1厅 北",
    area: "天河",
    detailplace: "珠江新城中",
    square: 110,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("14000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb44"),
    title: "整租·隽峰苑 2室2厅 北",
    area: "天河",
    detailplace: "珠江新城中",
    square: 64,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb45"),
    title: "整租·庙前西街 3室2厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 200,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("9450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb46"),
    title: "整租·海怡居 1室1厅 东南",
    area: "天河",
    detailplace: "东圃",
    square: 45,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb47"),
    title: "整租·富力广场D区 1室0厅 东南",
    area: "荔湾",
    detailplace: "中山八",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb48"),
    title: "整租·公园前路 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 85,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb49"),
    title: "整租·耀胜新世界广场 5室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 114,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("9900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb4a"),
    title: "整租·康湖山庄 3室2厅 南",
    area: "天河",
    detailplace: "员村",
    square: 100,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb4b"),
    title: "整租·冼村三期回迁房 3室2厅 东",
    area: "天河",
    detailplace: "珠江新城中",
    square: 110,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("12300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb4c"),
    title: "整租·创基丽江国际 4室2厅 东南",
    area: "增城",
    detailplace: "增城区府",
    square: 147.08,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb4d"),
    title: "整租·消防局宿舍 3室1厅 南",
    area: "天河",
    detailplace: "五山",
    square: 80,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb4e"),
    title: "整租·黄华路 3室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 71,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb4f"),
    title: "整租·保利葛洲坝海德公馆 3室2厅 东南",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 125,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("6300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb50"),
    title: "整租·怡雅苑(海珠) 1室1厅 南",
    area: "海珠",
    detailplace: "宝岗",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb51"),
    title: "整租·邦华星际广场二期 3室1厅 北",
    area: "荔湾",
    detailplace: "龙溪",
    square: 54,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("3060")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb52"),
    title: "整租·雪域澜庭A2区 3室1厅 南",
    area: "花都",
    detailplace: "花城街",
    square: 98,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb53"),
    title: "整租·明月一路 3室1厅 东南",
    area: "越秀",
    detailplace: "五羊新城",
    square: 120,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("6300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb54"),
    title: "整租·锦绣银湾 3室2厅 东南",
    area: "番禺",
    detailplace: "大石",
    square: 138,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb55"),
    title: "整租·龙津西路 1室1厅 南",
    area: "荔湾",
    detailplace: "西关",
    square: 40.09,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1680")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb56"),
    title: "整租·敏捷海大大厦 2室1厅 复式 南/北",
    area: "番禺",
    detailplace: "万博",
    square: 65,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb57"),
    title: "整租·颐和山庄 0室0厅 西南",
    area: "白云",
    detailplace: "南湖",
    square: 11.17,
    position: "西",
    roomtype: null,
    price: NumberInt("700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb58"),
    title: "整租·嘉裕中心 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 69,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb59"),
    title: "整租·星汇湾花园 2室1厅 东北",
    area: "海珠",
    detailplace: "工业大道中",
    square: 52,
    position: "东",
    roomtype: "2室1厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb5a"),
    title: "整租·敏捷绿湖首府二期 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 109.79,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb5b"),
    title: "整租·邮通小区 3室2厅 南",
    area: "天河",
    detailplace: "华景新城",
    square: 110,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb5c"),
    title: "整租·广州星河湾星苑 4室2厅 南/北",
    area: "番禺",
    detailplace: "星河湾",
    square: 193,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb5d"),
    title: "整租·广州足球公园 2室1厅 南",
    area: "番禺",
    detailplace: "钟村",
    square: 67,
    position: "南",
    roomtype: "2室1厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb5e"),
    title: "整租·保利拾光年 4室2厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 99.41,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb5f"),
    title: "整租·奥园越时代 1室1厅 东南",
    area: "番禺",
    detailplace: "广州南站",
    square: 60,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb60"),
    title: "整租·粤海广场 2室2厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 105,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb61"),
    title: "整租·正佳万豪金殿 1室1厅 南",
    area: "天河",
    detailplace: "天河南",
    square: 71,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("7200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693957a027ff25f8144efb62"),
    title: "整租·万科东荟城 1室0厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 40,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8434"),
    title: "整租·领南星河荣誉 5室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 128,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8435"),
    title: "整租·东海花园 3室2厅 南",
    area: "番禺",
    detailplace: "厦滘",
    square: 92.1,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8436"),
    title: "整租·奥园城市天地 1室0厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8437"),
    title: "整租·天銮 5室2厅 东南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 265,
    position: "东",
    roomtype: "5室2厅4卫",
    price: NumberInt("53000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8438"),
    title: "整租·嘉仕花园东区 3室2厅 南/东北",
    area: "海珠",
    detailplace: "滨江东",
    square: 125.6,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8439"),
    title: "整租·逢源路 3室1厅 南/北",
    area: "荔湾",
    detailplace: "龙津",
    square: 45,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd843a"),
    title: "整租·江南西路 2室1厅 东南",
    area: "海珠",
    detailplace: "江南西",
    square: 70,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd843b"),
    title: "整租·珠江大家庭花园 3室2厅 南",
    area: "海珠",
    detailplace: "琶洲中",
    square: 71,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd843c"),
    title: "整租·广东省输变电工程公司上村小区 2室2厅 南/北",
    area: "荔湾",
    detailplace: "南岸路",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd843d"),
    title: "整租·南华中路 3室1厅 南",
    area: "海珠",
    detailplace: "滨江西",
    square: 45,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd843e"),
    title: "整租·广东商业大厦 1室1厅 东南",
    area: "越秀",
    detailplace: "东山口",
    square: 54,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd843f"),
    title: "整租·广弘天琪 1室0厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8440"),
    title: "整租·中交蓝色海湾 3室2厅 西南",
    area: "南沙",
    detailplace: "南沙港",
    square: 96,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8441"),
    title: "整租·龙光玖誉府 3室2厅 东北",
    area: "白云",
    detailplace: "江高镇",
    square: 83,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8442"),
    title: "整租·星河湾半岛三号园 4室2厅 南/北",
    area: "番禺",
    detailplace: "厦滘",
    square: 313,
    position: "南",
    roomtype: "4室2厅5卫",
    price: NumberInt("33000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8443"),
    title: "整租·奥园城市天地 1室0厅 东",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8444"),
    title: "整租·保利平方花园 4室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 104,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8445"),
    title: "整租·广州雅居乐花园新地沁园 1室0厅 东南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8446"),
    title: "整租·富力阳光美居 2室1厅 东",
    area: "白云",
    detailplace: "马务",
    square: 71,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8447"),
    title: "整租·盈港国际 1室1厅 东南",
    area: "南沙",
    detailplace: "进港大道",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8448"),
    title: "整租·水荫横路 1室1厅 东南",
    area: "天河",
    detailplace: "水荫",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8449"),
    title: "整租·农林小区 2室1厅 南",
    area: "天河",
    detailplace: "粤垦",
    square: 86,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd844a"),
    title: "整租·恒大绿洲花园 3室1厅 东南",
    area: "白云",
    detailplace: "金沙洲",
    square: 269,
    position: "东",
    roomtype: "3室1厅3卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd844b"),
    title: "整租·奥园香雪华府 3室2厅 北",
    area: "黄埔",
    detailplace: "香雪",
    square: 96,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd844c"),
    title: "整租·香缤豪庭 4室2厅 南",
    area: "番禺",
    detailplace: "沙湾",
    square: 85,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd844d"),
    title: "整租·金山谷二期 4室2厅 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 254.56,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd844e"),
    title: "整租·黄沙大道 1室2厅 西南",
    area: "荔湾",
    detailplace: "黄沙",
    square: 41,
    position: "西",
    roomtype: "1室2厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd844f"),
    title: "整租·耀华社区存善西街 2室1厅 东",
    area: "荔湾",
    detailplace: "西关",
    square: 80,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8450"),
    title: "整租·粮所小区 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 120,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8451"),
    title: "整租·萝岗奥园广场 2室1厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 52,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8452"),
    title: "整租·时代南湾 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 93,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8453"),
    title: "整租·绿地空港国际中心 2室1厅 东",
    area: "花都",
    detailplace: "镜湖大道",
    square: 39,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8454"),
    title: "整租·合生广场 1室0厅 南",
    area: "海珠",
    detailplace: "广州大道南",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8455"),
    title: "整租·佰利山 1室0厅 东",
    area: "番禺",
    detailplace: "雅居乐",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8456"),
    title: "整租·碧桂园凤凰城凤岭苑 3室2厅 错层 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 142.96,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8457"),
    title: "整租·康大龙祥汇 4室2厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 125,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8458"),
    title: "整租·万科幸福荟 4室2厅 复式 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 80.55,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8459"),
    title: "整租·佳兆业城市广场 5室2厅 复式 南/西南",
    area: "黄埔",
    detailplace: "南岗",
    square: 135,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd845a"),
    title: "整租·康隆苑 3室1厅 东/东南",
    area: "海珠",
    detailplace: "宝岗",
    square: 67,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd845b"),
    title: "整租·锦绣香江花园山水华府 3室1厅 东南/南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 91,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd845c"),
    title: "整租·南沙保利南怡湾 3室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 100,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd845d"),
    title: "整租·广地花园 4室2厅 复式 南/北",
    area: "番禺",
    detailplace: "星河湾",
    square: 135.45,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd845e"),
    title: "整租·漾晴居 3室2厅 东北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 97,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("7500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd845f"),
    title: "整租·珠光新城御景二期 4室2厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 154.26,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8460"),
    title: "整租·金地香山湖香汇花园 4室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 127,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8461"),
    title: "整租·淘金北路 3室1厅 南/北",
    area: "越秀",
    detailplace: "淘金",
    square: 80,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8462"),
    title: "整租·中交汇通中心 2室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 51,
    position: "南",
    roomtype: "2室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8463"),
    title: "整租·福金莲花园 3室1厅 南",
    area: "天河",
    detailplace: "员村",
    square: 98,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8464"),
    title: "整租·宝翠园 3室1厅 东北",
    area: "天河",
    detailplace: "龙洞",
    square: 97,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8465"),
    title: "整租·名雅苑 3室2厅 东南",
    area: "天河",
    detailplace: "体育中心",
    square: 137.6,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("7999")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8466"),
    title: "整租·黄埔万科中心 3室2厅 南/北",
    area: "黄埔",
    detailplace: "文冲",
    square: 185,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8467"),
    title: "整租·赤岗路91-93号 3室2厅 南",
    area: "海珠",
    detailplace: "赤岗",
    square: 83,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8468"),
    title: "整租·高教花园 4室2厅 南",
    area: "海珠",
    detailplace: "琶洲西",
    square: 120,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("6600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8469"),
    title: "整租·杏坛小区 3室2厅 南",
    area: "海珠",
    detailplace: "宝岗",
    square: 96,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd846a"),
    title: "整租·兰亭盛荟 3室2厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 100.4,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd846b"),
    title: "整租·合一国际 2室1厅 东北",
    area: "白云",
    detailplace: "同和",
    square: 71,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd846c"),
    title: "整租·富力伯爵山 3室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 131.74,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd846d"),
    title: "整租·碧桂园琥珀湾 3室2厅 南/北",
    area: "增城",
    detailplace: "石滩镇",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd846e"),
    title: "整租·祈福新村月明轩 2室2厅 南/北",
    area: "番禺",
    detailplace: "祈福新村",
    square: 78,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd846f"),
    title: "整租·奥园中新誉府 3室2厅 北",
    area: "增城",
    detailplace: "中新镇",
    square: 76,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8470"),
    title: "整租·顺欣花园 3室2厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 110,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8471"),
    title: "整租·中环华庭 4室2厅 南",
    area: "南沙",
    detailplace: "横沥",
    square: 170,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8472"),
    title: "整租·湾区·金融城 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 89.66,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8473"),
    title: "整租·世茂天越 3室2厅 南",
    area: "越秀",
    detailplace: "五羊新城",
    square: 160.57,
    position: "南",
    roomtype: "3室2厅3卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8474"),
    title: "整租·文昌花园 2室1厅 东",
    area: "荔湾",
    detailplace: "西关",
    square: 37,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8475"),
    title: "整租·岭南新世界 1室0厅 东",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8476"),
    title: "整租·矿泉北街5号大院 3室1厅 东南",
    area: "白云",
    detailplace: "机场路",
    square: 69,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8477"),
    title: "整租·敏捷富瑞公馆 2室2厅 南",
    area: "番禺",
    detailplace: "桥南",
    square: 82,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2780")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8478"),
    title: "整租·文昌南路 3室1厅 东南",
    area: "荔湾",
    detailplace: "西关",
    square: 100,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("7800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8479"),
    title: "整租·南兴花园(天河区) 3室1厅 东/东南/南",
    area: "天河",
    detailplace: "天河客运站",
    square: 99,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd847a"),
    title: "整租·白云山制药厂前山宿舍 3室2厅 东南",
    area: "白云",
    detailplace: "同和",
    square: 87,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd847b"),
    title: "整租·溪悦西花园 4室2厅 南",
    area: "花都",
    detailplace: "花东镇",
    square: 110,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd847c"),
    title: "整租·电子七所大院 2室1厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 68.57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd847d"),
    title: "整租·沙太北路 3室1厅 东南",
    area: "白云",
    detailplace: "沙太北",
    square: 60,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd847e"),
    title: "整租·南沙万达广场 1室0厅 东南",
    area: "南沙",
    detailplace: "金洲",
    square: 39,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1725")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd847f"),
    title: "整租·南沙万达广场 2室2厅 东南",
    area: "南沙",
    detailplace: "金洲",
    square: 39,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("2534")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8480"),
    title: "整租·越秀滨海珺城 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 154.3,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8481"),
    title: "整租·英豪花园 1室1厅 南",
    area: "海珠",
    detailplace: "东晓南",
    square: 68,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8482"),
    title: "整租·城市家园一期 4室2厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 163,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8483"),
    title: "整租·南国花园 3室2厅 东",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("7300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8484"),
    title: "整租·珠江国际城 3室2厅 西南",
    area: "从化",
    detailplace: "神岗镇",
    square: 142,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1710")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8485"),
    title: "整租·金地荔湖城水立坊 3室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 149,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1580")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8486"),
    title: "整租·保利南沙天汇 3室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 94,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8487"),
    title: "整租·星汇云锦 1室1厅 西南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 15,
    position: "西",
    roomtype: "1室1厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8488"),
    title: "整租·邦泰公馆 1室0厅 南",
    area: "海珠",
    detailplace: "琶洲西",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8489"),
    title: "整租·广氮新村 1室1厅 南",
    area: "天河",
    detailplace: "车陂",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd848a"),
    title: "整租·天一新村 3室2厅 北",
    area: "天河",
    detailplace: "粤垦",
    square: 83,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd848b"),
    title: "整租·星汇湾花园 1室0厅 东北",
    area: "海珠",
    detailplace: "工业大道中",
    square: 33,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd848c"),
    title: "整租·佳润临江上品 1室1厅 南/北",
    area: "天河",
    detailplace: "员村",
    square: 12,
    position: "南",
    roomtype: "1室1厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd848d"),
    title: "整租·南华西路 2室1厅 东",
    area: "海珠",
    detailplace: "滨江西",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd848e"),
    title: "整租·保利海珠天珺 4室2厅 南",
    area: "海珠",
    detailplace: "黄埔村",
    square: 141,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd848f"),
    title: "整租·南沙金茂湾 1室1厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 50,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8490"),
    title: "整租·敏捷科创中心 2室1厅 北",
    area: "白云",
    detailplace: "太和",
    square: 46.17,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8491"),
    title: "整租·广州敏捷绿湖首府 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 85,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8492"),
    title: "整租·怡苑 3室2厅 南/北",
    area: "天河",
    detailplace: "体育中心",
    square: 250,
    position: "南",
    roomtype: "3室2厅3卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8493"),
    title: "整租·碧桂园星荟 4室2厅 南",
    area: "番禺",
    detailplace: "国际创新城",
    square: 72,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8494"),
    title: "整租·员村四横路5号大院 1室0厅 南",
    area: "天河",
    detailplace: "员村",
    square: 25,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8495"),
    title: "整租·财智大厦 1室1厅 东南",
    area: "海珠",
    detailplace: "新港西",
    square: 75,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8496"),
    title: "整租·世港花园 1室1厅 南",
    area: "海珠",
    detailplace: "琶洲西",
    square: 47,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3640")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8497"),
    title: "整租·协和新世界 2室2厅 南",
    area: "天河",
    detailplace: "天润路",
    square: 78,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("5200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8498"),
    title: "整租·珠江帝景苑 5室2厅 南",
    area: "海珠",
    detailplace: "广州塔",
    square: 250.74,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd8499"),
    title: "整租·万科幸福誉 3室2厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 96.58,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd849a"),
    title: "整租·一德花园 1室1厅 北",
    area: "越秀",
    detailplace: "海珠广场",
    square: 39.83,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd849b"),
    title: "整租·南沙翡翠公馆 2室1厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 58,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd849c"),
    title: "整租·云珠花园 1室0厅 南",
    area: "花都",
    detailplace: "新区",
    square: 13,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd849d"),
    title: "整租·工业大道北 2室1厅 东南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd849e"),
    title: "整租·碧桂园荔山雅筑 3室1厅 东北",
    area: "从化",
    detailplace: "赤草",
    square: 101,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd849f"),
    title: "整租·保利越鸿都会广场 2室2厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 64.16,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a0"),
    title: "整租·南沙碧桂园 4室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 200,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a1"),
    title: "整租·南田路 1室1厅 东",
    area: "海珠",
    detailplace: "同福",
    square: 30,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("1580")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a2"),
    title: "整租·保利大都汇 2室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 69,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3945")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a3"),
    title: "整租·西关海 0室1厅 南",
    area: "荔湾",
    detailplace: "南岸路",
    square: 12.48,
    position: "南",
    roomtype: null,
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a4"),
    title: "整租·祈福万景峰 2室2厅 北",
    area: "花都",
    detailplace: "铁路西",
    square: 77,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a5"),
    title: "整租·东方新世界熹园 4室2厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 194,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("22000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a6"),
    title: "整租·港湾四村 1室1厅 南/北",
    area: "黄埔",
    detailplace: "鱼珠",
    square: 50,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a7"),
    title: "整租·叠溪花园 3室2厅 北",
    area: "增城",
    detailplace: "朱村",
    square: 85,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a8"),
    title: "整租·革新路 1室0厅 东",
    area: "海珠",
    detailplace: "工业大道北",
    square: 35,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84a9"),
    title: "整租·平安大厦 1室0厅 东",
    area: "天河",
    detailplace: "体育中心",
    square: 10,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693959fa3e64b04076cd84aa"),
    title: "整租·越秀明珠天悦江湾 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 98,
    position: "南",
    roomtype: "3室2厅3卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf84"),
    title: "合租·嘉仕花园东区 4居室 北卧",
    area: "海珠",
    detailplace: "滨江东",
    square: 20.57,
    position: "北",
    roomtype: "4室1厅3卫",
    price: NumberInt("2236")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf85"),
    title: "合租·东漖新村 4居室 南卧",
    area: "荔湾",
    detailplace: "坑口",
    square: 6.8,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1186")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf86"),
    title: "整租·依山小筑 2室1厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 70.37,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf87"),
    title: "合租·四季花园 4居室 南卧",
    area: "荔湾",
    detailplace: "坑口",
    square: 13.23,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1501")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf88"),
    title: "合租·南洲名苑 5居室 南卧",
    area: "海珠",
    detailplace: "东晓南",
    square: 9.3,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("1354")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf89"),
    title: "合租·雅郡花园 4居室 南卧",
    area: "海珠",
    detailplace: "琶洲东",
    square: 8.28,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1879")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf8a"),
    title: "合租·金融街融穗华府 4居室 西卧",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 5.2,
    position: "西",
    roomtype: "4室1厅1卫",
    price: NumberInt("1113")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf8b"),
    title: "整租·珠光金融城壹号 1室1厅 东南",
    area: "天河",
    detailplace: "东圃",
    square: 56,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf8c"),
    title: "整租·四海城 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 51,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf8d"),
    title: "合租·鸿运花园 4居室 北卧",
    area: "海珠",
    detailplace: "客村",
    square: 10.38,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2614")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf8e"),
    title: "整租·风神花园 4室2厅 南/北",
    area: "花都",
    detailplace: "铁路西",
    square: 163.55,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf8f"),
    title: "整租·保利东江首府 3室2厅 南",
    area: "增城",
    detailplace: "新塘南",
    square: 126,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf90"),
    title: "整租·敏捷绿湖首府一期 2室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf91"),
    title: "合租·华南新城北区 4居室 南卧",
    area: "番禺",
    detailplace: "华南新城",
    square: 8,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1186")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf92"),
    title: "整租·名门国际 1室1厅 北",
    area: "花都",
    detailplace: "新区",
    square: 83,
    position: "北",
    roomtype: "1室1厅0卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf93"),
    title: "合租·五羊小区 3居室 南卧",
    area: "越秀",
    detailplace: "五羊新城",
    square: 9.6,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1743")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf94"),
    title: "整租·锦绣银湾 3室2厅 北",
    area: "番禺",
    detailplace: "大石",
    square: 123,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf95"),
    title: "合租·珠江帝景苑 7居室 东南卧",
    area: "海珠",
    detailplace: "广州塔",
    square: 18,
    position: "东",
    roomtype: "7室2厅2卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf96"),
    title: "整租·星汇云锦 1室0厅 东南/南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("875")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf97"),
    title: "合租·南国奥园 4居室 西南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 10.9,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1354")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf98"),
    title: "整租·东兴楼 3室2厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 120,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf99"),
    title: "整租·怡龙苑 3室1厅 西南",
    area: "海珠",
    detailplace: "宝岗",
    square: 67,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf9a"),
    title: "整租·番禺万达广场 1室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 66,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf9b"),
    title: "整租·星汇国际大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 45,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf9c"),
    title: "整租·天明苑 2室1厅 南/北",
    area: "天河",
    detailplace: "天河公园",
    square: 80,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf9d"),
    title: "整租·星御翠园 2室1厅 北",
    area: "海珠",
    detailplace: "广州大道南",
    square: 53,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf9e"),
    title: "整租·番禺万达广场 3室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 228,
    position: "东",
    roomtype: "3室1厅0卫",
    price: NumberInt("15000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadf9f"),
    title: "整租·岭南新世界映悦园 2室2厅 南",
    area: "白云",
    detailplace: "永泰",
    square: 74,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa0"),
    title: "整租·粤信广场 3室1厅 东",
    area: "海珠",
    detailplace: "赤岗",
    square: 83,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa1"),
    title: "合租·东平苑 5居室 南卧",
    area: "番禺",
    detailplace: "东怡新区",
    square: 12.6,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("976")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa2"),
    title: "整租·星汇文华 3室2厅 东南",
    area: "番禺",
    detailplace: "大学城",
    square: 135,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa3"),
    title: "整租·港航华庭 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 103,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa4"),
    title: "整租·雅居乐花园时光九篇 4室2厅 南/北",
    area: "番禺",
    detailplace: "雅居乐",
    square: 156,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa5"),
    title: "整租·东华西路 1室0厅 北",
    area: "越秀",
    detailplace: "东川路",
    square: 40,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("6200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa6"),
    title: "合租·金龙城财富广场 3居室 北卧",
    area: "番禺",
    detailplace: "亚运大道中",
    square: 30,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1280")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa7"),
    title: "合租·广州奥林匹克花园 4居室 西南卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 30,
    position: "西",
    roomtype: "4室0厅0卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa8"),
    title: "整租·越秀保利爱特城 4室2厅 南/北",
    area: "黄埔",
    detailplace: "香雪",
    square: 115,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfa9"),
    title: "整租·中交国际邮轮广场 1室1厅 西",
    area: "南沙",
    detailplace: "南沙港",
    square: 108.16,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfaa"),
    title: "整租·中交国际邮轮广场 1室1厅 西/西北",
    area: "南沙",
    detailplace: "南沙港",
    square: 138.41,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfab"),
    title: "整租·粤海广场 3室2厅 东/东南",
    area: "番禺",
    detailplace: "万博",
    square: 90,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("7900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfac"),
    title: "整租·林和邨 2室1厅 东南",
    area: "天河",
    detailplace: "林和",
    square: 75,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfad"),
    title: "整租·元邦明月星辉 1室0厅 东",
    area: "荔湾",
    detailplace: "龙津",
    square: 15,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfae"),
    title: "整租·珠江华景里 3室2厅 南/北",
    area: "天河",
    detailplace: "华景新城",
    square: 104,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfaf"),
    title: "整租·穗乐花园 3室2厅 南/北",
    area: "天河",
    detailplace: "员村",
    square: 75,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb0"),
    title: "整租·石牌东路 2室2厅 东南",
    area: "天河",
    detailplace: "石牌",
    square: 66,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb1"),
    title: "整租·碧桂园朝花 1室1厅 东南",
    area: "荔湾",
    detailplace: "鹤洞",
    square: 33,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb2"),
    title: "整租·中交蓝色海湾 4室2厅 东北",
    area: "南沙",
    detailplace: "南沙港",
    square: 143,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb3"),
    title: "整租·邮电新村华乐路 1室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb4"),
    title: "整租·保利堂悦 4室2厅 东北",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 178,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb5"),
    title: "整租·佳润云凯雅寓 2室1厅 南",
    area: "白云",
    detailplace: "同和",
    square: 55,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb6"),
    title: "整租·越秀滨海隽城 3室2厅 东南",
    area: "南沙",
    detailplace: "金洲",
    square: 124,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb7"),
    title: "整租·天河直街小区 3室1厅 北",
    area: "天河",
    detailplace: "体育中心",
    square: 87.43,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb8"),
    title: "整租·先烈中路 3室2厅 东南",
    area: "越秀",
    detailplace: "黄花岗",
    square: 95,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfb9"),
    title: "整租·誉峰 4室2厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 236,
    position: "西",
    roomtype: "4室2厅3卫",
    price: NumberInt("33000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfba"),
    title: "整租·柳岸晓风 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 125,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfbb"),
    title: "整租·叠翠峰 3室2厅 南",
    area: "南沙",
    detailplace: "南沙区府",
    square: 97,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfbc"),
    title: "整租·湾区·金融城 3室2厅 东南/南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 101,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfbd"),
    title: "整租·广弘天琪 1室0厅 东",
    area: "天河",
    detailplace: "珠江新城西",
    square: 41,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfbe"),
    title: "整租·万科云城米酷 1室1厅 西",
    area: "天河",
    detailplace: "智慧城",
    square: 25,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfbf"),
    title: "整租·南沙碧桂园 7室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 448,
    position: "南",
    roomtype: "7室2厅3卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc0"),
    title: "合租·万科尚城御府 2居室 南卧",
    area: "黄埔",
    detailplace: "南岗",
    square: 30,
    position: "南",
    roomtype: "2室0厅2卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc1"),
    title: "整租·优山悦海 2室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 68,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc2"),
    title: "合租·万科尚城御府 2居室 北卧",
    area: "黄埔",
    detailplace: "南岗",
    square: 30,
    position: "北",
    roomtype: "2室0厅2卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc3"),
    title: "整租·粤海壹桂府 2室2厅 南",
    area: "越秀",
    detailplace: "海珠广场",
    square: 91,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("11500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc4"),
    title: "整租·西华路 1室0厅 南",
    area: "荔湾",
    detailplace: "西华路",
    square: 43,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc5"),
    title: "整租·碧桂园御湖城二期 3室2厅 南",
    area: "从化",
    detailplace: "江埔街",
    square: 90,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc6"),
    title: "整租·联投·文津府 4室2厅 西南",
    area: "天河",
    detailplace: "黄村",
    square: 136.43,
    position: "西",
    roomtype: "4室2厅2卫",
    price: NumberInt("15000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc7"),
    title: "整租·锦绣新天地 3室1厅 东",
    area: "增城",
    detailplace: "新塘南",
    square: 124,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc8"),
    title: "整租·盈港国际 1室1厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 223.91,
    position: "南",
    roomtype: "1室1厅0卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfc9"),
    title: "整租·招商金山谷MINI-TOP 1室1厅 西北",
    area: "番禺",
    detailplace: "金山谷",
    square: 30,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfca"),
    title: "整租·越秀滨海新城 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 98,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfcb"),
    title: "整租·奥园养生广场 1室1厅 南",
    area: "番禺",
    detailplace: "桥南",
    square: 57.77,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfcc"),
    title: "整租·荔嘉公馆 1室1厅 北",
    area: "番禺",
    detailplace: "桥南",
    square: 32,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfcd"),
    title: "整租·前进路(海珠) 1室1厅 东南",
    area: "海珠",
    detailplace: "前进路",
    square: 25,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfce"),
    title: "整租·信业悦都荟 2室2厅 南",
    area: "番禺",
    detailplace: "市桥北",
    square: 49,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfcf"),
    title: "整租·富力千禧花园 3室2厅 南",
    area: "海珠",
    detailplace: "中大",
    square: 60,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd0"),
    title: "整租·嘉都汇 2室2厅 南",
    area: "花都",
    detailplace: "镜湖大道",
    square: 89,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd1"),
    title: "整租·佳兆业城市广场 2室2厅 南",
    area: "黄埔",
    detailplace: "南岗",
    square: 52,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd2"),
    title: "整租·荔湾路 1室0厅 南",
    area: "荔湾",
    detailplace: "陈家祠",
    square: 22,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd3"),
    title: "整租·翡翠绿洲森林半岛 3室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 98,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd4"),
    title: "整租·磨碟沙花苑 3室1厅 南",
    area: "海珠",
    detailplace: "琶洲西",
    square: 90,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd5"),
    title: "整租·汇侨新城南区 2室2厅 东",
    area: "白云",
    detailplace: "新市",
    square: 112,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd6"),
    title: "整租·光华大厦 2室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 83,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd7"),
    title: "整租·凯德山海连城二期 4室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 131.7,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd8"),
    title: "整租·三元里大道 1室0厅 南",
    area: "越秀",
    detailplace: "三元里",
    square: 40,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfd9"),
    title: "整租·光华大厦 2室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 83.1,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfda"),
    title: "合租·美的江上沄启 2居室 西北卧",
    area: "南沙",
    detailplace: "明珠湾",
    square: 18,
    position: "西",
    roomtype: "2室0厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfdb"),
    title: "整租·怡安花园 1室1厅 北",
    area: "海珠",
    detailplace: "滨江中",
    square: 43,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfdc"),
    title: "整租·金穗雅园 1室1厅 北",
    area: "海珠",
    detailplace: "广州大道南",
    square: 42.2,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfdd"),
    title: "整租·方圆滨江壹号 1室1厅 北",
    area: "海珠",
    detailplace: "客村",
    square: 46.43,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfde"),
    title: "整租·保利中环广场 2室1厅 东南",
    area: "越秀",
    detailplace: "建设路",
    square: 94,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfdf"),
    title: "整租·奥园城市天地 1室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe0"),
    title: "整租·亚太新城富丽园 3室2厅 北",
    area: "增城",
    detailplace: "新塘北",
    square: 132,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe1"),
    title: "整租·林和邨 2室1厅 北",
    area: "天河",
    detailplace: "林和",
    square: 75,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe2"),
    title: "整租·保利紫云 4室2厅 复式 南",
    area: "白云",
    detailplace: "新市",
    square: 103,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe3"),
    title: "整租·先烈东横路 1室0厅 南",
    area: "天河",
    detailplace: "沙河",
    square: 30,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe4"),
    title: "整租·展创商务中心 1室0厅 南/北",
    area: "番禺",
    detailplace: "广州南站",
    square: 31,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe5"),
    title: "整租·中建玖玥湾 3室1厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 100,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe6"),
    title: "整租·碧桂园豪进左岸 4室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 142,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe7"),
    title: "整租·六运小区 3室1厅 东/南/西",
    area: "天河",
    detailplace: "天河南",
    square: 98,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("15000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe8"),
    title: "整租·棠德花苑 2室1厅 东南",
    area: "天河",
    detailplace: "棠下",
    square: 66,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfe9"),
    title: "整租·湾区·金融城 3室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 101,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfea"),
    title: "整租·六运小区 1室0厅 东南/北",
    area: "天河",
    detailplace: "天河南",
    square: 68,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfeb"),
    title: "整租·天力居 1室1厅 北",
    area: "天河",
    detailplace: "东圃",
    square: 43.83,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfec"),
    title: "整租·东华西路 3室1厅 西南",
    area: "越秀",
    detailplace: "东川路",
    square: 70,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfed"),
    title: "整租·百信广场 1室1厅 北",
    area: "白云",
    detailplace: "新市",
    square: 82,
    position: "北",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfee"),
    title: "整租·珠江天郦 4室1厅 南",
    area: "天河",
    detailplace: "棠下",
    square: 142,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("14000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfef"),
    title: "整租·白马花园 1室1厅 南",
    area: "天河",
    detailplace: "员村",
    square: 35,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff0"),
    title: "整租·应元路 2室1厅 西南",
    area: "越秀",
    detailplace: "小北",
    square: 45,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff1"),
    title: "整租·珠江天郦 4室1厅 东南",
    area: "天河",
    detailplace: "棠下",
    square: 140,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("14000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff2"),
    title: "整租·富力金港城南区 2室2厅 南",
    area: "花都",
    detailplace: "花东镇",
    square: 83,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff3"),
    title: "整租·清水濠小区 2室1厅 东",
    area: "越秀",
    detailplace: "越秀南",
    square: 50,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff4"),
    title: "整租·六运小区 3室1厅 复式 南/北",
    area: "天河",
    detailplace: "天河南",
    square: 87.3,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff5"),
    title: "整租·逢源路 2室1厅 南",
    area: "荔湾",
    detailplace: "龙津",
    square: 35.52,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff6"),
    title: "整租·耀华社区耀华西街 2室1厅 东/东南",
    area: "荔湾",
    detailplace: "西关",
    square: 56.17,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff7"),
    title: "整租·保利罗兰国际 4室2厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 126,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff8"),
    title: "整租·景新国际名城 3室2厅 北",
    area: "增城",
    detailplace: "中新镇",
    square: 90.7,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadff9"),
    title: "整租·东凌广场 1室1厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 60.17,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadffa"),
    title: "整租·金地香山湖香景花园 3室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 100,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadffb"),
    title: "整租·燕子岗南路 2室1厅 东南",
    area: "海珠",
    detailplace: "江燕路",
    square: 49,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadffc"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadffd"),
    title: "整租·海印南苑 3室1厅 北",
    area: "海珠",
    detailplace: "东晓路",
    square: 117,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadffe"),
    title: "整租·香江国际金融中心 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 40.12,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eadfff"),
    title: "整租·金地天河公馆 3室1厅 东北",
    area: "天河",
    detailplace: "黄村",
    square: 89,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae000"),
    title: "整租·龙怡苑 2室2厅 南/北",
    area: "天河",
    detailplace: "东圃",
    square: 70,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae001"),
    title: "整租·凯德天河新作新园 3室2厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 130,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("13500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae002"),
    title: "整租·富力盈盛广场 2室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 115,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae003"),
    title: "整租·江南西路 1室1厅 南",
    area: "海珠",
    detailplace: "江南西",
    square: 60,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae004"),
    title: "整租·光华大厦 2室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 83,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae005"),
    title: "整租·丽景湾 3室2厅 南",
    area: "海珠",
    detailplace: "滨江东",
    square: 108,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("6200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae006"),
    title: "合租·嘉怡苑 4居室 东卧",
    area: "天河",
    detailplace: "林和",
    square: 30,
    position: "东",
    roomtype: "4室0厅1卫",
    price: NumberInt("1680")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae007"),
    title: "整租·富力天朗明居 1室1厅 南",
    area: "天河",
    detailplace: "棠下",
    square: 44,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae008"),
    title: "整租·骏汇大厦 2室1厅 南",
    area: "天河",
    detailplace: "天河南",
    square: 84.91,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae009"),
    title: "整租·越秀保利爱特城 4室2厅 复式 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 108,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae00a"),
    title: "合租·美的江上沄启 2居室 西北卧",
    area: "南沙",
    detailplace: "明珠湾",
    square: 18,
    position: "西",
    roomtype: "2室0厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395cd5100ebff313eae00b"),
    title: "整租·时代廊桥(增城) 3室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814784"),
    title: "整租·保利天汇五期 4室2厅 南",
    area: "天河",
    detailplace: "黄村",
    square: 127,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814785"),
    title: "整租·星河·湾区壹号 4室2厅 东南",
    area: "南沙",
    detailplace: "金洲",
    square: 61,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814786"),
    title: "整租·保利天悦公寓 1室1厅 南",
    area: "海珠",
    detailplace: "琶洲东",
    square: 38,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814787"),
    title: "整租·西关海 3室2厅 东北",
    area: "荔湾",
    detailplace: "南岸路",
    square: 128.22,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814788"),
    title: "整租·南沙万达广场 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 52,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814789"),
    title: "整租·金地荔湖城水立坊 5室2厅 东南",
    area: "增城",
    detailplace: "永宁",
    square: 226,
    position: "东",
    roomtype: "5室2厅4卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781478a"),
    title: "整租·同福东路 1室0厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 22,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781478b"),
    title: "整租·珠江帝景苑 4室2厅 北",
    area: "海珠",
    detailplace: "广州塔",
    square: 154,
    position: "北",
    roomtype: "4室2厅2卫",
    price: NumberInt("15000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781478c"),
    title: "整租·淘金路 3室2厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 100,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781478d"),
    title: "整租·保利中航城花园一期 3室2厅 复式 南",
    area: "增城",
    detailplace: "朱村",
    square: 95,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781478e"),
    title: "整租·越秀东坡 5室2厅 复式 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 108,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781478f"),
    title: "整租·富门花园 5室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 157,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814790"),
    title: "整租·越秀万力·星悦峯 4室2厅 南",
    area: "黄埔",
    detailplace: "夏园",
    square: 64,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814791"),
    title: "整租·海力公寓 15室0厅 南/北",
    area: "南沙",
    detailplace: "进港大道",
    square: 962.56,
    position: "南",
    roomtype: "15室0厅9卫",
    price: NumberInt("34000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814792"),
    title: "整租·敏捷莱茵花园 3室2厅 北",
    area: "增城",
    detailplace: "荔城增江",
    square: 107.04,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814793"),
    title: "整租·碧桂园天玺湾 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 78,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814794"),
    title: "整租·领峰园 3室2厅 南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 160,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814795"),
    title: "整租·东方名都花园 3室1厅 东南/南",
    area: "增城",
    detailplace: "白江",
    square: 123.5,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814796"),
    title: "整租·新月明珠花园 3室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 108,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814797"),
    title: "整租·南沙金茂湾 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 126,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814798"),
    title: "整租·东山月府 3室2厅 西南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 126,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb7814799"),
    title: "整租·南洲花苑东区 1室1厅 东",
    area: "海珠",
    detailplace: "南洲",
    square: 31.36,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781479a"),
    title: "整租·花城北苑 2室2厅 东南",
    area: "花都",
    detailplace: "旧区",
    square: 80,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781479b"),
    title: "整租·仁济西路 2室1厅 东",
    area: "越秀",
    detailplace: "人民路",
    square: 18.06,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781479c"),
    title: "整租·广州设计之都 1室1厅 北",
    area: "白云",
    detailplace: "黄边",
    square: 40,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781479d"),
    title: "整租·广州设计之都 1室1厅 北",
    area: "白云",
    detailplace: "黄边",
    square: 30,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781479e"),
    title: "整租·莱茵水岸 3室2厅 东北",
    area: "从化",
    detailplace: "江埔街",
    square: 123,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb781479f"),
    title: "整租·越秀中国铁建南投海语天悦湾 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 123,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a0"),
    title: "整租·六运小区 2室1厅 南/北",
    area: "天河",
    detailplace: "天河南",
    square: 76,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("23800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a1"),
    title: "整租·东成花园 3室2厅 东南",
    area: "天河",
    detailplace: "石牌",
    square: 80,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a2"),
    title: "整租·信达金茂广场 2室1厅 北",
    area: "天河",
    detailplace: "沙太南",
    square: 46,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a3"),
    title: "整租·共和路 2室1厅 南/北",
    area: "越秀",
    detailplace: "杨箕",
    square: 57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a4"),
    title: "整租·龙津东路 2室1厅 西南",
    area: "荔湾",
    detailplace: "龙津",
    square: 50,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a5"),
    title: "整租·环市中路 1室0厅 西",
    area: "越秀",
    detailplace: "小北",
    square: 25,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a6"),
    title: "整租·圣雅堡 1室0厅 东北",
    area: "白云",
    detailplace: "罗冲围",
    square: 38,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a7"),
    title: "整租·敏捷锦绣天伦 3室2厅 东南",
    area: "增城",
    detailplace: "新塘北",
    square: 90,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a8"),
    title: "整租·昌乐园 1室0厅 南/北",
    area: "天河",
    detailplace: "员村",
    square: 30,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147a9"),
    title: "整租·珠江铂世湾 5室2厅 南",
    area: "番禺",
    detailplace: "华南新城",
    square: 131,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147aa"),
    title: "整租·碧桂园凤凰城凤妍苑 3室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 99,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ab"),
    title: "整租·敏捷锦绣天伦 2室2厅 南/北",
    area: "增城",
    detailplace: "新塘北",
    square: 75,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ac"),
    title: "整租·合景天峻 3室2厅 北",
    area: "黄埔",
    detailplace: "知识城",
    square: 88,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ad"),
    title: "整租·珠光新城御景二期回迁房 2室2厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("7300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ae"),
    title: "整租·江南西路 3室2厅 东南",
    area: "海珠",
    detailplace: "江南西",
    square: 70,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147af"),
    title: "整租·景业壹方天地 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 87,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b0"),
    title: "整租·星汇城 4室2厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 104,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b1"),
    title: "整租·万科春风十里 4室2厅 复式 南/北",
    area: "增城",
    detailplace: "朱村",
    square: 98.75,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b2"),
    title: "整租·江南大道中 3室1厅 东南",
    area: "海珠",
    detailplace: "江南大道中",
    square: 91,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3999")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b3"),
    title: "整租·保利心语 1室0厅 南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 12.19,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b4"),
    title: "整租·保利百合花园 1室0厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b5"),
    title: "整租·敏捷绿湖首府三期 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b6"),
    title: "合租·富力半岛 4居室 东北卧",
    area: "白云",
    detailplace: "罗冲围",
    square: 12.9,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1356")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b7"),
    title: "合租·泰景花园 4居室 北卧",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 12.31,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1816")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b8"),
    title: "合租·豫章苑 4居室 北卧",
    area: "黄埔",
    detailplace: "大沙地",
    square: 10,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1323")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147b9"),
    title: "合租·豫章苑 4居室 西卧",
    area: "黄埔",
    detailplace: "大沙地",
    square: 12,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1816")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ba"),
    title: "整租·碧桂园凤凰城凤锦苑 3室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 122,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147bb"),
    title: "整租·金湖湾公寓 1室1厅 南",
    area: "白云",
    detailplace: "沙太北",
    square: 38,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147bc"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147bd"),
    title: "合租·恒荔湾畔 4居室 南卧",
    area: "荔湾",
    detailplace: "芳村",
    square: 7.1,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1127")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147be"),
    title: "整租·中交汇通中心 2室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 56,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147bf"),
    title: "整租·名门大厦 2室1厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 79.32,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c0"),
    title: "整租·奥园莲峰圣境 4室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 220,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c1"),
    title: "整租·中交汇通中心 2室2厅 东",
    area: "南沙",
    detailplace: "明珠湾",
    square: 52,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c2"),
    title: "整租·越秀明珠天悦江湾 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2203")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c3"),
    title: "合租·广信华景大厦 4居室 北卧",
    area: "越秀",
    detailplace: "五羊新城",
    square: 7.52,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c4"),
    title: "合租·第三金碧花园 4居室 南卧",
    area: "海珠",
    detailplace: "金碧",
    square: 7.54,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1323")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c5"),
    title: "合租·万科尚城御府 2居室 南卧",
    area: "黄埔",
    detailplace: "南岗",
    square: 24,
    position: "南",
    roomtype: "2室0厅2卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c6"),
    title: "整租·广州雅居乐花园新地沁园 1室0厅 东南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c7"),
    title: "整租·萝岗奥园广场 3室2厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 86,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c8"),
    title: "合租·蓝色康园 4居室 东卧",
    area: "海珠",
    detailplace: "滨江东",
    square: 8.3,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147c9"),
    title: "合租·万科柏悦湾 4居室 南卧",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 9.4,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1533")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ca"),
    title: "合租·中海橡园国际 4居室 东南卧",
    area: "海珠",
    detailplace: "工业大道北",
    square: 10.8,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("2131")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147cb"),
    title: "整租·中交蓝色海湾 3室1厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 93,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147cc"),
    title: "合租·时代春树里 5居室 南卧",
    area: "黄埔",
    detailplace: "香雪",
    square: 14.8,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147cd"),
    title: "整租·广州雅居乐花园新地沁园 1室0厅 东南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ce"),
    title: "整租·中旅侨苑 2室2厅 东南",
    area: "海珠",
    detailplace: "昌岗",
    square: 80,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147cf"),
    title: "整租·裕景花园西区 13室3厅 东南/南/北",
    area: "番禺",
    detailplace: "洛溪",
    square: 900,
    position: "东",
    roomtype: "13室3厅5卫",
    price: NumberInt("40000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d0"),
    title: "整租·大德路 1室1厅 北",
    area: "越秀",
    detailplace: "解放南",
    square: 60,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d1"),
    title: "合租·丰兴广场 4居室 东南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("3580")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d2"),
    title: "整租·晓翠苑 2室1厅 西南",
    area: "白云",
    detailplace: "机场路",
    square: 45,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d3"),
    title: "整租·中山一路 3室1厅 南",
    area: "越秀",
    detailplace: "东风东",
    square: 78,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("6200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d4"),
    title: "整租·海逸花园 3室1厅 南",
    area: "海珠",
    detailplace: "江南大道中",
    square: 80,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d5"),
    title: "整租·华燊大厦 2室1厅 南",
    area: "黄埔",
    detailplace: "开发西区",
    square: 76,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d6"),
    title: "整租·兰亭盛荟 2室2厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 65,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d7"),
    title: "整租·保利越鸿都会广场 1室1厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 55,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d8"),
    title: "整租·敦和花园 3室1厅 东南",
    area: "海珠",
    detailplace: "客村",
    square: 77,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147d9"),
    title: "整租·富力路 1室1厅 南",
    area: "荔湾",
    detailplace: "南岸路",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147da"),
    title: "整租·时代长岛 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 108,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147db"),
    title: "合租·聚侨苑 4居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 25,
    position: "南",
    roomtype: "4室0厅1卫",
    price: NumberInt("2480")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147dc"),
    title: "整租·时代南湾 3室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 148,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147dd"),
    title: "整租·越秀天荟江湾 1室1厅 东南",
    area: "海珠",
    detailplace: "工业大道南",
    square: 38,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147de"),
    title: "整租·保利罗兰国际 3室2厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147df"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 103,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e0"),
    title: "整租·广卫路 1室1厅 南",
    area: "越秀",
    detailplace: "公园前",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e1"),
    title: "整租·天虹花园 2室1厅 北",
    area: "黄埔",
    detailplace: "大沙地",
    square: 77,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e2"),
    title: "整租·耀华社区存善东街 1室0厅 东南",
    area: "荔湾",
    detailplace: "西关",
    square: 25,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1650")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e3"),
    title: "整租·时代天汇 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 97,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e4"),
    title: "整租·怡景新村 2室1厅 南",
    area: "天河",
    detailplace: "员村",
    square: 55,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2280")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e5"),
    title: "整租·湾区·金融城 4室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 136,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3528")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e6"),
    title: "整租·先烈南路青龙坊 2室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 60,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e7"),
    title: "整租·机关宿舍 2室2厅 东南",
    area: "越秀",
    detailplace: "小北",
    square: 75,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e8"),
    title: "整租·宜安小区 2室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 55,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147e9"),
    title: "整租·农林上路八横路 4室1厅 东南",
    area: "越秀",
    detailplace: "东山口",
    square: 135,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ea"),
    title: "整租·福今路 2室1厅 东南",
    area: "越秀",
    detailplace: "东山口",
    square: 73.62,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147eb"),
    title: "整租·天俊阁 1室0厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 118,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ec"),
    title: "整租·金穗大厦 3室1厅 东南",
    area: "天河",
    detailplace: "体育中心",
    square: 91,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ed"),
    title: "整租·南沙保利南怡湾 3室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ee"),
    title: "整租·颐和山庄 4室2厅 复式 西南",
    area: "白云",
    detailplace: "南湖",
    square: 143.73,
    position: "西",
    roomtype: "4室2厅3卫",
    price: NumberInt("6300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147ef"),
    title: "整租·实地蔷薇国际 4室2厅 东南",
    area: "增城",
    detailplace: "荔城西区",
    square: 117.7,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f0"),
    title: "整租·富力天海湾 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 97,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f1"),
    title: "整租·越秀滨海新城 3室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 94,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f2"),
    title: "整租·越秀滨海悦城 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 13.08,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f3"),
    title: "整租·保利红棉花园 8室2厅 东/南/西/北",
    area: "海珠",
    detailplace: "江燕路",
    square: 644,
    position: "东",
    roomtype: "8室2厅2卫",
    price: NumberInt("28880")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f4"),
    title: "整租·保利红棉花园 8室2厅 南",
    area: "海珠",
    detailplace: "江燕路",
    square: 644,
    position: "南",
    roomtype: "8室2厅2卫",
    price: NumberInt("28880")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f5"),
    title: "整租·骏业阁 1室0厅 东",
    area: "荔湾",
    detailplace: "西关",
    square: 9,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f6"),
    title: "整租·实地常春藤 3室1厅 南",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 97,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f7"),
    title: "整租·敏捷君御国际 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 78,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f8"),
    title: "整租·柏丽甜果公馆 3室2厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 84,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147f9"),
    title: "整租·华景新城逸雅居 3室2厅 西南",
    area: "天河",
    detailplace: "华景新城",
    square: 95,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147fa"),
    title: "整租·方圆明月山溪 1室1厅 南",
    area: "从化",
    detailplace: "温泉镇",
    square: 39,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147fb"),
    title: "整租·逢源路 4室2厅 南",
    area: "荔湾",
    detailplace: "龙津",
    square: 73.69,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147fc"),
    title: "整租·南沙金茂湾 4室3厅 东",
    area: "南沙",
    detailplace: "明珠湾",
    square: 307,
    position: "东",
    roomtype: "4室3厅3卫",
    price: NumberInt("19000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147fd"),
    title: "整租·南沙金茂湾 1室0厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69395f68410f435bb78147fe"),
    title: "整租·南沙金茂湾 4室3厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 305,
    position: "东",
    roomtype: "4室3厅3卫",
    price: NumberInt("17000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eae"),
    title: "整租·奥园莲峰圣境 4室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 220,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eaf"),
    title: "整租·天马丽苑二期 3室2厅 南",
    area: "花都",
    detailplace: "铁路西",
    square: 98,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb0"),
    title: "整租·方圆明月山溪 1室0厅 南",
    area: "从化",
    detailplace: "温泉镇",
    square: 45,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb1"),
    title: "合租·岭南新世界 5居室 东卧",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 13.5,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("2194")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb2"),
    title: "整租·广信金兰花园 3室1厅 南",
    area: "白云",
    detailplace: "白云大道南",
    square: 94,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb3"),
    title: "合租·瑞东花园 4居室 西卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 5.53,
    position: "西",
    roomtype: "4室1厅1卫",
    price: NumberInt("1039")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb4"),
    title: "整租·恒大山水城 3室2厅 北",
    area: "增城",
    detailplace: "中新镇",
    square: 100,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb5"),
    title: "整租·锦绣香江花园山水华府 6室2厅 复式 东南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 476.7,
    position: "东",
    roomtype: "6室2厅3卫",
    price: NumberInt("27000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb6"),
    title: "整租·琶洲壹號 6室3厅 南",
    area: "海珠",
    detailplace: "琶洲东",
    square: 324,
    position: "南",
    roomtype: "6室3厅5卫",
    price: NumberInt("40000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb7"),
    title: "整租·麓苑路42号大院 2室1厅 东",
    area: "越秀",
    detailplace: "淘金",
    square: 117,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("6480")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb8"),
    title: "整租·万科东荟城 1室0厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eb9"),
    title: "整租·环市东路 1室1厅 南",
    area: "越秀",
    detailplace: "环市东",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eba"),
    title: "合租·新世界东逸花园 4居室 北卧",
    area: "天河",
    detailplace: "天河公园",
    square: 11.6,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2929")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ebb"),
    title: "整租·碧桂园豪进左岸 4室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 142.28,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ebc"),
    title: "合租·中怡城市花园 3居室 南卧",
    area: "天河",
    detailplace: "林和",
    square: 21.3,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2898")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ebd"),
    title: "整租·翠微庄园 1室0厅 东",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ebe"),
    title: "整租·碧桂园豪进左岸 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 102,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ebf"),
    title: "整租·叠溪花园 3室2厅 北",
    area: "增城",
    detailplace: "朱村",
    square: 85,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1620")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec0"),
    title: "整租·绿城美的·晓风印月 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 125,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec1"),
    title: "整租·协和新世界 1室0厅 南",
    area: "天河",
    detailplace: "天润路",
    square: 11.8,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec2"),
    title: "合租·保利心语 4居室 北卧",
    area: "天河",
    detailplace: "珠江新城中",
    square: 15.8,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2990")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec3"),
    title: "整租·合景誉山国际三区 3室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 101,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec4"),
    title: "整租·恒大山水郡 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 128,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec5"),
    title: "整租·范屋村 2室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 53,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec6"),
    title: "整租·增槎路 1室1厅 南",
    area: "白云",
    detailplace: "罗冲围",
    square: 36,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec7"),
    title: "整租·芭堤水岸 2室2厅 东南",
    area: "海珠",
    detailplace: "滨江东",
    square: 90.55,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec8"),
    title: "整租·增槎路 1室0厅 南",
    area: "白云",
    detailplace: "罗冲围",
    square: 41,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ec9"),
    title: "整租·增槎路 1室1厅 南",
    area: "白云",
    detailplace: "罗冲围",
    square: 36,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eca"),
    title: "整租·文昌南路 9室9厅 东/南/西/北",
    area: "荔湾",
    detailplace: "西关",
    square: 880,
    position: "东",
    roomtype: "9室9厅9卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ecb"),
    title: "整租·中交汇通中心 2室1厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 54,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ecc"),
    title: "整租·富基广场A区 1室1厅 东南",
    area: "海珠",
    detailplace: "滨江中",
    square: 42,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ecd"),
    title: "整租·广州奥林匹克花园 4室2厅 南/西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 129,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ece"),
    title: "整租·万科海上明月 2室2厅 北",
    area: "南沙",
    detailplace: "黄阁",
    square: 59,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1890")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ecf"),
    title: "整租·公路规划局宿舍 3室1厅 南",
    area: "天河",
    detailplace: "沙太南",
    square: 84.7,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed0"),
    title: "整租·珠江帝景苑 4室1厅 东",
    area: "海珠",
    detailplace: "广州塔",
    square: 257,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed1"),
    title: "整租·中交蓝色海湾 3室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 101,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed2"),
    title: "整租·金地荔湖城水立坊 2室2厅 东北",
    area: "增城",
    detailplace: "永宁",
    square: 94.87,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed3"),
    title: "整租·融创御园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed4"),
    title: "整租·华文学院 3室2厅 南",
    area: "天河",
    detailplace: "粤垦",
    square: 85,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed5"),
    title: "整租·先烈中路 4室2厅 南",
    area: "越秀",
    detailplace: "黄花岗",
    square: 120,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed6"),
    title: "合租·敏捷尚品国际 2居室 北卧",
    area: "南沙",
    detailplace: "进港大道",
    square: 60,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed7"),
    title: "整租·海棠阁 3室2厅 东南",
    area: "天河",
    detailplace: "林和",
    square: 93,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed8"),
    title: "整租·广晟海韵兰庭 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 86.42,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ed9"),
    title: "整租·小北路 1室0厅 西南",
    area: "越秀",
    detailplace: "小北",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eda"),
    title: "整租·光大花园中海锦榕湾 1室0厅 东",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4edb"),
    title: "整租·中山一路 2室1厅 南/北",
    area: "越秀",
    detailplace: "东风东",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4edc"),
    title: "整租·丽景阁 1室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 32,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4edd"),
    title: "整租·星河盛世 3室2厅 东南",
    area: "南沙",
    detailplace: "进港大道",
    square: 125,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ede"),
    title: "整租·利雅湾 3室2厅 西南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 125,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4edf"),
    title: "整租·新世界凯粤湾 1室0厅 东北",
    area: "荔湾",
    detailplace: "滘口",
    square: 22.32,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee0"),
    title: "整租·君立国际公寓 3室1厅 南",
    area: "白云",
    detailplace: "同和",
    square: 81,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee1"),
    title: "整租·雅居乐剑桥汇 4室2厅 南/北",
    area: "番禺",
    detailplace: "雅居乐",
    square: 285,
    position: "南",
    roomtype: "4室2厅4卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee2"),
    title: "合租·辉洋苑 3居室 东卧",
    area: "荔湾",
    detailplace: "黄沙",
    square: 14.4,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1558")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee3"),
    title: "整租·华骏花园 3室2厅 西",
    area: "天河",
    detailplace: "珠江新城东",
    square: 153,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee4"),
    title: "整租·远洋天骄广场 1室1厅 东南",
    area: "天河",
    detailplace: "天河客运站",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee5"),
    title: "合租·岭南新世界 4居室 北卧",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 9.03,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee6"),
    title: "合租·金域蓝湾 5居室 东卧",
    area: "白云",
    detailplace: "金沙洲",
    square: 7.24,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("1008")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee7"),
    title: "整租·桃花路 4室3厅 复式 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 205.67,
    position: "南",
    roomtype: "4室3厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee8"),
    title: "整租·建设二马路 2室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ee9"),
    title: "合租·万科东荟城 5居室 北卧",
    area: "黄埔",
    detailplace: "香雪",
    square: 8.6,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eea"),
    title: "整租·领江壹号 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 25.54,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eeb"),
    title: "合租·骏景花园 4居室 北卧",
    area: "天河",
    detailplace: "棠下",
    square: 18.91,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2719")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eec"),
    title: "整租·小北路 2室1厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eed"),
    title: "整租·广州敏捷绿湖首府 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 105,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1220")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eee"),
    title: "合租·怡乐园(番禺) 5居室 北卧",
    area: "番禺",
    detailplace: "市桥",
    square: 11.07,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("1113")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eef"),
    title: "整租·方圆流花月岛 1室0厅 西",
    area: "越秀",
    detailplace: "人民北",
    square: 17.18,
    position: "西",
    roomtype: "1室0厅0卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef0"),
    title: "整租·保利中航城花园一期 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 92,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef1"),
    title: "合租·南国奥园 4居室 北卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 14.2,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1921")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef2"),
    title: "整租·锦绣银湾 1室0厅 南/北",
    area: "番禺",
    detailplace: "大石",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef3"),
    title: "整租·保利立方花园 4室1厅 跃层 南",
    area: "增城",
    detailplace: "永宁",
    square: 95,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef4"),
    title: "合租·中海康城 4居室 北卧",
    area: "天河",
    detailplace: "黄村",
    square: 13,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef5"),
    title: "整租·奥园城市天地 1室0厅 东",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 35.34,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef6"),
    title: "合租·新世界逸彩庭园 4居室 东卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 6.46,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef7"),
    title: "整租·顺欣花园 3室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 89,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef8"),
    title: "整租·凯德山海连城一期 3室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 124.35,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4ef9"),
    title: "整租·景业荔都 3室2厅 北",
    area: "从化",
    detailplace: "江埔街",
    square: 99,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4efa"),
    title: "合租·新世界逸彩庭园 4居室 南卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 12.1,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4efb"),
    title: "整租·中交蓝色海湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 135,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4efc"),
    title: "整租·粤海丽江花园 4室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 197,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4efd"),
    title: "合租·暨南花园 4居室 北卧",
    area: "天河",
    detailplace: "石牌",
    square: 11.1,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2236")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4efe"),
    title: "合租·怡乐园(番禺) 5居室 东卧",
    area: "番禺",
    detailplace: "市桥",
    square: 16.71,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("1186")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4eff"),
    title: "整租·站前路(荔湾) 2室1厅 北",
    area: "荔湾",
    detailplace: "流花站前",
    square: 45,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f00"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f01"),
    title: "整租·星河东悦湾 3室1厅 东北",
    area: "南沙",
    detailplace: "黄阁",
    square: 89,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f02"),
    title: "整租·水荫路34号大院 2室1厅 南",
    area: "越秀",
    detailplace: "水荫",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f03"),
    title: "整租·美林海岸 5室2厅 南",
    area: "天河",
    detailplace: "员村",
    square: 268,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f04"),
    title: "整租·星汇城 4室2厅 东南",
    area: "黄埔",
    detailplace: "知识城",
    square: 104,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f05"),
    title: "整租·合景睿峰L7 1室0厅 东",
    area: "天河",
    detailplace: "珠江新城东",
    square: 15,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f06"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1593")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f07"),
    title: "整租·亚运城运动员村四区 3室2厅 南",
    area: "番禺",
    detailplace: "亚运城",
    square: 138,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f08"),
    title: "整租·花语阳光花园 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 120,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f09"),
    title: "整租·保利香雪山别墅 6室3厅 复式 南/北",
    area: "黄埔",
    detailplace: "科学城",
    square: 280,
    position: "南",
    roomtype: "6室3厅6卫",
    price: NumberInt("23000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f0a"),
    title: "整租·仓边路 1室1厅 东",
    area: "越秀",
    detailplace: "农讲所",
    square: 60,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f0b"),
    title: "整租·东兴楼 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f0c"),
    title: "整租·天健天玺 6室3厅 南",
    area: "黄埔",
    detailplace: "长岭居",
    square: 350,
    position: "南",
    roomtype: "6室3厅3卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f0d"),
    title: "整租·建设二马路 2室1厅 南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 78.7,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f0e"),
    title: "整租·嘉裕公馆 3室2厅 西",
    area: "天河",
    detailplace: "珠江新城中",
    square: 152.85,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f0f"),
    title: "整租·东风东路 3室1厅 东南",
    area: "越秀",
    detailplace: "环市东",
    square: 70,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f10"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 105.77,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f11"),
    title: "整租·光大花园榕景四季 1室0厅 北",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f12"),
    title: "整租·恒大山水城 3室2厅 东",
    area: "增城",
    detailplace: "中新镇",
    square: 120,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f13"),
    title: "整租·紫茗花园 3室2厅 东",
    area: "南沙",
    detailplace: "进港大道",
    square: 107,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f14"),
    title: "整租·星河山海湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 112,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f15"),
    title: "整租·逸翠庄园 5室2厅 复式 北",
    area: "增城",
    detailplace: "荔城西区",
    square: 279,
    position: "北",
    roomtype: "5室2厅4卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f16"),
    title: "整租·岳洲路 2室1厅 东",
    area: "天河",
    detailplace: "五山",
    square: 65,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f17"),
    title: "整租·敏捷御峰国际 2室2厅 南",
    area: "番禺",
    detailplace: "会江",
    square: 58.8,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("3690")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f18"),
    title: "整租·佳兆业悦江府 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f19"),
    title: "整租·雅居乐花园时光九篇 4室2厅 东南/西南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 169.22,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f1a"),
    title: "整租·星河山海湾 3室2厅 东北",
    area: "南沙",
    detailplace: "南沙港",
    square: 125,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f1b"),
    title: "整租·越秀滨海隽城 3室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f1c"),
    title: "整租·天诚广场 2室2厅 南",
    area: "天河",
    detailplace: "天润路",
    square: 100,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f1d"),
    title: "整租·泰景花园东城华庭 3室2厅 南/北",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 99,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f1e"),
    title: "整租·碧桂园豪园湖心苑 4室2厅 复式 东南",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 245,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f1f"),
    title: "整租·明月小区 3室1厅 南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 72,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f20"),
    title: "整租·洲山大厦 1室1厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 100,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f21"),
    title: "整租·共和苑 2室1厅 南/北",
    area: "越秀",
    detailplace: "杨箕",
    square: 57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f22"),
    title: "整租·南沙金茂湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 170,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("5700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f23"),
    title: "整租·尚河居 1室1厅 南",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f24"),
    title: "整租·碧桂园豪园荔湖苑 3室2厅 北",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 96,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f25"),
    title: "整租·星河湾赏心园 4室2厅 南/北",
    area: "番禺",
    detailplace: "星河湾",
    square: 205,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f26"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 103.82,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f27"),
    title: "整租·远洋天骄 1室0厅 东南",
    area: "天河",
    detailplace: "天河客运站",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("650")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f28"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f29"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f2a"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f2b"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f2c"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f2d"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f2e"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f2f"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f30"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f31"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f32"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f33"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f34"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f35"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f36"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f37"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f38"),
    title: "整租·南沙万达广场 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f39"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f3a"),
    title: "整租·龙岗路 5室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 101.78,
    position: "东",
    roomtype: "5室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f3b"),
    title: "整租·创基丽江国际 4室2厅 东南",
    area: "增城",
    detailplace: "增城区府",
    square: 186.8,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f3c"),
    title: "整租·南沙金茂湾 1室1厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f3d"),
    title: "整租·中惠璧珑湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙区府",
    square: 143,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f3e"),
    title: "整租·雅居乐剑桥汇 4室2厅 南/北",
    area: "番禺",
    detailplace: "雅居乐",
    square: 285,
    position: "南",
    roomtype: "4室2厅4卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f3f"),
    title: "整租·华骏花园 3室2厅 西",
    area: "天河",
    detailplace: "珠江新城东",
    square: 153,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f40"),
    title: "整租·远洋天骄广场 1室1厅 东南",
    area: "天河",
    detailplace: "天河客运站",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f41"),
    title: "整租·桃花路 4室3厅 复式 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 205.67,
    position: "南",
    roomtype: "4室3厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f42"),
    title: "整租·建设二马路 2室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f43"),
    title: "整租·领江壹号 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 25.54,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f44"),
    title: "整租·小北路 2室1厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f45"),
    title: "整租·广州敏捷绿湖首府 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 105,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1220")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f46"),
    title: "整租·方圆流花月岛 1室0厅 西",
    area: "越秀",
    detailplace: "人民北",
    square: 17.18,
    position: "西",
    roomtype: "1室0厅0卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f47"),
    title: "整租·保利中航城花园一期 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 92,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f48"),
    title: "整租·锦绣银湾 1室0厅 南/北",
    area: "番禺",
    detailplace: "大石",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f49"),
    title: "整租·保利立方花园 4室1厅 跃层 南",
    area: "增城",
    detailplace: "永宁",
    square: 95,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f4a"),
    title: "整租·奥园城市天地 1室0厅 东",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 35.34,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f4b"),
    title: "整租·顺欣花园 3室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 89,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f4c"),
    title: "整租·凯德山海连城一期 3室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 124.35,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f4d"),
    title: "整租·景业荔都 3室2厅 北",
    area: "从化",
    detailplace: "江埔街",
    square: 99,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f4e"),
    title: "整租·中交蓝色海湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 135,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f4f"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f50"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f51"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f52"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f53"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f54"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f55"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f56"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f57"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f58"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f59"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f5a"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f5b"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f5c"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f5d"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f5e"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f5f"),
    title: "整租·南沙万达广场 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f60"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f61"),
    title: "整租·龙岗路 5室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 101.78,
    position: "东",
    roomtype: "5室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f62"),
    title: "整租·创基丽江国际 4室2厅 东南",
    area: "增城",
    detailplace: "增城区府",
    square: 186.8,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f63"),
    title: "整租·南沙金茂湾 1室1厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f64"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f65"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f66"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f67"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f68"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f69"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f6a"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f6b"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f6c"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f6d"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f6e"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f6f"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f70"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f71"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f72"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f73"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f74"),
    title: "整租·南沙万达广场 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f75"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f76"),
    title: "整租·站前路(荔湾) 2室1厅 北",
    area: "荔湾",
    detailplace: "流花站前",
    square: 45,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f77"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f78"),
    title: "整租·星河东悦湾 3室1厅 东北",
    area: "南沙",
    detailplace: "黄阁",
    square: 89,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f79"),
    title: "整租·水荫路34号大院 2室1厅 南",
    area: "越秀",
    detailplace: "水荫",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f7a"),
    title: "整租·美林海岸 5室2厅 南",
    area: "天河",
    detailplace: "员村",
    square: 268,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f7b"),
    title: "整租·星汇城 4室2厅 东南",
    area: "黄埔",
    detailplace: "知识城",
    square: 104,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f7c"),
    title: "整租·合景睿峰L7 1室0厅 东",
    area: "天河",
    detailplace: "珠江新城东",
    square: 15,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f7d"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1593")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f7e"),
    title: "整租·亚运城运动员村四区 3室2厅 南",
    area: "番禺",
    detailplace: "亚运城",
    square: 138,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f7f"),
    title: "整租·花语阳光花园 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 120,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f80"),
    title: "整租·保利香雪山别墅 6室3厅 复式 南/北",
    area: "黄埔",
    detailplace: "科学城",
    square: 280,
    position: "南",
    roomtype: "6室3厅6卫",
    price: NumberInt("23000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f81"),
    title: "整租·仓边路 1室1厅 东",
    area: "越秀",
    detailplace: "农讲所",
    square: 60,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f82"),
    title: "整租·东兴楼 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f83"),
    title: "整租·天健天玺 6室3厅 南",
    area: "黄埔",
    detailplace: "长岭居",
    square: 350,
    position: "南",
    roomtype: "6室3厅3卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f84"),
    title: "整租·建设二马路 2室1厅 南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 78.7,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f85"),
    title: "整租·嘉裕公馆 3室2厅 西",
    area: "天河",
    detailplace: "珠江新城中",
    square: 152.85,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f86"),
    title: "整租·东风东路 3室1厅 东南",
    area: "越秀",
    detailplace: "环市东",
    square: 70,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f87"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 105.77,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f88"),
    title: "整租·光大花园榕景四季 1室0厅 北",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f89"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f8a"),
    title: "合租·云景花园云桂苑 3居室 东卧",
    area: "白云",
    detailplace: "京溪",
    square: 14,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1816")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f8b"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f8c"),
    title: "合租·岭南新世界 3居室 西卧",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 8.65,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f8d"),
    title: "合租·帝景苑 4居室 南卧",
    area: "天河",
    detailplace: "龙口西",
    square: 12,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2824")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f8e"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f8f"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f90"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f91"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f92"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f93"),
    title: "合租·德荣小区 4居室 北卧",
    area: "天河",
    detailplace: "龙口西",
    square: 8.2,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1487")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f94"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f95"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f96"),
    title: "合租·骏景花园 3居室 北卧",
    area: "天河",
    detailplace: "棠下",
    square: 9.5,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("1487")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f97"),
    title: "合租·东方名都花园 4居室 东卧",
    area: "增城",
    detailplace: "白江",
    square: 8.4,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("934")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f98"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f99"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f9a"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f9b"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f9c"),
    title: "合租·会展世界城 4居室 北卧",
    area: "海珠",
    detailplace: "琶洲东",
    square: 13.63,
    position: "北",
    roomtype: "4室2厅2卫",
    price: NumberInt("2089")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f9d"),
    title: "合租·富力现代广场 4居室 西卧",
    area: "海珠",
    detailplace: "工业大道北",
    square: 14.1,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1879")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f9e"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4f9f"),
    title: "合租·云裳丽影 4居室 西南卧",
    area: "白云",
    detailplace: "同和",
    square: 7,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4fa0"),
    title: "合租·富力御龙庭 4居室 南卧",
    area: "越秀",
    detailplace: "淘金",
    square: 7.58,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1711")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4fa1"),
    title: "合租·碧海湾 5居室 南卧",
    area: "天河",
    detailplace: "珠江新城西",
    square: 22.63,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("3139")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4fa2"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4fa3"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4fa4"),
    title: "合租·文冲新村四期 4居室 南卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 14.1,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1965")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4fa5"),
    title: "整租·南沙万达广场 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac3e7159978dfae2b4fa6"),
    title: "合租·文冲新村四期 4居室 北卧",
    area: "黄埔",
    detailplace: "文冲",
    square: 8.3,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6036"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6037"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6038"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6039"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e603a"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e603b"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e603c"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e603d"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e603e"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e603f"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6040"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6041"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6042"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6043"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6044"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6045"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6046"),
    title: "整租·南沙万达广场 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6047"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6048"),
    title: "整租·龙岗路 5室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 101.78,
    position: "东",
    roomtype: "5室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6049"),
    title: "整租·创基丽江国际 4室2厅 东南",
    area: "增城",
    detailplace: "增城区府",
    square: 186.8,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e604a"),
    title: "整租·南沙金茂湾 1室1厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e604b"),
    title: "合租·新世界东逸花园 4居室 北卧",
    area: "天河",
    detailplace: "天河公园",
    square: 11.6,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2929")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e604c"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e604d"),
    title: "合租·中怡城市花园 3居室 南卧",
    area: "天河",
    detailplace: "林和",
    square: 21.3,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2898")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e604e"),
    title: "合租·保利心语 4居室 北卧",
    area: "天河",
    detailplace: "珠江新城中",
    square: 15.8,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2990")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e604f"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6050"),
    title: "合租·第二金碧花园 3居室 西卧",
    area: "海珠",
    detailplace: "金碧",
    square: 8.43,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("1711")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6051"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6052"),
    title: "合租·第二金碧花园 4居室 南卧",
    area: "海珠",
    detailplace: "金碧",
    square: 5.8,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6053"),
    title: "合租·黄埔中央城 4居室 南卧",
    area: "黄埔",
    detailplace: "香雪",
    square: 14,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1984")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6054"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6055"),
    title: "合租·品秀星樾 4居室 北卧",
    area: "黄埔",
    detailplace: "香雪",
    square: 14.04,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6056"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6057"),
    title: "合租·洛涛南区 4居室 东北卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 13.3,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("1428")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6058"),
    title: "合租·骏景花园 4居室 南卧",
    area: "天河",
    detailplace: "棠下",
    square: 21.6,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2299")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6059"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e605a"),
    title: "合租·小新塘大未来 5居室 南卧",
    area: "天河",
    detailplace: "智慧城",
    square: 8,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("1501")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e605b"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e605c"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e605d"),
    title: "合租·萝岗和苑 5居室 北卧",
    area: "黄埔",
    detailplace: "科学城",
    square: 6.6,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("1113")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e605e"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e605f"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6060"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6061"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6062"),
    title: "合租·洛湖居 4居室 北卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 7.4,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6063"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6064"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6065"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6066"),
    title: "合租·纵横公寓 4居室 北卧",
    area: "海珠",
    detailplace: "赤岗",
    square: 15,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2971")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6067"),
    title: "合租·星汇湾花园 2居室 南卧",
    area: "海珠",
    detailplace: "工业大道中",
    square: 16.1,
    position: "南",
    roomtype: "2室1厅2卫",
    price: NumberInt("2761")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6068"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6069"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e606a"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e606b"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e606c"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e606d"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e606e"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e606f"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6070"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6071"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6072"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6073"),
    title: "合租·云景花园云桂苑 3居室 东卧",
    area: "白云",
    detailplace: "京溪",
    square: 14,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1816")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6074"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6075"),
    title: "合租·岭南新世界 3居室 西卧",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 8.65,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6076"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6077"),
    title: "合租·帝景苑 4居室 南卧",
    area: "天河",
    detailplace: "龙口西",
    square: 12,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2824")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6078"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6079"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e607a"),
    title: "合租·德荣小区 4居室 北卧",
    area: "天河",
    detailplace: "龙口西",
    square: 8.2,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1487")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e607b"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e607c"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e607d"),
    title: "整租·南沙万达广场 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e607e"),
    title: "合租·骏景花园 3居室 北卧",
    area: "天河",
    detailplace: "棠下",
    square: 9.5,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("1487")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e607f"),
    title: "合租·东方名都花园 4居室 东卧",
    area: "增城",
    detailplace: "白江",
    square: 8.4,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("934")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6080"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6081"),
    title: "整租·龙岗路 5室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 101.78,
    position: "东",
    roomtype: "5室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6082"),
    title: "整租·创基丽江国际 4室2厅 东南",
    area: "增城",
    detailplace: "增城区府",
    square: 186.8,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6083"),
    title: "整租·南沙金茂湾 1室1厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6084"),
    title: "整租·中惠璧珑湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙区府",
    square: 143,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6085"),
    title: "整租·海印又一城海印星玥 3室2厅 西南",
    area: "番禺",
    detailplace: "万博",
    square: 98,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("5600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6086"),
    title: "合租·会展世界城 4居室 北卧",
    area: "海珠",
    detailplace: "琶洲东",
    square: 13.63,
    position: "北",
    roomtype: "4室2厅2卫",
    price: NumberInt("2089")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6087"),
    title: "整租·站前路(荔湾) 2室1厅 北",
    area: "荔湾",
    detailplace: "流花站前",
    square: 45,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6088"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6089"),
    title: "整租·星河东悦湾 3室1厅 东北",
    area: "南沙",
    detailplace: "黄阁",
    square: 89,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e608a"),
    title: "整租·水荫路34号大院 2室1厅 南",
    area: "越秀",
    detailplace: "水荫",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e608b"),
    title: "整租·美林海岸 5室2厅 南",
    area: "天河",
    detailplace: "员村",
    square: 268,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e608c"),
    title: "整租·星汇城 4室2厅 东南",
    area: "黄埔",
    detailplace: "知识城",
    square: 104,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e608d"),
    title: "整租·合景睿峰L7 1室0厅 东",
    area: "天河",
    detailplace: "珠江新城东",
    square: 15,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e608e"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1593")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e608f"),
    title: "整租·亚运城运动员村四区 3室2厅 南",
    area: "番禺",
    detailplace: "亚运城",
    square: 138,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6090"),
    title: "整租·花语阳光花园 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 120,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6091"),
    title: "整租·保利香雪山别墅 6室3厅 复式 南/北",
    area: "黄埔",
    detailplace: "科学城",
    square: 280,
    position: "南",
    roomtype: "6室3厅6卫",
    price: NumberInt("23000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6092"),
    title: "整租·仓边路 1室1厅 东",
    area: "越秀",
    detailplace: "农讲所",
    square: 60,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6093"),
    title: "整租·东兴楼 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6094"),
    title: "整租·天健天玺 6室3厅 南",
    area: "黄埔",
    detailplace: "长岭居",
    square: 350,
    position: "南",
    roomtype: "6室3厅3卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6095"),
    title: "整租·建设二马路 2室1厅 南/北",
    area: "越秀",
    detailplace: "建设路",
    square: 78.7,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6096"),
    title: "整租·嘉裕公馆 3室2厅 西",
    area: "天河",
    detailplace: "珠江新城中",
    square: 152.85,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6097"),
    title: "整租·东风东路 3室1厅 东南",
    area: "越秀",
    detailplace: "环市东",
    square: 70,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6098"),
    title: "合租·辉洋苑 3居室 东卧",
    area: "荔湾",
    detailplace: "黄沙",
    square: 14.4,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1558")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6099"),
    title: "整租·紫茗花园 3室2厅 东",
    area: "南沙",
    detailplace: "进港大道",
    square: 107,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e609a"),
    title: "整租·星河山海湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 112,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e609b"),
    title: "整租·逸翠庄园 5室2厅 复式 北",
    area: "增城",
    detailplace: "荔城西区",
    square: 279,
    position: "北",
    roomtype: "5室2厅4卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e609c"),
    title: "整租·岳洲路 2室1厅 东",
    area: "天河",
    detailplace: "五山",
    square: 65,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e609d"),
    title: "合租·岭南新世界 4居室 北卧",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 9.03,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1249")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e609e"),
    title: "整租·敏捷御峰国际 2室2厅 南",
    area: "番禺",
    detailplace: "会江",
    square: 58.8,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("3690")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e609f"),
    title: "合租·金域蓝湾 5居室 东卧",
    area: "白云",
    detailplace: "金沙洲",
    square: 7.24,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("1008")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a0"),
    title: "合租·怡乐园(番禺) 5居室 北卧",
    area: "番禺",
    detailplace: "市桥",
    square: 11.07,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("1113")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a1"),
    title: "整租·佳兆业悦江府 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a2"),
    title: "整租·雅居乐花园时光九篇 4室2厅 东南/西南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 169.22,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a3"),
    title: "合租·南国奥园 4居室 北卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 14.2,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1921")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a4"),
    title: "合租·中海康城 4居室 北卧",
    area: "天河",
    detailplace: "黄村",
    square: 13,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a5"),
    title: "合租·新世界逸彩庭园 4居室 东卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 6.46,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a6"),
    title: "合租·新世界逸彩庭园 4居室 南卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 12.1,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a7"),
    title: "整租·星河山海湾 3室2厅 东北",
    area: "南沙",
    detailplace: "南沙港",
    square: 125,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a8"),
    title: "整租·越秀滨海隽城 3室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60a9"),
    title: "整租·天诚广场 2室2厅 南",
    area: "天河",
    detailplace: "天润路",
    square: 100,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60aa"),
    title: "合租·暨南花园 4居室 北卧",
    area: "天河",
    detailplace: "石牌",
    square: 11.1,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2236")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ab"),
    title: "整租·泰景花园东城华庭 3室2厅 南/北",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 99,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ac"),
    title: "合租·怡乐园(番禺) 5居室 东卧",
    area: "番禺",
    detailplace: "市桥",
    square: 16.71,
    position: "东",
    roomtype: "5室1厅2卫",
    price: NumberInt("1186")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ad"),
    title: "整租·碧桂园豪园湖心苑 4室2厅 复式 东南",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 245,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ae"),
    title: "整租·明月小区 3室1厅 南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 72,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60af"),
    title: "整租·洲山大厦 1室1厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 100,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b0"),
    title: "合租·先烈中路81号大院 5居室 南卧",
    area: "越秀",
    detailplace: "黄花岗",
    square: 19.21,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("2058")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b1"),
    title: "整租·共和苑 2室1厅 南/北",
    area: "越秀",
    detailplace: "杨箕",
    square: 57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b2"),
    title: "合租·奥园香雪华府 4居室 南卧",
    area: "黄埔",
    detailplace: "香雪",
    square: 12,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1606")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b3"),
    title: "合租·翠湖山庄 4居室 北卧",
    area: "天河",
    detailplace: "天河公园",
    square: 7.44,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1564")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b4"),
    title: "整租·南沙金茂湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 170,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("5700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b5"),
    title: "合租·光大花园榕岸 4居室 东卧",
    area: "海珠",
    detailplace: "工业大道北",
    square: 9,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1501")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b6"),
    title: "整租·紫茗花园 3室2厅 东",
    area: "南沙",
    detailplace: "进港大道",
    square: 107,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b7"),
    title: "整租·星河山海湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 112,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b8"),
    title: "整租·逸翠庄园 5室2厅 复式 北",
    area: "增城",
    detailplace: "荔城西区",
    square: 279,
    position: "北",
    roomtype: "5室2厅4卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60b9"),
    title: "整租·岳洲路 2室1厅 东",
    area: "天河",
    detailplace: "五山",
    square: 65,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ba"),
    title: "整租·敏捷御峰国际 2室2厅 南",
    area: "番禺",
    detailplace: "会江",
    square: 58.8,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("3690")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60bb"),
    title: "整租·佳兆业悦江府 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60bc"),
    title: "整租·雅居乐花园时光九篇 4室2厅 东南/西南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 169.22,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60bd"),
    title: "整租·星河山海湾 3室2厅 东北",
    area: "南沙",
    detailplace: "南沙港",
    square: 125,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60be"),
    title: "整租·越秀滨海隽城 3室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60bf"),
    title: "整租·天诚广场 2室2厅 南",
    area: "天河",
    detailplace: "天润路",
    square: 100,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c0"),
    title: "整租·泰景花园东城华庭 3室2厅 南/北",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 99,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c1"),
    title: "整租·碧桂园豪园湖心苑 4室2厅 复式 东南",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 245,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c2"),
    title: "整租·明月小区 3室1厅 南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 72,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c3"),
    title: "整租·洲山大厦 1室1厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 100,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c4"),
    title: "整租·共和苑 2室1厅 南/北",
    area: "越秀",
    detailplace: "杨箕",
    square: 57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c5"),
    title: "整租·南沙金茂湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 170,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("5700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c6"),
    title: "整租·尚河居 1室1厅 南",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c7"),
    title: "整租·碧桂园豪园荔湖苑 3室2厅 北",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 96,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c8"),
    title: "整租·星河湾赏心园 4室2厅 南/北",
    area: "番禺",
    detailplace: "星河湾",
    square: 205,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60c9"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 103.82,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ca"),
    title: "整租·远洋天骄 1室0厅 东南",
    area: "天河",
    detailplace: "天河客运站",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("650")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60cb"),
    title: "整租·紫茗花园 3室2厅 东",
    area: "南沙",
    detailplace: "进港大道",
    square: 107,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60cc"),
    title: "整租·星河山海湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 112,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60cd"),
    title: "整租·逸翠庄园 5室2厅 复式 北",
    area: "增城",
    detailplace: "荔城西区",
    square: 279,
    position: "北",
    roomtype: "5室2厅4卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ce"),
    title: "整租·岳洲路 2室1厅 东",
    area: "天河",
    detailplace: "五山",
    square: 65,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60cf"),
    title: "整租·敏捷御峰国际 2室2厅 南",
    area: "番禺",
    detailplace: "会江",
    square: 58.8,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("3690")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d0"),
    title: "整租·佳兆业悦江府 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d1"),
    title: "整租·雅居乐花园时光九篇 4室2厅 东南/西南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 169.22,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d2"),
    title: "整租·星河山海湾 3室2厅 东北",
    area: "南沙",
    detailplace: "南沙港",
    square: 125,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d3"),
    title: "整租·越秀滨海隽城 3室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d4"),
    title: "整租·天诚广场 2室2厅 南",
    area: "天河",
    detailplace: "天润路",
    square: 100,
    position: "南",
    roomtype: "2室2厅2卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d5"),
    title: "整租·泰景花园东城华庭 3室2厅 南/北",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 99,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d6"),
    title: "整租·碧桂园豪园湖心苑 4室2厅 复式 东南",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 245,
    position: "东",
    roomtype: "4室2厅3卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d7"),
    title: "整租·明月小区 3室1厅 南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 72,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d8"),
    title: "整租·洲山大厦 1室1厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 100,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60d9"),
    title: "整租·共和苑 2室1厅 南/北",
    area: "越秀",
    detailplace: "杨箕",
    square: 57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60da"),
    title: "整租·南沙金茂湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 170,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("5700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60db"),
    title: "整租·尚河居 1室1厅 南",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60dc"),
    title: "整租·碧桂园豪园荔湖苑 3室2厅 北",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 96,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60dd"),
    title: "整租·星河湾赏心园 4室2厅 南/北",
    area: "番禺",
    detailplace: "星河湾",
    square: 205,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("9000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60de"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 103.82,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60df"),
    title: "整租·远洋天骄 1室0厅 东南",
    area: "天河",
    detailplace: "天河客运站",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("650")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e0"),
    title: "整租·越秀岭南雅筑 1室0厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 13,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e1"),
    title: "整租·叠溪花园 3室2厅 东南",
    area: "增城",
    detailplace: "朱村",
    square: 85,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e2"),
    title: "整租·暨南大学宿舍 2室1厅 南/北",
    area: "天河",
    detailplace: "石牌",
    square: 58,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e3"),
    title: "整租·先烈中路 3室2厅 东南",
    area: "越秀",
    detailplace: "黄花岗",
    square: 121.65,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e4"),
    title: "整租·万科柏悦湾 1室0厅 南/北",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 13.34,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e5"),
    title: "整租·新河浦路 2室1厅 东",
    area: "越秀",
    detailplace: "东山口",
    square: 56,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e6"),
    title: "整租·雅居乐剑桥汇 4室2厅 南/北",
    area: "番禺",
    detailplace: "雅居乐",
    square: 285,
    position: "南",
    roomtype: "4室2厅4卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e7"),
    title: "整租·华骏花园 3室2厅 西",
    area: "天河",
    detailplace: "珠江新城东",
    square: 153,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e8"),
    title: "整租·远洋天骄广场 1室1厅 东南",
    area: "天河",
    detailplace: "天河客运站",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60e9"),
    title: "整租·桃花路 4室3厅 复式 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 205.67,
    position: "南",
    roomtype: "4室3厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ea"),
    title: "整租·建设二马路 2室1厅 南",
    area: "越秀",
    detailplace: "建设路",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60eb"),
    title: "整租·领江壹号 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 25.54,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ec"),
    title: "合租·辉洋苑 3居室 东卧",
    area: "荔湾",
    detailplace: "黄沙",
    square: 14.4,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1558")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ed"),
    title: "整租·小北路 2室1厅 南",
    area: "越秀",
    detailplace: "小北",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ee"),
    title: "整租·广州敏捷绿湖首府 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 105,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1220")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ef"),
    title: "整租·方圆流花月岛 1室0厅 西",
    area: "越秀",
    detailplace: "人民北",
    square: 17.18,
    position: "西",
    roomtype: "1室0厅0卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f0"),
    title: "整租·保利中航城花园一期 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 92,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f1"),
    title: "合租·南国奥园 4居室 北卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 14.2,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1921")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f2"),
    title: "整租·锦绣银湾 1室0厅 南/北",
    area: "番禺",
    detailplace: "大石",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f3"),
    title: "整租·保利立方花园 4室1厅 跃层 南",
    area: "增城",
    detailplace: "永宁",
    square: 95,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f4"),
    title: "整租·奥园城市天地 1室0厅 东",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 35.34,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f5"),
    title: "合租·中海康城 4居室 北卧",
    area: "天河",
    detailplace: "黄村",
    square: 13,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("1638")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f6"),
    title: "整租·顺欣花园 3室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 89,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f7"),
    title: "合租·新世界逸彩庭园 4居室 东卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 6.46,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f8"),
    title: "整租·凯德山海连城一期 3室2厅 南",
    area: "番禺",
    detailplace: "莲花山",
    square: 124.35,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60f9"),
    title: "整租·景业荔都 3室2厅 北",
    area: "从化",
    detailplace: "江埔街",
    square: 99,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60fa"),
    title: "合租·新世界逸彩庭园 4居室 南卧",
    area: "荔湾",
    detailplace: "滘口",
    square: 12.1,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60fb"),
    title: "整租·中交蓝色海湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 135,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60fc"),
    title: "整租·粤海丽江花园 4室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 197,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60fd"),
    title: "整租·中交国际邮轮广场 3室2厅 北",
    area: "南沙",
    detailplace: "南沙港",
    square: 70,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60fe"),
    title: "整租·领南星河荣誉 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 120,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e60ff"),
    title: "整租·中新里 3室2厅 东南",
    area: "黄埔",
    detailplace: "知识城",
    square: 106,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6100"),
    title: "整租·华乐大厦 2室1厅 东南",
    area: "越秀",
    detailplace: "建设路",
    square: 50,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3625")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6101"),
    title: "合租·暨南花园 4居室 北卧",
    area: "天河",
    detailplace: "石牌",
    square: 11.1,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2236")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6102"),
    title: "整租·碧桂园天玺湾 3室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 98,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6103"),
    title: "整租·大华东郡府 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 88.15,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6104"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6105"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6106"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6107"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6108"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6109"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e610a"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e610b"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e610c"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e610d"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e610e"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e610f"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6110"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6111"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6112"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6113"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6114"),
    title: "整租·南沙万达广场 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6115"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6116"),
    title: "整租·中怡城市花园 3室2厅 南",
    area: "天河",
    detailplace: "林和",
    square: 128,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6117"),
    title: "合租·保利心语 4居室 北卧",
    area: "天河",
    detailplace: "珠江新城中",
    square: 15.8,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("2990")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6118"),
    title: "整租·碧桂园凤凰城凤晴苑 3室2厅 北",
    area: "增城",
    detailplace: "凤凰城",
    square: 117,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6119"),
    title: "整租·中交蓝色海湾 4室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 122,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e611a"),
    title: "整租·时代倾城(中新镇) 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 101.47,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e611b"),
    title: "合租·第二金碧花园 3居室 西卧",
    area: "海珠",
    detailplace: "金碧",
    square: 8.43,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("1711")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e611c"),
    title: "整租·越秀和樾府一期 4室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 130,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e611d"),
    title: "整租·嘉御豪庭 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e611e"),
    title: "整租·羊城花园 2室1厅 南",
    area: "天河",
    detailplace: "东圃",
    square: 42,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e611f"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6120"),
    title: "整租·海滨花园 3室2厅 西南",
    area: "番禺",
    detailplace: "洛溪",
    square: 89.3,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6121"),
    title: "合租·第二金碧花园 4居室 南卧",
    area: "海珠",
    detailplace: "金碧",
    square: 5.8,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1081")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6122"),
    title: "整租·星河湾半岛三号园 4室2厅 错层 东南",
    area: "番禺",
    detailplace: "厦滘",
    square: 317.23,
    position: "东",
    roomtype: "4室2厅4卫",
    price: NumberInt("34800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6123"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6124"),
    title: "合租·黄埔中央城 4居室 南卧",
    area: "黄埔",
    detailplace: "香雪",
    square: 14,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1984")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6125"),
    title: "整租·富图花园 7室1厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 482.5,
    position: "东",
    roomtype: "7室1厅5卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6126"),
    title: "整租·建业大厦 5室2厅 复式 东南",
    area: "番禺",
    detailplace: "市桥",
    square: 153,
    position: "东",
    roomtype: "5室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6127"),
    title: "合租·品秀星樾 4居室 北卧",
    area: "黄埔",
    detailplace: "香雪",
    square: 14.04,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1459")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6128"),
    title: "整租·中交国际邮轮广场 2室2厅 东",
    area: "南沙",
    detailplace: "南沙港",
    square: 108,
    position: "东",
    roomtype: "2室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6129"),
    title: "整租·侨建Hi·City 2室1厅 西",
    area: "海珠",
    detailplace: "南洲",
    square: 56.18,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e612a"),
    title: "合租·洛涛南区 4居室 东北卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 13.3,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("1428")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e612b"),
    title: "合租·骏景花园 4居室 南卧",
    area: "天河",
    detailplace: "棠下",
    square: 21.6,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2299")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e612c"),
    title: "合租·小新塘大未来 5居室 南卧",
    area: "天河",
    detailplace: "智慧城",
    square: 8,
    position: "南",
    roomtype: "5室1厅2卫",
    price: NumberInt("1501")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e612d"),
    title: "整租·影城花园 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 14,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e612e"),
    title: "整租·南沙万达广场 1室0厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e612f"),
    title: "整租·叠溪花园 3室2厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6130"),
    title: "整租·龙岗路 5室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 101.78,
    position: "东",
    roomtype: "5室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6131"),
    title: "合租·萝岗和苑 5居室 北卧",
    area: "黄埔",
    detailplace: "科学城",
    square: 6.6,
    position: "北",
    roomtype: "5室1厅2卫",
    price: NumberInt("1113")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6132"),
    title: "整租·创基丽江国际 4室2厅 东南",
    area: "增城",
    detailplace: "增城区府",
    square: 186.8,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693ac630a28312e20a4e6133"),
    title: "整租·南沙金茂湾 1室1厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb1c"),
    title: "整租·尚峰酒店公寓 2室1厅 东南",
    area: "越秀",
    detailplace: "公园前",
    square: 88,
    position: "东",
    roomtype: "2室1厅2卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb1d"),
    title: "整租·岭南新世界 1室0厅 东",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb1e"),
    title: "整租·合景天峻 1室0厅 西北",
    area: "黄埔",
    detailplace: "知识城",
    square: 40,
    position: "西",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb1f"),
    title: "整租·金道花园 1室1厅 北",
    area: "荔湾",
    detailplace: "鹤洞",
    square: 36,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb20"),
    title: "整租·北丽园 2室2厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 66,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb21"),
    title: "整租·帝景山庄 8室3厅 复式 东南",
    area: "天河",
    detailplace: "黄村",
    square: 372.03,
    position: "东",
    roomtype: "8室3厅4卫",
    price: NumberInt("55000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb22"),
    title: "整租·中交港湾国际 1室1厅 东",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 54,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb23"),
    title: "整租·保利中航城二期 4室2厅 复式 南",
    area: "增城",
    detailplace: "朱村",
    square: 109,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb24"),
    title: "整租·丽景湾 3室2厅 东北",
    area: "海珠",
    detailplace: "滨江东",
    square: 126,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb25"),
    title: "整租·越秀明珠天悦江湾 3室2厅 复式 东南/南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 98,
    position: "东",
    roomtype: "3室2厅3卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb26"),
    title: "整租·万科海上明月 3室2厅 东南",
    area: "南沙",
    detailplace: "黄阁",
    square: 81,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb27"),
    title: "整租·新福港鼎峰 4室2厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 140,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb28"),
    title: "整租·广州敏捷绿湖首府 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 106.74,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb29"),
    title: "整租·敏捷绿湖首府一期 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1124")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb2a"),
    title: "整租·信业悦都荟 2室2厅 南",
    area: "番禺",
    detailplace: "市桥北",
    square: 48,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb2b"),
    title: "整租·富力半岛 0室1厅 东南",
    area: "白云",
    detailplace: "罗冲围",
    square: 14,
    position: "东",
    roomtype: null,
    price: NumberInt("830")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb2c"),
    title: "整租·颐和四季公馆 2室1厅 南",
    area: "天河",
    detailplace: "粤垦",
    square: 90.27,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb2d"),
    title: "整租·EBC公寓 1室0厅 南/北",
    area: "番禺",
    detailplace: "番禺客运站",
    square: 34,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb2e"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 81,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb2f"),
    title: "整租·东风东路 3室1厅 东南",
    area: "越秀",
    detailplace: "环市东",
    square: 100,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb30"),
    title: "整租·翠拥华庭二期 1室1厅 南",
    area: "番禺",
    detailplace: "东怡新区",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb31"),
    title: "整租·方圆明月山溪 1室0厅 南",
    area: "从化",
    detailplace: "温泉镇",
    square: 45,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb32"),
    title: "整租·愉景南苑 1室0厅 东/南",
    area: "海珠",
    detailplace: "新港西",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693c0f4de65fd71b6f9acb33"),
    title: "整租·龙津西路 3室1厅 东南",
    area: "荔湾",
    detailplace: "西关",
    square: 100,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175a9a"),
    title: "整租·烟墩路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175a9b"),
    title: "整租·晓港西马路 2室1厅 南",
    area: "海珠",
    detailplace: "昌岗",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175a9c"),
    title: "整租·侨诚花园 3室2厅 东南",
    area: "海珠",
    detailplace: "东晓南",
    square: 90,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175a9d"),
    title: "整租·君华香柏广场 1室0厅 南",
    area: "白云",
    detailplace: "京溪",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175a9e"),
    title: "整租·时代江岸花园 4室2厅 南",
    area: "海珠",
    detailplace: "工业大道南",
    square: 192,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("24000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175a9f"),
    title: "整租·领南星河荣誉 3室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 97,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa0"),
    title: "整租·奥园城市天地 1室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa1"),
    title: "整租·奥园城市天地 1室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa2"),
    title: "整租·南北广场 1室1厅 西南",
    area: "海珠",
    detailplace: "宝岗",
    square: 38,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa3"),
    title: "整租·人民中路 2室1厅 东",
    area: "越秀",
    detailplace: "人民路",
    square: 40,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa4"),
    title: "整租·琶洲新村公寓 1室0厅 南",
    area: "海珠",
    detailplace: "琶洲东",
    square: 38,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa5"),
    title: "整租·白云堡豪苑 7室3厅 东南",
    area: "白云",
    detailplace: "永泰",
    square: 413,
    position: "东",
    roomtype: "7室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa6"),
    title: "整租·敏捷上品公馆 2室1厅 复式 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 58,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa7"),
    title: "整租·新景豪庭 2室2厅 南",
    area: "增城",
    detailplace: "白江",
    square: 80.41,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa8"),
    title: "整租·奥园康威广场 2室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 51,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aa9"),
    title: "整租·小北路 1室1厅 南/北",
    area: "越秀",
    detailplace: "小北",
    square: 33,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aaa"),
    title: "整租·南航花园 3室2厅 南",
    area: "花都",
    detailplace: "新区",
    square: 127,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aab"),
    title: "整租·南沙碧桂园 3室2厅 错层 东南",
    area: "南沙",
    detailplace: "金洲",
    square: 129,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aac"),
    title: "整租·城投·首筑花园 3室2厅 南",
    area: "南沙",
    detailplace: "横沥",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aad"),
    title: "整租·碧桂园海湾1号 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 97,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aae"),
    title: "整租·归谷科技园 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aaf"),
    title: "整租·翠雅苑 2室1厅 西北",
    area: "天河",
    detailplace: "林和",
    square: 72,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab0"),
    title: "整租·粮所小区 4室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab1"),
    title: "整租·西湾路 2室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab2"),
    title: "整租·文明路 1室1厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 76,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab3"),
    title: "合租·保利大都汇 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 25,
    position: "东",
    roomtype: "4室0厅0卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab4"),
    title: "整租·碧桂园凤凰城凤晴苑 2室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab5"),
    title: "整租·新世界天逸 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab6"),
    title: "整租·万科金域华庭 2室1厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab7"),
    title: "整租·保利东江首府 8室3厅 复式 东/东南",
    area: "增城",
    detailplace: "新塘南",
    square: 248,
    position: "东",
    roomtype: "8室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab8"),
    title: "整租·越秀滨海御城 3室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 104.49,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ab9"),
    title: "整租·合景睿峰L7 3室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("12600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aba"),
    title: "整租·东华西路 3室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175abb"),
    title: "整租·十三甫路 1室0厅 西",
    area: "荔湾",
    detailplace: "和平西",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175abc"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 55,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175abd"),
    title: "整租·嘉裕礼顿阳光 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 39,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175abe"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175abf"),
    title: "整租·雅致花园 0室0厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: null,
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac0"),
    title: "整租·白云明珠广场 2室1厅 东南",
    area: "白云",
    detailplace: "新市",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac1"),
    title: "整租·星河江堤春晓 3室2厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac2"),
    title: "整租·广州足球公园 3室2厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 85,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac3"),
    title: "整租·广州足球公园 3室2厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 85,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac4"),
    title: "整租·珠光新城国际中心 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 37,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac5"),
    title: "整租·颐和四季公馆 1室0厅 北",
    area: "天河",
    detailplace: "粤垦",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac6"),
    title: "整租·阳光城丽景半岛 4室2厅 南/北",
    area: "南沙",
    detailplace: "进港大道",
    square: 119,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac7"),
    title: "整租·芳华花园洛涛居北区 3室1厅 北",
    area: "番禺",
    detailplace: "洛溪",
    square: 75,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac8"),
    title: "整租·明月小区 2室1厅 南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ac9"),
    title: "整租·广州奥林匹克花园 2室1厅 错层 南",
    area: "番禺",
    detailplace: "洛溪",
    square: 74,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aca"),
    title: "整租·番禺万达广场 2室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 230,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175acb"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175acc"),
    title: "整租·珠光新城御景二期 3室2厅 南/北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 119.73,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175acd"),
    title: "合租·万科海上传奇 2居室 西南卧",
    area: "荔湾",
    detailplace: "芳村",
    square: 30,
    position: "西",
    roomtype: "2室0厅2卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ace"),
    title: "整租·富力桃园 1室0厅 东南",
    area: "白云",
    detailplace: "罗冲围",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175acf"),
    title: "整租·花语水岸 1室0厅 东",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad0"),
    title: "整租·波尔多庄园 1室1厅 西南",
    area: "越秀",
    detailplace: "黄花岗",
    square: 48,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad1"),
    title: "整租·庙前西街 1室1厅 东南",
    area: "越秀",
    detailplace: "东山口",
    square: 35.82,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad2"),
    title: "整租·合景睿峰L7 3室1厅 北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 114,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad3"),
    title: "整租·阳光城悦然府 3室2厅 东北",
    area: "南沙",
    detailplace: "进港大道",
    square: 87,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad4"),
    title: "整租·海力花园 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 88,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad5"),
    title: "整租·同和云苑新村 3室1厅 南",
    area: "白云",
    detailplace: "同和",
    square: 80,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad6"),
    title: "整租·萝岗奥园广场 2室2厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 52,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad7"),
    title: "整租·归谷科技园 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad8"),
    title: "整租·翠雅苑 2室1厅 西北",
    area: "天河",
    detailplace: "林和",
    square: 72,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ad9"),
    title: "整租·粮所小区 4室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ada"),
    title: "整租·西湾路 2室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175adb"),
    title: "整租·文明路 1室1厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 76,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175adc"),
    title: "合租·保利大都汇 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 25,
    position: "东",
    roomtype: "4室0厅0卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175add"),
    title: "整租·碧桂园凤凰城凤晴苑 2室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ade"),
    title: "整租·新世界天逸 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175adf"),
    title: "整租·万科金域华庭 2室1厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae0"),
    title: "整租·保利东江首府 8室3厅 复式 东/东南",
    area: "增城",
    detailplace: "新塘南",
    square: 248,
    position: "东",
    roomtype: "8室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae1"),
    title: "整租·越秀滨海御城 3室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 104.49,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae2"),
    title: "整租·合景睿峰L7 3室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("12600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae3"),
    title: "整租·东华西路 3室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae4"),
    title: "整租·十三甫路 1室0厅 西",
    area: "荔湾",
    detailplace: "和平西",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae5"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 55,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae6"),
    title: "整租·嘉裕礼顿阳光 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 39,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae7"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae8"),
    title: "整租·雅致花园 0室0厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: null,
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175ae9"),
    title: "整租·白云明珠广场 2室1厅 东南",
    area: "白云",
    detailplace: "新市",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aea"),
    title: "整租·广州设计之都 1室1厅 东",
    area: "白云",
    detailplace: "黄边",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aeb"),
    title: "整租·绿城美的·晓风印月 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 103,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aec"),
    title: "整租·星河江堤春晓 3室2厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aed"),
    title: "整租·广州足球公园 3室2厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 85,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aee"),
    title: "整租·广州足球公园 3室2厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 85,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aef"),
    title: "整租·珠光新城国际中心 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 37,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af0"),
    title: "整租·颐和四季公馆 1室0厅 北",
    area: "天河",
    detailplace: "粤垦",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af1"),
    title: "整租·阳光城丽景半岛 4室2厅 南/北",
    area: "南沙",
    detailplace: "进港大道",
    square: 119,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af2"),
    title: "整租·芳华花园洛涛居北区 3室1厅 北",
    area: "番禺",
    detailplace: "洛溪",
    square: 75,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af3"),
    title: "整租·明月小区 2室1厅 南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af4"),
    title: "整租·广州奥林匹克花园 2室1厅 错层 南",
    area: "番禺",
    detailplace: "洛溪",
    square: 74,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af5"),
    title: "整租·番禺万达广场 2室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 230,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af6"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af7"),
    title: "整租·珠光新城御景二期 3室2厅 南/北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 119.73,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af8"),
    title: "合租·万科海上传奇 2居室 西南卧",
    area: "荔湾",
    detailplace: "芳村",
    square: 30,
    position: "西",
    roomtype: "2室0厅2卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175af9"),
    title: "整租·富力桃园 1室0厅 东南",
    area: "白云",
    detailplace: "罗冲围",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175afa"),
    title: "整租·花语水岸 1室0厅 东",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175afb"),
    title: "整租·波尔多庄园 1室1厅 西南",
    area: "越秀",
    detailplace: "黄花岗",
    square: 48,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175afc"),
    title: "整租·庙前西街 1室1厅 东南",
    area: "越秀",
    detailplace: "东山口",
    square: 35.82,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175afd"),
    title: "整租·合景睿峰L7 3室1厅 北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 114,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175afe"),
    title: "整租·阳光城悦然府 3室2厅 东北",
    area: "南沙",
    detailplace: "进港大道",
    square: 87,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175aff"),
    title: "整租·海力花园 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 88,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b00"),
    title: "整租·同和云苑新村 3室1厅 南",
    area: "白云",
    detailplace: "同和",
    square: 80,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b01"),
    title: "整租·萝岗奥园广场 2室2厅 南",
    area: "黄埔",
    detailplace: "香雪",
    square: 52,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b02"),
    title: "整租·雅居乐剑桥汇 4室2厅 南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 275,
    position: "南",
    roomtype: "4室2厅4卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b03"),
    title: "整租·逸泉山庄 3室2厅 复式 南",
    area: "从化",
    detailplace: "赤草",
    square: 144,
    position: "南",
    roomtype: "3室2厅3卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b04"),
    title: "整租·归谷科技园 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b05"),
    title: "整租·翠雅苑 2室1厅 西北",
    area: "天河",
    detailplace: "林和",
    square: 72,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b06"),
    title: "整租·粮所小区 4室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b07"),
    title: "整租·西湾路 2室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b08"),
    title: "整租·文明路 1室1厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 76,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b09"),
    title: "合租·保利大都汇 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 25,
    position: "东",
    roomtype: "4室0厅0卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b0a"),
    title: "整租·碧桂园凤凰城凤晴苑 2室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b0b"),
    title: "整租·新世界天逸 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b0c"),
    title: "整租·万科金域华庭 2室1厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b0d"),
    title: "整租·保利东江首府 8室3厅 复式 东/东南",
    area: "增城",
    detailplace: "新塘南",
    square: 248,
    position: "东",
    roomtype: "8室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b0e"),
    title: "整租·越秀滨海御城 3室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 104.49,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b0f"),
    title: "整租·合景睿峰L7 3室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("12600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b10"),
    title: "整租·东华西路 3室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b11"),
    title: "整租·十三甫路 1室0厅 西",
    area: "荔湾",
    detailplace: "和平西",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b12"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 55,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b13"),
    title: "整租·嘉裕礼顿阳光 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 39,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b14"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b15"),
    title: "整租·雅致花园 0室0厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: null,
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b16"),
    title: "整租·白云明珠广场 2室1厅 东南",
    area: "白云",
    detailplace: "新市",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b17"),
    title: "整租·广州设计之都 1室1厅 东",
    area: "白云",
    detailplace: "黄边",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b18"),
    title: "整租·绿城美的·晓风印月 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 103,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b19"),
    title: "整租·丽影华庭B区 2室1厅 北",
    area: "海珠",
    detailplace: "客村",
    square: 72,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b1a"),
    title: "整租·金海花园 2室1厅 北",
    area: "天河",
    detailplace: "龙口东",
    square: 74.25,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("4400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b1b"),
    title: "整租·奥园越时代 1室1厅 东",
    area: "番禺",
    detailplace: "广州南站",
    square: 53,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b1c"),
    title: "整租·中海橡园国际 3室2厅 西南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 100,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b1d"),
    title: "整租·锦绣香江花园布查特官邸 4室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 185,
    position: "南",
    roomtype: "4室1厅3卫",
    price: NumberInt("9900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b1e"),
    title: "整租·碧桂园云顶 4室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 126,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b1f"),
    title: "整租·中国铁建海悦国际 3室2厅 东南",
    area: "南沙",
    detailplace: "万顷沙",
    square: 100,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b20"),
    title: "整租·晓港湾 2室1厅 东南",
    area: "海珠",
    detailplace: "东晓南",
    square: 38,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b21"),
    title: "整租·洪德路 1室1厅 西",
    area: "海珠",
    detailplace: "洪德",
    square: 30,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b22"),
    title: "整租·先烈东横路11号大院 1室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b23"),
    title: "整租·东浚荔景苑 3室1厅 南",
    area: "荔湾",
    detailplace: "中山八",
    square: 83,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b24"),
    title: "整租·星河山海湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 134.35,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b25"),
    title: "整租·南园居 2室1厅 南",
    area: "海珠",
    detailplace: "琶洲中",
    square: 68,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b26"),
    title: "整租·时代天汇 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 94,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b27"),
    title: "整租·东华东路 1室0厅 西",
    area: "越秀",
    detailplace: "东川路",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b28"),
    title: "整租·东华东路 1室0厅 北",
    area: "越秀",
    detailplace: "东川路",
    square: 29,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b29"),
    title: "整租·淘金花园 1室0厅 东",
    area: "越秀",
    detailplace: "淘金",
    square: 28,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b2a"),
    title: "整租·越秀东坡 3室2厅 东南",
    area: "南沙",
    detailplace: "进港大道",
    square: 100,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b2b"),
    title: "整租·淘金花园 1室0厅 东",
    area: "越秀",
    detailplace: "淘金",
    square: 25,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b2c"),
    title: "整租·蓬莱花园 2室1厅 南",
    area: "荔湾",
    detailplace: "芳村",
    square: 76,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b2d"),
    title: "整租·领江壹号 1室0厅 南",
    area: "海珠",
    detailplace: "客村",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b2e"),
    title: "整租·新福港鼎峰 3室2厅 南/北",
    area: "黄埔",
    detailplace: "科学城",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b2f"),
    title: "整租·雅居乐海伦堡溪境花园 4室2厅 东南",
    area: "从化",
    detailplace: "江埔街",
    square: 106,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b30"),
    title: "整租·光华小区 2室1厅 南",
    area: "海珠",
    detailplace: "新港西",
    square: 68.31,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b31"),
    title: "整租·华丽公寓 1室0厅 南",
    area: "番禺",
    detailplace: "石碁",
    square: 40,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b32"),
    title: "整租·烟墩路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b33"),
    title: "整租·晓港西马路 2室1厅 南",
    area: "海珠",
    detailplace: "昌岗",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b34"),
    title: "整租·侨诚花园 3室2厅 东南",
    area: "海珠",
    detailplace: "东晓南",
    square: 90,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b35"),
    title: "整租·君华香柏广场 1室0厅 南",
    area: "白云",
    detailplace: "京溪",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b36"),
    title: "整租·时代江岸花园 4室2厅 南",
    area: "海珠",
    detailplace: "工业大道南",
    square: 192,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("24000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b37"),
    title: "整租·领南星河荣誉 3室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 97,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b38"),
    title: "整租·奥园城市天地 1室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b39"),
    title: "整租·奥园城市天地 1室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("8000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b3a"),
    title: "整租·南北广场 1室1厅 西南",
    area: "海珠",
    detailplace: "宝岗",
    square: 38,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b3b"),
    title: "整租·人民中路 2室1厅 东",
    area: "越秀",
    detailplace: "人民路",
    square: 40,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b3c"),
    title: "整租·琶洲新村公寓 1室0厅 南",
    area: "海珠",
    detailplace: "琶洲东",
    square: 38,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("3900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b3d"),
    title: "整租·白云堡豪苑 7室3厅 东南",
    area: "白云",
    detailplace: "永泰",
    square: 413,
    position: "东",
    roomtype: "7室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b3e"),
    title: "整租·敏捷上品公馆 2室1厅 复式 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 58,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b3f"),
    title: "整租·新景豪庭 2室2厅 南",
    area: "增城",
    detailplace: "白江",
    square: 80.41,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b40"),
    title: "整租·奥园康威广场 2室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 51,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b41"),
    title: "整租·小北路 1室1厅 南/北",
    area: "越秀",
    detailplace: "小北",
    square: 33,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b42"),
    title: "整租·南航花园 3室2厅 南",
    area: "花都",
    detailplace: "新区",
    square: 127,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b43"),
    title: "整租·南沙碧桂园 3室2厅 错层 东南",
    area: "南沙",
    detailplace: "金洲",
    square: 129,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b44"),
    title: "整租·城投·首筑花园 3室2厅 南",
    area: "南沙",
    detailplace: "横沥",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b45"),
    title: "整租·碧桂园海湾1号 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 97,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b46"),
    title: "整租·恒大山水郡 3室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 112.99,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b47"),
    title: "整租·江南花园 2室1厅 南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 84,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b48"),
    title: "整租·雅居乐富春山居 5室2厅 东南",
    area: "黄埔",
    detailplace: "科学城",
    square: 198,
    position: "东",
    roomtype: "5室2厅3卫",
    price: NumberInt("15000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b49"),
    title: "整租·越秀中国铁建南投海语天悦湾 3室2厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 96,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b4a"),
    title: "整租·方圆明月山溪 1室2厅 南/北",
    area: "从化",
    detailplace: "温泉镇",
    square: 59,
    position: "南",
    roomtype: "1室2厅1卫",
    price: NumberInt("1350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b4b"),
    title: "整租·领悦公馆 4室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 104,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b4c"),
    title: "合租·海角楼 4居室 东卧",
    area: "天河",
    detailplace: "体育中心",
    square: 20,
    position: "东",
    roomtype: "4室0厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b4d"),
    title: "整租·高雅湾 3室2厅 东/西",
    area: "海珠",
    detailplace: "滨江东",
    square: 137,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("9800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b4e"),
    title: "整租·保利天悦公寓 1室0厅 南/北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 18,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b4f"),
    title: "整租·绿城美的·晓风印月 3室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 107,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b50"),
    title: "整租·敏捷绿湖首府三期 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b51"),
    title: "整租·富泽园 3室2厅 西南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 90.54,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b52"),
    title: "整租·敏捷四季花园 3室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 94,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b53"),
    title: "整租·美的江上沄启 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b54"),
    title: "整租·汇金国际金融中心 2室2厅 南",
    area: "天河",
    detailplace: "金融城",
    square: 78,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("8600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b55"),
    title: "整租·怡居新村 2室2厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 75,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b56"),
    title: "整租·碧桂园豪进左岸 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 102,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b57"),
    title: "整租·亚运城天峯3区 3室2厅 东南",
    area: "番禺",
    detailplace: "亚运城",
    square: 103,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b58"),
    title: "整租·银通花园 1室0厅 南",
    area: "白云",
    detailplace: "机场路",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b59"),
    title: "整租·德怡居 2室1厅 东南",
    area: "海珠",
    detailplace: "昌岗",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b5a"),
    title: "整租·白云高尔夫花园东区 2室1厅 东",
    area: "白云",
    detailplace: "黄石",
    square: 26,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b5b"),
    title: "整租·星河山海湾 3室2厅 西南",
    area: "南沙",
    detailplace: "南沙港",
    square: 115,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b5c"),
    title: "合租·珠江帝景苑 4居室 西北/北卧",
    area: "海珠",
    detailplace: "广州塔",
    square: 20,
    position: "西",
    roomtype: "4室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b5d"),
    title: "整租·归谷科技园 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b5e"),
    title: "整租·翠雅苑 2室1厅 西北",
    area: "天河",
    detailplace: "林和",
    square: 72,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b5f"),
    title: "整租·粮所小区 4室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b60"),
    title: "整租·西湾路 2室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b61"),
    title: "整租·文明路 1室1厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 76,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b62"),
    title: "合租·保利大都汇 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 25,
    position: "东",
    roomtype: "4室0厅0卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b63"),
    title: "整租·碧桂园凤凰城凤晴苑 2室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b64"),
    title: "整租·新世界天逸 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b65"),
    title: "整租·万科金域华庭 2室1厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b66"),
    title: "整租·保利东江首府 8室3厅 复式 东/东南",
    area: "增城",
    detailplace: "新塘南",
    square: 248,
    position: "东",
    roomtype: "8室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b67"),
    title: "整租·越秀滨海御城 3室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 104.49,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b68"),
    title: "整租·合景睿峰L7 3室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("12600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b69"),
    title: "整租·东华西路 3室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b6a"),
    title: "整租·十三甫路 1室0厅 西",
    area: "荔湾",
    detailplace: "和平西",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b6b"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 55,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb1ac1784906e15175b6c"),
    title: "整租·嘉裕礼顿阳光 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 39,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e3c"),
    title: "整租·归谷科技园 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e3d"),
    title: "整租·翠雅苑 2室1厅 西北",
    area: "天河",
    detailplace: "林和",
    square: 72,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e3e"),
    title: "整租·粮所小区 4室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e3f"),
    title: "整租·西湾路 2室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e40"),
    title: "整租·文明路 1室1厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 76,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e41"),
    title: "合租·保利大都汇 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 25,
    position: "东",
    roomtype: "4室0厅0卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e42"),
    title: "整租·碧桂园凤凰城凤晴苑 2室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e43"),
    title: "整租·新世界天逸 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e44"),
    title: "整租·万科金域华庭 2室1厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e45"),
    title: "整租·保利东江首府 8室3厅 复式 东/东南",
    area: "增城",
    detailplace: "新塘南",
    square: 248,
    position: "东",
    roomtype: "8室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e46"),
    title: "整租·越秀滨海御城 3室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 104.49,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e47"),
    title: "整租·合景睿峰L7 3室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("12600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e48"),
    title: "整租·东华西路 3室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e49"),
    title: "整租·十三甫路 1室0厅 西",
    area: "荔湾",
    detailplace: "和平西",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e4a"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 55,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e4b"),
    title: "整租·嘉裕礼顿阳光 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 39,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e4c"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e4d"),
    title: "整租·雅致花园 0室0厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: null,
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e4e"),
    title: "整租·白云明珠广场 2室1厅 东南",
    area: "白云",
    detailplace: "新市",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e4f"),
    title: "整租·广州设计之都 1室1厅 东",
    area: "白云",
    detailplace: "黄边",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e50"),
    title: "整租·绿城美的·晓风印月 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 103,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e51"),
    title: "整租·丽影华庭B区 2室1厅 北",
    area: "海珠",
    detailplace: "客村",
    square: 72,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e52"),
    title: "整租·归谷科技园 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e53"),
    title: "整租·翠雅苑 2室1厅 西北",
    area: "天河",
    detailplace: "林和",
    square: 72,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e54"),
    title: "整租·粮所小区 4室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e55"),
    title: "整租·西湾路 2室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e56"),
    title: "整租·文明路 1室1厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 76,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e57"),
    title: "合租·保利大都汇 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 25,
    position: "东",
    roomtype: "4室0厅0卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e58"),
    title: "整租·碧桂园凤凰城凤晴苑 2室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e59"),
    title: "整租·新世界天逸 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e5a"),
    title: "整租·万科金域华庭 2室1厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e5b"),
    title: "整租·保利东江首府 8室3厅 复式 东/东南",
    area: "增城",
    detailplace: "新塘南",
    square: 248,
    position: "东",
    roomtype: "8室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e5c"),
    title: "整租·越秀滨海御城 3室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 104.49,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e5d"),
    title: "整租·合景睿峰L7 3室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("12600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e5e"),
    title: "整租·东华西路 3室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e5f"),
    title: "整租·十三甫路 1室0厅 西",
    area: "荔湾",
    detailplace: "和平西",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e60"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 55,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e61"),
    title: "整租·嘉裕礼顿阳光 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 39,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e62"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e63"),
    title: "整租·雅致花园 0室0厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: null,
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e64"),
    title: "整租·方圆明月山溪 1室2厅 南/北",
    area: "从化",
    detailplace: "温泉镇",
    square: 59,
    position: "南",
    roomtype: "1室2厅1卫",
    price: NumberInt("1350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e65"),
    title: "整租·领悦公馆 4室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 104,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e66"),
    title: "合租·海角楼 4居室 东卧",
    area: "天河",
    detailplace: "体育中心",
    square: 20,
    position: "东",
    roomtype: "4室0厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e67"),
    title: "整租·高雅湾 3室2厅 东/西",
    area: "海珠",
    detailplace: "滨江东",
    square: 137,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("9800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e68"),
    title: "整租·保利天悦公寓 1室0厅 南/北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 18,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e69"),
    title: "整租·绿城美的·晓风印月 3室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 107,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e6a"),
    title: "整租·敏捷绿湖首府三期 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e6b"),
    title: "整租·富泽园 3室2厅 西南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 90.54,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e6c"),
    title: "整租·敏捷四季花园 3室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 94,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e6d"),
    title: "整租·美的江上沄启 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e6e"),
    title: "整租·汇金国际金融中心 2室2厅 南",
    area: "天河",
    detailplace: "金融城",
    square: 78,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("8600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e6f"),
    title: "整租·怡居新村 2室2厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 75,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e70"),
    title: "整租·碧桂园豪进左岸 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 102,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e71"),
    title: "整租·亚运城天峯3区 3室2厅 东南",
    area: "番禺",
    detailplace: "亚运城",
    square: 103,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e72"),
    title: "整租·银通花园 1室0厅 南",
    area: "白云",
    detailplace: "机场路",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e73"),
    title: "整租·德怡居 2室1厅 东南",
    area: "海珠",
    detailplace: "昌岗",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e74"),
    title: "整租·白云高尔夫花园东区 2室1厅 东",
    area: "白云",
    detailplace: "黄石",
    square: 26,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e75"),
    title: "整租·星河山海湾 3室2厅 西南",
    area: "南沙",
    detailplace: "南沙港",
    square: 115,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e76"),
    title: "合租·珠江帝景苑 4居室 西北/北卧",
    area: "海珠",
    detailplace: "广州塔",
    square: 20,
    position: "西",
    roomtype: "4室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e77"),
    title: "整租·培正路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 85,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e78"),
    title: "整租·合景誉山国际三区 4室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 141.72,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e79"),
    title: "整租·中惠·睿元 5室2厅 跃层 南",
    area: "天河",
    detailplace: "智慧城",
    square: 132.9,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e7a"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 13,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e7b"),
    title: "整租·方圆明月山溪 1室2厅 南/北",
    area: "从化",
    detailplace: "温泉镇",
    square: 59,
    position: "南",
    roomtype: "1室2厅1卫",
    price: NumberInt("1350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e7c"),
    title: "整租·领悦公馆 4室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 104,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e7d"),
    title: "合租·海角楼 4居室 东卧",
    area: "天河",
    detailplace: "体育中心",
    square: 20,
    position: "东",
    roomtype: "4室0厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e7e"),
    title: "整租·高雅湾 3室2厅 东/西",
    area: "海珠",
    detailplace: "滨江东",
    square: 137,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("9800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e7f"),
    title: "整租·保利天悦公寓 1室0厅 南/北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 18,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e80"),
    title: "整租·绿城美的·晓风印月 3室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 107,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e81"),
    title: "整租·敏捷绿湖首府三期 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e82"),
    title: "整租·富泽园 3室2厅 西南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 90.54,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e83"),
    title: "整租·敏捷四季花园 3室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 94,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e84"),
    title: "整租·美的江上沄启 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e85"),
    title: "整租·汇金国际金融中心 2室2厅 南",
    area: "天河",
    detailplace: "金融城",
    square: 78,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("8600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e86"),
    title: "整租·怡居新村 2室2厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 75,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e87"),
    title: "整租·碧桂园豪进左岸 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 102,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e88"),
    title: "整租·亚运城天峯3区 3室2厅 东南",
    area: "番禺",
    detailplace: "亚运城",
    square: 103,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e89"),
    title: "整租·银通花园 1室0厅 南",
    area: "白云",
    detailplace: "机场路",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e8a"),
    title: "整租·德怡居 2室1厅 东南",
    area: "海珠",
    detailplace: "昌岗",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e8b"),
    title: "整租·白云高尔夫花园东区 2室1厅 东",
    area: "白云",
    detailplace: "黄石",
    square: 26,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e8c"),
    title: "整租·星河山海湾 3室2厅 西南",
    area: "南沙",
    detailplace: "南沙港",
    square: 115,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e8d"),
    title: "合租·珠江帝景苑 4居室 西北/北卧",
    area: "海珠",
    detailplace: "广州塔",
    square: 20,
    position: "西",
    roomtype: "4室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e8e"),
    title: "整租·培正路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 85,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e8f"),
    title: "整租·合景誉山国际三区 4室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 141.72,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e90"),
    title: "整租·中惠·睿元 5室2厅 跃层 南",
    area: "天河",
    detailplace: "智慧城",
    square: 132.9,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e91"),
    title: "整租·方圆明月山溪 1室2厅 南/北",
    area: "从化",
    detailplace: "温泉镇",
    square: 59,
    position: "南",
    roomtype: "1室2厅1卫",
    price: NumberInt("1350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e92"),
    title: "整租·领悦公馆 4室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 104,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e93"),
    title: "合租·海角楼 4居室 东卧",
    area: "天河",
    detailplace: "体育中心",
    square: 20,
    position: "东",
    roomtype: "4室0厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e94"),
    title: "整租·高雅湾 3室2厅 东/西",
    area: "海珠",
    detailplace: "滨江东",
    square: 137,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("9800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e95"),
    title: "整租·保利天悦公寓 1室0厅 南/北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 18,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e96"),
    title: "整租·绿城美的·晓风印月 3室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 107,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e97"),
    title: "整租·敏捷绿湖首府三期 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e98"),
    title: "整租·富泽园 3室2厅 西南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 90.54,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e99"),
    title: "整租·敏捷四季花园 3室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 94,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e9a"),
    title: "整租·美的江上沄启 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e9b"),
    title: "整租·汇金国际金融中心 2室2厅 南",
    area: "天河",
    detailplace: "金融城",
    square: 78,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("8600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e9c"),
    title: "整租·怡居新村 2室2厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 75,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e9d"),
    title: "整租·碧桂园豪进左岸 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 102,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e9e"),
    title: "整租·亚运城天峯3区 3室2厅 东南",
    area: "番禺",
    detailplace: "亚运城",
    square: 103,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309e9f"),
    title: "整租·银通花园 1室0厅 南",
    area: "白云",
    detailplace: "机场路",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea0"),
    title: "整租·德怡居 2室1厅 东南",
    area: "海珠",
    detailplace: "昌岗",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea1"),
    title: "整租·白云高尔夫花园东区 2室1厅 东",
    area: "白云",
    detailplace: "黄石",
    square: 26,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea2"),
    title: "整租·星河山海湾 3室2厅 西南",
    area: "南沙",
    detailplace: "南沙港",
    square: 115,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea3"),
    title: "合租·珠江帝景苑 4居室 西北/北卧",
    area: "海珠",
    detailplace: "广州塔",
    square: 20,
    position: "西",
    roomtype: "4室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea4"),
    title: "整租·培正路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 85,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea5"),
    title: "整租·合景誉山国际三区 4室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 141.72,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea6"),
    title: "整租·中惠·睿元 5室2厅 跃层 南",
    area: "天河",
    detailplace: "智慧城",
    square: 132.9,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("18000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea7"),
    title: "整租·星河江堤春晓 3室2厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea8"),
    title: "整租·广州足球公园 3室2厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 85,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ea9"),
    title: "整租·广州足球公园 3室2厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 85,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eaa"),
    title: "整租·珠光新城国际中心 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 37,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eab"),
    title: "整租·颐和四季公馆 1室0厅 北",
    area: "天河",
    detailplace: "粤垦",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eac"),
    title: "整租·阳光城丽景半岛 4室2厅 南/北",
    area: "南沙",
    detailplace: "进港大道",
    square: 119,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ead"),
    title: "整租·芳华花园洛涛居北区 3室1厅 北",
    area: "番禺",
    detailplace: "洛溪",
    square: 75,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eae"),
    title: "整租·明月小区 2室1厅 南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eaf"),
    title: "整租·广州奥林匹克花园 2室1厅 错层 南",
    area: "番禺",
    detailplace: "洛溪",
    square: 74,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb0"),
    title: "整租·番禺万达广场 2室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 230,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb1"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb2"),
    title: "整租·珠光新城御景二期 3室2厅 南/北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 119.73,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb3"),
    title: "合租·万科海上传奇 2居室 西南卧",
    area: "荔湾",
    detailplace: "芳村",
    square: 30,
    position: "西",
    roomtype: "2室0厅2卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb4"),
    title: "整租·富力桃园 1室0厅 东南",
    area: "白云",
    detailplace: "罗冲围",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb5"),
    title: "整租·花语水岸 1室0厅 东",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb6"),
    title: "整租·波尔多庄园 1室1厅 西南",
    area: "越秀",
    detailplace: "黄花岗",
    square: 48,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb7"),
    title: "整租·庙前西街 1室1厅 东南",
    area: "越秀",
    detailplace: "东山口",
    square: 35.82,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb8"),
    title: "整租·归谷科技园 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eb9"),
    title: "整租·翠雅苑 2室1厅 西北",
    area: "天河",
    detailplace: "林和",
    square: 72,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eba"),
    title: "整租·粮所小区 4室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ebb"),
    title: "整租·西湾路 2室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ebc"),
    title: "整租·文明路 1室1厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 76,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ebd"),
    title: "合租·保利大都汇 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 25,
    position: "东",
    roomtype: "4室0厅0卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ebe"),
    title: "整租·碧桂园凤凰城凤晴苑 2室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ebf"),
    title: "整租·新世界天逸 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec0"),
    title: "整租·万科金域华庭 2室1厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec1"),
    title: "整租·保利东江首府 8室3厅 复式 东/东南",
    area: "增城",
    detailplace: "新塘南",
    square: 248,
    position: "东",
    roomtype: "8室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec2"),
    title: "整租·越秀滨海御城 3室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 104.49,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec3"),
    title: "整租·合景睿峰L7 3室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("12600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec4"),
    title: "整租·东华西路 3室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec5"),
    title: "整租·十三甫路 1室0厅 西",
    area: "荔湾",
    detailplace: "和平西",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec6"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 55,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec7"),
    title: "整租·嘉裕礼顿阳光 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 39,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec8"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ec9"),
    title: "整租·雅致花园 0室0厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: null,
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eca"),
    title: "整租·白云明珠广场 2室1厅 东南",
    area: "白云",
    detailplace: "新市",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ecb"),
    title: "整租·星河江堤春晓 3室2厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 100,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ecc"),
    title: "整租·广州足球公园 3室2厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 85,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ecd"),
    title: "整租·广州足球公园 3室2厅 东",
    area: "番禺",
    detailplace: "钟村",
    square: 85,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ece"),
    title: "整租·珠光新城国际中心 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 37,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ecf"),
    title: "整租·颐和四季公馆 1室0厅 北",
    area: "天河",
    detailplace: "粤垦",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed0"),
    title: "整租·阳光城丽景半岛 4室2厅 南/北",
    area: "南沙",
    detailplace: "进港大道",
    square: 119,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed1"),
    title: "整租·芳华花园洛涛居北区 3室1厅 北",
    area: "番禺",
    detailplace: "洛溪",
    square: 75,
    position: "北",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed2"),
    title: "整租·明月小区 2室1厅 南/北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed3"),
    title: "整租·广州奥林匹克花园 2室1厅 错层 南",
    area: "番禺",
    detailplace: "洛溪",
    square: 74,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed4"),
    title: "整租·番禺万达广场 2室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 230,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed5"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed6"),
    title: "整租·珠光新城御景二期 3室2厅 南/北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 119.73,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed7"),
    title: "合租·万科海上传奇 2居室 西南卧",
    area: "荔湾",
    detailplace: "芳村",
    square: 30,
    position: "西",
    roomtype: "2室0厅2卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed8"),
    title: "整租·富力桃园 1室0厅 东南",
    area: "白云",
    detailplace: "罗冲围",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ed9"),
    title: "整租·花语水岸 1室0厅 东",
    area: "荔湾",
    detailplace: "大坦沙",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eda"),
    title: "整租·波尔多庄园 1室1厅 西南",
    area: "越秀",
    detailplace: "黄花岗",
    square: 48,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309edb"),
    title: "整租·庙前西街 1室1厅 东南",
    area: "越秀",
    detailplace: "东山口",
    square: 35.82,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309edc"),
    title: "整租·合景睿峰L7 3室1厅 北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 114,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309edd"),
    title: "整租·阳光城悦然府 3室2厅 东北",
    area: "南沙",
    detailplace: "进港大道",
    square: 87,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ede"),
    title: "整租·海力花园 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 88,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309edf"),
    title: "整租·同和云苑新村 3室1厅 南",
    area: "白云",
    detailplace: "同和",
    square: 80,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee0"),
    title: "整租·方圆明月山溪 1室2厅 南/北",
    area: "从化",
    detailplace: "温泉镇",
    square: 59,
    position: "南",
    roomtype: "1室2厅1卫",
    price: NumberInt("1350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee1"),
    title: "整租·领悦公馆 4室1厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 104,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee2"),
    title: "合租·海角楼 4居室 东卧",
    area: "天河",
    detailplace: "体育中心",
    square: 20,
    position: "东",
    roomtype: "4室0厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee3"),
    title: "整租·高雅湾 3室2厅 东/西",
    area: "海珠",
    detailplace: "滨江东",
    square: 137,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("9800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee4"),
    title: "整租·保利天悦公寓 1室0厅 南/北",
    area: "海珠",
    detailplace: "琶洲东",
    square: 18,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee5"),
    title: "整租·绿城美的·晓风印月 3室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 107,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee6"),
    title: "整租·敏捷绿湖首府三期 3室2厅 东北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee7"),
    title: "整租·富泽园 3室2厅 西南",
    area: "海珠",
    detailplace: "工业大道北",
    square: 90.54,
    position: "西",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee8"),
    title: "整租·敏捷四季花园 3室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 94,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ee9"),
    title: "整租·美的江上沄启 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 90,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eea"),
    title: "整租·汇金国际金融中心 2室2厅 南",
    area: "天河",
    detailplace: "金融城",
    square: 78,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("8600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eeb"),
    title: "整租·怡居新村 2室2厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 75,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eec"),
    title: "整租·碧桂园豪进左岸 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 102,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eed"),
    title: "整租·亚运城天峯3区 3室2厅 东南",
    area: "番禺",
    detailplace: "亚运城",
    square: 103,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eee"),
    title: "整租·银通花园 1室0厅 南",
    area: "白云",
    detailplace: "机场路",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eef"),
    title: "整租·德怡居 2室1厅 东南",
    area: "海珠",
    detailplace: "昌岗",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef0"),
    title: "整租·白云高尔夫花园东区 2室1厅 东",
    area: "白云",
    detailplace: "黄石",
    square: 26,
    position: "东",
    roomtype: "2室1厅0卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef1"),
    title: "整租·星河山海湾 3室2厅 西南",
    area: "南沙",
    detailplace: "南沙港",
    square: 115,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef2"),
    title: "合租·珠江帝景苑 4居室 西北/北卧",
    area: "海珠",
    detailplace: "广州塔",
    square: 20,
    position: "西",
    roomtype: "4室2厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef3"),
    title: "整租·培正路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 85,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef4"),
    title: "整租·归谷科技园 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 58,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef5"),
    title: "整租·翠雅苑 2室1厅 西北",
    area: "天河",
    detailplace: "林和",
    square: 72,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef6"),
    title: "整租·粮所小区 4室2厅 南/北",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "4室2厅1卫",
    price: NumberInt("1100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef7"),
    title: "整租·西湾路 2室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef8"),
    title: "整租·文明路 1室1厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 76,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("9500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309ef9"),
    title: "合租·保利大都汇 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 25,
    position: "东",
    roomtype: "4室0厅0卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309efa"),
    title: "整租·碧桂园凤凰城凤晴苑 2室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 80,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309efb"),
    title: "整租·新世界天逸 1室0厅 南",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309efc"),
    title: "整租·万科金域华庭 2室1厅 东南",
    area: "海珠",
    detailplace: "同福",
    square: 68,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309efd"),
    title: "整租·保利东江首府 8室3厅 复式 东/东南",
    area: "增城",
    detailplace: "新塘南",
    square: 248,
    position: "东",
    roomtype: "8室3厅6卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309efe"),
    title: "整租·越秀滨海御城 3室2厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 104.49,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309eff"),
    title: "整租·合景睿峰L7 3室1厅 西南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 109,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("12600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309f00"),
    title: "整租·东华西路 3室1厅 东",
    area: "越秀",
    detailplace: "东川路",
    square: 80,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309f01"),
    title: "整租·十三甫路 1室0厅 西",
    area: "荔湾",
    detailplace: "和平西",
    square: 30,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309f02"),
    title: "整租·富力盈丰大厦 1室1厅 南",
    area: "天河",
    detailplace: "珠江新城西",
    square: 55,
    position: "南",
    roomtype: "1室1厅2卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309f03"),
    title: "整租·嘉裕礼顿阳光 1室0厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 39,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693eb47febc0e8b7ae309f04"),
    title: "整租·奥园城市天地 1室1厅 西南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30726c"),
    title: "整租·碧桂园天玺湾 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30726d"),
    title: "整租·南沙珠江湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 99,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30726e"),
    title: "整租·翠城花园 1室0厅 东南",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30726f"),
    title: "整租·锦绣香江花园芙蓉园 6室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 665.1,
    position: "南",
    roomtype: "6室2厅4卫",
    price: NumberInt("60000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307270"),
    title: "整租·敏捷尚品国际 2室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 59,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1454")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307271"),
    title: "整租·商业大道 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 120,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307272"),
    title: "整租·同和街综治信访维稳中心宿舍楼 3室2厅 南",
    area: "白云",
    detailplace: "同和",
    square: 95,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307273"),
    title: "整租·广州绿地中央广场 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 53,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307274"),
    title: "整租·沙和路 3室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 74.8,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1840")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307275"),
    title: "整租·建设北路 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 63,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307276"),
    title: "整租·淘金路 1室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 28,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307277"),
    title: "整租·先烈中路 1室1厅 东",
    area: "越秀",
    detailplace: "黄花岗",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307278"),
    title: "整租·南沙珠江湾 3室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 143.71,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307279"),
    title: "整租·六二三路 1室1厅 南",
    area: "荔湾",
    detailplace: "和平西",
    square: 57,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30727a"),
    title: "整租·珠江花城一二期 5室2厅 南",
    area: "天河",
    detailplace: "黄村",
    square: 139,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("7200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30727b"),
    title: "整租·中交汇通中心 1室1厅 东南/南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30727c"),
    title: "整租·中交汇通中心 1室0厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 50,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30727d"),
    title: "整租·富力公园28 4室3厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 263.09,
    position: "南",
    roomtype: "4室3厅3卫",
    price: NumberInt("21150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30727e"),
    title: "整租·擎山苑 2室1厅 东南/南",
    area: "白云",
    detailplace: "梅花园",
    square: 85,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30727f"),
    title: "整租·富力泉天下 8室2厅 东南/南",
    area: "从化",
    detailplace: "温泉镇",
    square: 410,
    position: "东",
    roomtype: "8室2厅4卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307280"),
    title: "整租·碧桂园天玺湾 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307281"),
    title: "整租·南沙珠江湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 99,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307282"),
    title: "整租·翠城花园 1室0厅 东南",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307283"),
    title: "整租·锦绣香江花园芙蓉园 6室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 665.1,
    position: "南",
    roomtype: "6室2厅4卫",
    price: NumberInt("60000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307284"),
    title: "整租·敏捷尚品国际 2室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 59,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1454")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307285"),
    title: "整租·商业大道 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 120,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307286"),
    title: "整租·同和街综治信访维稳中心宿舍楼 3室2厅 南",
    area: "白云",
    detailplace: "同和",
    square: 95,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307287"),
    title: "整租·广州绿地中央广场 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 53,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307288"),
    title: "整租·沙和路 3室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 74.8,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1840")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307289"),
    title: "整租·建设北路 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 63,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30728a"),
    title: "整租·淘金路 1室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 28,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30728b"),
    title: "整租·先烈中路 1室1厅 东",
    area: "越秀",
    detailplace: "黄花岗",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30728c"),
    title: "整租·南沙珠江湾 3室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 143.71,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30728d"),
    title: "整租·六二三路 1室1厅 南",
    area: "荔湾",
    detailplace: "和平西",
    square: 57,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30728e"),
    title: "整租·珠江花城一二期 5室2厅 南",
    area: "天河",
    detailplace: "黄村",
    square: 139,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("7200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30728f"),
    title: "整租·远洋天骄 1室0厅 东南",
    area: "天河",
    detailplace: "天河客运站",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307290"),
    title: "整租·敏捷华美国际 1室1厅 南",
    area: "番禺",
    detailplace: "大石",
    square: 51,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307291"),
    title: "整租·南沙涉外公馆 2室1厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 53,
    position: "南",
    roomtype: "2室1厅2卫",
    price: NumberInt("1250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307292"),
    title: "整租·十年小雅 1室0厅 南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 13,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307293"),
    title: "整租·南雅苑 3室1厅 南/北",
    area: "天河",
    detailplace: "天河南",
    square: 83,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307294"),
    title: "整租·113中学宿舍 3室2厅 东南",
    area: "天河",
    detailplace: "龙口东",
    square: 80,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307295"),
    title: "整租·新安大厦 2室1厅 东北",
    area: "海珠",
    detailplace: "昌岗",
    square: 80,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307296"),
    title: "整租·奥园中新城市天地 3室1厅 东南",
    area: "增城",
    detailplace: "中新镇",
    square: 87,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307297"),
    title: "整租·富力城北区 1室0厅 南",
    area: "白云",
    detailplace: "夏茅",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307298"),
    title: "整租·俊怡御景花园 3室2厅 南",
    area: "花都",
    detailplace: "花城街",
    square: 145.6,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307299"),
    title: "整租·保利大都汇 2室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 68,
    position: "南",
    roomtype: "2室1厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30729a"),
    title: "整租·碧桂园假日半岛映翠苑 3室2厅 南/北",
    area: "花都",
    detailplace: "山前大道",
    square: 95.21,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30729b"),
    title: "整租·时代印记 3室2厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 105,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30729c"),
    title: "整租·艺景明苑 3室2厅 南",
    area: "花都",
    detailplace: "铁路西",
    square: 118,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30729d"),
    title: "整租·广州雅居乐花园雅逸庭 1室0厅 南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 11,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30729e"),
    title: "整租·广雅后街 1室1厅 南",
    area: "荔湾",
    detailplace: "西村",
    square: 35,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc30729f"),
    title: "整租·侨怡苑 2室1厅 东南/南",
    area: "天河",
    detailplace: "体育中心",
    square: 87,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("5400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a0"),
    title: "整租·南沙湾东苑 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 90,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a1"),
    title: "整租·濂泉路 3室2厅 南",
    area: "天河",
    detailplace: "沙河",
    square: 95,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a2"),
    title: "整租·协和新世界 1室0厅 南",
    area: "天河",
    detailplace: "天润路",
    square: 11.8,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a3"),
    title: "整租·合景誉山国际三区 3室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 101,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a4"),
    title: "整租·恒大山水郡 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 128,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a5"),
    title: "整租·品秀星樾 4室2厅 东",
    area: "黄埔",
    detailplace: "香雪",
    square: 115,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("5450")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a6"),
    title: "整租·增槎路 1室1厅 南",
    area: "白云",
    detailplace: "罗冲围",
    square: 36,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a7"),
    title: "整租·增槎路 1室1厅 北",
    area: "白云",
    detailplace: "罗冲围",
    square: 51,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a8"),
    title: "整租·时代南湾 3室2厅 东南/南",
    area: "南沙",
    detailplace: "南沙港",
    square: 127,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072a9"),
    title: "整租·中交汇通中心 2室1厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 54,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072aa"),
    title: "合租·越秀国际总部广场 2居室 西卧",
    area: "南沙",
    detailplace: "金洲",
    square: 30,
    position: "西",
    roomtype: "2室2厅2卫",
    price: NumberInt("1550")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ab"),
    title: "整租·中海花城湾 1室1厅 东/东南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 12,
    position: "东",
    roomtype: "1室1厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ac"),
    title: "整租·碧桂园琥珀湾 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 98,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ad"),
    title: "整租·碧桂园豪进左岸 3室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 102,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ae"),
    title: "整租·绿城美的·晓风印月 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 125,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072af"),
    title: "整租·兴隆北路 2室1厅 南/西",
    area: "荔湾",
    detailplace: "人民路",
    square: 53,
    position: "南",
    roomtype: "2室1厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b0"),
    title: "整租·增槎路 1室0厅 南",
    area: "白云",
    detailplace: "罗冲围",
    square: 41,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("2250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b1"),
    title: "整租·碧桂园天玺湾 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b2"),
    title: "整租·南沙珠江湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 99,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b3"),
    title: "整租·翠城花园 1室0厅 东南",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b4"),
    title: "整租·锦绣香江花园芙蓉园 6室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 665.1,
    position: "南",
    roomtype: "6室2厅4卫",
    price: NumberInt("60000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b5"),
    title: "整租·敏捷尚品国际 2室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 59,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1454")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b6"),
    title: "整租·商业大道 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 120,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b7"),
    title: "整租·同和街综治信访维稳中心宿舍楼 3室2厅 南",
    area: "白云",
    detailplace: "同和",
    square: 95,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b8"),
    title: "整租·广州绿地中央广场 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 53,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072b9"),
    title: "整租·沙和路 3室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 74.8,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1840")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ba"),
    title: "整租·建设北路 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 63,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072bb"),
    title: "整租·淘金路 1室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 28,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072bc"),
    title: "整租·先烈中路 1室1厅 东",
    area: "越秀",
    detailplace: "黄花岗",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072bd"),
    title: "整租·南沙珠江湾 3室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 143.71,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072be"),
    title: "整租·六二三路 1室1厅 南",
    area: "荔湾",
    detailplace: "和平西",
    square: 57,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072bf"),
    title: "整租·珠江花城一二期 5室2厅 南",
    area: "天河",
    detailplace: "黄村",
    square: 139,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("7200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c0"),
    title: "整租·中交汇通中心 1室1厅 东南/南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c1"),
    title: "整租·中交汇通中心 1室0厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 50,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c2"),
    title: "整租·富力公园28 4室3厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 263.09,
    position: "南",
    roomtype: "4室3厅3卫",
    price: NumberInt("21150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c3"),
    title: "整租·擎山苑 2室1厅 东南/南",
    area: "白云",
    detailplace: "梅花园",
    square: 85,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c4"),
    title: "整租·富力泉天下 8室2厅 东南/南",
    area: "从化",
    detailplace: "温泉镇",
    square: 410,
    position: "东",
    roomtype: "8室2厅4卫",
    price: NumberInt("12000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c5"),
    title: "整租·星河山海湾 4室2厅 东/东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 136,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c6"),
    title: "整租·广州敏捷绿湖首府 3室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 84,
    position: "北",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c7"),
    title: "整租·合景睿峰L7 1室0厅 东南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c8"),
    title: "整租·富力半岛 1室0厅 东",
    area: "白云",
    detailplace: "罗冲围",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072c9"),
    title: "整租·白马花园 2室2厅 南",
    area: "天河",
    detailplace: "员村",
    square: 68,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ca"),
    title: "整租·金沙湾花园 5室2厅 南",
    area: "番禺",
    detailplace: "沙湾",
    square: 182,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072cb"),
    title: "整租·新世界嘉云府 1室0厅 南/北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072cc"),
    title: "整租·南沙湾御苑 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 134,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072cd"),
    title: "合租·南粤阁 2居室 东南/南卧",
    area: "天河",
    detailplace: "林和",
    square: 20,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ce"),
    title: "整租·顺德碧桂园彩虹居 4室2厅 复式 南/北",
    area: "番禺",
    detailplace: "顺德碧桂园",
    square: 186.3,
    position: "南",
    roomtype: "4室2厅4卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072cf"),
    title: "整租·岭南新世界 1室0厅 东",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12.5,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d0"),
    title: "整租·越秀中路 1室0厅 南",
    area: "越秀",
    detailplace: "农讲所",
    square: 21,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d1"),
    title: "整租·中建弘阳德信湾璟壹号 4室1厅 东南",
    area: "南沙",
    detailplace: "万顷沙",
    square: 108,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("2350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d2"),
    title: "整租·广州雅居乐花园雅逸庭 1室0厅 东南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 11.8,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d3"),
    title: "整租·远洋天骄广场 1室1厅 东南",
    area: "天河",
    detailplace: "天河客运站",
    square: 68,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d4"),
    title: "整租·富力爱丁堡国际公寓 1室1厅 东",
    area: "天河",
    detailplace: "珠江新城西",
    square: 91,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d5"),
    title: "整租·东方夏湾拿 4室2厅 复式 南",
    area: "从化",
    detailplace: "太平镇",
    square: 268.59,
    position: "南",
    roomtype: "4室2厅5卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d6"),
    title: "整租·海棠花园(天河) 2室2厅 北",
    area: "天河",
    detailplace: "棠下",
    square: 100,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d7"),
    title: "整租·广州渔人码头SOHO54公寓 1室1厅 南",
    area: "番禺",
    detailplace: "洛溪",
    square: 43,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2380")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d8"),
    title: "整租·保利大都汇 2室2厅 北",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 68,
    position: "北",
    roomtype: "2室2厅2卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072d9"),
    title: "整租·凯旋新世界枫丹丽舍 1室1厅 西南/北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 100.78,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072da"),
    title: "整租·三育路 3室2厅 南/北",
    area: "越秀",
    detailplace: "东山口",
    square: 79,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072db"),
    title: "整租·南沙万达广场 1室1厅 西",
    area: "南沙",
    detailplace: "金洲",
    square: 180,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("6100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072dc"),
    title: "整租·保利金融大都汇 1室1厅 南",
    area: "天河",
    detailplace: "金融城",
    square: 53,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072dd"),
    title: "整租·琶洲新村公寓 1室0厅 东/南",
    area: "海珠",
    detailplace: "琶洲东",
    square: 38,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("3300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072de"),
    title: "整租·南沙碧桂园 4室2厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 128,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072df"),
    title: "整租·富力泉天下 5室2厅 复式 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 166,
    position: "东",
    roomtype: "5室2厅3卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e0"),
    title: "整租·华南御景园 1室0厅 南",
    area: "天河",
    detailplace: "岑村",
    square: 12.25,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e1"),
    title: "整租·粤海丽江花园 4室1厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 197,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e2"),
    title: "整租·富力泉天下 1室0厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 45,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e3"),
    title: "整租·保利半岛 4室2厅 南/北",
    area: "南沙",
    detailplace: "黄阁",
    square: 139,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e4"),
    title: "整租·富力泉天下 1室0厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 45,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e5"),
    title: "整租·富力环市西苑 2室1厅 北",
    area: "荔湾",
    detailplace: "西村",
    square: 69,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e6"),
    title: "整租·新世界逸彩庭园 5室2厅 复式 东北",
    area: "荔湾",
    detailplace: "滘口",
    square: 180,
    position: "东",
    roomtype: "5室2厅3卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e7"),
    title: "整租·万科海上传奇 2室1厅 复式 西北/北",
    area: "荔湾",
    detailplace: "芳村",
    square: 36,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e8"),
    title: "整租·侨建御溪谷北区 5室1厅 复式 南",
    area: "增城",
    detailplace: "中新镇",
    square: 368,
    position: "南",
    roomtype: "5室1厅4卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072e9"),
    title: "整租·方圆月岛轩 1室0厅 东",
    area: "天河",
    detailplace: "珠江新城中",
    square: 12.98,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ea"),
    title: "整租·骏汇大厦 3室1厅 南/西/北",
    area: "天河",
    detailplace: "天河南",
    square: 116.86,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("8275")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072eb"),
    title: "整租·实地蔷薇国际 3室2厅 东南",
    area: "增城",
    detailplace: "荔城西区",
    square: 96,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ec"),
    title: "整租·中山五路 2室1厅 南",
    area: "越秀",
    detailplace: "公园前",
    square: 33,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ed"),
    title: "整租·骏汇大厦 2室1厅 东/西/西北/北",
    area: "天河",
    detailplace: "天河南",
    square: 83.28,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("6225")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ee"),
    title: "整租·碧桂园天玺湾 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 89,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ef"),
    title: "整租·南沙珠江湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 99,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f0"),
    title: "整租·翠城花园 1室0厅 东南",
    area: "海珠",
    detailplace: "江燕路",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f1"),
    title: "整租·锦绣香江花园芙蓉园 6室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 665.1,
    position: "南",
    roomtype: "6室2厅4卫",
    price: NumberInt("60000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f2"),
    title: "整租·敏捷尚品国际 2室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 59,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1454")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f3"),
    title: "整租·商业大道 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 120,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f4"),
    title: "整租·同和街综治信访维稳中心宿舍楼 3室2厅 南",
    area: "白云",
    detailplace: "同和",
    square: 95,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f5"),
    title: "整租·广州绿地中央广场 1室1厅 南",
    area: "黄埔",
    detailplace: "科学城",
    square: 53,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f6"),
    title: "整租·沙和路 3室1厅 东南",
    area: "天河",
    detailplace: "沙河",
    square: 74.8,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1840")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f7"),
    title: "整租·建设北路 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 63,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f8"),
    title: "整租·淘金路 1室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 28,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072f9"),
    title: "整租·先烈中路 1室1厅 东",
    area: "越秀",
    detailplace: "黄花岗",
    square: 40,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072fa"),
    title: "整租·南沙珠江湾 3室2厅 南",
    area: "南沙",
    detailplace: "南沙湾",
    square: 143.71,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072fb"),
    title: "整租·六二三路 1室1厅 南",
    area: "荔湾",
    detailplace: "和平西",
    square: 57,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072fc"),
    title: "整租·珠江花城一二期 5室2厅 南",
    area: "天河",
    detailplace: "黄村",
    square: 139,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("7200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072fd"),
    title: "整租·中交汇通中心 1室1厅 东南/南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072fe"),
    title: "整租·中交汇通中心 1室0厅 东南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 50,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc3072ff"),
    title: "整租·富力公园28 4室3厅 南",
    area: "天河",
    detailplace: "珠江新城东",
    square: 263.09,
    position: "南",
    roomtype: "4室3厅3卫",
    price: NumberInt("21150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("693f6526b909d88bdc307300"),
    title: "整租·擎山苑 2室1厅 东南/南",
    area: "白云",
    detailplace: "梅花园",
    square: 85,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b350"),
    title: "整租·达道路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 55.3,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("5344")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b351"),
    title: "合租·穗园小区 4居室 东卧",
    area: "天河",
    detailplace: "天润路",
    square: 10,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("1396")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b352"),
    title: "合租·吉祥北园B区 4居室 东北卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 7.48,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("1113")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b353"),
    title: "整租·南航碧花园 3室2厅 南",
    area: "花都",
    detailplace: "狮岭镇",
    square: 150,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b354"),
    title: "合租·第三金碧花园 4居室 西卧",
    area: "海珠",
    detailplace: "金碧",
    square: 7.1,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("1354")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b355"),
    title: "整租·城投·首筑花园 3室2厅 南",
    area: "南沙",
    detailplace: "横沥",
    square: 104,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b356"),
    title: "合租·逸景翠园 4居室 南卧",
    area: "海珠",
    detailplace: "广州大道南",
    square: 5.1,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("1218")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b357"),
    title: "整租·岭南新世界 1室1厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室1厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b358"),
    title: "合租·永福路永福西约 4居室 南卧",
    area: "越秀",
    detailplace: "黄花岗",
    square: 20,
    position: "南",
    roomtype: "4室0厅1卫",
    price: NumberInt("1580")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b359"),
    title: "整租·农林下横路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 70,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b35a"),
    title: "合租·美的江上沄启 2居室 西北卧",
    area: "南沙",
    detailplace: "明珠湾",
    square: 30,
    position: "西",
    roomtype: "2室2厅2卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b35b"),
    title: "整租·公路局大院 3室2厅 南",
    area: "天河",
    detailplace: "沙河",
    square: 100,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b35c"),
    title: "整租·侨怡苑 3室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 77,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b35d"),
    title: "合租·赛拉维 4居室 西卧",
    area: "天河",
    detailplace: "员村",
    square: 20.77,
    position: "西",
    roomtype: "4室1厅2卫",
    price: NumberInt("2614")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b35e"),
    title: "整租·碧桂园豪园林湖苑 3室1厅 北",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 118,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b35f"),
    title: "整租·物勘院住宅区 3室1厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 52.05,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b360"),
    title: "合租·海印南苑 4居室 南卧",
    area: "海珠",
    detailplace: "东晓路",
    square: 8.8,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("1291")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b361"),
    title: "合租·白云尚城 4居室 西卧",
    area: "白云",
    detailplace: "江夏",
    square: 11,
    position: "西",
    roomtype: "4室1厅1卫",
    price: NumberInt("1533")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b362"),
    title: "整租·御溪世家 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 86.8,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b363"),
    title: "合租·东方名都花园 4居室 东卧",
    area: "增城",
    detailplace: "白江",
    square: 8.4,
    position: "东",
    roomtype: "4室1厅1卫",
    price: NumberInt("934")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b364"),
    title: "合租·骏景花园 4居室 北卧",
    area: "天河",
    detailplace: "棠下",
    square: 14.89,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1848")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b365"),
    title: "合租·美林湖畔花园 4居室 南卧",
    area: "天河",
    detailplace: "东圃",
    square: 16.6,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("2268")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b366"),
    title: "整租·新港中路 2室1厅 西北",
    area: "海珠",
    detailplace: "赤岗",
    square: 53,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b367"),
    title: "合租·金燕花园 4居室 北卧",
    area: "天河",
    detailplace: "燕塘",
    square: 7.5,
    position: "北",
    roomtype: "4室1厅2卫",
    price: NumberInt("1669")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b368"),
    title: "整租·龙津世家 3室1厅 东南/南",
    area: "荔湾",
    detailplace: "龙津",
    square: 135,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b369"),
    title: "合租·南国奥园 4居室 东南卧",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 7.7,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1186")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b36a"),
    title: "整租·保利南沙天汇 3室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 94,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b36b"),
    title: "整租·南沙珠江湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙湾",
    square: 145,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b36c"),
    title: "整租·昌岗东路 1室0厅 南",
    area: "海珠",
    detailplace: "昌岗",
    square: 30,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b36d"),
    title: "合租·骏景花园 5居室 北卧",
    area: "天河",
    detailplace: "棠下",
    square: 20.55,
    position: "北",
    roomtype: "5室1厅3卫",
    price: NumberInt("2194")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b36e"),
    title: "合租·信基玥岛 3居室 西北卧",
    area: "番禺",
    detailplace: "厦滘",
    square: 30,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b36f"),
    title: "整租·南沙湾石奥 1室1厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 48.95,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b370"),
    title: "整租·大华城东瀚 3室1厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 75,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b371"),
    title: "整租·金雅苑 1室1厅 错层 北",
    area: "海珠",
    detailplace: "滨江东",
    square: 37,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b372"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 东",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b373"),
    title: "合租·金泽大厦 3居室 东南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b374"),
    title: "整租·珠江华景里 1室2厅 复式 西",
    area: "天河",
    detailplace: "华景新城",
    square: 44,
    position: "西",
    roomtype: "1室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b375"),
    title: "整租·阳光城丽景半岛 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b376"),
    title: "合租·金泽大厦 5居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "南",
    roomtype: "5室0厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b377"),
    title: "合租·中山三院宿舍 3居室 东南卧",
    area: "天河",
    detailplace: "石牌",
    square: 30,
    position: "东",
    roomtype: "3室0厅1卫",
    price: NumberInt("3180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b378"),
    title: "合租·吉祥道 6居室 南卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 20,
    position: "南",
    roomtype: "6室0厅6卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b379"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 西",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b37a"),
    title: "整租·番禺招商金山谷意库 1室1厅 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 37.88,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1680")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b37b"),
    title: "整租·富力东堤湾 2室1厅 东/西",
    area: "越秀",
    detailplace: "杨箕",
    square: 81.75,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b37c"),
    title: "整租·奥园城市天地 2室1厅 南/北",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b37d"),
    title: "整租·骏威锦东花园A区 4室2厅 南",
    area: "花都",
    detailplace: "新区",
    square: 188,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b37e"),
    title: "整租·燕子岗路 1室1厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b37f"),
    title: "整租·三荣大厦 2室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b380"),
    title: "整租·品湖雅居 1室1厅 北",
    area: "荔湾",
    detailplace: "流花站前",
    square: 50,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b381"),
    title: "整租·越秀滨海隽城 3室1厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 89,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b382"),
    title: "合租·信基玥岛 3居室 西北卧",
    area: "番禺",
    detailplace: "厦滘",
    square: 30,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b383"),
    title: "整租·南沙湾石奥 1室1厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 48.95,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b384"),
    title: "整租·大华城东瀚 3室1厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 75,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b385"),
    title: "整租·金雅苑 1室1厅 错层 北",
    area: "海珠",
    detailplace: "滨江东",
    square: 37,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b386"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 东",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b387"),
    title: "合租·金泽大厦 3居室 东南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b388"),
    title: "整租·珠江华景里 1室2厅 复式 西",
    area: "天河",
    detailplace: "华景新城",
    square: 44,
    position: "西",
    roomtype: "1室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b389"),
    title: "整租·阳光城丽景半岛 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b38a"),
    title: "合租·金泽大厦 5居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "南",
    roomtype: "5室0厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b38b"),
    title: "合租·中山三院宿舍 3居室 东南卧",
    area: "天河",
    detailplace: "石牌",
    square: 30,
    position: "东",
    roomtype: "3室0厅1卫",
    price: NumberInt("3180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b38c"),
    title: "合租·吉祥道 6居室 南卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 20,
    position: "南",
    roomtype: "6室0厅6卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b38d"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 西",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b38e"),
    title: "整租·番禺招商金山谷意库 1室1厅 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 37.88,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1680")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b38f"),
    title: "整租·富力东堤湾 2室1厅 东/西",
    area: "越秀",
    detailplace: "杨箕",
    square: 81.75,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b390"),
    title: "整租·奥园城市天地 2室1厅 南/北",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b391"),
    title: "整租·骏威锦东花园A区 4室2厅 南",
    area: "花都",
    detailplace: "新区",
    square: 188,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b392"),
    title: "整租·燕子岗路 1室1厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b393"),
    title: "整租·三荣大厦 2室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b394"),
    title: "整租·品湖雅居 1室1厅 北",
    area: "荔湾",
    detailplace: "流花站前",
    square: 50,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b395"),
    title: "整租·越秀滨海隽城 3室1厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 89,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b396"),
    title: "整租·南沙金茂湾 5室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 245,
    position: "南",
    roomtype: "5室2厅1卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b397"),
    title: "整租·康乐园 3室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 86,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b398"),
    title: "整租·广州足球公园 2室2厅 南",
    area: "番禺",
    detailplace: "钟村",
    square: 67.28,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b399"),
    title: "整租·万科桃源里 4室2厅 复式 南/北",
    area: "增城",
    detailplace: "派潭镇",
    square: 88,
    position: "南",
    roomtype: "4室2厅4卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b39a"),
    title: "整租·碧桂园星港国际 2室1厅 南",
    area: "花都",
    detailplace: "新区",
    square: 57,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b39b"),
    title: "整租·南航碧花园 3室2厅 南",
    area: "花都",
    detailplace: "狮岭镇",
    square: 150,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b39c"),
    title: "整租·城投·首筑花园 3室2厅 南",
    area: "南沙",
    detailplace: "横沥",
    square: 104,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b39d"),
    title: "整租·岭南新世界 1室1厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室1厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b39e"),
    title: "合租·永福路永福西约 4居室 南卧",
    area: "越秀",
    detailplace: "黄花岗",
    square: 20,
    position: "南",
    roomtype: "4室0厅1卫",
    price: NumberInt("1580")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b39f"),
    title: "整租·农林下横路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 70,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a0"),
    title: "合租·美的江上沄启 2居室 西北卧",
    area: "南沙",
    detailplace: "明珠湾",
    square: 30,
    position: "西",
    roomtype: "2室2厅2卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a1"),
    title: "整租·公路局大院 3室2厅 南",
    area: "天河",
    detailplace: "沙河",
    square: 100,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a2"),
    title: "整租·侨怡苑 3室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 77,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a3"),
    title: "整租·碧桂园豪园林湖苑 3室1厅 北",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 118,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a4"),
    title: "整租·物勘院住宅区 3室1厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 52.05,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a5"),
    title: "整租·御溪世家 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 86.8,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a6"),
    title: "整租·新港中路 2室1厅 西北",
    area: "海珠",
    detailplace: "赤岗",
    square: 53,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a7"),
    title: "整租·龙津世家 3室1厅 东南/南",
    area: "荔湾",
    detailplace: "龙津",
    square: 135,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a8"),
    title: "整租·保利南沙天汇 3室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 94,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3a9"),
    title: "整租·南沙珠江湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙湾",
    square: 145,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3aa"),
    title: "整租·昌岗东路 1室0厅 南",
    area: "海珠",
    detailplace: "昌岗",
    square: 30,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ab"),
    title: "整租·碧桂园豪园翠湖苑 3室1厅 南",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 92,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ac"),
    title: "合租·荔湾新天地 4居室 东卧",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 21.12,
    position: "东",
    roomtype: "4室1厅2卫",
    price: NumberInt("1774")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ad"),
    title: "整租·南航碧花园 3室2厅 南",
    area: "花都",
    detailplace: "狮岭镇",
    square: 150,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ae"),
    title: "整租·城投·首筑花园 3室2厅 南",
    area: "南沙",
    detailplace: "横沥",
    square: 104,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3af"),
    title: "整租·岭南新世界 1室1厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室1厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b0"),
    title: "合租·永福路永福西约 4居室 南卧",
    area: "越秀",
    detailplace: "黄花岗",
    square: 20,
    position: "南",
    roomtype: "4室0厅1卫",
    price: NumberInt("1580")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b1"),
    title: "整租·农林下横路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 70,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b2"),
    title: "合租·美的江上沄启 2居室 西北卧",
    area: "南沙",
    detailplace: "明珠湾",
    square: 30,
    position: "西",
    roomtype: "2室2厅2卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b3"),
    title: "整租·公路局大院 3室2厅 南",
    area: "天河",
    detailplace: "沙河",
    square: 100,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b4"),
    title: "整租·侨怡苑 3室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 77,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b5"),
    title: "整租·碧桂园豪园林湖苑 3室1厅 北",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 118,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b6"),
    title: "整租·物勘院住宅区 3室1厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 52.05,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b7"),
    title: "整租·御溪世家 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 86.8,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b8"),
    title: "整租·新港中路 2室1厅 西北",
    area: "海珠",
    detailplace: "赤岗",
    square: 53,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3b9"),
    title: "整租·龙津世家 3室1厅 东南/南",
    area: "荔湾",
    detailplace: "龙津",
    square: 135,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ba"),
    title: "合租·富豪山庄 5居室 北卧",
    area: "番禺",
    detailplace: "富豪山庄",
    square: 8.6,
    position: "北",
    roomtype: "5室1厅3卫",
    price: NumberInt("1186")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3bb"),
    title: "整租·保利南沙天汇 3室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 94,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3bc"),
    title: "整租·南沙珠江湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙湾",
    square: 145,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3bd"),
    title: "整租·昌岗东路 1室0厅 南",
    area: "海珠",
    detailplace: "昌岗",
    square: 30,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3be"),
    title: "整租·碧桂园豪园翠湖苑 3室1厅 南",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 92,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3bf"),
    title: "整租·誉山国际13期誉璟公寓 1室1厅 北",
    area: "增城",
    detailplace: "永宁",
    square: 32,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("880")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c0"),
    title: "整租·东方新世界 1室0厅 东",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c1"),
    title: "整租·美的江上沄启 3室2厅 西北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 98,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c2"),
    title: "合租·信基玥岛 3居室 西北卧",
    area: "番禺",
    detailplace: "厦滘",
    square: 30,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c3"),
    title: "整租·南沙湾石奥 1室1厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 48.95,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c4"),
    title: "整租·大华城东瀚 3室1厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 75,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c5"),
    title: "整租·金雅苑 1室1厅 错层 北",
    area: "海珠",
    detailplace: "滨江东",
    square: 37,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c6"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 东",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c7"),
    title: "合租·金泽大厦 3居室 东南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c8"),
    title: "整租·珠江华景里 1室2厅 复式 西",
    area: "天河",
    detailplace: "华景新城",
    square: 44,
    position: "西",
    roomtype: "1室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3c9"),
    title: "整租·阳光城丽景半岛 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ca"),
    title: "合租·金泽大厦 5居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "南",
    roomtype: "5室0厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3cb"),
    title: "合租·中山三院宿舍 3居室 东南卧",
    area: "天河",
    detailplace: "石牌",
    square: 30,
    position: "东",
    roomtype: "3室0厅1卫",
    price: NumberInt("3180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3cc"),
    title: "合租·吉祥道 6居室 南卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 20,
    position: "南",
    roomtype: "6室0厅6卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3cd"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 西",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ce"),
    title: "整租·番禺招商金山谷意库 1室1厅 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 37.88,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1680")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3cf"),
    title: "整租·富力东堤湾 2室1厅 东/西",
    area: "越秀",
    detailplace: "杨箕",
    square: 81.75,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d0"),
    title: "整租·奥园城市天地 2室1厅 南/北",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d1"),
    title: "整租·骏威锦东花园A区 4室2厅 南",
    area: "花都",
    detailplace: "新区",
    square: 188,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d2"),
    title: "整租·燕子岗路 1室1厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d3"),
    title: "整租·三荣大厦 2室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d4"),
    title: "整租·品湖雅居 1室1厅 北",
    area: "荔湾",
    detailplace: "流花站前",
    square: 50,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d5"),
    title: "整租·越秀滨海隽城 3室1厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 89,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d6"),
    title: "整租·南沙金茂湾 5室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 245,
    position: "南",
    roomtype: "5室2厅1卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d7"),
    title: "整租·康乐园 3室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 86,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2950")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d8"),
    title: "整租·广州足球公园 2室2厅 南",
    area: "番禺",
    detailplace: "钟村",
    square: 67.28,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3d9"),
    title: "合租·信基玥岛 3居室 西北卧",
    area: "番禺",
    detailplace: "厦滘",
    square: 30,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3da"),
    title: "整租·南沙湾石奥 1室1厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 48.95,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3db"),
    title: "整租·大华城东瀚 3室1厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 75,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3dc"),
    title: "整租·金雅苑 1室1厅 错层 北",
    area: "海珠",
    detailplace: "滨江东",
    square: 37,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3dd"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 东",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3de"),
    title: "合租·金泽大厦 3居室 东南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3df"),
    title: "整租·珠江华景里 1室2厅 复式 西",
    area: "天河",
    detailplace: "华景新城",
    square: 44,
    position: "西",
    roomtype: "1室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e0"),
    title: "整租·阳光城丽景半岛 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e1"),
    title: "合租·金泽大厦 5居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "南",
    roomtype: "5室0厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e2"),
    title: "合租·中山三院宿舍 3居室 东南卧",
    area: "天河",
    detailplace: "石牌",
    square: 30,
    position: "东",
    roomtype: "3室0厅1卫",
    price: NumberInt("3180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e3"),
    title: "合租·吉祥道 6居室 南卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 20,
    position: "南",
    roomtype: "6室0厅6卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e4"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 西",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e5"),
    title: "整租·番禺招商金山谷意库 1室1厅 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 37.88,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1680")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e6"),
    title: "整租·富力东堤湾 2室1厅 东/西",
    area: "越秀",
    detailplace: "杨箕",
    square: 81.75,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e7"),
    title: "整租·奥园城市天地 2室1厅 南/北",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e8"),
    title: "整租·骏威锦东花园A区 4室2厅 南",
    area: "花都",
    detailplace: "新区",
    square: 188,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3e9"),
    title: "整租·燕子岗路 1室1厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ea"),
    title: "整租·三荣大厦 2室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3eb"),
    title: "整租·品湖雅居 1室1厅 北",
    area: "荔湾",
    detailplace: "流花站前",
    square: 50,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ec"),
    title: "整租·越秀滨海隽城 3室1厅 南/北",
    area: "南沙",
    detailplace: "金洲",
    square: 89,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ed"),
    title: "整租·南沙金茂湾 5室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 245,
    position: "南",
    roomtype: "5室2厅1卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ee"),
    title: "整租·绿地城凤语湾 4室2厅 南/北",
    area: "黄埔",
    detailplace: "知识城",
    square: 142,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ef"),
    title: "整租·合景天峻 1室1厅 北",
    area: "黄埔",
    detailplace: "知识城",
    square: 45,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1850")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f0"),
    title: "整租·保利天汇一期 3室2厅 南",
    area: "天河",
    detailplace: "黄村",
    square: 88,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("6200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f1"),
    title: "整租·招商臻园 2室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 75,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f2"),
    title: "整租·人盛巴厘天地 3室2厅 东北",
    area: "从化",
    detailplace: "神岗镇",
    square: 101.38,
    position: "东",
    roomtype: "3室2厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f3"),
    title: "整租·越秀滨海汇 1室1厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 47,
    position: "北",
    roomtype: "1室1厅0卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f4"),
    title: "整租·芳村大道西 1室0厅 东",
    area: "荔湾",
    detailplace: "滘口",
    square: 28,
    position: "东",
    roomtype: "1室0厅1卫",
    price: NumberInt("2180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f5"),
    title: "整租·越秀滨海汇 1室1厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 47,
    position: "北",
    roomtype: "1室1厅0卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f6"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 83,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f7"),
    title: "整租·璟泰大厦 2室1厅 东南",
    area: "越秀",
    detailplace: "五羊新城",
    square: 87,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("8800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f8"),
    title: "整租·美的江上沄启 2室1厅 北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 97,
    position: "北",
    roomtype: "2室1厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3f9"),
    title: "整租·芳村大道西 1室1厅 南",
    area: "荔湾",
    detailplace: "滘口",
    square: 25,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1880")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3fa"),
    title: "整租·富力悦禧花园 3室2厅 南",
    area: "黄埔",
    detailplace: "开发东区",
    square: 87,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2380")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3fb"),
    title: "整租·中交汇通中心 1室1厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 48,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3fc"),
    title: "整租·越秀滨海汇 1室1厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 90,
    position: "北",
    roomtype: "1室1厅0卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3fd"),
    title: "整租·越秀滨海汇 1室1厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 90,
    position: "北",
    roomtype: "1室1厅0卫",
    price: NumberInt("3100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3fe"),
    title: "整租·保利林语山庄 3室2厅 东",
    area: "黄埔",
    detailplace: "科学城",
    square: 123.33,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b3ff"),
    title: "整租·越秀滨海汇 1室1厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 47,
    position: "北",
    roomtype: "1室1厅0卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b400"),
    title: "合租·信基玥岛 3居室 西北卧",
    area: "番禺",
    detailplace: "厦滘",
    square: 30,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b401"),
    title: "整租·南沙湾石奥 1室1厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 48.95,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b402"),
    title: "整租·大华城东瀚 3室1厅 南",
    area: "增城",
    detailplace: "朱村",
    square: 75,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b403"),
    title: "整租·金雅苑 1室1厅 错层 北",
    area: "海珠",
    detailplace: "滨江东",
    square: 37,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b404"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 东",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b405"),
    title: "合租·金泽大厦 3居室 东南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b406"),
    title: "整租·珠江华景里 1室2厅 复式 西",
    area: "天河",
    detailplace: "华景新城",
    square: 44,
    position: "西",
    roomtype: "1室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b407"),
    title: "整租·阳光城丽景半岛 3室2厅 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 108,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b408"),
    title: "合租·金泽大厦 5居室 南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "南",
    roomtype: "5室0厅1卫",
    price: NumberInt("3400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b409"),
    title: "合租·中山三院宿舍 3居室 东南卧",
    area: "天河",
    detailplace: "石牌",
    square: 30,
    position: "东",
    roomtype: "3室0厅1卫",
    price: NumberInt("3180")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b40a"),
    title: "合租·吉祥道 6居室 南卧",
    area: "番禺",
    detailplace: "洛溪",
    square: 20,
    position: "南",
    roomtype: "6室0厅6卫",
    price: NumberInt("600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b40b"),
    title: "整租·广州融创文旅城商务公寓 1室1厅 西",
    area: "花都",
    detailplace: "花城街",
    square: 46,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b40c"),
    title: "整租·番禺招商金山谷意库 1室1厅 南",
    area: "番禺",
    detailplace: "金山谷",
    square: 37.88,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1680")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b40d"),
    title: "整租·富力东堤湾 2室1厅 东/西",
    area: "越秀",
    detailplace: "杨箕",
    square: 81.75,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("6800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b40e"),
    title: "整租·奥园城市天地 2室1厅 南/北",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 48,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b40f"),
    title: "整租·骏威锦东花园A区 4室2厅 南",
    area: "花都",
    detailplace: "新区",
    square: 188,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b410"),
    title: "整租·燕子岗路 1室1厅 东",
    area: "海珠",
    detailplace: "江燕路",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b411"),
    title: "整租·三荣大厦 2室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 67,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b412"),
    title: "整租·南航碧花园 3室2厅 南",
    area: "花都",
    detailplace: "狮岭镇",
    square: 150,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b413"),
    title: "整租·城投·首筑花园 3室2厅 南",
    area: "南沙",
    detailplace: "横沥",
    square: 104,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b414"),
    title: "整租·岭南新世界 1室1厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12,
    position: "南",
    roomtype: "1室1厅0卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b415"),
    title: "合租·永福路永福西约 4居室 南卧",
    area: "越秀",
    detailplace: "黄花岗",
    square: 20,
    position: "南",
    roomtype: "4室0厅1卫",
    price: NumberInt("1580")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b416"),
    title: "整租·农林下横路 2室1厅 南",
    area: "越秀",
    detailplace: "东山口",
    square: 70,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b417"),
    title: "合租·美的江上沄启 2居室 西北卧",
    area: "南沙",
    detailplace: "明珠湾",
    square: 30,
    position: "西",
    roomtype: "2室2厅2卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b418"),
    title: "整租·公路局大院 3室2厅 南",
    area: "天河",
    detailplace: "沙河",
    square: 100,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b419"),
    title: "整租·侨怡苑 3室1厅 南",
    area: "天河",
    detailplace: "体育中心",
    square: 77,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b41a"),
    title: "整租·碧桂园豪园林湖苑 3室1厅 北",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 118,
    position: "北",
    roomtype: "3室1厅2卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b41b"),
    title: "整租·物勘院住宅区 3室1厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 52.05,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b41c"),
    title: "整租·御溪世家 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 86.8,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b41d"),
    title: "整租·新港中路 2室1厅 西北",
    area: "海珠",
    detailplace: "赤岗",
    square: 53,
    position: "西",
    roomtype: "2室1厅1卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b41e"),
    title: "整租·龙津世家 3室1厅 东南/南",
    area: "荔湾",
    detailplace: "龙津",
    square: 135,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("10000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b41f"),
    title: "整租·保利南沙天汇 3室2厅 南",
    area: "南沙",
    detailplace: "黄阁",
    square: 94,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b420"),
    title: "整租·南沙珠江湾 4室2厅 南/北",
    area: "南沙",
    detailplace: "南沙湾",
    square: 145,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b421"),
    title: "整租·昌岗东路 1室0厅 南",
    area: "海珠",
    detailplace: "昌岗",
    square: 30,
    position: "南",
    roomtype: "1室0厅1卫",
    price: NumberInt("1300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b422"),
    title: "整租·碧桂园豪园翠湖苑 3室1厅 南",
    area: "增城",
    detailplace: "增城碧桂园",
    square: 92,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b423"),
    title: "整租·誉山国际13期誉璟公寓 1室1厅 北",
    area: "增城",
    detailplace: "永宁",
    square: 32,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("880")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b424"),
    title: "整租·东方新世界 1室0厅 东",
    area: "天河",
    detailplace: "天河公园",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b425"),
    title: "整租·美的江上沄启 3室2厅 西北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 98,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("2700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b426"),
    title: "整租·龙湖双珑原著 4室2厅 南",
    area: "黄埔",
    detailplace: "知识城",
    square: 126,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("6200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694160153b2bfb7e9135b427"),
    title: "整租·富力金港城西区  3室2厅 南",
    area: "花都",
    detailplace: "花东镇",
    square: 111,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2248")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be12"),
    title: "整租·宝岗大道 3室2厅 南/北",
    area: "海珠",
    detailplace: "宝岗",
    square: 98,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be13"),
    title: "整租·骏逸湖畔花苑 4室2厅 南/北",
    area: "从化",
    detailplace: "太平镇",
    square: 170,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be14"),
    title: "整租·百灵路 1室1厅 北",
    area: "越秀",
    detailplace: "盘福",
    square: 25,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be15"),
    title: "整租·南沙金茂湾 2室1厅 西南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 54,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be16"),
    title: "整租·实地常春藤 5室2厅 南/北",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 138,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be17"),
    title: "整租·盘福路 3室1厅 南",
    area: "越秀",
    detailplace: "盘福",
    square: 50,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be18"),
    title: "整租·荔湾新天地 2室1厅 南",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 46,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be19"),
    title: "整租·正佳东方国际 1室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 210,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("19500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be1a"),
    title: "整租·金地香山湖香汇花园 4室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 128,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be1b"),
    title: "整租·中冠大厦 1室1厅 东",
    area: "越秀",
    detailplace: "五羊新城",
    square: 35,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be1c"),
    title: "整租·祥景花园B区 3室2厅 南",
    area: "白云",
    detailplace: "黄石",
    square: 103,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be1d"),
    title: "整租·中冠大厦 1室1厅 西南",
    area: "越秀",
    detailplace: "五羊新城",
    square: 35,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be1e"),
    title: "整租·晓港湾 1室1厅 东",
    area: "海珠",
    detailplace: "东晓南",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be1f"),
    title: "整租·西关海 1室0厅 东",
    area: "荔湾",
    detailplace: "南岸路",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be20"),
    title: "整租·敏捷上城商务中心 3室1厅 东南",
    area: "番禺",
    detailplace: "万博",
    square: 90,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("694649a9acf215163350be21"),
    title: "整租·领峰园 3室2厅 南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 160,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("17800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b576"),
    title: "整租·萝岗敏捷广场 2室2厅 东",
    area: "黄埔",
    detailplace: "科学城",
    square: 61,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b577"),
    title: "整租·广垦天河1号 1室1厅 北",
    area: "天河",
    detailplace: "沙太南",
    square: 36,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b578"),
    title: "整租·时代中国时代天韵 3室2厅 北",
    area: "黄埔",
    detailplace: "知识城",
    square: 115,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b579"),
    title: "整租·南沙金茂湾 3室2厅 东",
    area: "南沙",
    detailplace: "明珠湾",
    square: 97,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("4470")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b57a"),
    title: "整租·农林下路 1室1厅 东",
    area: "越秀",
    detailplace: "东风东",
    square: 38.89,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b57b"),
    title: "整租·金碧新城 3室1厅 西南",
    area: "白云",
    detailplace: "石井",
    square: 88,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b57c"),
    title: "整租·恒大阳光半岛 3室2厅 南",
    area: "南沙",
    detailplace: "万顷沙",
    square: 99,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b57d"),
    title: "整租·五羊宿舍 3室1厅 南/北",
    area: "天河",
    detailplace: "天河公园",
    square: 65,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b57e"),
    title: "整租·隆辉创意公馆  1室1厅 北",
    area: "番禺",
    detailplace: "钟村",
    square: 72,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b57f"),
    title: "整租·南国花园 4室2厅 南/北",
    area: "天河",
    detailplace: "珠江新城东",
    square: 151,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b580"),
    title: "整租·大德路 1室0厅 北",
    area: "越秀",
    detailplace: "解放南",
    square: 30,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b581"),
    title: "整租·来福园 3室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 100,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b582"),
    title: "整租·沙园路(海珠) 1室1厅 东",
    area: "海珠",
    detailplace: "沙园",
    square: 38,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b583"),
    title: "整租·颐和雅轩 1室1厅 东南",
    area: "越秀",
    detailplace: "小北",
    square: 47,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("4800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b584"),
    title: "整租·侨怡苑 2室2厅 东/南",
    area: "天河",
    detailplace: "体育中心",
    square: 59,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b585"),
    title: "整租·恒大山水城 4室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 149.54,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2340")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b586"),
    title: "整租·城启荔港南湾 1室0厅 东",
    area: "荔湾",
    detailplace: "南岸路",
    square: 19,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b587"),
    title: "整租·粤海广场 1室1厅 东",
    area: "番禺",
    detailplace: "万博",
    square: 64,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("4700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b588"),
    title: "整租·东鸣轩 3室2厅 西北",
    area: "越秀",
    detailplace: "农讲所",
    square: 140,
    position: "西",
    roomtype: "3室2厅2卫",
    price: NumberInt("10700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b589"),
    title: "整租·宝岗大道 3室2厅 南/北",
    area: "海珠",
    detailplace: "宝岗",
    square: 98,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b58a"),
    title: "整租·骏逸湖畔花苑 4室2厅 南/北",
    area: "从化",
    detailplace: "太平镇",
    square: 170,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b58b"),
    title: "整租·百灵路 1室1厅 北",
    area: "越秀",
    detailplace: "盘福",
    square: 25,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b58c"),
    title: "整租·南沙金茂湾 2室1厅 西南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 54,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b58d"),
    title: "整租·实地常春藤 5室2厅 南/北",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 138,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b58e"),
    title: "整租·盘福路 3室1厅 南",
    area: "越秀",
    detailplace: "盘福",
    square: 50,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b58f"),
    title: "整租·荔湾新天地 2室1厅 南",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 46,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b590"),
    title: "整租·正佳东方国际 1室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 210,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("19500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b591"),
    title: "整租·金地香山湖香汇花园 4室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 128,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b592"),
    title: "整租·中冠大厦 1室1厅 东",
    area: "越秀",
    detailplace: "五羊新城",
    square: 35,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b593"),
    title: "整租·祥景花园B区 3室2厅 南",
    area: "白云",
    detailplace: "黄石",
    square: 103,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b594"),
    title: "整租·中冠大厦 1室1厅 西南",
    area: "越秀",
    detailplace: "五羊新城",
    square: 35,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b595"),
    title: "整租·晓港湾 1室1厅 东",
    area: "海珠",
    detailplace: "东晓南",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b596"),
    title: "整租·西关海 1室0厅 东",
    area: "荔湾",
    detailplace: "南岸路",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b597"),
    title: "整租·敏捷上城商务中心 3室1厅 东南",
    area: "番禺",
    detailplace: "万博",
    square: 90,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b598"),
    title: "整租·领峰园 3室2厅 南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 160,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("17800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b599"),
    title: "整租·时代风华 1室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 33,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b59a"),
    title: "整租·人和丽景苑 4室4厅 西南",
    area: "白云",
    detailplace: "人和",
    square: 180,
    position: "西",
    roomtype: "4室4厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b59b"),
    title: "整租·天伦东时区 3室1厅 东",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 90,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3720")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b59c"),
    title: "整租·越秀花苑大厦 1室0厅 西",
    area: "越秀",
    detailplace: "小北",
    square: 25,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b59d"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 45,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b59e"),
    title: "整租·时代南湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 179,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b59f"),
    title: "整租·富力东山新天地公寓 1室0厅 北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a0"),
    title: "整租·增城万达广场 1室0厅 北",
    area: "增城",
    detailplace: "增城区府",
    square: 53,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("1312")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a1"),
    title: "整租·禺秀园 3室2厅 南/北",
    area: "番禺",
    detailplace: "市桥",
    square: 117,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a2"),
    title: "整租·峰境园 5室2厅 复式 南/北",
    area: "花都",
    detailplace: "北兴镇",
    square: 206,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a3"),
    title: "整租·长寿西路 2室1厅 东",
    area: "荔湾",
    detailplace: "西关",
    square: 40,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a4"),
    title: "整租·中海橡园国际 1室0厅 北",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12.5,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a5"),
    title: "整租·南沙金茂湾 2室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 85,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a6"),
    title: "整租·悠山时光 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 110,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a7"),
    title: "整租·富力泉天下 2室1厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 84,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a8"),
    title: "整租·时代印象 3室2厅 南",
    area: "从化",
    detailplace: "太平镇",
    square: 88,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5a9"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 149,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5aa"),
    title: "整租·越秀国际总部广场 3室2厅 东",
    area: "南沙",
    detailplace: "金洲",
    square: 63,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ab"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 149,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ac"),
    title: "整租·淘金家园一期 2室1厅 东",
    area: "越秀",
    detailplace: "淘金",
    square: 95,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ad"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12.5,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ae"),
    title: "整租·碧桂园海湾1号 2室2厅 东南",
    area: "南沙",
    detailplace: "南沙港",
    square: 76,
    position: "东",
    roomtype: "2室2厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5af"),
    title: "整租·嘉御豪庭 5室2厅 南",
    area: "增城",
    detailplace: "石滩镇",
    square: 130,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b0"),
    title: "整租·富力天海湾 3室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 98,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b1"),
    title: "整租·城投·首筑花园 3室2厅 东南",
    area: "南沙",
    detailplace: "横沥",
    square: 104,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b2"),
    title: "整租·尚东阳光 2室2厅 南",
    area: "增城",
    detailplace: "沙村",
    square: 86,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b3"),
    title: "整租·黄埔万科中心 1室1厅 南",
    area: "黄埔",
    detailplace: "文冲",
    square: 34,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b4"),
    title: "整租·岭南新世界 1室0厅 南",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 11.49,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b5"),
    title: "整租·金燕花园 3室2厅 北",
    area: "天河",
    detailplace: "燕塘",
    square: 98,
    position: "北",
    roomtype: "3室2厅2卫",
    price: NumberInt("4300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b6"),
    title: "整租·南天广场 2室1厅 北",
    area: "天河",
    detailplace: "珠江新城西",
    square: 74.25,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b7"),
    title: "整租·恒大山水郡 3室2厅 南",
    area: "增城",
    detailplace: "中新镇",
    square: 112,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1350")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b8"),
    title: "整租·奥园中环广场 1室1厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 142,
    position: "北",
    roomtype: "1室1厅0卫",
    price: NumberInt("3280")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5b9"),
    title: "整租·小北路 2室1厅 东南",
    area: "越秀",
    detailplace: "小北",
    square: 36.35,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ba"),
    title: "整租·万科东荟城 1室0厅 东南",
    area: "黄埔",
    detailplace: "香雪",
    square: 12,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5bb"),
    title: "整租·宝华路(荔湾) 1室0厅 东南",
    area: "荔湾",
    detailplace: "西关",
    square: 140,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("20000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5bc"),
    title: "整租·体育路 3室2厅 南",
    area: "花都",
    detailplace: "旧区",
    square: 113,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5bd"),
    title: "整租·尚雅苑 3室1厅 南/北",
    area: "天河",
    detailplace: "天河南",
    square: 74.1,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("6300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5be"),
    title: "整租·鹤亭新村 3室1厅 东",
    area: "白云",
    detailplace: "太和",
    square: 110,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5bf"),
    title: "整租·敏捷绿湖首府一期 2室2厅 北",
    area: "增城",
    detailplace: "石滩镇",
    square: 80,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c0"),
    title: "整租·万科金色城品 4室2厅 南",
    area: "番禺",
    detailplace: "沙湾",
    square: 118,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c1"),
    title: "整租·越秀花苑大厦 1室0厅 西",
    area: "越秀",
    detailplace: "小北",
    square: 25,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c2"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 45,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c3"),
    title: "整租·时代南湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 179,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c4"),
    title: "整租·富力东山新天地公寓 1室0厅 北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c5"),
    title: "整租·增城万达广场 1室0厅 北",
    area: "增城",
    detailplace: "增城区府",
    square: 53,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("1312")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c6"),
    title: "整租·禺秀园 3室2厅 南/北",
    area: "番禺",
    detailplace: "市桥",
    square: 117,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c7"),
    title: "整租·峰境园 5室2厅 复式 南/北",
    area: "花都",
    detailplace: "北兴镇",
    square: 206,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c8"),
    title: "整租·长寿西路 2室1厅 东",
    area: "荔湾",
    detailplace: "西关",
    square: 40,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5c9"),
    title: "整租·中海橡园国际 1室0厅 北",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12.5,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ca"),
    title: "整租·南沙金茂湾 2室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 85,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5cb"),
    title: "整租·悠山时光 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 110,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5cc"),
    title: "整租·富力泉天下 2室1厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 84,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5cd"),
    title: "整租·时代印象 3室2厅 南",
    area: "从化",
    detailplace: "太平镇",
    square: 88,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ce"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 149,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5cf"),
    title: "整租·越秀国际总部广场 3室2厅 东",
    area: "南沙",
    detailplace: "金洲",
    square: 63,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d0"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 149,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d1"),
    title: "整租·淘金家园一期 2室1厅 东",
    area: "越秀",
    detailplace: "淘金",
    square: 95,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d2"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12.5,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d3"),
    title: "整租·鹅潭汇·SOHO 1室1厅 东南",
    area: "荔湾",
    detailplace: "滘口",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d4"),
    title: "整租·越秀花苑大厦 1室0厅 西",
    area: "越秀",
    detailplace: "小北",
    square: 25,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d5"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 45,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d6"),
    title: "整租·时代南湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 179,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d7"),
    title: "整租·富力东山新天地公寓 1室0厅 北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d8"),
    title: "整租·增城万达广场 1室0厅 北",
    area: "增城",
    detailplace: "增城区府",
    square: 53,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("1312")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5d9"),
    title: "整租·禺秀园 3室2厅 南/北",
    area: "番禺",
    detailplace: "市桥",
    square: 117,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5da"),
    title: "整租·峰境园 5室2厅 复式 南/北",
    area: "花都",
    detailplace: "北兴镇",
    square: 206,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5db"),
    title: "整租·长寿西路 2室1厅 东",
    area: "荔湾",
    detailplace: "西关",
    square: 40,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5dc"),
    title: "整租·中海橡园国际 1室0厅 北",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12.5,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5dd"),
    title: "整租·南沙金茂湾 2室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 85,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5de"),
    title: "整租·悠山时光 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 110,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5df"),
    title: "整租·富力泉天下 2室1厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 84,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e0"),
    title: "整租·时代印象 3室2厅 南",
    area: "从化",
    detailplace: "太平镇",
    square: 88,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e1"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 149,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e2"),
    title: "整租·越秀国际总部广场 3室2厅 东",
    area: "南沙",
    detailplace: "金洲",
    square: 63,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e3"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 149,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e4"),
    title: "整租·淘金家园一期 2室1厅 东",
    area: "越秀",
    detailplace: "淘金",
    square: 95,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e5"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12.5,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e6"),
    title: "整租·鹅潭汇·SOHO 1室1厅 东南",
    area: "荔湾",
    detailplace: "滘口",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e7"),
    title: "整租·鹅潭汇·SOHO 1室1厅 东南",
    area: "荔湾",
    detailplace: "滘口",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e8"),
    title: "整租·侨林苑 3室1厅 南/北",
    area: "天河",
    detailplace: "林和",
    square: 115,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("6500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5e9"),
    title: "整租·中山三路 3室1厅 东",
    area: "越秀",
    detailplace: "农讲所",
    square: 78,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ea"),
    title: "整租·壹诚大厦 1室1厅 南",
    area: "荔湾",
    detailplace: "东塱",
    square: 25,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5eb"),
    title: "整租·江南大道中 1室1厅 南",
    area: "海珠",
    detailplace: "江南大道中",
    square: 38,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ec"),
    title: "整租·碧桂园凤凰城凤雅苑 6室2厅 南",
    area: "增城",
    detailplace: "凤凰城",
    square: 515,
    position: "南",
    roomtype: "6室2厅4卫",
    price: NumberInt("25000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ed"),
    title: "整租·黄华路 2室1厅 东/南",
    area: "越秀",
    detailplace: "建设路",
    square: 60,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ee"),
    title: "整租·招商城市主场 2室2厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 71.76,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ef"),
    title: "合租·芭堤水岸 4居室 北卧",
    area: "海珠",
    detailplace: "滨江东",
    square: 13.6,
    position: "北",
    roomtype: "4室1厅1卫",
    price: NumberInt("2236")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f0"),
    title: "整租·东瀚园商务大厦 3室1厅 东",
    area: "番禺",
    detailplace: "东怡新区",
    square: 121,
    position: "东",
    roomtype: "3室1厅0卫",
    price: NumberInt("5000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f1"),
    title: "整租·豫章苑 4室2厅 东北",
    area: "黄埔",
    detailplace: "大沙地",
    square: 125,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f2"),
    title: "整租·保利领秀海 4室2厅 南/北",
    area: "番禺",
    detailplace: "莲花山",
    square: 139,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("6300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f3"),
    title: "整租·敏捷尚品国际 1室2厅 北",
    area: "南沙",
    detailplace: "进港大道",
    square: 57,
    position: "北",
    roomtype: "1室2厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f4"),
    title: "整租·滨江明珠 4室2厅 南/北",
    area: "海珠",
    detailplace: "滨江东",
    square: 193.5,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("16000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f5"),
    title: "整租·湾区·金融城 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 139,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f6"),
    title: "整租·侨源山庄 3室1厅 南",
    area: "天河",
    detailplace: "粤垦",
    square: 108,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f7"),
    title: "整租·奥园城市天地 2室1厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 58,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("3600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f8"),
    title: "整租·南沙涉外公馆 2室1厅 复式 南",
    area: "南沙",
    detailplace: "进港大道",
    square: 50,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5f9"),
    title: "合租·侨怡苑 2居室 东南卧",
    area: "天河",
    detailplace: "体育中心",
    square: 30,
    position: "东",
    roomtype: "2室0厅1卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5fa"),
    title: "整租·时代南湾 4室2厅 东南/西北",
    area: "南沙",
    detailplace: "南沙港",
    square: 138,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5fb"),
    title: "整租·东涌路 3室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 65,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5fc"),
    title: "整租·奥园中环广场 1室1厅 南",
    area: "南沙",
    detailplace: "金洲",
    square: 53.35,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5fd"),
    title: "整租·北丽园 1室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 40,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1200")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5fe"),
    title: "整租·佳兆业悦江府 4室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 125,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b5ff"),
    title: "整租·越秀明珠天悦江湾 3室2厅 南/北",
    area: "南沙",
    detailplace: "明珠湾",
    square: 89,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b600"),
    title: "整租·信基玥岛 3室1厅 南",
    area: "番禺",
    detailplace: "厦滘",
    square: 45,
    position: "南",
    roomtype: "3室1厅2卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b601"),
    title: "整租·广州雅居乐花园上善若水 1室0厅 南/北",
    area: "番禺",
    detailplace: "雅居乐",
    square: 13,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b602"),
    title: "整租·万博翠湖花园 6室2厅 南",
    area: "番禺",
    detailplace: "汉溪长隆",
    square: 432.6,
    position: "南",
    roomtype: "6室2厅1卫",
    price: NumberInt("13000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b603"),
    title: "整租·保利和悦滨江 4室1厅 南/西南",
    area: "荔湾",
    detailplace: "西朗",
    square: 107,
    position: "南",
    roomtype: "4室1厅2卫",
    price: NumberInt("7000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b604"),
    title: "合租·东洲大厦 3居室 西南卧",
    area: "天河",
    detailplace: "天河南",
    square: 30,
    position: "西",
    roomtype: "3室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b605"),
    title: "整租·番禺招商金山谷意库 1室1厅 北",
    area: "番禺",
    detailplace: "金山谷",
    square: 40,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("2250")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b606"),
    title: "整租·来福园 4室1厅 南",
    area: "番禺",
    detailplace: "市桥",
    square: 89,
    position: "南",
    roomtype: "4室1厅1卫",
    price: NumberInt("3800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b607"),
    title: "整租·百脑汇科技大厦 2室1厅 北",
    area: "天河",
    detailplace: "石牌",
    square: 97,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("5500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b608"),
    title: "整租·丽影华庭C区 1室1厅 南/北",
    area: "海珠",
    detailplace: "客村",
    square: 55,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("4600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b609"),
    title: "整租·合景天峻 2室1厅 北",
    area: "黄埔",
    detailplace: "知识城",
    square: 42,
    position: "北",
    roomtype: "2室1厅1卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b60a"),
    title: "合租·淘金坑 1居室 南卧",
    area: "越秀",
    detailplace: "淘金",
    square: 30,
    position: "南",
    roomtype: "1室0厅0卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b60b"),
    title: "整租·天健上城 3室2厅 南",
    area: "天河",
    detailplace: "广氮",
    square: 170,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("8500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b60c"),
    title: "整租·天誉华庭 2室1厅 东/南/北",
    area: "天河",
    detailplace: "龙口西",
    square: 75,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("5100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b60d"),
    title: "整租·南沙湾御苑 3室2厅 南/北",
    area: "南沙",
    detailplace: "南沙港",
    square: 111.4,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b60e"),
    title: "整租·绿地空港国际中心 2室1厅 南",
    area: "花都",
    detailplace: "镜湖大道",
    square: 46,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("2000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b60f"),
    title: "整租·创鸿嘉园 2室2厅 北",
    area: "南沙",
    detailplace: "金洲",
    square: 50,
    position: "北",
    roomtype: "2室2厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b610"),
    title: "整租·敏捷绿湖首府一期 3室2厅 南/西南",
    area: "增城",
    detailplace: "石滩镇",
    square: 120,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b611"),
    title: "整租·东方名都花园 4室2厅 复式 东",
    area: "增城",
    detailplace: "白江",
    square: 144,
    position: "东",
    roomtype: "4室2厅2卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b612"),
    title: "整租·公路规划局宿舍 3室1厅 南",
    area: "天河",
    detailplace: "沙太南",
    square: 71,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b613"),
    title: "整租·雅居乐花园一尺山居 3室2厅 南",
    area: "番禺",
    detailplace: "雅居乐",
    square: 97,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("4400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b614"),
    title: "整租·中建·映花悦府 2室1厅 南",
    area: "花都",
    detailplace: "铁路西",
    square: 78,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b615"),
    title: "整租·越秀花苑大厦 1室0厅 西",
    area: "越秀",
    detailplace: "小北",
    square: 25,
    position: "西",
    roomtype: "1室0厅1卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b616"),
    title: "整租·暨南大学宿舍 1室1厅 南",
    area: "天河",
    detailplace: "石牌",
    square: 45,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("3000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b617"),
    title: "整租·时代南湾 4室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 179,
    position: "南",
    roomtype: "4室2厅3卫",
    price: NumberInt("4000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b618"),
    title: "整租·富力东山新天地公寓 1室0厅 北",
    area: "越秀",
    detailplace: "五羊新城",
    square: 50,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("5300")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b619"),
    title: "整租·增城万达广场 1室0厅 北",
    area: "增城",
    detailplace: "增城区府",
    square: 53,
    position: "北",
    roomtype: "1室0厅1卫",
    price: NumberInt("1312")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b61a"),
    title: "整租·禺秀园 3室2厅 南/北",
    area: "番禺",
    detailplace: "市桥",
    square: 117,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("3150")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b61b"),
    title: "整租·峰境园 5室2厅 复式 南/北",
    area: "花都",
    detailplace: "北兴镇",
    square: 206,
    position: "南",
    roomtype: "5室2厅3卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b61c"),
    title: "整租·长寿西路 2室1厅 东",
    area: "荔湾",
    detailplace: "西关",
    square: 40,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b61d"),
    title: "整租·中海橡园国际 1室0厅 北",
    area: "海珠",
    detailplace: "工业大道北",
    square: 12.5,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b61e"),
    title: "整租·南沙金茂湾 2室2厅 南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 85,
    position: "南",
    roomtype: "2室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b61f"),
    title: "整租·悠山时光 3室2厅 南",
    area: "南沙",
    detailplace: "南沙港",
    square: 110,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b620"),
    title: "整租·富力泉天下 2室1厅 东南",
    area: "从化",
    detailplace: "温泉镇",
    square: 84,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b621"),
    title: "整租·时代印象 3室2厅 南",
    area: "从化",
    detailplace: "太平镇",
    square: 88,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("1500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b622"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 149,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b623"),
    title: "整租·越秀国际总部广场 3室2厅 东",
    area: "南沙",
    detailplace: "金洲",
    square: 63,
    position: "东",
    roomtype: "3室2厅2卫",
    price: NumberInt("2100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b624"),
    title: "整租·奥园国际中心 1室1厅 南",
    area: "番禺",
    detailplace: "万博",
    square: 149,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("11000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b625"),
    title: "整租·淘金家园一期 2室1厅 东",
    area: "越秀",
    detailplace: "淘金",
    square: 95,
    position: "东",
    roomtype: "2室1厅1卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b626"),
    title: "整租·岭南新世界 1室0厅 北",
    area: "白云",
    detailplace: "嘉禾望岗",
    square: 12.5,
    position: "北",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b627"),
    title: "整租·鹅潭汇·SOHO 1室1厅 东南",
    area: "荔湾",
    detailplace: "滘口",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b628"),
    title: "整租·鹅潭汇·SOHO 1室1厅 东南",
    area: "荔湾",
    detailplace: "滘口",
    square: 50,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b629"),
    title: "整租·宝岗大道 3室2厅 南/北",
    area: "海珠",
    detailplace: "宝岗",
    square: 98,
    position: "南",
    roomtype: "3室2厅1卫",
    price: NumberInt("3700")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b62a"),
    title: "整租·骏逸湖畔花苑 4室2厅 南/北",
    area: "从化",
    detailplace: "太平镇",
    square: 170,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("2800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b62b"),
    title: "整租·百灵路 1室1厅 北",
    area: "越秀",
    detailplace: "盘福",
    square: 25,
    position: "北",
    roomtype: "1室1厅1卫",
    price: NumberInt("1400")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b62c"),
    title: "整租·南沙金茂湾 2室1厅 西南",
    area: "南沙",
    detailplace: "明珠湾",
    square: 54,
    position: "西",
    roomtype: "2室1厅2卫",
    price: NumberInt("2500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b62d"),
    title: "整租·实地常春藤 5室2厅 南/北",
    area: "黄埔",
    detailplace: "黄埔永和",
    square: 138,
    position: "南",
    roomtype: "5室2厅2卫",
    price: NumberInt("2600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b62e"),
    title: "整租·盘福路 3室1厅 南",
    area: "越秀",
    detailplace: "盘福",
    square: 50,
    position: "南",
    roomtype: "3室1厅1卫",
    price: NumberInt("3500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b62f"),
    title: "整租·荔湾新天地 2室1厅 南",
    area: "荔湾",
    detailplace: "广钢新城",
    square: 46,
    position: "南",
    roomtype: "2室1厅1卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b630"),
    title: "整租·正佳东方国际 1室1厅 南",
    area: "越秀",
    detailplace: "淘金",
    square: 210,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("19500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b631"),
    title: "整租·金地香山湖香汇花园 4室2厅 南",
    area: "增城",
    detailplace: "永宁",
    square: 128,
    position: "南",
    roomtype: "4室2厅2卫",
    price: NumberInt("1900")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b632"),
    title: "整租·中冠大厦 1室1厅 东",
    area: "越秀",
    detailplace: "五羊新城",
    square: 35,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b633"),
    title: "整租·祥景花园B区 3室2厅 南",
    area: "白云",
    detailplace: "黄石",
    square: 103,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("4500")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b634"),
    title: "整租·中冠大厦 1室1厅 西南",
    area: "越秀",
    detailplace: "五羊新城",
    square: 35,
    position: "西",
    roomtype: "1室1厅1卫",
    price: NumberInt("4100")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b635"),
    title: "整租·晓港湾 1室1厅 东",
    area: "海珠",
    detailplace: "东晓南",
    square: 30,
    position: "东",
    roomtype: "1室1厅1卫",
    price: NumberInt("1800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b636"),
    title: "整租·西关海 1室0厅 东",
    area: "荔湾",
    detailplace: "南岸路",
    square: 13,
    position: "东",
    roomtype: "1室0厅0卫",
    price: NumberInt("1000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b637"),
    title: "整租·敏捷上城商务中心 3室1厅 东南",
    area: "番禺",
    detailplace: "万博",
    square: 90,
    position: "东",
    roomtype: "3室1厅2卫",
    price: NumberInt("5800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b638"),
    title: "整租·领峰园 3室2厅 南",
    area: "天河",
    detailplace: "珠江新城中",
    square: 160,
    position: "南",
    roomtype: "3室2厅2卫",
    price: NumberInt("17800")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b639"),
    title: "整租·时代风华 1室1厅 南",
    area: "增城",
    detailplace: "新塘北",
    square: 33,
    position: "南",
    roomtype: "1室1厅1卫",
    price: NumberInt("1600")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b63a"),
    title: "整租·人和丽景苑 4室4厅 西南",
    area: "白云",
    detailplace: "人和",
    square: 180,
    position: "西",
    roomtype: "4室4厅2卫",
    price: NumberInt("6000")
} ]);
db.getCollection("gz_rent_houses").insert([ {
    _id: ObjectId("69464cc4f53506a70a92b63b"),
    title: "整租·天伦东时区 3室1厅 东",
    area: "黄埔",
    detailplace: "黄埔区府",
    square: 90,
    position: "东",
    roomtype: "3室1厅1卫",
    price: NumberInt("3720")
} ]);
