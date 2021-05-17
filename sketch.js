const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var response,responseJSON,daytime,hour;
var ampm;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
  if(backgroundImg){
   background(backgroundImg);
  }
    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        ampm = "AM";

    }
    else {
        ampm = "PM";
    };

    textSize(35);
    text("TIME : " + ampm,50,50);

}

async function getBackgroundImg(){

    // write code to fetch time from API
var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
var responseJSON = await response.json();
    // write code slice the datetime
var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if(hour>=6 && hour<=4){
    var bg = "sunrise1.png";
}
else if(hour>=8 && hour<=6){
    var bg = "sunrise2.png";
}
else if(hour>=10 && hour<=8){
    var bg = "sunrise3.png";
}
else if(hour>=12 && hour<=10){
    var bg = "sunrise4.png";
}
else if(hour>=14 && hour<=12){
    var bg = "sunrise5.png";
}
else if(hour>=16 && hour<=14){
    var bg = "sunrise6.png";
}
else if(hour>=18 && hour<=16){
    var bg = "sunset7.png";
}
else if(hour>=20 && hour<=18){
    var bg = "sunset8.png";
}
else if(hour>=22 && hour<=20){
    var bg = "sunset9.png";
}
else if(hour>=24 && hour<=22){
    var bg = "sunset10.png";
}
else if(hour>=2 && hour<=24){
    var bg = "sunset11.png";
}
else if(hour>=4 && hour<=2){
    var bg = "sunset12.png";
}

 
    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg);
console.log(hour);
}
