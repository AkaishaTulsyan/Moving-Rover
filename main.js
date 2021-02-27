canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var roverWidth=100;
var roverheight=90;
var roverImage="rover.png";
var roverX=10;
var roverY=10;
nasa_images=["Nas_image1.jpg","nasa_image2.jpg","Nasa_image3.jpg","Nasa_image4.jpg","Nasa_image5.jpeg"];
random_number=Math.floor(Math.random()*5);
console.log(random_number);
backgroundImage=nasa_images[random_number];

function add(){
    bImage=new Image();
    bImage.onload=uploadB;
    bImage.src=backgroundImage;
    rImage=new Image();
    rImage.onload=uploadR;
    rImage.src=roverImage;
}

function uploadB(){
    ctx.drawImage(bImage,0,0,canvas.width,canvas.height);
}
function uploadR(){
    ctx.drawImage(rImage,roverX,roverY,roverWidth,roverheight);
}
window.addEventListener("keydown",roverMove);
function roverMove(e){
    keyVar=e.keyCode;
    if (keyVar=='37'){
       left();
       console.log(keyVar);
    }
    if (keyVar=='38'){
        up();
        console.log(keyVar);
     }
     if (keyVar=='39'){
        right();
        console.log(keyVar);
     }
     if (keyVar=='40'){
        down();
        console.log(keyVar);
     }

}
function up(){
    if (roverY>=0){
        roverY=roverY-10;
        uploadB();
        uploadR();

    }
}
function down(){
    if (roverY<=500){
        roverY=roverY+10;
        uploadB();
        uploadR();

    }
}
function right(){
    if (roverX<=700){
        roverX=roverX+10;
        uploadB();
        uploadR();

    }
    
}
function left(){
    if (roverX>=0){
        roverX=roverX-10;
        uploadB();
        uploadR();

    }
}