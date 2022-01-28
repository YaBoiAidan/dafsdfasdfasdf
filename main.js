img = "";
status1 = "";
objects = [];

function preload()
{
img = loadImage("bed.jpg");
img2 = loadImage("fridge.jpg");
img3 = loadImage("toiltet.jpg");
}

function setup()
{
canvas = createCanvas(650,420);
canvas.center();

objectDetector = ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
image(img,0,0,650,420);

if(status1 != "")
{
for(i=0 ;i<objects.length;i++)
{
document.getElementById("status").innerHTML = "Status : Object Detected";

fill("black");
percent = floor(objects[i].confidence * 100);
text(objects[i].label +  " " + percent + "%",objects[i].x + 5,objects[i].y - 5);
noFill();
stroke("red")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}

}

}

function modelloaded()
{
console.log("Model Loaded");
status1 = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
    console.log(error);
    }

    else
    {
    console.log(results);
    objects = results;
    }
}

function w()
{
image(img2,0,0,650,420);
}

function e()
{
image(img3,0,0,650,420);
}

function q()
{
image(img,0,0,650,420);
}