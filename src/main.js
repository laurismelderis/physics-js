let balls = []

const gravity = new Vector(0, 0.2)
const wind = new Vector(0.1, 0)

function setup() {
    for (let i = 1; i <= 8; i++) {
        balls.push(new Ball(width/i, height/2, random(1, 15)))
    }
    console.table(balls)
}

function draw() {
    background('rgba(255, 255, 255, 0)')

    balls.forEach((ball) => {
        let weight = Vector.mult(gravity, {x: ball.mass, y: ball.mass})
        ball.applyForce(weight)
        ball.applyForce(wind)
        ball.friction()

        ball.update()
        ball.edges()
        ball.show()
    })
}