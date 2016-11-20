var button1 = document.getElementsByClassName("button1")[0];
var text1 = document.getElementsByClassName("text")[0];
var border = document.getElementsByClassName("border")[0];
var timeline = document.getElementsByClassName('timeline-edition');
var s=0;

//右上角图标移入事件
button1.onmouseover = function(){
	border.style.transition = "height  cubic-bezier(1, 0, 0, 1) 500ms";
	button1.style.transition = " background cubic-bezier(1, 0, 0, 1) 200ms";
	border.style.height = "60px";
};
//右上角图标移出事件
button1.onmouseleave = function(){
	border.style.transition = "height  cubic-bezier(1, 0, 0, 1) 500ms";
	button1.style.transition = " background cubic-bezier(1, 0, 0, 1) 200ms";
	border.style.height = "3px";
}
//脚部焦点
for (var i=0;i<timeline.length;i++) {
	s += 7.14286;
	timeline[i].style.left = s+"%";
}
//焦点事件
$(".timeline-edition").mouseover(function(){
	$(".circle").eq($(this).index()).addClass("active")
	$(".round").eq($(this).index()).addClass("active1")
	$(".data").eq($(this).index()).addClass("active2")
}).mouseleave(function(){
	$(".circle").eq($(this).index()).removeClass("active")
	$(".round").eq($(this).index()).removeClass("active1")
	$(".data").eq($(this).index()).removeClass("active2")
})
//显示第一个焦点
$(".circle").eq(0).addClass("active")
$(".round").eq(0).addClass("active1")
$(".data").eq(0).addClass("active2")

//遮罩层淡入淡出
var match1 = document.getElementsByClassName('match');
var ymh1 = document.getElementsByClassName('ymh1');
for (let i=0;i<match1.length;i++) {
	match1[i].onmouseenter = function(){
	
		ymh1[i].style.opacity = "0";
	}
	match1[i].onmouseleave = function(){
		ymh1[i].style.opacity = "0.3";
	}
}

//var edition = document.getElementsByClassName("edition");
var timeline = document.getElementsByClassName("timeline-edition");
var circle1 = document.getElementsByClassName('circle');
var img = document.getElementsByClassName("content-match");
var editions = document.getElementsByClassName("edition");
var allEditions = document.querySelector('.all-editions');
var year = document.getElementById("year");
var winWidth = document.documentElement.clientWidth;
var editionsWidth = editions[0].offsetWidth;
var ymh = document.getElementsByClassName('ymh');
var num = 0;
var text1 = ['1956','1957','1958','1959','1960','1966','1998','2000','2002','2014','2016',];
var arr = [
			['img/paging/1956_01.jpg','img/paging/1956_02.jpg','img/paging/1956_03.jpg'],
			['img/paging/1957_01.jpg','img/paging/1957_02.jpg','img/paging/1957_03.jpg'],
			['img/paging/1958_01.jpg','img/paging/1958_02.jpg','img/paging/1958_03.jpg'],
			['img/paging/1959_01.jpg','img/paging/1959_02.jpg','img/paging/1959_03.jpg'],
			['img/paging/1960_01.jpg','img/paging/1960_02.jpg','img/paging/1960_03.jpg'],
			['img/paging/1956_01.jpg','img/paging/1956_02.jpg','img/paging/1956_03.jpg'],
			['img/paging/1957_01.jpg','img/paging/1957_02.jpg','img/paging/1957_03.jpg'],
			['img/paging/1958_01.jpg','img/paging/1958_02.jpg','img/paging/1958_03.jpg'],
			['img/paging/1959_01.jpg','img/paging/1959_02.jpg','img/paging/1959_03.jpg'],
			['img/paging/1960_01.jpg','img/paging/1960_02.jpg','img/paging/1960_03.jpg'],
			['img/paging/1956_01.jpg','img/paging/1956_02.jpg','img/paging/1956_03.jpg']
];

for (var j=0;j<3;j++){
	img[j].style.background = 'url('+arr[0][j]+') 50% no-repeat';	
}
for(var i=0;i<editions.length;i++){
	editions[i].style.left = i*editionsWidth+'px';
}

for (let i=0;i<timeline.length;i++) {
	timeline[i].index = i;
//	fn(i);
	timeline[i].onclick = function (){
		var that = this;
		for (var j=0;j<img.length;j++){
			img[j].style.transform = 'scale(0.7, 0.7)';
		}
		setTimeout(function(){
			mTween(allEditions,'left',-winWidth*that.index,500,'linear');
		},700)
		setTimeout(function(){
			for (var j=3;j<img.length;j++){
				img[j].style.background = 'url('+arr[that.index][j%3]+') 50% no-repeat';
			}
		},1500)
		setTimeout(function(){
			for (var j=0;j<img.length;j++){
					img[j].style.transform = 'scale(1, 1)';
				}
		},2500)
		
		year.innerHTML = text1[i]
		
		fn(i);
		
		$(".timeline-edition").each(function(){
			$(".circle").css("opacity","")
			$(".round").css({border:"",background: ""})
			$(".data").css("color","")
			$(".circle").eq($(this).index()).removeClass("active")
			$(".round").eq($(this).index()).removeClass("active1")
			$(".data").eq($(this).index()).removeClass("active2")
		})
		
		$(".circle").eq($(this).index()).css({opacity:"1",transform: "matrix(1, 0, 0, 1, 0, 0)",height: "49px"})
		$(".round").eq($(this).index()).css({border:"1px solid rgb(255, 255, 255)",transform: "matrix(1.05, 0, 0, 1.05, 0, 0)",background: "rgb(255, 255, 255)"})
		$(".data").eq($(this).index()).css("color","white")
		
	}
}
fn(0);
//第二页链接
function fn(index){
	var match = editions[index].getElementsByClassName('match')[1];
	var info  = match.getElementsByClassName("info-content");
	var yhzj = match.getElementsByClassName("yhzj")[0];
	var yhzj2 = yhzj.getElementsByClassName('yhzj2')[0];
	var a2 = yhzj.getElementsByTagName("a")[0];	
	for (let i=0;i<info.length;i++) {
		info[i].onmouseenter = function(){
			yhzj2.style.opacity = "1";
			info[i].style.opacity="1";
		}
		info[i].onmouseleave = function(){
			yhzj2.style.transform = "translate(0%,0%) matrix(1,0,0,1,0,0)";
			a2.style.transform = "translate(0%,0%) matrix(1,0,0,1,0,0)";
			a2.style.opacity = "0";
			yhzj2.style.opacity = "0";
			a2.style.transition = "0s";
			yhzj2.style.transition = "0s";
			info[i].style.opacity="0";
		}
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
