// Get the canvas and context
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// Game variables
var tileCount = 25;
var gridSize = canvas.width / tileCount;
var snake = [];
var headX = 10;
var headY = 10;
var foodX = 15;
var foodY = 15;
var velocityX = 0;
var velocityY = 0;
var score = 0;
var gameRunning = false;
var tailLength = 2;
var highScore = 0;
document.getElementById("score").textContent =
    `Score: 0 | High Score: ${highScore}`;

//images
const food = new Image();
food.src = 'assets/food.png';
const head_left = new Image();
head_left.src = 'assets/head_left.png';
const head_right = new Image();
head_right.src = 'assets/head_right.png';
const head_up = new Image();
head_up.src = 'assets/head_up.png';
const head_down = new Image();
head_down.src = 'assets/head_down.png';
const body_h = new Image();
body_h.src = 'assets/body_h.png';
const body_v = new Image();
body_v.src = 'assets/body_v.png';


// Draw everything
function drawGame() {
    // Move snake
        if (gameRunning) {
            headX = headX + velocityX;
            headY = headY + velocityY;

        // Check wall collision
            if (headX < 0) {
                headX = tileCount - 1;
            }
            if (headX >= tileCount) {
                headX = 0;
            }
            if (headY < 0) {
                headY = tileCount - 1;
            }
            if (headY >= tileCount) {
                headY = 0;
            }

        // Check self collision
            for (var i = 0; i < snake.length; i++) {
                if (snake[i].x === headX && snake[i].y === headY) {
                    gameOver();
                    return;
                }
            }

        // Check if food eaten
            if (headX === foodX && headY === foodY) {
                score = score + 1;
                tailLength = tailLength + 1;
                ctx.clearRect(foodX * gridSize-3, foodY * gridSize-3, gridSize + 5, gridSize + 5);

            if (score > highScore) {
                highScore = score;
            }

                document.getElementById("score").textContent =
                        `Score: ${score} | High Score: ${highScore}`;


                foodX = Math.floor(Math.random() * tileCount);
                foodY = Math.floor(Math.random() * tileCount);
            }
        }
        
        // Clear canvas
            // ctx.fillStyle = '#111116';
            for (let j=0;j<tileCount;j+=1){
                if (j%2==0){
                for (let i=0;i<tileCount;i+=1){
                    if (i%2==0){
                        ctx.fillStyle = '#393939ff';
                        ctx.fillRect(i*gridSize, j*gridSize, gridSize, gridSize);
                    } else{
                        ctx.fillStyle = '#303030ff';
                        ctx.fillRect(i*gridSize, j*gridSize, gridSize, gridSize);
                    }
                }
                } else{
                    for (let i=0;i<tileCount;i+=1){
                    if (i%2==1){
                        ctx.fillStyle = '#393939ff';
                        ctx.fillRect(i*gridSize, j*gridSize, gridSize, gridSize);
                    } else{
                        ctx.fillStyle = '#303030ff';
                        ctx.fillRect(i*gridSize, j*gridSize, gridSize, gridSize);
                    }
                }
                }
            }
            // ctx.fillRect(0, 0, canvas.width, canvas.height);


        // Draw food
            ctx.fillStyle = '#ff6b00';
            ctx.drawImage(food, foodX * gridSize-3, foodY * gridSize-3, gridSize + 5, gridSize + 5);

        // Add current position to snake
            snake.push({x: headX, y: headY});

        // Remove extra tail parts
            while (snake.length > tailLength) {
                snake.shift();
            }

        // Draw snake
            // ctx.fillStyle = '#32ff7e';
            for (var i = 0; i < snake.length; i++) {
                if (i==snake.length-1){
                    //head
                    if (velocityX==-1){
                        ctx.fillStyle = '#ffffffff';
                        ctx.drawImage(head_left, snake[i].x * gridSize, snake[i].y * gridSize-3, gridSize + 5, gridSize + 6);
                    }else if(velocityX==1){
                        ctx.fillStyle = '#ffffffff';
                        ctx.drawImage(head_right, snake[i].x * gridSize, snake[i].y * gridSize-3, gridSize +5, gridSize +6);
                    } else if(velocityY==1){
                        ctx.fillStyle = '#ffffffff';
                        ctx.drawImage(head_down, snake[i].x * gridSize-3, snake[i].y * gridSize, gridSize +6, gridSize +5);
                    } else {
                        ctx.fillStyle = '#ffffffff';
                        ctx.drawImage(head_up, snake[i].x * gridSize-3, snake[i].y * gridSize, gridSize +6, gridSize +5);
                    }
                } else{
                    //body
                    ctx.fillStyle = '#00c303ff';
                    ctx.fillRect(snake[i].x * gridSize+(snake.length-i)/2, snake[i].y * gridSize+(snake.length-i)/2, gridSize-(snake.length-i), gridSize-(snake.length-i));
                }
            }
    }

// Game over function
function gameOver() {
gameRunning = false;
    if (score > highScore) {
        highScore = score;
    }
    document.getElementById("score").textContent =
        `Score: ${score} | High Score: ${highScore}`;
            
    document.getElementById("fullGameOverScreen").style.display = "flex";
}
    document.getElementById("fullGameOverScreen").addEventListener("click", function () {
        this.style.display = "none";
        startGame();
});


// Start game function
function startGame() {
snake = [];
headX = 10;
headY = 10;
velocityX = 1;
velocityY = 0;
score = 0;
tailLength = 2;
foodX = 15;
foodY = 15;
gameRunning = true;
document.getElementById("score").textContent =
    `Score: 0 | High Score: ${highScore}`;

document.getElementById('startBtn').style.display = 'none';
}

// Keyboard controls
document.addEventListener('keydown', function(e) {
if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD", "Space"].includes(e.code)) {
    e.preventDefault();
}
});
document.addEventListener('keydown', function(e) {
// Arrow key controls
if ((e.code === 'ArrowUp' || e.code === 'KeyW') && velocityY !== 1) {
    velocityX = 0;
    velocityY = -1;
}
if ((e.code === 'ArrowDown' || e.code === 'KeyS') && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
}
if ((e.code === 'ArrowLeft' || e.code === 'KeyA') && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
}
if ((e.code === 'ArrowRight' || e.code === 'KeyD') && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
}
});

// Game loop - runs 10 times per second
setInterval(drawGame, 100);


// if (snake.length==18){
//     //end game
// }