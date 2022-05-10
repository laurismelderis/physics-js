const translateX = width/2
const translateY = height/2

function setup() {
    const vec1 = new Vector(3, 4)
}

function draw() {
    let v = new RandomVector(random(-50, 50))

    line(translateX, translateY, translateX + v.x, translateY + v.y)
    stroke("rgba(255, 255, 255, 0.3)")
}