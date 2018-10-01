var html = $('html,body'); //获取HTML对象
var showPar = $('.showPar');
var par = $('.par');
var lastIndex = -1;//记录段落
var hoverCtrl; //记录当前操作对象
var pageX; //记录鼠标位置
//建立工厂模式构造函数
function model(boxId,ctrl, ball, scale,yZero,color,data) {
	this.data = data; //数值数组
	this.ctrl = $('#'+boxId+' .'+ctrl); //控制球jq对象
	this.ball = $('#'+boxId+' .'+ball); //示位球jq对象
	this.ballBox = $('#'+boxId+' .ballBox');//对应画板
	this.yNum = [];//记录当前对象y轴已标示位置
	this.scale = scale;//Y轴缩放系数
	this.yZero = yZero;//Y轴原点值
	this.color = color;//标示颜色
	this.range = data[data.length - 1].x - data[0].x; //x轴跨度
	this.division = (data[data.length - 1].x - data[0].x) / 670 //x轴分度值
	
}
//第一页case1
var _1_1_1 = new model('case1', 'ctrl1','ball1',10,600,'linear-gradient(#ffe7d5,#ffc08a)', [{
	x: 2.4786,
	y: 79.96
}, {
	x: 2.5441,
	y: 80.62
}, {
	x: 2.6021,
	y: 81.11
}, {
	x: 2.6990,
	y: 81.88
}, {
	x: 2.7782,
	y: 82.34
}, {
	x: 2.8451,
	y: 82.65
}, {
	x: 2.9031,
	y: 82.84
}, {
	x: 2.9542,
	y: 82.88
}, {
	x: 3.0000,
	y: 82.92
}, {
	x: 3.0792,
	y: 82.82
}, {
	x: 3.1761,
	y: 82.52
}, {
	x: 3.3010,
	y: 81.76
}, {
	x: 3.3979,
	y: 80.90
}, {
	x: 3.4771,
	y: 79.99
}, {
	x: 3.5441,
	y: 79.03
}, {
	x: 3.6021,
	y: 78.13
}, {
	x: 3.6990,
	y: 76.33
}, {
	x: 3.7782,
	y: 74.67
}, {
	x: 3.8451,
	y: 73.20
}, {
	x: 3.9731,
	y: 70.00
}])

_1_1_1.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _1_1_1;
})
//第一页case2
var _1_2_1 = new model('case2', 'ctrl1','ball1',10,600,'linear-gradient(#ffe7d5,#ffc08a)', [{
	x: 2.4786,
	y: 79.96
}, {
	x: 2.5441,
	y: 80.62
}, {
	x: 2.6021,
	y: 81.11
}, {
	x: 2.6990,
	y: 81.88
}, {
	x: 2.7782,
	y: 82.34
}, {
	x: 2.8451,
	y: 82.65
}, {
	x: 2.9031,
	y: 82.84
}, {
	x: 2.9542,
	y: 82.88
}, {
	x: 3.0000,
	y: 82.92
}, {
	x: 3.0792,
	y: 82.82
}, {
	x: 3.1761,
	y: 82.52
}, {
	x: 3.3010,
	y: 81.76
}, {
	x: 3.3979,
	y: 80.90
}, {
	x: 3.4771,
	y: 79.99
}, {
	x: 3.5441,
	y: 79.03
}, {
	x: 3.6021,
	y: 78.13
}, {
	x: 3.6990,
	y: 76.33
}, {
	x: 3.7782,
	y: 74.67
}, {
	x: 3.8451,
	y: 73.20
}, {
	x: 3.9731,
	y: 70.00
}])

_1_2_1.ctrl.on('mousedown', function(ev) {
	console.log(1)
	html.on('mousemove', onmove);
	hoverCtrl = _1_2_1;
})


var _1_2_2 = new model('case2', 'ctrl2','ball2',10,600,'linear-gradient(#e0f8ff,#a3ebff)', [{
	x: 2.4786,
	y: 79.36   

}, {
	x: 2.5441,
	y: 79.91   
}, {
	x: 2.6021,
	y: 80.51   
}, {
	x: 2.6990,
	y: 81.24   
}, {
	x: 2.7782,
	y: 81.76   
}, {
	x: 2.8451,
	y: 82.20   
}, {
	x: 2.9031,
	y: 82.48   
}, {
	x: 2.9542,
	y: 82.72   
}, {
	x: 3.0000,
	y: 82.81   
}, {
	x: 3.0792,
	y: 83.00   
}, {
	x: 3.1761,
	y: 83.12   
}, {
	x: 3.3010,
	y: 83.09   
}, {
	x: 3.3979,
	y: 82.85   
}, {
	x: 3.4771,
	y: 82.58   
}, {
	x: 3.5441,
	y: 82.34   
}, {
	x: 3.6021,
	y: 82.03   
}, {
	x: 3.6990,
	y: 81.45   
}, {
	x: 3.7782,
	y: 80.93   
}, {
	x: 3.8451,
	y: 80.46   
}, {
	x: 3.9731,
	y: 79.39
}])

