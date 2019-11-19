axios.defaults.baseURL = 'http://127.0.0.1:8888';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;// 默认false 带不带cookie
axios.defaults.transformRequest = function (data) {
    //处理post请求的参数
    let str = '';
    for (let k in data) {
        str += `${k}=${data[k]}&`;
    }
    return str.replace(/&$/, '');
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});