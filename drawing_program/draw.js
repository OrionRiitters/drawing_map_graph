let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.addEventListener('mousedown', draw());
canvas.addEventListener('mousemove', draw());



function draw(brush) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log('asdf');


}