_1_2_2.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _1_2_2;
})
//第一页case3
//第一个
var _1_3_1 = new model('case3', 'ctrl1','ball1',10,600,'linear-gradient(#ffe7d5,#ffc08a)', [{
	x: 2.4786,
	y: 79.96   
}, {
	x: 2.5441,
	y: 80.62   
}, {
	x: 2.6021,
	y: 81.11   
}, {
	x: 2.6990,
	y: 81.88   
}, {
	x: 2.7782,
	y: 82.34   
}, {
	x: 2.8451,
	y: 82.65  
}, {
	x: 2.9031,
	y:  82.84   
}, {
	x: 2.9542,
	y: 82.88   
}, {
	x: 3.0000,
	y: 82.92       
}, {
	x: 3.0792,
	y: 82.82     
}, {
	x: 3.1761,
	y: 82.52   
}, {
	x: 3.3010,
	y: 81.76   
}, {
	x: 3.3979,
	y: 80.90   
}, {
	x: 3.4771,
	y: 79.99    
}, {
	x: 3.5441,
	y: 79.03   
}, {
	x: 3.6021,
	y: 78.13   
}, {
	x: 3.6990,
	y: 76.33   
}, {
	x: 3.7782,
	y: 74.67   
}, {
	x: 3.8451,
	y: 73.20  
}, {
	x: 3.9731,
	y:  70.00  
}])


_1_3_1.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _1_3_1;
})
var _1_3_2 = new model('case3', 'ctrl2','ball2',10,600,'linear-gradient(#e0f8ff,#a3ebff)', [{
	x: 2.4786,
	y: 86.25   
}, {
	x: 2.5441,
	y: 87.03   
}, {
	x: 2.6021,
	y: 87.58   
}, {
	x: 2.6990,
	y: 88.52   
}, {
	x: 2.7782,
	y: 89.14   
}, {
	x: 2.8451,
	y: 89.54  
}, {
	x: 2.9031,
	y: 89.82   
}, {
	x: 2.9542,
	y: 89.99   
}, {
	x: 3.0000,
	y: 90.10       
}, {
	x: 3.0792,
	y: 90.06     
}, {
	x: 3.1761,
	y: 89.71   
}, {
	x: 3.3010,
	y: 88.79   
}, {
	x: 3.3979,
	y: 87.53   
}, {
	x: 3.4771,
	y: 86.10   
}, {
	x: 3.5441,
	y: 84.56 
}, {
	x: 3.6021,
	y: 83.03   
}, {
	x: 3.6990,
	y: 79.97   
}, {
	x: 3.7782,
	y: 76.82   
}, {
	x: 3.8451,
	y: 73.76  
}, {
	x: 3.9731,
	y: 71.38  
}])


_1_3_2.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _1_3_2;
})


//第一页case4
//第一个
var _1_4_1 = new model('case4', 'ctrl1','ball1',10000,0,'linear-gradient(#ffe7d5,#ffc08a)', [{
	x: 2.0000,
	y: 0.0016   
}, {
	x: 2.1761,
	y: 0.0026   
}, {
	x: 2.3010,
	y: 0.0033   
}, {
	x: 2.4771,
	y: 0.0042   
}, {
	x: 2.6021,
	y: 0.0047   
}, {
	x: 2.6990,
	y: 0.0050  
}, {
	x: 2.7782,
	y: 0.0050   
}, {
	x: 2.8451,
	y: 0.0049   
}, {
	x: 2.9031,
	y: 0.0047       
}, {
	x: 2.9542,
	y: 0.0045     
}, {
	x: 3.0000,
	y: 0.0043   
}, {
	x: 3.3010,
	y: 0.0026   
}, {
	x: 3.4771,
	y: 0.0016   
}, {
	x: 3.5441,
	y: 0.0011 
}, {
	x: 3.6021,
	y: 0.0008  
}, {
	x: 3.6990,
	y: 0.0006  
}, {
	x: 3.7782,
	y: 0.0004 
}, {
	x: 3.8451,
	y: 0.0004 
}, {
	x: 3.9731,
	y: 0.0003 
}])


_1_4_1.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _1_4_1;
})



//第二个
var _1_4_1 = new model('case4', 'ctrl1','ball1',1000,0,'linear-gradient(#ffe7d5,#ffc08a)', [{
	x: 2.0000,
	y: 0.0235   
}, {
	x: 2.1761,
	y: 0.0385   
}, {
	x: 2.3010,
	y: 0.0536   
}, {
	x: 2.4771,
	y: 0.0771   
}, {
	x: 2.6021,
	y: 0.0916   
}, {
	x: 2.6990,
	y: 0.0987  
}, {
	x: 2.7782,
	y: 0.1016   
}, {
	x: 2.8451,
	y: 0.1006   
}, {
	x: 2.9031,
	y: 0.0977       
}, {
	x: 2.9542,
	y: 0.0949     
}, {
	x: 3.0000,
	y: 0.0891   
}, {
	x: 3.3010,
	y: 0.0424   
}, {
	x: 3.4771,
	y: 0.0206 
}, {
	x: 3.6021,
	y: 0.0100
}, {
	x: 3.6990,
	y: 0.0053  
}, {
	x: 3.7782,
	y: 0.0031  
}, {
	x: 3.8451,
	y: 0.0018 
}, {
	x: 3.9031,
	y: 0.0011 
}, {
	x: 3.9542,
	y: 0.0007 
}])

