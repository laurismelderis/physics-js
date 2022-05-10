class PhysicalObject {
    constructor(vel, acc, mass) {
        this.vel = new Vector(vel.x, vel.y)
        this.acc = new Vector(acc.x, acc.y)
        this.mass = mass
    }

    applyForce(force) {
        let f = new Vector(force.x, force.y)
        f.div(this.mass)
        this.acc.add(f.x, f.y)
    }
}