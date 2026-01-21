'use strict'
let min = 0;
let hrs = 0;
let sec = 0;
let timer = null;

let time = document.getElementById('time')
function start() {
    if (timer !== null)
        return
    timer = setInterval(() => {
        sec++;
        if (sec === 60) {
            sec = 0
            min++;
        }
        if (min === 60) {
            min = 0
            hrs++
        }
        time.innerText = `${hrs < 10 ? "0"+hrs : hrs} : ${min < 10 ? "0"+min : min} : ${sec < 10 ? "0"+sec : sec}`

    }, 1000)
}
function stop() {
    clearInterval(timer)
    timer = null
}
function rest() {
    stop()
    sec = 0
    min = 0
    hrs = 0
    time.innerText = '00 : 00 :00'
}