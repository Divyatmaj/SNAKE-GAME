 // Get the canvas and context
        var canvas = document.getElementById('gameCanvas');
        var ctx = canvas.getContext('2d');

        // Game variables
        var gridSize = 20;
        var tileCount = 20;
        var snake = [];
        var headX = 10;
        var headY = 10;
        var foodX = 15;
        var foodY = 15;
        var velocityX = 0;
        var velocityY = 0;
        var score = 0;
        var gameRunning = false;
        var tailLength = 3;

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
                    document.getElementById('score').textContent = 'Score: ' + score;
                    foodX = Math.floor(Math.random() * tileCount);
                    foodY = Math.floor(Math.random() * tileCount);
                }
            }

            // Clear canvas
            ctx.fillStyle = '#34495e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw food
            ctx.fillStyle = '#e74c3c';
            ctx.fillRect(foodX * gridSize, foodY * gridSize, gridSize - 2, gridSize - 2);

            // Add current position to snake
            snake.push({x: headX, y: headY});

            // Remove extra tail parts
            while (snake.length > tailLength) {
                snake.shift();
            }

            // Draw snake
            ctx.fillStyle = '#2ecc71';
            for (var i = 0; i < snake.length; i++) {
                ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize - 2, gridSize - 2);
            }
        }

        // Game over function
        function gameOver() {
            gameRunning = false;
            document.getElementById('gameOver').style.display = 'block';
            document.getElementById('startBtn').textContent = 'Restart Game';
            document.getElementById('startBtn').style.display = 'block';
        }

        // Start game function
        function startGame() {
            snake = [];
            headX = 10;
            headY = 10;
            velocityX = 1;
            velocityY = 0;
            score = 0;
            tailLength = 3;
            foodX = 15;
            foodY = 15;
            gameRunning = true;
            document.getElementById('score').textContent = 'Score: 0';
            document.getElementById('gameOver').style.display = 'none';
            document.getElementById('startBtn').style.display = 'none';
        }

        // Keyboard controls
        document.addEventListener('keydown', function(e) {
            // Arrow key controls
            if (e.code === 'ArrowUp' && velocityY !== 1) {
                velocityX = 0;
                velocityY = -1;
            }
            if (e.code === 'ArrowDown' && velocityY !== -1) {
                velocityX = 0;
                velocityY = 1;
            }
            if (e.code === 'ArrowLeft' && velocityX !== 1) {
                velocityX = -1;
                velocityY = 0;
            }
            if (e.code === 'ArrowRight' && velocityX !== -1) {
                velocityX = 1;
                velocityY = 0;
            }
        });

        // Game loop - runs 10 times per second
        setInterval(drawGame, 100);