_1_4_1.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _1_4_1;
})



//第二个

var _1_4_2 = new model('case4', 'ctrl2','ball2',1000,0,'linear-gradient(#e0f8ff,#a3ebff)', [{
	x: 2.0000,
	y: 0.0235   
}, {
	x: 2.1761,
	y: 0.0385   
}, {
	x: 2.3010,
	y: 0.0536   
}, {
	x: 2.4771,
	y: 0.0771   
}, {
	x: 2.6021,
	y: 0.0916   
}, {
	x: 2.6990,
	y: 0.0987  
}, {
	x: 2.7782,
	y: 0.1016   
}, {
	x: 2.8451,
	y: 0.1006   
}, {
	x: 2.9031,
	y: 0.0977       
}, {
	x: 2.9542,
	y: 0.0949     
}, {
	x: 3.0000,
	y: 0.0891   
}, {
	x: 3.3010,
	y: 0.0424   
}, {
	x: 3.4771,
	y: 0.0206 
}, {
	x: 3.6021,
	y: 0.0100
}, {
	x: 3.6990,
	y: 0.0053  
}, {
	x: 3.7782,
	y: 0.0031  
}, {
	x: 3.8451,
	y: 0.0018 
}, {
	x: 3.9031,
	y: 0.0011 
}, {
	x: 3.9542,
	y: 0.0007 
}])


_1_4_2.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _1_4_2;
})





















html.on('mouseup', function() {
	html.off('mousemove')
})
showPar.on('click', () => {
	console.log(1)
	par.css('display', 'block');
})
par.on('click', () => {
	par.css('display', 'none');
})
function onmove(ev) {
	var delta = ev.originalEvent.clientX - pageX;
	pageX = ev.originalEvent.clientX;
	var x = hoverCtrl.ctrl.css('left').replace('px', '') - 0 + delta;
	if(x > 670 || x < 0) return;
	hoverCtrl.ctrl.css('left', x + 'px');
	hoverCtrl.ball.css('left', x + 'px');
	var xp = x * hoverCtrl.division + hoverCtrl.data[0].x;
	var highter = hoverCtrl.data.findIndex((val, index) => {
		return val.x >= xp;
	})
	var y;
	if(highter == 0 || highter == -1) {
		y = hoverCtrl.data[0].y
	}else {
		y = hoverCtrl.data[highter - 1].y +
			(hoverCtrl.data[highter].y - hoverCtrl.data[highter - 1].y) *
			((xp - hoverCtrl.data[highter-1].x) / (hoverCtrl.data[highter].x - hoverCtrl.data[highter - 1].x));
		y = (Math.round(y * 100) / 100)*hoverCtrl.scale;
		console.log(y)
	}
	hoverCtrl.ball.css('bottom', y - hoverCtrl.yZero + 'px');
	if(lastIndex!=highter||highter==hoverCtrl.data.length-1){
		if(highter!=0&&lastIndex!=hoverCtrl.data.length-1){
			if(hoverCtrl.yNum.findIndex(val=>{return val==highter})!=-1)return;
			var temp = $('<div style="width: 28px;font-size:12px;line-height:28px;text-align:center;height: 28px;background-image:'+hoverCtrl.color+';border: #f39749 solid 1px;border-radius: 15px;box-shadow: 0 5px 5px rgba(0,0,0,.2);position: absolute;">'+hoverCtrl.data[highter-1].y+'</div>');
			temp.css('position','absolute').css('left',x+'px').css('bottom',hoverCtrl.data[highter-1].y*hoverCtrl.scale-hoverCtrl.yZero+'px')
			hoverCtrl.ballBox.append(temp);
			hoverCtrl.yNum.push(highter);
		}else if(x==670){
			if(hoverCtrl.yNum.length==hoverCtrl.data.length)return;
			var temp = $('<div style="width: 28px;font-size:12px;line-height:28px;text-align:center;height: 28px;background-image:'+hoverCtrl.color+';border: #f39749 solid 1px;border-radius: 15px;box-shadow: 0 5px 5px rgba(0,0,0,.2);position: absolute;">'+hoverCtrl.data[hoverCtrl.data.length-1].y+'</div>');
		temp.css('position','absolute').css('left',x+'px').css('bottom',hoverCtrl.data[hoverCtrl.data.length-1].y*hoverCtrl.scale-hoverCtrl.yZero+'px')
		hoverCtrl.ballBox.append(temp);
			hoverCtrl.yNum.push(hoverCtrl.data.length)
		}
		lastIndex = highter;
	}
}