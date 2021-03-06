let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let slider = document.getElementById('brush-size');
let sliderLabel = document.getElementById('brush-label');
let brushColor = document.getElementById('color-input');
let brushCircle = document.getElementById('brush-circle');
let brushSquare = document.getElementById('brush-square');
let undoBtn = document.getElementById('undo-btn');
let isMouseDown = false;
let consecutiveUndo = false;

let brush = {
    radius: 10,
    strokeType: 'square',
    color: '#000000'
};

let frameStack = [ctx.getImageData(0, 0, canvas.width, canvas.height)];

canvas.addEventListener('mousedown', () => {
    isMouseDown = true;
    draw();
});
canvas.addEventListener('mousemove', () => {
    if (isMouseDown) draw();
});

canvas.addEventListener('mouseup', () => {
    isMouseDown = false;
    frameStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    consecutiveUndo = false;
});

slider.oninput = () => {
    sliderLabel.innerHTML = 'Brush Size: ' + slider.value;
    brush.radius = slider.value;
};

brushColor.addEventListener('change', () => {
    brush.color = brushColor.value;
    document.getElementById("color-label").innerHTML = 'HEX Color: ' + brushColor.value;
});

brushCircle.addEventListener('click', function() {
    brush.strokeType = this.getAttribute('brush');
});

brushSquare.addEventListener('click', function() {
    brush.strokeType = this.getAttribute('brush');
});

undoBtn.addEventListener('click', () => {
    if (!consecutiveUndo) frameStack.pop();
    ctx.putImageData(frameStack.pop(), 0, 0);

    if (frameStack.length == 0) {
        frameStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    }
    consecutiveUndo = true;
});

function draw() {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.fillStyle = brush.color;

    if (brush.strokeType !== 'square') {
        ctx.beginPath();
        ctx.arc(x, y, brush.radius, 0, 2 * Math.PI);
        ctx.fill();
    } else  ctx.fillRect((x - brush.radius / 2), (y - brush.radius / 2), brush.radius, brush.radius);

}


