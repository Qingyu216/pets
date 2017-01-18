var imgLis=document.getElementsByClassName('img')[0].getElementsByTagName('li');
var dians=document.getElementsByClassName('dian')[0].getElementsByTagName('div');
var timer=null;

function play(num,stoprun){
	if(stoprun==false){
		clearInterval(timer);
		timer=null;
	}
	for(i=0;i<imgLis.length;i++){
		if(i==num){
			imgLis[i].className='on';
			dians[i].className='on';
		}else{
			imgLis[i].className='';
			dians[i].className='';
		}
	}
}
function autoplay(nu){
	timer=setInterval(function(){
		play(nu);
		nu++;
		if(nu>=imgLis.length){
			nu=0;
		}
	},3000);
}
autoplay(0);
for(i=0;i<dians.length;i++){
	imgLis[i].index=i;
	dians[i].index=i;
	imgLis[i].onmouseover=function(){
		play(this.index,false);
	}
	imgLis[i].onmouseout=function(){
		autoplay(this.index);
	}
	dians[i].onmouseover=function(){
		play(this.index,false);
	}
	dians[i].onmouseout=function(){
		autoplay(this.index);
	}
}

function showed(i){
    if(document.getElementById('xiala'+i.toString()).style.display=='none'){
       	document.getElementById('xiala'+i.toString()).style.display='block';
    }else{
        document.getElementById('xiala'+i.toString()).style.display='none';
    }
}
window.onscroll=function(){
	var nav=document.getElementsByClassName('nav')[0];
	var footer=document.getElementsByClassName('footer')[0];
	var h=document.documentElement.clientHeight;
	var w=document.documentElement.clientWidth;
	var max_L=(w-320)/2;
	if(h<480){
		nav.style.position='fixed';
		nav.style.left=max_L+'px';
		footer.style.position='fixed';
		footer.style.left=max_L+'px';
	}else{
		nav.style.position='absolute';
		nav.style.left='0px';
		footer.style.position='absolute';
		footer.style.left='0px';
	}
}