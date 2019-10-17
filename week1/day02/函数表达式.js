var sayHello;
console.log(typeof(sayHey));//function sayHey(){console.log(sayHey2)}
console.log(typeof(sayHo));//undefined

function sayHey(){
    console.log('sayHey');
}
sayHello = function sayHo(){
    console.log('sayHello');
}
function sayHey(){
    console.log('sayHey2');
}
sayHello = function sayHo(){
    console.log('sayHello2');
}
sayHey(); //sayHey2
sayHello();//sayHello2