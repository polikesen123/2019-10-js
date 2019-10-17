!(function() {
    function Fdj() {
        this.wrap = document.querySelector('.wrap');
        this.spic = document.querySelector('#spic');
        this.bpic = document.querySelector('#bpic');
        this.sf = document.querySelector('#sf');
        this.lis = document.querySelectorAll('#list li');
        this.bf = document.querySelector('#bf');
        this.ul = document.querySelector('#list ul');
        this.left = document.querySelector('#left');
        this.right = document.querySelector('#right');
    }
    Fdj.prototype = {
        init: function() {
            var _this = this;
            this.spic.onmouseover = function() {
                _this.showfdj();
                _this.sfsize();
                _this.spic.onmousemove = function(e) {
                    var e = e || window.event;
                    _this.sflocation(e);
                }
            }
            this.spic.onmouseout = function() {
                _this.hidefdj();
            }
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].onclick = function() {
                    var url = this.children[0].src;
                    _this.spic.children[0].src = url;
                    _this.bpic.src = url;
                }
            }
            this.liwidth = this.lis[0].offsetWidth;
            this.ul.style.width = this.lis.length * this.liwidth + 'px';
            this.num = 6;
            if (this.lis.length <= 6) {
                this.left.style.color = '#eee';
                this.right.style.color = '#eee';
            }
            this.right.onclick = function() {
                _this.rightclick();
            }
            this.left.onclick = function() {
                _this.leftclick();
            }
        },
        showfdj: function() {
            this.sf.style.visibility = 'visible';
            this.bf.style.visibility = 'visible';
        },
        hidefdj: function() {
            this.sf.style.visibility = 'hidden';
            this.bf.style.visibility = 'hidden';
        },
        sfsize: function() {
            var l = this.bf.offsetWidth * this.spic.offsetWidth / this.bpic.offsetWidth;
            var t = this.bf.offsetHeight * this.spic.offsetHeight / this.bpic.offsetHeight;
            this.sf.style.width = l + 'px';
            this.sf.style.height = t + 'px';
        },
        sflocation: function(e) {
            var l = e.clientX - this.wrap.offsetLeft - this.sf.offsetWidth / 2;
            var t = e.clientY - this.wrap.offsetTop - this.sf.offsetHeight / 2;
            this.bili = this.bf.offsetWidth / this.sf.offsetWidth;
            if (l <= 0) {
                l = 0;
            } else if (l >= this.spic.offsetWidth - this.sf.offsetWidth) {
                l = this.spic.offsetWidth - this.sf.offsetWidth - 2;
            }
            if (t <= 0) {
                t = 0;
            } else if (t >= this.spic.offsetHeight - this.sf.offsetHeight) {
                t = this.spic.offsetHeight - this.sf.offsetHeight - 2;
            }
            this.sf.style.left = l + 'px';
            this.sf.style.top = t + 'px';
            this.bpic.style.left = -l * this.bili + 'px';
            this.bpic.style.top = -t * this.bili + 'px';
        },
        rightclick: function() {
            if (this.num < this.lis.length) {
                this.left.style.color = '#333';
                this.num++;
                if (this.num == this.lis.length) {
                    this.right.style.color = '#eee';
                }
                buffermove(this.ul, { left: -(this.num - 6) * this.liwidth });
            }
        },
        leftclick: function() {
            if (this.num > 6) {
                this.right.style.color = '#333';
                this.num--;
                if (this.num <= 6) {
                    this.left.style.color = '#eee';
                }
                buffermove(this.ul, { left: -(this.num - 6) * this.liwidth });
            }
        }
 
    }
 
    var f1 = new Fdj();
    f1.init();
})();
