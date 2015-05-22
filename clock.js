var c = 1;
function startTime() {
	
    var today=new Date()
    var h=today.getHours()
    var m=today.getMinutes()
    var s=today.getSeconds()
	var mon=today.getMonth()
	var yr=today.getFullYear()
	var da=today.getDate()
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById('txt').innerHTML = mon + "/" + da + "/" + yr + " " + h+ ":" + m + ":" + s;
    var t = setTimeout(function(){startTime()},500);
}
function trippyColor() {
  if (c >= 359)  c=1;  else  c++;
	document.getElementById('txt').style.backgroundColor = "hsl("+c+", 100%, 50%)";
	var t = setTimeout(function(){ trippyColor()},10);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}