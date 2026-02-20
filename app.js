let timer = null;
let isRunning = false;

function isPortrait(){
  return window.matchMedia("(orientation: portrait)").matches;
}

function startTimer(){
  if(isRunning) return;
  isRunning = true;

  var fut = new Date("jan 12, 2023 13:29:00").getTime();

  timer = setInterval(function(){
    var now = new Date().getTime();
    var D = fut - now;

    if(D < 0){
      clearInterval(timer);
      window.location.href = "intro.html";
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

  }, 1000); // 1 giây cho đúng
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
    // đang dọc -> KHÔNG cho chạy
    stopTimer();
  }else{
    // đã xoay ngang -> mới chạy
    startTimer();
  }
}

// chạy khi load
window.addEventListener("load", checkOrientation);

// theo dõi xoay màn hình
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);