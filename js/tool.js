var Event = {
	// 通过on接口监听事件eventName
    // 如果事件eventName被触发，则执行callback回调函数
    on(eventName, callback){
        //你的代码
    },
    //触发事件 eventName
    emit(eventName){
       //你的代码
    }
};

window.requestAnimationFrame = {
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame || 
	window.oRequestAnimationFrame || 
	function (callback) {
		return window.setTimeout(callback, 1000/60);
	}
};