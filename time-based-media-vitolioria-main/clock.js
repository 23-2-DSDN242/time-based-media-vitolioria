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
 
  if (alarm < 0 || alarm == undefined){
  
 //seconds code
  let blue = color(122,255,215);
  let orange = color(255,179,117);
  let lerpSeconds = map(obj.seconds,0,59,0,1);
  let secondsColour = lerpColor(blue,orange,lerpSeconds);
  let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
  let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360); 

  push(); //code for the arc that will represent the seconds within the clock
  translate(480,250);
  rotate(-90);
  strokeWeight(30);
  stroke(secondsColour);//the colour will change from start to finish as defined above with the lerp colour
  noFill();
  let end = map(secondRotateSmooth, 0, 360, 0, 360); //rotation relating to the second change
  arc(0,0,300,300,0,end);
  pop();

  //minutes code
  minuteDigit = int(map(minutes,0,59,0,59));
  hourDigit = int(hours);
  var minuteChange = 0;
  
  if (minuteDigit <= 9){ 
    fill(255,204,253);
    textFont('Courier New')
    textSize(200);
    text("0"+ minuteDigit,360,320); //adds a 0 before singular digits so that the minute is centered
  }
  else{
    fill(255,204,253);
    textSize(200);
    textFont('Courier New'); 
    text(minuteDigit,360,320); //displays double digits without the extra 0 
  }
   

  //hour code 
  translate(width/2,height/2); //hour points are rotated from the center point
  fill(0,50); //white but 50% opacity

let hourSize = 50;
let hourChange = obj.hours;
noStroke();

let step = 10; //how big the selected hour will 'flash'
let millisChange =map (millis,0,999,20,70); //selected hour also reacts to milliseconds

if (obj.hours < 0){ 
  hourChange = 12; //when hour = 0, it represents 12
}

if (obj.hours > 12){ 
  hourChange = obj.hours - 12; //when hour becomes 12pm onwards, clock goes back 12 hours (0th circle)
}


for(let hourCircle = 0; hourCircle <=12; hourCircle++){
 if (hourCircle > 0){
  rotate(360/12);
 }  

if(hourChange == hourCircle) {
  hourSize = 60;
  
  for(let i = 0; i< millisChange; i++){
    if (millis >= 100){
      
      ellipse(-10,-450/2,millisChange-step); 

      }else{
        ellipse(-10,-450/2,millisChange/hourSize); 
      } //change in ellipse size from start of millisec to end 
  }
  
}
else{
    hourSize = 25;
    fill(255);
}
fill(255,75);
ellipse(-10,-450/2,hourSize); //if the hour is not selected, then it will remain at 25px, filled white with 75% opacity
}

  }
  













  //alarm code
  else { //if(alarm == 0)
    background (219, 255, 223);
    let lightOrange = color(255, 225, 173);
    let greyBlue = color(206,211,220);
    let lerpSeconds2 = map(obj.seconds,0,59,0,1);
    let secondsColour2 = lerpColor(lightOrange,greyBlue,lerpSeconds2);
    let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
    let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360); 
   
    push();
    translate(480,250);
    rotate(-90);
    strokeWeight(30);
    stroke(secondsColour2);
    noFill();
    let end = map(secondRotateSmooth, 0, 360, 0, 360);
    arc(0,0,300,300,0,end);
    
    pop();
  
    //minutes code
    minuteDigit = int(map(minutes,0,59,0,59));
  hourDigit = int(hours);
  var minuteChange = 0;
  
  if (minuteDigit <= 9){ 
    fill(219, 255, 223);
    textFont('Courier New')
    textSize(200);
    text("0"+ minuteDigit,360,320); //adds a 0 to singular digits so that the minute is centered
  }
  else{
    fill(219, 255, 223);
    textSize(200);
    textFont('Courier New'); 
    text(minuteDigit,360,320);
  }
   

  //hour code 
  translate(width/2,height/2); //hour points are rotated from the center point
  fill(0,50); //white but 50% opacity

let hourSize = 50;
let hourChange = obj.hours;
noStroke();

let step = 10; //how big the selected hour will 'flash'
let millisChange =map (millis,0,999,20,70); //selected hour also reacts to milliseconds

if (obj.hours < 0){ 
  hourChange = 12; //when hour = 0, it represents 12
}

if (obj.hours > 12){ 
  hourChange = obj.hours - 12; //when hour becomes 12pm onwards, clock goes back 12 hours (0th circle)
}


for(let hourCircle = 0; hourCircle <=12; hourCircle++){
 if (hourCircle > 0){
  rotate(360/12);
 }  

if(hourChange == hourCircle) {
  hourSize = 60;
  
  for(let i = 0; i< millisChange; i++){
    if (millis >= 100){
      
      ellipse(-10,-450/2,millisChange-step); 

      }else{
        ellipse(-10,-450/2,millisChange/hourSize); 
      } //change in ellipse size from start of millisec to end 
  }
  
}
else{
    hourSize = 25;
    fill(255);
}
fill(255,75);
ellipse(-10,-450/2,hourSize); //if the hour is not selected, then it will remain at 25px, filled white with 75% opacity
}

}
  }
