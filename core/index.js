const canvas = document.getElementById('canvas1')
const width = canvas.width = 600
const height = canvas.height = 600
const ctx = canvas.getContext('2d')

const PI = Math.PI

let mouseX = 0
let mouseY = 0

document.onmousemove = (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
}

function background(color = 'white') {
    ctx.clearRect(0, 0, width, height)
}

function ellipse(x, y, radiusX, radiusY) {
    ctx.beginPath()
    ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * PI)
}

function line(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
}

function stroke(color = 'black', lineWidth = 1) {
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.stroke()
}

function fill(color = 'white') {
    ctx.fillStyle = color
    ctx.fill()
}

function random(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}