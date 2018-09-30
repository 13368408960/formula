var ball = $('.ball');
var ctrl = $('.ctrl');
var html = $('html,body');
var yz = [134,178,170,146,122,100,82,64,56,50];
var ji = 670/9;
var showPar = $('.showPar');
var par = $('.par');
var pageX;
var xLine = $('.xLine');
var yLine = $('.yline');
ctrl.on('mousedown',function(ev){
	html.on('mousemove',onmove);
	pageX = ev.originalEvent.clientX;
})
html.on('mouseup',function(){
	html.off('mousemove')
})
showPar.on('click',()=>{
	console.log(1)
	par.css('display','block');
})
par.on('click',()=>{
	par.css('display','none')
})
function onmove(ev){
	var delta =  ev.originalEvent.clientX-pageX;
	pageX = ev.originalEvent.clientX;
	var x = ctrl.css('left').replace('px'	,'')-0+delta;
	if(x>670||x<0)return;
	ctrl.css('left',x+'px');
	ball.css('left',x+'px');
	var a = Math.ceil(x/ji);
	var y = (yz[a]-yz[a-1])*(x%ji/ji)+yz[a-1];
	if(x==0)y=134;
	if(x==670)y=50;
	console.log((y));
	ball.css('top',300-y+'px');
	xLine.css('top',280-y+'px').css('left',x+'px').html('φpp:'+Math.round(y/2*100)/100);
//	yLine.css('left',x+32+'px').css('top',300-y+'px').html('Frequency:'+(Math.round(x/670*4500)+500))
}

