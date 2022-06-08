window.onload = function () {
    var mins=00;
    var seconds = 00; 
    var tens = 00; 
    var appendmins=document.getElementById("minutes");
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
        mins="00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendmins.innerHTML=mins;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9 && tens<=99){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99 && seconds<59) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9 && seconds<=59){
        appendSeconds.innerHTML = seconds;
      }
      if(seconds==59 && tens>99){
          console.log("minutes");
          seconds=0;
          tens=0;
          mins++;
          appendmins.innerHTML="0"+mins;
          appendSeconds.innerHTML="0"+0;
          appendTens.innerHTML="0"+0;
      }
      if(mins>9){
          appendmins.innerHTML=mins;
      }
    
    }
    
  
  }