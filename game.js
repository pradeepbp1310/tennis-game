let canvas, canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    drawAllCanvas();
}

function drawAllCanvas() {
    createCanvas(0, 0, canvas.width, canvas.height);
    ballCanvas();

}

function createCanvas(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

function ballCanvas() {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(100, 10, Math.PI * 2, 20, 10, true)
    canvasContext.fill();
}