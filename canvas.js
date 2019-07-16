
var canvas = {
	size: 10
};

canvas.cvs = document.getElementById("cvs");
canvas.ctx = canvas.cvs.getContext("2d");

function colorRandom() {
	var hex = "0123456789abcdef";
	var newColor = "";
	for (var i = 6; i > 0; i--) {
		newColor += Math.floor(Math.random()*hex.length);
	}
	return "#" + newColor;
}

function randomDimension(n) {
	return Math.floor(Math.random()*Number(n));
}

function main() {
	var x = randomDimension(canvas.cvs.width)
	var y = randomDimension(canvas.cvs.height)

	canvas.ctx.fillStyle = colorRandom();
	canvas.ctx.fillRect(x, y, canvas.size, canvas.size);
} 

var loop = setInterval(main, 100);
