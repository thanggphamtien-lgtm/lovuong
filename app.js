const rotateNotice = document.getElementById("rotateNotice");
const startBtn = document.getElementById("startBtn");

function isPortrait(){
  return window.innerHeight > window.innerWidth;
}

function isMobile(){
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function checkOrientation(){
  if(isPortrait() && isMobile()){
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

  if(isMobile()){
    // MOBILE: fullscreen trước
    if(document.documentElement.requestFullscreen){
      try{
        await document.documentElement.requestFullscreen();
      }catch(e){}
    }

    if(screen.orientation && screen.orientation.lock){
      screen.orientation.lock("landscape").catch(()=>{});
    }

    // đợi 300ms rồi mới chuyển trang
    setTimeout(()=>{
      window.location.href = "intro.html";
    },300);

  } else {
    // PC: KHÔNG fullscreen, chuyển trang luôn
    window.location.href = "intro.html";
  }
};