var seconds = 00;
var tenths = 00;

var xxSeconds = document.getElementById("seconds");
var xxTenths = document.getElementById("tenths");

var xxStart = document.getElementById("star-button");
var xxStop = document.getElementById("stop-button");
var xxReset = document.getElementById("reset-button");

var Interval;

xxStart.onclick = function() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

function startTimer() {
  tenths++;

  if (tenths < 9) {
    xxTenths.innerHTML = "00" + tenths;
  }
}
