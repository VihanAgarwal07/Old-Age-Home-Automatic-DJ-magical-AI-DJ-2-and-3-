leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftWristScore=0;
rightWristScore=0;

var music1="";
var music2="";
function preload(){
    //music1=loadSound("");
    //music2=loadSound("")
}
function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
     video.hide();

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Model is Ready");
}
function gotPoses(event){
console.log(event);
if(event.length>0){
    leftWristX=event[0].pose.leftWrist.x;
    leftWristy=event[0].pose.leftWrist.y;
    
    rightWristX=event[0].pose.rightWrist.x;
    rightWristy=event[0].pose.rightWrist.y;
}
}

function draw(){
    image(video,0,0,700,500);
    
}
