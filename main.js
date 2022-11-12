noseX = 0;
noseY = 0;

function preload()
{
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
        console.log("Shoulder Right X = " + results[0].pose.rightShoulder.x);
        console.log("Shoulder Right Y = " + results[0].pose.rightShoulder.y);
    }
}

function modelLoaded()
{
    console.log("Model is loaded!");

}

function draw()
{
    image(video, 0, 0, 350, 350);
    image(lipstick, noseX - 25, noseY + 10, 50, 40);
}
function take_snapshot()
{
    save('my_filter.png');
}