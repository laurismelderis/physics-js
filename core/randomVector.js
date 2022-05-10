class RandomVector extends Vector {
    constructor(length = 1) {
        super()
        const angle = Math.random() * PI
        this.x = length * Math.cos(angle)
        this.y = length * Math.sin(angle)
    }
}