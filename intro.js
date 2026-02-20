var buttonActive = document.querySelector('.button button');
var mainContent = document.getElementById("mainContent");

function startAnimation(){

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

  boxFlower.classList.add("active");
  boxFlower2.classList.add("active");
  boxFlower3.classList.add("active");
  boxFlower4.classList.add("active");
  boxFlower5.classList.add("active");
  boxFlower6.classList.add("active");
  circleActive.classList.add("active");
  boxsliderimg1.classList.add("active");
  catActive.classList.add("active");
  numberActive.classList.add("active");
  buttonDisplay.classList.add("active");
  rhombus1.classList.add("active");
  rhombus2.classList.add("active");
  rhombusImg.classList.add("active");
  mailActive.classList.add("active");

  var mySong = document.getElementById("song");
  if(mySong.paused){
    mySong.play();
  }
}

// bấm nút trong animation
buttonActive.onclick = function(){
  startAnimation();
}

// mail popup
var mail = document.querySelector(".mail");
var slider3 = document.querySelector(".slider3");
var closeSlider3 = document.querySelector(".fa-xmark");

mail.onclick = function(){
  slider3.classList.add("active");
}

closeSlider3.addEventListener('click', function(){
  slider3.classList.remove('active');
});