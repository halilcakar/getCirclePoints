var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { create: create, render: render });
var  points = [], angles = [];

function create() {
	this.stage.disableVisibilityChange  = true;
	game.stage.backgroundColor = 0x337799;
	point = new Phaser.Point(game.world.centerX, game.world.centerY);

	this.points = getCirclePoints(180, 45);
}

function render() {
	game.debug.geom( point, 'rgba(255,255,255,1)' ) ;
	if(this.points) {
		for (var i = 0; i < this.points.length; i++) {
			game.debug.geom(new Phaser.Point(this.points[i].x + game.world.centerX, this.points[i].y + game.world.centerY), 'rgba(255,255,255,1)');
		}
	}
}

function getCirclePoints(r, deg, angle = false){
	if(r == undefined) return;
	if(deg == undefined) {return;};
	if(r == 0) {return {x: 0, y: 0}};

	var points = [], angles = [];
    	var leng = 360 / (360 / deg);
	var ang = 0;
	for (var i = -90; i < 270; i += leng) {
		var _x = roundnum(Math.cos(Math.PI * i / 180.0), 8) * r;
		var _y = roundnum(Math.sin(Math.PI * i / 180.0), 8) * r;
		points.push({
			x: _x,
			y: _y
		});
		ang += leng;
		angles.push(ang);
	}
	if(angle) { 
		return {angles: angles, points: points};
	}
	console.log(points);
	return points;
}

function roundnum(x,p) {
	var i;
 	var n = parseFloat(x);
	var m = n.toFixed(p);
	var y = String(m);
	i = y.length;
	j = y.indexOf('.');
	if(i > j && j != -1) {
		while(i > 0)
		{
			if(y.charAt(--i) == '0'){
				y = y.substring(0,i)+y.substring(i+1,y.length);
			}
			else {
				break;
			};
		};
		if(y.charAt(i)=='.')
			y = y.substring(0,i)+y.substring(i+1,y.length);
	};
	return y;
}
