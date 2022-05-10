class PhysicalObject {
    constructor(vel, acc) {
        this.vel = new Vector(vel.x, vel.y)
        this.acc = new Vector(acc.x, acc.y)
    }

    applyForce(force) {
        this.acc.add(force.x, force.y)
    }
}