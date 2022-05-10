let walker = new Walker(width / 2, height / 2)
function setup() {

}

function draw() {
    background('rgba(255, 255, 255, 0)')

    walker.update()
    walker.show()
}