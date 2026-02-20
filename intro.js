// ====== KIỂM TRA XOAY MÀN HÌNH ======
const overlay = document.getElementById("rotate-overlay");
const mainContent = document.getElementById("main-content");

function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    // Đang dọc
    overlay.style.display = "flex";
    document.body.classList.add("locked");
  } else {
    // Đang ngang
    overlay.style.display = "none";
    document.body.classList.remove("locked");
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

function isPortrait(){
  return window.matchMedia("(orientation: portrait)").matches;
}

let allowRun = false;

function checkOrientation(){
  if(isPortrait()){
    allowRun = false;
  }else{
    allowRun = true;
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);


// ====== BUTTON ACTIVE (animation chính) ======
var buttonActive = document.querySelector('.button button');

buttonActive.onclick = function(){
    if(!allowRun) return; // ❌ chưa xoay ngang thì không cho chạy

    var boxFlower = document.querySelector('.flower-img:nth-child(1)');
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)');
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)');
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)');
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)');
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)');
    var circleActive = document.querySelector('.circle');
    var boxsliderimg1 = document.querySelector('.box-slider_img1');
    var catActive = document.querySelector('.cat');
    var numberActive = document.querySelector('.box-number');
    var buttonDisplay = document.querySelector('.button');
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)');
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)');
    var rhombusImg = document.querySelector('.rhombus-img');
    var mailActive = document.querySelector('.mail');

    boxFlower.classList.toggle("active");
    boxFlower2.classList.toggle("active");
    boxFlower3.classList.toggle("active");
    boxFlower4.classList.toggle("active");
    boxFlower5.classList.toggle("active");
    boxFlower6.classList.toggle("active");
    circleActive.classList.toggle("active");
    boxsliderimg1.classList.toggle("active");
    catActive.classList.toggle("active");
    numberActive.classList.toggle("active");
    buttonDisplay.classList.toggle("active");
    rhombus1.classList.toggle("active");
    rhombus2.classList.toggle("active");
    rhombusImg.classList.toggle("active");
    mailActive.classList.toggle("active");
};


// ====== MAIL OPEN / CLOSE ======
var mail = document.querySelector(".mail");
var slider3 = document.querySelector(".slider3");
var closeSlider3 = document.querySelector(".fa-xmark");

mail.onclick = function(){
    if(!allowRun) return; // ❌ chưa xoay ngang thì không mở mail
    slider3.classList.add("active");
};

closeSlider3.addEventListener('click', function(){
    if(!allowRun) return;
    slider3.classList.remove('active');
});


// ====== AUDIO ======
var buttonSong = document.querySelector('.button');
var mySong = document.getElementById("song");

buttonSong.onclick = function(){
    if(!allowRun) return; // ❌ chưa xoay ngang thì không phát nhạc

    if(mySong.paused){
        mySong.play();
    }
};