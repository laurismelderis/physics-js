function validateVector(vec) {
    if (!vec) {
        throw new Error("No vector provided")
    }
    if (!vec.x) {
        throw new Error("Vector doesn't have an x value")
    }
    if (!vec.y) {
        throw new Error("Vector doesn't have an y value")
    }
}

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(vec) {
        validateVector(vec)
        this.x += vec.x
        this.y += vec.y
    }
    sub(vec) {
        validateVector(vec)
        this.x -= vec.x
        this.y -= vec.y
    }
    mult(amount) {
        this.x *= amount
        this.y *= amount
    }
    div(vec) {
        validateVector(vec)
        this.x /= vec.x
        this.y /= vec.y
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}