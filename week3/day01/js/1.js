var reg = /d/;
console.log(reg.test('qwert123456'));//false
console.log(reg.test('abcdddd123456'));//true

var reg = /\d/;
var reg = new RegExp('\\d');
console.log(reg)
console.log(reg.test('qwert123456'));//true
console.log(reg.test('abcdddd123456'));//true

var reg = /\\d/;
console.log(reg.test('qwert123456'));//false
console.log(reg.test('abcd\\ddd123456'));//true

var reg = /\w/
console.log(reg.test('-......'));
var reg = /\W/
console.log(reg.test('=bifjka'));

var reg = /\d?/;
console.log(reg.test('qwerihcubh'));//true

var reg = /\d{2}/;
console.log(reg.test('jadah2nnjhfh'));//false
console.log(reg.test('jadah23nnjhfh'));//true
console.log(reg.test('jadah23421nnjhfh'));//true

var reg = /^d/ //以d开头
reg = /^\d/  //以数字开头
reg = /d$/   //以d结尾
reg = /\d$/  //以数字结尾
