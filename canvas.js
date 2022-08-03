window.addEventListener('load', () => {
const canvas = document.querySelector("#canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
ctx.lineWidth = 1;
ctx.lineCap= "round"
let painting = false;
let startX;
let startY;

function draw(e){      
    if(!painting) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(startX,startY, e.clientX - startX, e.clientY - startY);
}

canvas.addEventListener('mousedown', (e) => {painting = true;startX = e.clientX;startY = e.clientY;});
canvas.addEventListener('mouseup', () => {painting = false});
canvas.addEventListener('mouseout',() => {painting = false})
canvas.addEventListener('mousemove', draw);
})