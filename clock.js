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
  
  line(480,0,480,500);
  line(0,250,960,250);
  

  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;
  let blue = color(122,255,215);
  let orange = color(255,179,117);
  let lerpSeconds = map(obj.seconds,0,59,0,1);
  let secondsColour = lerpColor(blue,orange,lerpSeconds);
 
 push();
 translate(480,250);
  rotate(-90);
  strokeWeight(15);
  stroke(secondsColour);
  noFill();
  let end = map(seconds, 0, 60, 0, 360);
  arc(0,0,470,470,0,end);
  pop();

  // push();
 
  //  strokeWeight(5);
  //  stroke(122,255,215);
  // //  noFill();
  // //  let end = map(seconds, 0, 60, 0, 360);
  //  arc(0,0,470,470,0,end);
  //  pop();

  // strokeWeight(8);
  // stroke(255, 100, 150);
  // noFill();
  // ellipse(200,200,300,300);
  // push();
  // strokeWeight(4);
  // noFill();
  // ellipse(480,250,500) //size guide
  // pop();


  // //arc(0, 0, 300, 300, 0, secondAngle);
  // push();
  // rotate(secondAngle);
  // stroke(255, 100, 150);
  // line(0, 0, 100, 0);
  // pop();


  // angleMode(DEGREES);

 
 

 // let hourSize = 60;

//   for (let i = 0; i <= 23; i++){
// rotate(360/24)

//     if (obj.hours == i){
//       hourSize = 60;
//     }
//     else{
//       hourSize = 60;
//     }

//     ellipse(100,100,20,hourSize);

//   }

//   push(); //12:00 circle
//   noFill();
//   stroke(255,106,0);
//   strokeWeight(3);
//   circle(480,50,60,60);
//   pop();

//   push(); //6:00 circle
//   noFill();
//   stroke(255,106,0);
//   strokeWeight(3);
//   circle(480,450,60,60);
//   pop();

//   push(); //3:00 circle
//   noFill();
//   stroke(255,106,0);
//   strokeWeight(3);
//   circle(680,250,60,60);
//   pop();

//   push(); //9:00 circle
//   noFill();
//   stroke(255,106,0);
//   strokeWeight(3);
//   circle(280,250,60,60);
//   pop();

}

//bellow to make the minute text to change back to 00 from 59
// index = index + 1;
//if (index == 60){
  //  index = 0;
//}
