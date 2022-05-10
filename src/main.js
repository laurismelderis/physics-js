let ball1 = new Ball(width / 2 - 200, height / 2, 100)
let ball2 = new Ball(width / 2 - 200, height / 2, 200)

const gravity = new Vector(0, 0.2)
const wind = new Vector(0.1, 0)

function setup() {

}

function draw() {
    background('rgba(255, 255, 255, 0)')

    let weight1 = Vector.mult(gravity, {x: ball1.mass, y: ball1.mass})
    let weight2 = Vector.mult(gravity, {x: ball2.mass, y: ball2.mass})

    ball1.applyForce(weight1)
    ball2.applyForce(weight2)

    ball1.applyForce(wind)
    ball2.applyForce(wind)


    ball1.update()
    ball2.update()

    ball1.edges()
    ball2.edges()

    ball1.show()
    ball2.show()

}