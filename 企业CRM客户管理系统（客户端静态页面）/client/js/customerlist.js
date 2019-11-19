$(function () {
    console.log(location.hash);
    window.addEventListener('hashchange', function () {
        console.log(location.hash);
        sessionStorage.setItem('currentUrl', './page/customerlist.html'+location.hash);
    })

    function getData() {
        axios.get('/customer/list?lx=my').then(data => {
            render(data.data);
        })
    }

    function render(data) {

    }
})