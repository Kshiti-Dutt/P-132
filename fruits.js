Status = "";
fruits_image = "";
object = [];

function preload(){
    fruits_image = loadImage("images.jfif");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fruits_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(fruits_image,0,0,640,350);
}