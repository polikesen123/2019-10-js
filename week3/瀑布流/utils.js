//utils 这个js 提供一些我们常用的方法
var utils = {
    getCss:function (ele,attr) {
        //getCss(box,'width') 获取box的width 的属性值 数字+px
        //getCss(box,'background') 获取box的width 的属性值 字符串
        //px em rem vh vw 含有这些的字符串 我们用parseFloat处理
        //20px 30px
        var reg = /^[+-]?\d+(\.\d+)?(px|rem|em|pt)?$/;
        var obj = getComputedStyle(ele,null);
        var res = obj[attr];//有可能100px
        if(reg.test(res)){
            return parseFloat(res);
        }
        return res;
    },
    setCss:function (ele,attr,val) {
        var reg = /width|height|padding|margin|left|right|top|bottom/i;
        if(reg.test(attr)){
            ele.style[attr] = parseFloat(val)+'px';
        }else{
            ele.style[attr] = val;
        }   
    },
    offSet:function (ele) {
        //获取ele到body的偏移量a
        var l = ele.offsetLeft,
            t = ele.offsetTop;
        var temp = ele.offsetParent;
        while(temp){
            l +=temp.offsetLeft + temp.clientLeft;
            t +=temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return{
            l,t
        }
    },
    winH:function () {
        return document.documentElement.clientHeight||document.body.clientHeight; 
    }
}