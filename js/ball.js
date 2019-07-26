function Ball(x,y,radius,color){
	// 小球中心的x坐标，默认值为0
	this.x = x || 0;
	// 小球中心的x坐标，默认值为0
	this.y = y || 0;
	// 小球半径，默认值为20
	this.radius = radius || 20;
	// 小球颜色，默认值为#6699FF
	this.color = color || "#6699FF";

	this.scaleX = 1;
	this.scaleY = 1;
}

// 原型方法
Ball.prototype = {
	// 绘制"描边"小球
	stroke:function(cxt){
		cxt.save();
		cxt.scale(this.scaleX,this.scaleY);
		cxt.strokeStyle = this.color;
		cxt.beginPath();
		cxt.arc(this.x,this.y,this.radius,0,360*Math.PI/180,false);
		cxt.closePath();
		cxt.stroke();
		cxt.restore();
	},

	// 绘制"填充"小球
	fill:function(cxt){
		cxt.save();
		cxt.scale(this.scaleX,this.scaleY);
		cxt.fillStyle = this.color;
		cxt.beginPath();
		cxt.arc(this.x,this.y,this.radius,0,360*Math.PI/180,false);
		cxt.closePath();
		cxt.fill();
		cxt.restore();
	}   
}

// 得到小球的外接矩形
Ball.prototype.getRect =function(){
	var rect = {
		x:this.x - this.radius,
		y:this.y - this.radius,
		width:this.radius * 2,
		height:this.radius * 2
	};
	return rect;
}