let timer = null;
let isRunning = false;

function isPortrait(){
  return window.matchMedia("(orientation: portrait)").matches;
}

function startIntro(){
  // Ẩn countdown, hiện intro
  document.getElementById("countdown").style.display = "none";
  document.getElementById("introScene").style.display = "block";

  // sau này bạn có thể gọi intro.js tại đây
  // startDragonAnimation();
}

function startTimer(){
  if(isRunning) return;
  isRunning = true;

  var fut = new Date("jan 12, 2026 13:29:00").getTime();

  timer = setInterval(function(){
    var now = new Date().getTime();
    var D = fut - now;

    if(D < 0){
      clearInterval(timer);
      startIntro();   // ❌ KHÔNG redirect nữa
      return;
    }

    var days = Math.floor(D/(1000*60*60*24));
    var hours = Math.floor(D/(1000*60*60));
    var minutes = Math.floor(D/(1000*60));
    var seconds = Math.floor(D/(1000));

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

  }, 1000);
}

function stopTimer(){
  if(timer){
    clearInterval(timer);
    timer = null;
    isRunning = false;
  }
}

function checkOrientation(){
  if(isPortrait()){
    stopTimer();
  }else{
    startTimer();
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);