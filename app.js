const rotateNotice = document.getElementById("rotateNotice");
const startBtn = document.getElementById("startBtn");

function isPortrait(){
  return window.innerHeight > window.innerWidth;
}

function checkOrientation(){
  if(isPortrait()){
    rotateNotice.style.display = "flex";
    startBtn.style.display = "none";
  } else {
    rotateNotice.style.display = "none";
    startBtn.style.display = "block";
  }
}

checkOrientation();
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

startBtn.onclick = async function(){

  // fullscreen
  if(document.documentElement.requestFullscreen){
    await document.documentElement.requestFullscreen();
  }

  // khóa ngang (nếu trình duyệt cho phép)
  if(screen.orientation && screen.orientation.lock){
    screen.orientation.lock("landscape").catch(()=>{});
  }

  // chuyển sang intro.html (animation)
  window.location.href = "intro.html";
};