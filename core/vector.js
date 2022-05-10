function validateVector(vec) {
    if (!vec) {
        throw new Error("No vector provided")
    }
    if (vec.x === undefined) {
        throw new Error("Vector doesn't have an x value")
    }
    if (vec.y === undefined) {
        throw new Error("Vector doesn't have an y value")
    }
}

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(a1 = 0, a2 = undefined) {
        let xamount = a1
        let yamount = a2
        if (a2 === undefined) {
            yamount = a1
        }
        this.x += xamount
        this.y += yamount
    }
    static add(vec1, vec2) {
        validateVector(vec1)
        validateVector(vec2)
        return new Vector(vec1.x + vec2.x, vec1.y + vec2.y)
    }
    sub(a1 = 0, a2 = undefined) {
        let xamount = a1
        let yamount = a2
        if (a2 === undefined) {
            yamount = a1
        }
        this.x -= xamount
        this.y -= yamount
    }
    static sub(vec1, vec2) {
        validateVector(vec1)
        validateVector(vec2)
        return new Vector(vec1.x - vec2.x, vec1.y - vec2.y)
    }
    mult(a1 = 1, a2 = undefined) {
        let xamount = a1
        let yamount = a2
        if (a2 === undefined) {
            yamount = a1
        }
        this.x *= xamount
        this.y *= yamount
    }
    static mult(vec1, vec2) {
        validateVector(vec1)
        validateVector(vec2)
        return new Vector(vec1.x * vec2.x, vec1.y * vec2.y)
    }
    div(a1 = 1, a2 = undefined) {
        let xamount = a1
        let yamount = a2
        if (a2 === undefined) {
            yamount = a1
        }
        if (xamount === 0) {
            console.warn('Division by 0')
            xamount = 1
        }
        if (yamount === 0) {
            console.warn('Division by 0')
            yamount = 1
        }
        this.x /= xamount
        this.y /= yamount
    }
    static div(vec1, vec2) {
        validateVector(vec1)
        validateVector(vec2)
        if (vec2.x === 0) {
            console.warn('Divison by 0')
            return new Vector(vec1.x / 1, vec1.y / vec2.y)
        }
        if (vec2.y === 0) {
            console.warn('Divison by 0')
            return new Vector(vec1.x / vec2.x, vec1.y / 1)
        }
        return new Vector(vec1.x / vec2.x, vec1.y / vec2.y)
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    normalize() {
        const length = this.mag()
        if (length !== 0) {
            this.mult(1 / length)
        }
        return this
    }
    setMag(length = 1) {
        this.normalize()
        this.mult(length)
    }
    limit(length = 1) {
        let mag = this.mag()
        if (mag > length) {
            this.setMag(length)
        }
    }
    set(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
}