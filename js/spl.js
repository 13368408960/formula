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

//第二页case1
var _2_1_1 = new model('case1', 'ctrl1','ball1',10,100,'linear-gradient(#ffe7d5,#ffc08a)', [{
	x: 2.4800 ,
	y: 44.47  
}, {
	x:    2.5441    ,
	y:  43.34 
}, {
	x: 2.6021    ,
	y:   42.20  
}, {
	x: 2.6990   ,
	y:  41.21  
}, {
	x:  2.7782   ,
	y:  42.47  
}, {
	x:  2.8451   ,
	y:  43.35  
}, {
	x:  2.9031  ,
	y:  42.94 
}, {
	x:   2.9542  ,
	y:   41.20  
}, {
	x:  3.0000  ,
	y:  39.70   

}, {
	x:   3.0792 ,
	y: 40.60  
}, {
	x:    3.1761  ,
	y: 37.90  
}, {
	x:   3.3010  ,
	y:  36.35 
}, {
	x:   3.3979  ,
	y:  34.89   
}, {
	x:   3.4771  ,
	y: 33.32  
}, {
	x:   3.5441  ,
	y:  32.01  
}, {
	x:   3.6021 ,
	y: 30.32  
}, {
	x:    3.6532  ,
	y:  28.96  
}, {
	x:   3.6990  ,
	y:  27.80  
}, {
	x:   3.7404 ,
	y:  26.36  
}, {
	x:    3.7782 ,
	y:  25.21  
},{
	x:   3.8129 ,
	y: 23.83  
},{
	x:   3.8451    ,
	y: 22.51  
},{
	x:3.8751   ,
	y: 21.51  
},{
	x: 3.9031 ,
	y: 20.33 
},{
	x:   3.9294  ,
	y:  19.76  
},{
	x:  3.9542  ,
	y: 18.99  
},{
	x:  3.9777  ,
	y: 18.40 
},{
	x:  4.0000,
	y:  17.47

}])

_2_1_1.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _2_1_1;
})

//第二页case2
//第一个
var _2_2_1 = new model('case2', 'ctrl1','ball1',10,100,'linear-gradient(#ffe7d5,#ffc08a)', [{
	x: 2.0000,
	y: 31.01
}, {
	x: 2.1761,
	y: 33.20 
}, {
	x: 2.3010,
	y: 34.40 
}, {
	x: 2.3979,
	y: 35.41
}, {
	x: 2.4771,
	y: 36.73
}, {
	x: 2.6021,
	y: 36.01
}, {
	x: 2.6990,
	y: 36.48
}, {
	x: 2.7782,
	y: 34.64
}, {
	x: 2.8451,
	y: 34.42	
}, {
	x: 2.9031,
	y: 34.45    
}, {
	x: 2.9542,
	y: 33.84  
}, {
	x: 3.0000,
	y: 33.23   
}, {
	x: 3.1761,
	y: 30.86
}, {
	x: 3.3010,
	y: 29.49
}, {
	x: 3.4771,
	y: 25.62 
}, {
	x: 3.6021,
	y: 22.02 
},  {
	x: 3.6990,
	y: 19.84 
},  {
	x: 3.7782,
	y: 17.21 
},  {
	x: 3.8451,
	y: 15.17 
},  {
	x: 3.9031,
	y: 13.29 
},  {
	x: 3.9542,
	y: 11.31
},  {
	x: 3.9956,
	y: 9.36 
}])

_2_2_1.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _2_2_1;
})
//第二个
var _2_2_2 = new model('case2', 'ctrl2','ball2',10,100,'linear-gradient(#e0f8ff,#a3ebff)', [{
	x: 2.0000,
	y: 36.45
}, {
	x: 2.1761,
	y: 38.59 
}, {
	x: 2.3010,
	y: 39.69 
}, {
	x: 2.3979,
	y: 40.29
}, {
	x: 2.4771,
	y: 41.15
}, {
	x: 2.6021,
	y: 39.80
}, {
	x: 2.6990,
	y: 38.06
}, {
	x: 2.7782,
	y: 37.35
}, {
	x: 2.8451,
	y: 37.77	
}, {
	x: 2.9031,
	y: 38.43    
}, {
	x: 2.9542,
	y: 37.32 
}, {
	x: 3.0000,
	y: 36.27  
}, {
	x: 3.1761,
	y: 34.21
}, {
	x: 3.3010,
	y: 33.16
}, {
	x: 3.4771,
	y: 29.34 
}, {
	x: 3.6021,
	y: 25.59
},  {
	x: 3.6990,
	y: 23.40
},  {
	x: 3.7782,
	y: 20.61
},  {
	x: 3.8451,
	y: 18.70
},  {
	x: 3.9031,
	y: 13.29 
},  {
	x: 3.9542,
	y: 14.92
},  {
	x: 3.9956,
	y: 12.97 
}])

