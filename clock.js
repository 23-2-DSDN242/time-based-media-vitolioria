/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  function draw_clock(obj) {
  
  background(20,54,219);
  angleMode(DEGREES);
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;
 
  if (alarm < 0){
  
 //seconds code
  let blue = color(122,255,215);
  let orange = color(255,179,117);
  let green = color(40,88,65);
  let lightBlue = color(199,255,246);
  let lerpSeconds = map(obj.seconds,0,59,0,1);
  let secondsColour = lerpColor(blue,orange,lerpSeconds);
  let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
  
  let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360); 
  let center = (370,320) 
  let secondsColourDayChange = lerpColor(green,lightBlue,lerpSeconds);
  push();
  translate(480,250);
  rotate(-90);
  strokeWeight(30);
  stroke(secondsColour);
  noFill();
  let end = map(secondRotateSmooth, 0, 360, 0, 360);
  arc(0,0,300,300,0,end);
 
  pop();

  //minutes code
  minuteDigit = int(map(minutes,0,59,0,59));
  hourDigit = int(hours);
  var minuteChange = 0;
  
  if (minuteDigit <= 9){
  
  fill(255,204,253);
  text("0"+ minuteDigit,365,320);
  }
  else{
  fill(255,204,253);
  textSize(200);
  textFont('Roboto'); //google fonts
  text(minuteDigit,365,320);
  }
   
  translate(width/2,height/2); 
  fill(0,50);

let hourSize = 40;
let hourChange = obj.hours;

if (obj.hours < 1){
  hourChange = 23;
}

if (obj.hours > 23){
  hourChange = obj.hours - 23;
}
noStroke();
let step = 10;
let millisChange =map (millis,0,999,20,70);

for(let hourCircle = 0; hourCircle <=23; hourCircle++){
  rotate(360/23);

if(hourChange == hourCircle) {
  hourSize = 60;
  
  for(let i = 0; i< millisChange; i++){
    if (millis >= 100){
      
      ellipse(-10,-450/2,millisChange-step); 
      }else{
        ellipse(-10,-450/2,millisChange/hourSize); 
      }
  }
  
}
else{
    hourSize = 25;
    fill(255);
}
fill(255,75);
ellipse(-10,-450/2,hourSize); 
}

  }
  else{
    background (39,93,173);
    let blue = color(255, 225, 173);
    let orange = color(206,211,220);
    let lerpSeconds = map(obj.seconds,0,59,0,1);
    let secondsColour = lerpColor(blue,orange,lerpSeconds);
    let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
    let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360); 
   
    push();
    translate(480,250);
    rotate(-90);
    strokeWeight(30);
    stroke(secondsColour);
    noFill();
    let end = map(secondRotateSmooth, 0, 360, 0, 360);
    arc(0,0,300,300,0,end);
   
    pop();
  
    //minutes code
    minuteDigit = int(map(minutes,0,59,0,59));
    hourDigit = int(hours);
    var minuteChange = 0;
    
    if (minuteDigit <= 9){
    
    fill(252,247,248);
    text("0"+ minuteDigit,365,320);
    }
    else{
    fill(252,247,248);
    textSize(200);
    textFont('Roboto'); //google fonts
    text(minuteDigit,365,320);
    }
     
    translate(width/2,height/2); 
    fill(0,50);
  
  let hourSize = 40;
  let hourChange = obj.hours;
  
  if (obj.hours < 1){
    hourChange = 12;
  }
  
  if (obj.hours > 12){
    hourChange = obj.hours - 12;
  }
  noStroke();
  let step = 10;
  let millisChange =map (millis,0,999,20,70);
  
  for(let hourCircle = 0; hourCircle <=12; hourCircle++){
    rotate(360/12);
  
  if(hourChange == hourCircle) {
    hourSize = 60;
    
    for(let i = 0; i< millisChange; i++){
      if (millis >= 100){
        
       ellipse(-10,-450/2,millisChange-step); 
        }else{
          ellipse(-10,-450/2,millisChange/hourSize); 
        }
    }
    
  }
  else{
      hourSize = 25;
      fill(255, 204, 204);
  }
  fill(255, 204, 204,75);
  ellipse(-10,-450/2,hourSize); 
  }
  

  }

    
} 