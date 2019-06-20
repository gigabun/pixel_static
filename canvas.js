var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");
// ctx.fillStyle = "#000";
// ctx.fillRect(0, 0, 100, 100);


function colorRandom() {
	var hex = "0123456789abcdef";
	var c = "";
	for (var i = 6; i > 0; i--) {
		c += Math.floor(Math.random()*hex.length);
	}
	ctx.fillStyle = "#" + c;
	console.log(ctx.fillStyle, c); 

}


function f() {
	// console.log("hey")
	var w = cvs.width;
	var h = cvs.height;
	var x = Math.floor(Math.random()*Number(w));
	var y = Math.floor(Math.random()*Number(h));
	var size = 10;
	colorRandom();
	ctx.fillRect(x, y, size, size);
} 


var loop = setInterval(f, 100);
