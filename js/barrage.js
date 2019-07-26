// 弹幕类
function Barrage(cnv, cxt, data) {
	this.width = cnv.width;
	this.height = cnv.height;
	this.cxt = cxt;
	this.color = data.color || '#' + Math.floor(Math.random() * 16777215).toString(16); // 随机颜色
	this.value = data.value;
	this.x = this.width; // x坐标
	this.y = Math.random() * this.height; // y坐标
	this.speed = Math.random() * 5 + 1; // 加速度
	this.fontSize = Math.random() * 10 + 12; //字号
}

Barrage.prototype.draw = function() {
	if (this.x < -200) {
		return;
	} else {
		this.cxt.font = this.fontSize + 'px "微软雅黑"';
		this.cxt.strokeStyle = this.color;
		this.x = this.x - this.speed;
		this.cxt.strokeText(this.value, this.x, this.y);
	}
};