class RandomVector extends Vector {
    constructor(length = 1) {
        super()
        this.angle = Math.random() * PI
        this.length = length
        this.x = this.length * Math.cos(this.angle)
        this.y = this.length * Math.sin(this.angle)
    }
}