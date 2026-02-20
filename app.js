// app.js (BẢN SẠCH - KHÔNG fullscreen, KHÔNG orientation)

const startBtn = document.getElementById("startBtn");

if(startBtn){
  startBtn.onclick = function(){
    // chỉ chuyển sang intro.html
    window.location.href = "intro.html";
  }
}