_2_2_2.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _2_2_2;
})
//第三个
var _2_2_3 = new model('case2', 'ctrl3','ball3',10,100,'linear-gradient(#e9e9e9,#c0c0c0)', [{
	x: 2.0000,
	y: 42.18
}, {
	x: 2.1761,
	y: 44.34 
}, {
	x: 2.3010,
	y: 45.23 
}, {
	x: 2.3979,
	y: 45.59
}, {
	x: 2.4771,
	y: 45.23
}, {
	x: 2.6021,
	y: 43.64
}, {
	x: 2.6990,
	y: 41.97
}, {
	x: 2.7782,
	y: 42.20
}, {
	x: 2.8451,
	y: 42.76	
}, {
	x: 2.9031,
	y: 43.30    
}, {
	x: 2.9542,
	y: 42.18 
}, {
	x: 3.0000,
	y: 41.06  
}, {
	x: 3.1761,
	y: 38.98
}, {
	x: 3.3010,
	y: 38.07
}, {
	x: 3.4771,
	y: 34.39
}, {
	x: 3.6021,
	y: 30.43
},  {
	x: 3.6990,
	y: 28.44
},  {
	x: 3.7782,
	y: 25.56
},  {
	x: 3.8451,
	y: 23.70
},  {
	x: 3.9031,
	y: 22.09 
},  {
	x: 3.9542,
	y: 19.95
},  {
	x: 3.9956,
	y: 18.03
}])

_2_2_3.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _2_2_3;
})
//第四个
var _2_2_4 = new model('case2', 'ctrl4','ball4',10,100,'linear-gradient(#dfeaff,#abc9ff)', [{
	x: 2.0000,
	y: 44.68
}, {
	x: 2.1761,
	y: 46.75
}, {
	x: 2.3010,
	y: 47.60 
}, {
	x: 2.3979,
	y: 47.76
}, {
	x: 2.4771,
	y: 47.42
}, {
	x: 2.6021,
	y: 45.58
}, {
	x: 2.6990,
	y: 43.76
}, {
	x: 2.7782,
	y: 44.28
}, {
	x: 2.8451,
	y: 44.95	
}, {
	x: 2.9031,
	y: 45.43   
}, {
	x: 2.9542,
	y: 44.26
}, {
	x: 3.0000,
	y: 43.15  
}, {
	x: 3.1761,
	y: 41.06
}, {
	x: 3.3010,
	y: 40.08
}, {
	x: 3.4771,
	y: 36.29
}, {
	x: 3.6021,
	y: 32.07
},  {
	x: 3.6990,
	y: 30.07
},  {
	x: 3.7782,
	y: 27.25
},  {
	x: 3.8451,
	y: 25.24
},  {
	x: 3.9031,
	y: 23.40 
},  {
	x: 3.9542,
	y: 21.31
},  {
	x: 3.9956,
	y: 19.44
}])

_2_2_4.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtl = _2_2_4;
})
//第二页case3
//第一个
var _2_3_1 = new model('case3', 'ctrl1','ball1',10,400,'linear-gradient(#ffe7d5,#ffc08a)', [{
	x: 2.6990,
	y: 58.93
}, {
	x: 2.7782,
	y: 57.83  
}, {
	x: 2.8451,
	y: 60.87 
}, {
	x: 2.9031,
	y: 65.00
}, {
	x: 2.9542,
	y: 63.76
}, {
	x: 3.0000,
	y: 62.53
}, {
	x: 3.1761,
	y: 64.36  
}, {
	x: 3.3010,
	y: 61.50  
}, {
	x: 3.3979,
	y: 61.25    
}, {
	x: 3.4771,
	y: 60.47   
}, {
	x: 3.6021,
	y: 59.30   
}, {
	x: 3.6990,
	y: 57.80  
}, {
	x: 3.7782,
	y: 55.66
}, {
	x: 3.8451,
	y: 53.76
}, {
	x: 3.9031,
	y: 52.04 
}, {
	x: 3.9956,
	y: 50.80 
}])

