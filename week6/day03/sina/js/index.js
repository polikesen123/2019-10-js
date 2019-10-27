let slideBox = document.querySelector('#slideBox');

function getData(url,cb) {
  let xhr = new XMLHttpRequest();
  // xhr.open('get', './data/banner.json', true);
  xhr.open('get', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
      let data = JSON.parse(xhr.response);
      // render(data);
      // swiperInit();
      // console.log(data)
      cb && cb(data)
    }
  }
  xhr.send();
}
getData('./data/banner.json', function (data) {
  render(data);
  swiperInit();
});

function swiperInit() {
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    loop: true,
    autoplay: true
  });
}

function render(data) {
  let str = '';
  data.forEach(item => {
    str += `<div class="swiper-slide"><img src="${item.img}" alt=""><p>${item.title}</p></div>`;
    slideBox.innerHTML = str;
  })
}
//获取列表数据
getData('./data/list.json', function (data) {
  console.log(data)
  renderList(data)
  // render(data);
  // swiperInit();
});
function renderList(data){
  let str = '';
  data.forEach(item=>{
    if(item.type===0){
      //无图情况
      str +=`    <div class="list">
      <!-- cms 发布器 -->
      <div class="textBox">
          <p>我和我的祖国</p>
          <div class="commentBox">
              <span class="icon_com"></span>
              <span>${item.commentNum}</span>
              <span>环球娱乐中心</span>
          </div>
      </div>
  </div>`
    }
    else{
      //单图情况
      str +=`<div class="list">
      <!-- cms 发布器 -->
      <div class="textBox">
          <p>我和我的祖国</p>
          <div class="commentBox">
              <span class="icon_com"></span>
              <span>${item.commentNum}</span>
              <span>环球娱乐中心</span>
          </div>
      </div>
      <div class="imgBox">
          <img src="${item.img[0]}" alt="">
      </div>
  </div>`;
    }
  })
  document.querySelector('.listBox').innerHTML = str;
}