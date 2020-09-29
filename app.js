
var hour = 0
var min = 0
var sec = 0
var hourTimer = document.getElementById("hour")
var minTimer = document.getElementById("min")
var secTimer = document.getElementById("sec")
var interval

function stopWatch(){
    sec++
    secTimer.innerHTML =  sec;
    if (sec >= 60) {
        min++
        minTimer.innerHTML = min
        sec=0
    }
    if (min>=60) {
        hour++
        hourTimer.innerHTML= hour
        min=0
        
    }
}
function startTimer(){
    interval = setInterval(stopWatch,60);
    startBtn.innerHTML = "Pause";
    startBtn.onclick = pauseBtn
        
}
function pauseBtn(){
      clearInterval(interval)
      startBtn.innerHTML = "Start"
      startBtn.onclick = startTimer
}

function resetBtn(){
    sec = "0" +0
    min = "0" +0
    hour = "0" +0
        
    secTimer.innerHTML = sec
    minTimer.innerHTML = min
    hourTimer.innerHTML = hour
    pauseBtn()
}

