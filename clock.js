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
  
  background(76, 159, 245);

  // (20,54,219);
  angleMode(DEGREES);
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;
 
  if (alarm < 0 || alarm == undefined){
  
 //seconds code
  let blue = color(230, 139, 48);
  let orange = color(255,179,117);
  let lerpSeconds = map(obj.seconds,0,59,0,1);
  let secondsColour = lerpColor(blue,orange,lerpSeconds);
  let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
  let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360); 
  let cloudx = 100;
  let cloudy = 100;
  push(); //code for the arc that will represent the seconds within the clock
  translate(480,250);
  rotate(-90);
  strokeWeight(10);
  stroke(secondsColour);//the colour will change from start to finish as defined above with the lerp colour
  noFill();
  let end = map(secondRotateSmooth, 0, 360, 0, 360); //rotation relating to the second change
  
  push();
  strokeWeight(5);
  stroke(230, 139, 48);
  fill(255,217,92);
  ellipse(0,0,600,600);
  pop();

  arc(0,0,300,300,0,end);
  pop();
  
  
  cloudx+=0.1;
  blue--;


  //minutes code
  minuteDigit = int(map(minutes,0,59,0,59));
  hourDigit = int(hours);
  var minuteChange = 0;
  
  if (minuteDigit <= 9){ 
    fill(0);
    textFont('Courier New')
    textSize(200);
    text("0"+ minuteDigit,360,320); //adds a 0 before singular digits so that the minute is centered
  }
  else{
    fill(0);
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
// makeCloud(cloudx, cloudy-50);
//   makeCloud(cloudx + 100, cloudy + 100)
//   fill(220)
//   cloudx+=0.1;
//   noStroke();
  }
  













  //alarm code
  else if(alarm > 0){
    background (30, 30, 36);
    let darkblue = color(196, 205, 212);
    let orange2 = color(255, 207, 153);
    let lerpSeconds2 = map(obj.seconds,0,59,0,1);
    let secondsColour2 = lerpColor(darkblue,orange2,lerpSeconds2);
    let secondsWithFraction2 = obj.seconds + (obj.millis / 999.0);
    let secondRotateSmooth2 = map(secondsWithFraction2, 0, 60, 0, 360); 
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);

   
    push();
    translate(480,250);
    rotate(-90);
    strokeWeight(10);
    stroke(secondsColour2);
      
    let end = map(secondRotateSmooth2, 0, 360, 0, 360);
    arc(0,0,300,300,0,end);
    fill(255,70);
    if (millis < 500){
      background(20,54,219);
      noFill();
      arc(0,0,300,300,0,end);
     }
     pop();
    
    //minutes code
    minuteDigit = int(map(minutes,0,59,0,59));
  hourDigit = int(hours);
  var minuteChange = 0;
  
  if (minuteDigit <= 9){ 
    fill(r,g,b);
    textFont('Courier New')
    textSize(200);
    text("0"+ minuteDigit,360,320); //adds a 0 to singular digits so that the minute is centered
    if (millis < 500){
    fill(255,204,253);
    }
  }
  else{
    fill(r,g,b);
    textSize(200);
    textFont('Courier New'); 
    text(minuteDigit,360,320);
    if (millis < 500){
      fill(255,204,253);
      }
  }
   

  //hour code 
  translate(width/2,height/2); //hour points are rotated from the center point
  fill(146, 20, 12,50); //red with 50% opacity

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
push()
fill(235);
ellipse(-10,-450/2,millisChange/2); 
pop()
      }else{
        ellipse(-10,-450/2,millisChange/hourSize); 
      } //change in ellipse size from start of millisec to end 
  }
  
}
else{
    hourSize = 25;
    fill(146, 20, 12);
    if (millis < 500){
      fill(255);
      }
}
fill(146, 20, 12,75);
ellipse(-10,-450/2,hourSize); //if the hour is not selected, then it will remain at 25px, filled white with 75% opacity
if (millis < 500){
   fill(255,75);
   ellipse(-10,-450/2,hourSize);
   }

   



}



  







}else{

  

  let blue = color(122,255,215);
  let orange = color(255,179,117);
  let lerpSeconds = map(obj.seconds,0,59,0,1);
  let secondsColour = lerpColor(blue,orange,lerpSeconds);
  let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
  let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360); 
 
 // push(); //code for the arc that will represent the seconds within the clock
  background(30, 30, 36 );
  translate(480,250);
  
  stroke(secondsColour);//the colour will change from start to finish as defined above with the lerp colour
  noFill();
  let end0 = map(secondRotateSmooth+2, 0, 360, 0, 360);
  let end1 = map(secondRotateSmooth+5, -0, 360, 0, -360); //rotation relating to the second change
 

  strokeWeight(5);
  rotate(90);
  stroke(255, 82, 82); //red
  arc(0,0,30,30,0,end0);

  
  strokeWeight(10);
  rotate(180);
  stroke(245, 168, 91); //orange
  arc(0,0,70,70,0,end1);

  strokeWeight(10);
  rotate(270);
  stroke(247, 199, 22); //yellow
  arc(0,0,120,120,0,end0);

  strokeWeight(10);
  rotate(360);
  stroke(123, 166, 123); //green
  arc(0,0,165,165,0,end1);

  strokeWeight(15);
  rotate(90);
  stroke(92, 157, 255); //blue
  arc(0,0,210,210,0,end1);

  strokeWeight(20);
  rotate(180);
  stroke(187, 145, 255); //indigo
  arc(0,0,305,305,0,end0);

  strokeWeight(25);
  rotate(270);
  stroke(250, 152, 239); //pink
  arc(0,0,400,400,0,end1);


  strokeWeight(20);
  rotate(360);
  stroke(255, 97, 79); //red
  arc(0,0,460,460,0,end0);

  
  strokeWeight(25);
  rotate(90);
  stroke(255, 181, 69); //orange
  arc(0,0,520,520,0,end1);

  strokeWeight(25);
  rotate(180);
  stroke(255, 252, 69); //yellow
  arc(0,0,600,600,0,end0);

  strokeWeight(30);
  rotate(270);
  stroke(141, 247, 164); //green
  arc(0,0,680,680,0,end0);

  strokeWeight(30);
  rotate(360);
  stroke(10, 84, 255); //blue
  arc(0,0,760,760,0,end1);

  strokeWeight(30);
  rotate(90);
  stroke(88, 84, 176); //indigo
  arc(0,0,850,850,0,end0);

  strokeWeight(35);
  rotate(180);
  stroke(255, 77, 133); //pink
  arc(0,0,950,950,0,end1);

}

function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
  

}