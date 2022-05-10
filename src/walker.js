class Walker extends PhysicalObject {
    constructor(x, y) {
        super(new RandomVector(1, 3), new Vector())
        this.pos = new Vector(x, y)
        this.r = 25
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