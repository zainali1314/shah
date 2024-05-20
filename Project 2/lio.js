function time() {
    time = new Date();
    console.log(time)
document.getElementById('time').innerHTML=time;
}
setInterval(time,1000);