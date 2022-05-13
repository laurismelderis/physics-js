class Ball extends PhysicalObject {
    constructor(x, y, m) {
        const vel = new RandomVector(1, 5) // Set vel to 0 intially
        const acc = new Vector()
        const mass = m
        super(vel, acc, mass)
        this.pos = new Vector(x, y)
        this.r = Math.sqrt(mass) * 5
    }

    edges() {
        if (this.pos.y + this.r >= height) {
            this.pos.y = height - this.r
            this.vel.y *= -1
        }

        if (this.pos.x + this.r >= width) {
            this.pos.x = width - this.r
            this.vel.x *= -1
        } else if (this.pos.x - this.r <= 0) {
            this.pos.x = this.r
            this.vel.x *= -1
        }
    }

    friction() {
        /**
         * Calculation
         * 
         * Ff(vec) = -1 * μ * N * v(uvec)
         * 
         * Where:
         * (vec) - vectorial
         * (uver) - unit vectorial
         * Ff - friction force
         * μ - coeficient of friction (specific constant)
         * N - strength of a normal vector force
         * v - velocity
         * 
         * At the moment we are combining μ with N
         * because μ is a constant and N at this moment
         * is always the same
         */

        let diff = height - (this.pos.y + this.r)
        if(diff < 1) {
            // Direction of friction
            let friction = this.vel.copy() // F
            friction.normalize()
            friction.mult(-1)

            // Magnitude of friction
            let mu = 0.1 // μ
            let normal = this.mass // N
            friction.setMag(mu * normal)
            this.applyForce(friction)
        }
    }
    
    update() {
        this.vel.add(this.acc.x, this.acc.y)
        this.pos.add(this.vel.x, this.vel.y)
        this.acc.set(0, 0)
    }

    show() {
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
        fill('rgba(255, 255, 255, 0.5)')
    }
}