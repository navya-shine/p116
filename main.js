nose_x = 0 
nose_y = 0

function preload() {
    lipstick123 = loadImage('https://i.postimg.cc/gkbv74Vd/l1-2.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick123, nose_x, nose_y, 50, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Above one is array");
        nose_x = results[0].pose.nose.x-25;
        nose_y = results[0].pose.nose.y+15;
    }
}
