function on(ele, type, f) {
    if (/^my/.test(type)) {
        //不是原生事件的得自己造事件池  认为规定my开头的都是自定义事件
        ele[type] = ele[type] || []; //不同的fn对应不同的事件池
        ele[type].push(f);
    } else {
        //原生事件不需要造事件池 
        type = type.replace(/^on/, ''); //防止传入的参数带着on字符
        ele.addEventListener(type, f, false);
    }
}
// on(btn,'click',f1)
function fire(ele, type, ...arg) {
    if (/^my/.test(type)) {
        //不是原生事件 我们就把 事件池中的事件执行了
        ele[type] = ele[type] || []; //不同的fn对应不同的事件池
        ele[type].forEach(item => {
            item.call(this, ...arg);
        });
    }
}

function off(ele, type, f) {
    if (/^my/.test(type)) {
        ele[type] = ele[type] || []; //不同的fn对应不同的事件池
        let n = ele[type].indexOf(f);
        if (n != -1) {
            ele[type].splice(n, 1);
        }
    } else {
        type = type.replace(/^on/, ''); //防止传入的参数带着on字符
        ele.removeEventListener(type, f, false);
    }
}