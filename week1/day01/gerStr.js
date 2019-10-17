var box = document.getElementById('box');
function getSTR() {
    var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var s = '';
    while (s.length < 4) {
        var n = Math.round(Math.random() * str.length);
        if (s.indexOf(str[n] == -1)) {
            s += str[n];
        }
    }
    return s;
}
box.onclick = function () {
   this.innerText = getSTR();
}