class RandomVector extends Vector {
    constructor(min = -1, max = 1) {
        const angle = Math.random() * PI
        super(Math.cos(angle), Math.sin(angle))
        this.mult(random(min, max))
    }
}