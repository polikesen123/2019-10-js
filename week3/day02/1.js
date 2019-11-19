//正则是引用数据类型
var reg = /\d/;
var reg2 = new RegExp('\\d');

console.log(reg.test('qwerrt21244'));

var reg = /^[1.2]$/;//中括号中的点就是点本身，不代表任何字符
console.log(reg.test('1.2'))//false
console.log(reg.test('1q2'))//false
console.log(reg.test('1'))//true
console.log(reg.test('.'))//true
console.log(reg.test('q'))//false

var reg = /^18|19/;//以18开头 或者有19；或的优先级高
var reg = /18|19$/;//含有18 或以19结尾
var reg = /^18|19$/;//以18开头  或以19结尾
var reg = /^(18|19)$/;//18 19 /^1[89]$/