_2_3_1.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _2_3_1;
})
//第二个
var _2_3_2 = new model('case3', 'ctrl2','ball2',10,400,'linear-gradient(#e0f8ff,#a3ebff)', [{
	x: 2.6990,
	y: 70.33
}, {
	x: 2.7782,
	y: 64.74  
}, {
	x: 2.8451,
	y: 63.46 
}, {
	x: 2.9031,
	y: 63.74
}, {
	x: 2.9542,
	y: 63.03
}, {
	x: 3.0000,
	y: 62.37
}, {
	x: 3.1761,
	y: 64.42 
}, {
	x: 3.3010,
	y: 61.99 
}, {
	x: 3.3979,
	y: 60.73	
}, {
	x: 3.4771,
	y: 60.47    
}, {
	x: 3.6021,
	y: 58.48   
}, {
	x: 3.6990,
	y: 57.25   
}, {
	x: 3.7782,
	y: 54.97
}, {
	x: 3.8451,
	y: 52.72
}, {
	x: 3.9031,
	y: 50.55 
}, {
	x: 3.9956,
	y: 49.68
}])

_2_3_2.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _2_3_2;
})
//第三个
var _2_3_3 = new model('case3', 'ctrl3','ball3',10,400,'linear-gradient(#e9e9e9,#c0c0c0)', [{
	x: 2.6990,
	y: 69.29
}, {
	x: 2.7782,
	y: 68.65  
}, {
	x: 2.8451,
	y: 68.22  
}, {
	x: 2.9031,
	y: 67.85
}, {
	x: 2.9542,
	y: 67.24
}, {
	x: 3.0000,
	y: 66.67
}, {
	x: 3.1761,
	y: 64.46  
}, {
	x: 3.3010,
	y: 63.30   
}, {
	x: 3.3979,
	y: 62.14      
}, {
	x: 3.4771,
	y: 59.99    
}, {
	x: 3.6021,
	y: 58.06   
}, {
	x: 3.6990,
	y: 56.08   
}, {
	x: 3.7782,
	y: 54.72
}, {
	x: 3.8451,
	y: 53.25
}, {
	x: 3.9031,
	y: 51.71  
}, {
	x: 3.9956,
	y: 47.75 
}])

_2_3_3.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _2_3_3;
})
//第四个
var _2_3_4 = new model('case3', 'ctrl4','ball4',10,400,'linear-gradient(#dfeaff,#abc9ff)', [{
	x: 2.6990,
	y: 67.89
}, {
	x: 2.7782,
	y: 67.16  
}, {
	x: 2.8451,
	y: 67.64  
}, {
	x: 2.9031,
	y: 68.39
}, {
	x: 2.9542,
	y: 68.55
}, {
	x: 3.0000,
	y: 68.55
}, {
	x: 3.1761,
	y: 64.01  
}, {
	x: 3.3010,
	y: 62.61   
}, {
	x: 3.3979,
	y: 60.38      
}, {
	x: 3.4771,
	y: 58.50    
}, {
	x: 3.6021,
	y: 57.65   
}, {
	x: 3.6990,
	y: 54.98   
}, {
	x: 3.7782,
	y: 53.97
}, {
	x: 3.8451,
	y: 52.92
}, {
	x: 3.9031,
	y: 51.82  
}, {
	x: 3.9956,
	y: 49.05  
}])

_2_3_4.ctrl.on('mousedown', function(ev) {
	html.on('mousemove', onmove);
	hoverCtrl = _2_3_4;
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
	console.log(hoverCtrl);
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
	if(lastIndex!=highter||highter==19){
		if(highter!=0&&lastIndex!=19){
			if(hoverCtrl.yNum.findIndex(val=>{return val==highter})!=-1)return;
			var temp = $('<div style="width: 28px;font-size:12px;line-height:28px;text-align:center;height: 28px;background-image:'+hoverCtrl.color+';border: #f39749 solid 1px;border-radius: 15px;box-shadow: 0 5px 5px rgba(0,0,0,.2);position: absolute;">'+hoverCtrl.data[highter-1].y+'</div>');
			temp.css('position','absolute').css('left',x+'px').css('bottom',hoverCtrl.data[highter-1].y*hoverCtrl.scale-hoverCtrl.yZero+'px')
			hoverCtrl.ballBox.append(temp);
			hoverCtrl.yNum.push(highter);
		}else if(x==670){
			if(hoverCtrl.yNum.length==20)return;
			var temp = $('<div style="width: 28px;font-size:12px;line-height:28px;text-align:center;height: 28px;background-image:'+hoverCtrl.color+';border: #f39749 solid 1px;border-radius: 15px;box-shadow: 0 5px 5px rgba(0,0,0,.2);position: absolute;">'+hoverCtrl.data[19].y+'</div>');
		temp.css('position','absolute').css('left',x+'px').css('bottom',hoverCtrl.data[19].y*hoverCtrl.scale-hoverCtrl.yZero+'px')
		hoverCtrl.ballBox.append(temp);
			hoverCtrl.yNum.push(20)
		}
		lastIndex = highter;
	}
}