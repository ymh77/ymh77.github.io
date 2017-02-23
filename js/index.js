var winWidth = document.body.clientWidth;





ymh();
function ymh(){
	var is = document.getElementsByTagName('i');
	var yhzj = document.getElementById("yhzj");
	var yhzj2 = document.getElementById("yhzj2");
	var a2 = yhzj.getElementsByTagName("a")[0];
	var p1 = document.getElementsByTagName("p")[0];
	var tx = document.getElementById("tx");
	
	for (let i=0;i<is.length;i++) {
		setTimeout(function(){
			is[i].style.opacity = "1";
		},700*i)	 
	};
	


	tx.onmouseover = function(){
		yhzj2.style.opacity = "1";
	};
	tx.onmouseleave = function(){
		yhzj2.style.transform = "translate(0%,0%) matrix(1,0,0,1,0,0)";
		a2.style.transform = "translate(0%,0%) matrix(1,0,0,1,0,0)";
		a2.style.opacity = "0";
		yhzj2.style.opacity = "0";
		a2.style.transition = "0s";
		yhzj2.style.transition = "0s";
		
	}
	yhzj2.onmouseover = function(){
		yhzj2.style.transform = "translate(100%,0%) matrix(1,0,0,1,0,0)";
		a2.style.transform = "translate(100%,0%) matrix(1,0,0,1,0,0)";
		a2.style.opacity = "1";
		yhzj2.style.opacity = "0";
		a2.style.transition = "1.5s";
		yhzj2.style.transition = "1.5s";
	}
	a2.onmouseleave = function(){
		yhzj2.style.transform = "translate(0%,0%) matrix(1,0,0,1,0,0)";
		a2.style.transform = "translate(0%,0%) matrix(1,0,0,1,0,0)";
		a2.style.opacity = "0";
		yhzj2.style.display = "block";
		a2.style.transition = "0s";
		yhzj2.style.transition = "0s";
	}
	
}
