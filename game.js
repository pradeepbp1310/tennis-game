let canvas, canvasContext;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;
const INTERVAL_TIME = 1000;
let ballX = 50;
let ballXSpeed = 5;
let ballY = 50;
let ballYSpeed = 5;
let paddleY1 = 200;
let paddleY2 = 200;

window.onload = function () {
    let framePerSecond = 30;
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // Call move ball canvas and create other canvass
    setInterval(() => {
        moveCanvas();
        drawAllCanvas()
    }, INTERVAL_TIME / framePerSecond);

    // Mouse move event listener
    document.addEventListener('mousemove', (evt) => {
        let mousePosition = calculateMousePosition(evt);
        paddleY1 = mousePosition.y - (PADDLE_HEIGHT / 2);
    })
}

// Canvas in action - move everything
function moveCanvas() {
    computerPlayerMove();
    ballX += ballXSpeed;
    ballY += ballYSpeed;
    if (ballX < 0) {
        ballXSpeed = -ballXSpeed;
    }
    if (ballX > canvas.width) {
        ballXSpeed = - ballXSpeed
    }
    if (ballY < 0) {
        ballYSpeed = -ballYSpeed;
    }
    if (ballY > canvas.height) {
        ballYSpeed = - ballYSpeed
    }
}

function drawAllCanvas() {
    // Black background canvas
    createCanvas(0, 0, canvas.width, canvas.height, 'black');
    // Ball canvas
    ballCanvas();
    // Player 1 paddle
    createCanvas(0, paddleY1, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
    // Player 1 paddle
    createCanvas(canvas.width - PADDLE_THICKNESS, paddleY2, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
}

function createCanvas(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

// Create ball
function ballCanvas() {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, Math.PI * 2, 20, 10, true)
    canvasContext.fill();
}

// Calculate Mouse position on mouse move
function calculateMousePosition(evt) {
    let rect = canvas.getBoundingClientRect()
    let root = document.documentElement;
    let mouseX = evt.clientX - rect.left - root.clientLeft;
    let mouseY = evt.clientY - rect.top - root.clientTop;
    return {
        x: mouseX,
        y: mouseY
    }
}

// Mover computer player2 own their own
function computerPlayerMove() {
    let paddleY2Center = paddleY2 + (PADDLE_HEIGHT / 2);
    if (paddleY2Center < ballY - 20) {
        paddleY2 += 5;
    }
    if (paddleY2Center > ballY + 20) {
        paddleY2 -= 5;
    }
}