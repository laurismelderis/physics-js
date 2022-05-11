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

    drag() {
        /**
         * Calculation
         * 
         * Fd = -1/2 * ρ * ||v||^2 * A * Cd * v(uvec)
         * 
         * Where:
         * (uvec) - unit vector
         * Fd - drag force
         * ρ - density (specific constant)
         * A - surface area (area with who its coming contact with) [constant if no deformation]
         * Cd - coeficient of drag (constant)
         * v - velocity
         * ||v|| - magnitude of velocity vector
         * 
         * For simplicity we transform formula:
         * F = -1 * Cd * ||v||^2 * v(uvec)
         */

        // Direction of drag
        let drag = this.vel.copy()
        drag.normalize()
        drag.mult(-1)

        let c = 0.1
        let speed = this.vel.mag()
        drag.setMag(c * speed * speed)

        this.applyForce(drag)
    }
}