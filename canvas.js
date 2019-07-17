
var canvas = {
	pixelSize: 10
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

function randomDimension(maxNumber, increment=1) {
	var randomNumber = Math.floor(Math.random() * Number(maxNumber));
	randomNumber -= randomNumber % increment;
	return randomNumber;
}

function pixelStatic() {
	for (var i = 0; i < canvas.cvs.width; i+=canvas.pixelSize) {
		for (var j = 0; j < canvas.cvs.height; j+=canvas.pixelSize) {
			drawSquare(i, j);
		}
	}
}

function randomPixel() {
	var x = randomDimension(canvas.cvs.width, canvas.pixelSize);
	var y = randomDimension(canvas.cvs.height, canvas.pixelSize);

	drawSquare(x, y);
} 

function drawSquare(x, y) {
	canvas.ctx.fillStyle = colorRandom();
	canvas.ctx.fillRect(x, y, canvas.pixelSize, canvas.pixelSize);
}

var loop = setInterval(pixelStatic, 100);

