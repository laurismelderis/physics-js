class Attractor {
    constructor(x, y, mass) {
        this.pos = new Vector(x, y)
        this.mass = mass
        this.r = Math.sqrt(mass) * 2
    }

    attract(ball) {
        let force = Vector.sub(this.pos, ball.pos)
        let distance = force.mag()

        let G = 0.005

        let strength = G * (this.mass * ball.mass) / distance * distance
        force.setMag(strength)
        ball.applyForce(force)
    }

    show() {
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
        fill('rgba(0, 0, 0, 0.5)')
    }
}