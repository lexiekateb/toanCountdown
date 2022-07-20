document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime),
  requestAnimationFrame(updateBackground)
)

var i = 1;

function updateBackground() {
  var y = setInterval(function(){ 

    if(i > 9) {
      i = 1;
    }
    
    var pic = new Image();
    pic.src = i + ".jpeg";
    
    document.body.style.backgroundImage = "url('"+ i + ".jpeg')";
    i++;

    }, 5000)
}

function updateTime() {
  
  var countDownDate = new Date("Aug 15, 2022 21:08:00").getTime();

  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.documentElement.style.setProperty('--timer-day', "'" + days + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + hours + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + minutes + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + seconds + "'");

  }, 1000);

  requestAnimationFrame(updateTime);
}