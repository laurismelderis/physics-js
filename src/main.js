let balls = []
let attractor

const gravity = new Vector(0, 0.2)
const wind = new Vector(0.1, 0)

function setup() {
    for(let i = 0; i < 10; i++) {
        let x = random(0, width)
        let y = random(0, height)
        let m = random(10, 50)
        balls.push(new Ball(x, y, m))
    }
    ball = new Ball(200, 100, 15)
    attractor = new Attractor(width/2, height/2, 15)
}

function draw() {
    background('rgba(255, 255, 255, 0)')

    // let weight = Vector.mult(gravity, {x: ball.mass, y: ball.mass})
    // ball.applyForce(weight)
    // ball.applyForce(wind)
    // ball.friction()
    // ball.drag()
    balls.forEach(ball => {
        ball.update()
        ball.show()

        attractor.attract(ball)
        attractor.show()
    })

    // ball.edges()

}