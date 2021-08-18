const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
  getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg)
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    noStroke();
    textSize(35)
    fill("white")
   // text("TIME: " + score, width-300, 50)
  if(hour<=12){
    text("time:"+hour%12+"AM",50,100)
  }
  else if(hour == 0){
     text("time = 12AM" )    
     }
     else{
     text("time:"+hour%12+"PM",50,100)  
     }   

}



     // write code to fetch time from API
     async function getTime(){
        var response  = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        
        console.log(responsejson);
        
        console.log(hour);
    
        //change the data in JSON format
     var responsejson = await response.json()

     // write code slice the datetime
     console.log(responsejson) 
     var datetime = responsejson.datetime;
     //var hour = 0
      hour  = datetime.slice(11,13)
     console.log(hour)

     // add conditions to change the background images from sunrise to sunset
    if(hour>=0 && hour<18){
    bg = "sunrise1.png"
}
else{
    bg = "sunset12.png"
}



    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)

}

