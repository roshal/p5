function setup() {
	createCanvas(1 << 4, 1 << 4)
	noFill()
	noStroke()
	strokeWeight(2)
	stroke(0, 0, 0xff)
	ellipse(1 << 3, 1 << 3, 0xe, 0xe)
	noStroke()
	fill(0, 0, 0xff)
	ellipse(1 << 3, 1 << 3, 6, 6)
	noFill()
}
function r() {
	return random(1 << 8)
}
function _draw() {
	// background(r(), r(), r())
	bezier(r(), r(), r(), r(), r(), r(), r(), r())
	var w = (1 << 8) - (1 << 4)
	ellipse(random(w) + (1 << 3), random(w) + (1 << 3), 1 << 4, 1 << 4)
	if (mouseIsPressed) {
	} else {
		stroke(r(), r(), r())
	}
}
