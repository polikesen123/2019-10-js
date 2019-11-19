//匹配 有效数字
//可以有正负号 可以有小数整数部分不能以0开头
var reg = /^[-+]?(([1-9]\d*)|\d)(\.\d+)?$/;
var reg = /^[-+]?(([1-9]\d+)|\d)(\.\d+)?$/;
var reg = /^[-+]?(([1-9]\d*)|0)(\.\d+)?$/;
console.log(reg.test('0123'));
console.log(reg.test('0123'));
console.log(reg.test('01.23'));
console.log(reg.test('10.23'));
console.log(reg.test('0'));IOA

//-------------------------------------------
//匹配手机号
//1开头 345678 后边没要求
var reg = /^1[3-9]\d{9}$/
//---------qq邮箱
var reg = /^[1-9]\d{4-9}@qq.com$/i;

//=--------------------------
//8-18位密码 既有大写又有小写；还得有数字
var str = '';
var reg = /([a-zA-Z]\d\w\.){8,18}/;
function judge(str){
    if(str.length>18 || str.length<8) return false;
    if(!/[A-Z]/.test(str)) return false;
    if(!/[a-z]/.test(str)) return false;
    if(!/\d/.test(str)) return false;
    return true;
        // if(str.length>=8 && str.length<=18 &&/[A-Z]/.test(str)&&/[a-z]/.test(str)&&/\d/.test(str) ){
    //     return true
    // }
    // return false

}
//---------------身份证 18位
var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
var reg = /^\d{6}\d{4}\d{2}\d{2}\d{2}\d(\d|X)$/

//------------------18-65年龄
var reg = /^(1[89]|[2-5]\d|6[0-5])$/
