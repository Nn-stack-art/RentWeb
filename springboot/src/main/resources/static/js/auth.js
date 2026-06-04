document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchLink = document.getElementById('switchLink');
    const formTitle = document.getElementById('formTitle');
    const switchText = document.getElementById('switchText');
    const successMsg = document.getElementById('successMsg');
    
    // 切换表单显示
    switchLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (loginForm.style.display === 'none') {
            // 当前显示注册表单，切换到登录表单
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            formTitle.innerHTML = '<i class="fa fa-home"></i>租房系统登录';
            switchText.textContent = '还没有账号？';
            switchLink.textContent = '立即注册';
            successMsg.style.display = 'none';
        } else {
            // 当前显示登录表单，切换到注册表单
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            formTitle.innerHTML = '<i class="fa fa-user-plus"></i>租房系统注册';
            switchText.textContent = '已有账号？';
            switchLink.textContent = '立即登录';
        }
    });
    
    // 注册表单提交处理
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(registerForm);
        const data = {
            username: formData.get('username'),
            passwd: formData.get('passwd')
        };
        
        // 发送AJAX请求
        fetch('/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.code === 200) {
                // 注册成功，显示成功消息并切换回登录表单
                successMsg.style.display = 'block';
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
                formTitle.innerHTML = '<i class="fa fa-home"></i>租房系统登录';
                switchText.textContent = '还没有账号？';
                switchLink.textContent = '立即注册';
                // 清空注册表单
                registerForm.reset();
            } else {
                // 注册失败，显示错误消息
                alert(result.message || '注册失败');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('注册过程中发生错误');
        });
    });
});