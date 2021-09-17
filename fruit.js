img="";
status="";
function preload(){
    img=loadImage("kiwi.png");
} 
function setup(){
    canvas=createCanvas(640,520);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status : detecting objects";
}
function modelloaded(){
console.log("model loaded");
status=true;
objectDetector.detect(img,gotresult);
}
function gotresult(error,results){
if(error){
console.error(error);
}
console.log(results);
}
function draw(){
image(img,0,0,640,520);
fill("#FF0000");
text("kiwi",45,75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
}