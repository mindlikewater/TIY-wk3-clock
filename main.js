var displayTime = document.getElementById("time");
var displayHex = document.getElementById("hex");
var colorChange = document.getElementById("hex-box");

function getTime () {
  var time = new Date ();
  var hours = time.getHours ();
  var min = time.getMinutes ();
  var sec = time.getSeconds ();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  var currentTime = hours + ":" + min + ":" + sec;
  displayTime.innerHTML = currentTime;

  var hexColor = "#" + hours + min + sec;
  displayHex.innerHTML = hexColor;

  colorChange.style.backgroundColor = hexColor;
  colorChange.innerHTML = hexColor;
};

setInterval(getTime, 1000);

getTime();
