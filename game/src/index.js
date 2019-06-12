var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Ball Settings
var ballRadius = 10;
//Ball Starting point
var x = canvas.width/2;
var y = canvas.height-100;
//Ball Control values
var dx = 0;
var dy = 2;
//Paddle values
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var paddleY = canvas.height-30;

//Player control listeners
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

//Brick Settings
var bricks = [];
var maxBricksPerRow = 5;
var brickHeight = 20;
var brickWidth = 80
var numRows = 4;
var numBricks = numRows * maxBricksPerRow;

setupBricks()
console.log(bricks)


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}


function movePaddle(){
    if (rightPressed && paddleX < canvas.width - paddleWidth){
            paddleX +=7
        }
    if (leftPressed && paddleX > 0){
            paddleX -=7
    }
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath(); 
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    collisionDetection();
    bounceBall(x,y)
    movePaddle();
    drawBricks()
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;
}

function bounceBall(x,y){

    //Collision with walls
    if(y + dy < ballRadius){
        dy = -dy;
    }
    if (x + dx < ballRadius|| x + dx > canvas.width-ballRadius){
        dx = -dx
    }
    //Check if game over
    if (y + dy > canvas.height -ballRadius){
        document.location.reload();
        clearInterval(interval);
    }
    //Collision with paddle 
    paddleCenterMin= paddleX + paddleWidth/4
    paddleCenterMax= paddleX + paddleWidth - paddleWidth/4
    paddleMin = paddleX 
    paddleMax = paddleX + paddleWidth
   
    //Hits center
    if(x <= paddleCenterMax && x >= paddleCenterMin && y === paddleY){
        dy = -dy
        dx = dx
    }
    //Hits right side
    if (x > paddleCenterMax && x <= paddleMax && y===paddleY ){
        dy = -dy
        dx = dx+1
    } 
    //Hits left side
    if(x >= paddleMin && x < paddleCenterMin && y===paddleY){
        dy = -dy
        dx = dx-1

    }
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth,paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath(); 
}

function setupBricks(){
    brickX = 20 
    brickY = 0 
    for (var i = 0; i < 4; i++){
        brickY += brickHeight +10
        brickX = 20 
        for(var j=0; j < maxBricksPerRow;j++){
            bricks.push([brickX,brickY])
            brickX+=  brickWidth +10
        }
    }
}

function drawBricks(){
    bricks.forEach(function(brick){
        ctx.beginPath();
        ctx.rect(brick[0], brick[1], brickWidth,brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath(); 
    })
}

function collisionDetection(){
    for(var i = 0; i < bricks.length;i++){
        if(x >= bricks[i][0] && x<= (bricks[i][0] + brickWidth)){
            if(y=== bricks[i][1]+(ballRadius*2) || y=== bricks[i][1]-ballRadius*2){
                checkWin()
                bricks.splice(i,1);
                dy = -dy;
                break;
            }
        }
    }
}

function checkWin(){
    if (bricks.length === 0){
        alert("You Won!!!")
        document.location.reload();
        clearInterval(interval);
        
    }
}


interval = setInterval(draw,10);