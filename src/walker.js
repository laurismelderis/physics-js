class Walker {
    constructor(x, y) {
        this.pos = new Vector(x, y)
        this.r = 25
        
        this.vel = new RandomVector()
        this.vel.mult(random(1, 3))
    }
    
    update() {
        let mouse = new Vector(mouseX, mouseY)

        this.acc = Vector.sub(mouse, this.pos)
        this.acc.setMag(1)
        
        this.vel.add(this.acc.x, this.acc.y)
        this.vel.limit(5)

        this.pos.add(this.vel.x, this.vel.y)
    }

    show() {
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
        fill('rgba(255, 255, 255, 0.5)')
    }
}