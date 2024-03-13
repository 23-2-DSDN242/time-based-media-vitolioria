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
  // function preload() {
  //   // preload() runs once
  //   img = loadImage('assets/laDefense.jpg');
  // }
  function draw_clock(obj) {
  
  background(20,54,219);
  angleMode(DEGREES);
  
  line(480,0,480,500);
  line(0,250,960,250);
   
  push();
  noFill();
  ellipse(480,250,400); //clock reference
  pop();

  
  let font;
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  
  
 //seconds code
  let blue = color(122,255,215);
  let orange = color(255,179,117);
  let lerpSeconds = map(obj.seconds,0,59,0,1);
  let secondsColour = lerpColor(blue,orange,lerpSeconds);
  let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
  let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360); 
  let center = (370,320) 

  push();
  translate(480,250);
  rotate(-90);
  strokeWeight(20);
  stroke(secondsColour);
  noFill();
  let end = map(secondRotateSmooth, 0, 360, 0, 360);
  arc(0,0,300,300,0,end);
  // circle(0,0,end*3,20);
 
  pop();

  //minutes code
  minuteDigit = int(map(obj.minutes,0,59,0,59));
  var minuteChange = 0;
  
  if (minuteDigit < 10);
  //text("0"+ minuteDigit,365,320);

  fill(255,204,253);
  textSize(200);
  textFont('Roboto'); //google fonts
  text(minuteDigit,365,320);

  // if (obj.minutes < 10){
  //   text("0",365,320,minuteDigit,365,320);
  // }
  //text(minuteDigit[minuteChange],370,320);
   //minuteChange = minuteChange + 1;
  // if (minutes == 59){
  //   minuteChange = [0];
  // }

  if (hours > 18 || hours < 6){
    background(255,243,168);
    fill(20,54,219);
    textSize(200);
    textFont('Courier New'); //google fonts
    text(minuteDigit);
       
  }


  //hours code
  //let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
  
  let hourEnd = map(hours, 0, 59, 0, 50); 
  push();
  noStroke();
  fill(222,255,204);
  ellipse(480,50,40); //12th hour
  ellipse(580,80,40); //1st hour
  ellipse(650,150,40); //2nd hour
  ellipse(680,250,40); //3rd hour
  ellipse(480,450,40);//6th hour
  ellipse(280,250,40); //9th hour
  push()
  if (secondRotateSmooth == 10){
    ellipse(310,150,secondRotateSmooth);
  }
  else{
    ellipse(310,150,secondRotateSmooth/3);
  }
   //10th hour

  
  pop();
 
  
}


