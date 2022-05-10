let walker = new Walker(width / 2, height / 2)

const gravity = new Vector(0, 0.2)
const wind = new Vector(0.1, 0)

function setup() {

}

function draw() {
    background('rgba(255, 255, 255, 0)')

    walker.applyForce(gravity)
    // walker.applyForce(wind)
    walker.update()
    walker.edges()
    walker.show()
}