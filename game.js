let canvas, canvasContext;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;
const INTERVAL_TIME = 1000;
let ballX = 50;
let ballXSpeed = 5;
let ballY = 50;
let ballYSpeed = 5;


window.onload = function () {
    let framePerSecond = 30;
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(() => {
        moveCanvas();
        drawAllCanvas()
    }, INTERVAL_TIME / framePerSecond);
}

function moveCanvas() {
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
    createCanvas(0, 0, canvas.width, canvas.height, 'black');
    ballCanvas();
    createCanvas(0, canvas.height / 2, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
}

function createCanvas(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

function ballCanvas() {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, Math.PI * 2, 20, 10, true)
    canvasContext.fill();
}