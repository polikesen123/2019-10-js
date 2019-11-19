$(function () {
    //当DOM结构加载完成之后执行该函数
    $('.submit').on('click', function (e) {
        let account = $('input[type=text').val();
        let password = $('input[type=password').val();
        if (!account || !password) {
            alert('用户名或者密码不能为空');
            return;
        }
        password = md5(password);
        axios.post('./user/login', {
            account,
            password
        }).then((data) => {
            //登录成功  1 页面跳转 2 存储权限信息
            if (data.code === 0) {
                //密码正确
                alert('登录成功！',{
                    handled:function(){
                        location.href = './index.html';
                    }
                });
                //把权限信息存储到本地
                localStorage.setItem('power',data.power);
                //把用户名存储在本地
                localStorage.setItem('username',account);
            }else{
                alert('账户名或密码错误，请重新输入！')
            }
            console.log(data)
        }, (err) => {
            //登录失败
            alert('系统繁忙，请稍后重试')
            console.log(err)
        });

    })
})