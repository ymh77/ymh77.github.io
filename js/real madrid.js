window.onload = function(){
	var oplay = document.getElementById("play");
		oImg = oplay.getElementsByTagName('p');
		
		//获取浏览器可视宽高
		var winWidth = document.body.clientWidth;
		var winHeight = window.innerHeight;
		//设置父级容器宽高等同于浏览器可视宽高
		$("#play").css({
			width:winWidth+'px',
			height:winHeight+'px',
		})
		//设置p容器宽高等同于浏览器可视宽高
		$('#play p').css({
			width:winWidth+'px',
			height:winHeight+'px',
		})
		//设置banner文字宽等同于浏览器可视宽高
		$('#imgtext p').css({
			width: winWidth+'px'
		});
		$('#foote').css({
			width: winWidth+'px'
		});
		//定义浏览器宽度发生变化执行
		window.onresize = function(){
			//再次获取宽高
			var winWidth = document.body.clientWidth;
			var winHeight = window.innerHeight;
			//上面在设置一次
			$('#play').css({
				width: winWidth+'px',
				height: winHeight+'px',
			});
	
			$('#play p').css({
				width: winWidth+'px',
				height: winHeight+'px',
			});
	
			$('#imgtext p').css({
				width: winWidth+'px'
			});
			$('#foote').css({
				width: winWidth+'px'
			});
		}
	//导航栏设置
	var waof = document.getElementById('waof');
	var nav = document.getElementById('nav');
	var onoff = document.getElementById('onoff');
	var bgf = document.getElementById('bg-mask');
	
	onoff.onclick = function(){
		if(!onoff.onoff){
			nav.className = 'show';
			bgf.className = 'show1';
			bgf.style.opacity = '0.8';
			waof.style.background = 'rgba(0,0,0,0)';
			onoff.style.background = 'url(./img/realmadrid/mea.jpg)';
          	onoff.style.backgroundSize= ' 35px,30px';
		}else{
			nav.className = 'close';
			bgf.className = 'close1';
  			onoff.style.backgroundImage = '';
  			waof.style.background = '';
		}
		onoff.onoff = !onoff.onoff;
	}
	//face点击展开文字
	var face = document.getElementById('face');
	var faceh4 = face.getElementsByTagName('h4');
	var add = document.getElementsByClassName('tianjia');
	for (var i=0;i<add.length;i++) {
		add[i].index = i;
		add[i].onclick = function(){
			if(this.onoff){
				faceh4[this.index].style.height = 0;
			}else{
				faceh4[this.index].style.height = 170+"px";
			}
			this.onoff = !this.onoff;
		}
	}
	//创建球员模块
	var imgarr = ['./img/realmadrid/1.jpg','./img/realmadrid/2.jpg','./img/realmadrid/3.jpg','./img/realmadrid/4.jpg','./img/realmadrid/5.jpg','./img/realmadrid/6.jpg','./img/realmadrid/7.jpg',
					'./img/realmadrid/8.jpg','./img/realmadrid/9.jpg','./img/realmadrid/10.jpg','./img/realmadrid/11.jpg','./img/realmadrid/12.jpg','./img/realmadrid/13.jpg','./img/realmadrid/14.jpg',
					'./img/realmadrid/15.jpg','./img/realmadrid/16.jpg','./img/realmadrid/17.jpg','./img/realmadrid/18.jpg','./img/realmadrid/19.jpg','./img/realmadrid/20.jpg'
	]
	var imgtext = ['齐达内','劳尔','卡洛斯','菲戈','罗纳尔多','欧文','贝克汉姆','古蒂','卡西利亚斯','C.罗','卡卡','本泽马','莫德里奇',
					'贝尔','J罗','克罗斯','拉莫斯','佩佩','马塞洛','佛伦罗蒂诺'
	]
	var works = document.getElementById('works');
	var qy = works.getElementsByTagName("ul")[0];
	for (var i= 0;i<imgarr.length;i++) {
		var list = document.createElement('li');
		var imgs = document.createElement('img');
		var divs = document.createElement('div');
		var p = document.createElement('span');
		imgs.src = imgarr[i];
		list.appendChild(imgs);
		divs.appendChild(p);
		p.innerHTML = imgtext[i];
		list.appendChild(divs);
		qy.appendChild(list);
	}
	$("#ul li").hover(function(){
		$("div",this).stop().animate({
			height:'337px',
		},600)
		$(this).find('img').addClass('active');
	},function(){
		$("div",this).stop().animate({
			height:'0',
		},600)
		$(this).find('img').removeClass('active');
	});
	//屏幕滚动元素效果
	scroll()
	function scroll(){
		var h1 = document.getElementsByTagName('h1');
		var h2 = document.getElementsByTagName('h2');
		var heng = document.getElementsByClassName('heng');
		var face = document.getElementById('face');
		var works = document.getElementById('works');
		var woul = works.getElementsByTagName('ul')[0];
        var fali = face.getElementsByTagName('li');
        var tet = document.getElementById('text');
  		var onoff = document.getElementById('onoff');
  		for (var i=0;i<fali.length;i++) {
  			fali[i].onmouseenter = function(){
  				this.style.transition = 1+'s';
  				this.style.transform = 'translateZ(10px)';
  			}
  			fali[i].onmouseout = function(){
  				this.style.transition = 1+'s';
  				this.style.transform = '';
  			}
  		}
  		document.onscroll = function(){
  			var scl = document.body.scrollTop||document.documentElement.scrollTop;
  			if(scl>300){
  				h1[0].style.opacity = 1; 
      			h1[0].style.transition = '0.5s'
      			h1[0].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  			}else{
  				h1[0].style.opacity = 0; 
      			h1[0].style.transition = '0.5s'
      			h1[0].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
  			}
  			if(scl>400){
  				h2[0].style.opacity = 1; 
	          			h2[0].style.transition = '0.5s'
	          			h2[0].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  			}else{
  				h2[0].style.opacity = 0; 
      			h2[0].style.transition = '0.5s'
      			h2[0].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
  			}
  			if (scl>500) {
  				heng[0].style.opacity = 1; 
      			heng[0].style.transition = '0.5s'
      			heng[0].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  			} else{
  				heng[0].style.opacity = 0; 
      			heng[0].style.transition = '0.5s'
      			heng[0].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
  			}
  			if(scl > 600){
	  			tet.style.opacity = 1; 
	  			tet.style.transition = '0.5s'
	  			tet.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	  		}else{
	  			tet.style.opacity = 0; 
	  			tet.style.transition = '0.5s'
	  			tet.style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	  		}
  			if(scl > 700){
      			fali[0].style.opacity = 1; 
      			fali[1].style.opacity = 1;
      			fali[2].style.opacity = 1;
      			fali[0].style.transition = '0.5s'
      			fali[1].style.transition = '0.5s'
      			fali[2].style.transition = '0.5s'
      			fali[0].style.marginright = 50 +'px';
      			fali[1].style.marginLeft = 35 +'px';
      			fali[2].style.marginLeft = 35 +'px';
      			fali[0].style.transform = 'scale(1,1)'
      			fali[1].style.transform = 'scale(1,1)';
      			fali[2].style.transform = 'scale(1,1)';
      		}else{
      			fali[0].style.opacity = 0; 
      			fali[1].style.opacity = 0;
      			fali[2].style.opacity = 0;
      			fali[0].style.transition = '0.5s'
      			fali[1].style.transition = '0.5s'
      			fali[2].style.transition = '0.5s'
      			fali[0].style.marginright =  100 +'px';
      			fali[1].style.marginLeft =  100 +'px';
      			fali[2].style.marginLeft =  100 +'px';
      			fali[0].style.transform = 'scale(1.5,1.5)';
      			fali[1].style.transform = 'scale(1.5,1.5)';
      			fali[2].style.transform = 'scale(1.5,1.5)';
      		}
			if(scl > 900){
      			h1[1].style.opacity = 1; 
      			h1[1].style.transition = '0.5s';
      			h1[1].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
      		}else{
      			h1[1].style.opacity = 0; 
      			h1[1].style.transition = '0.5s';
      			h1[1].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
      		}
			if(scl > 1100){
      			h2[1].style.opacity = 1; 
      			h2[1].style.transition = '0.5s';
      			h2[1].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
      		}else{
      			h2[1].style.opacity = 0; 
      			h2[1].style.transition = '0.5s';
      			h2[1].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
      		}
			if(scl > 1200){
      			heng[1].style.opacity = 1; 
      			heng[1].style.transition = '0.5s'
      			heng[1].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
      		}else{
      			heng[1].style.opacity = 0; 
      			heng[1].style.transition = '0.5s'
      			heng[1].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
      		}
      		if(scl > 1300){
      			woul.style.opacity = 1; 
      			woul.style.transition = '0.5s';
      			woul.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';

      		}else{
      			woul.style.opacity = 0; 
      			woul.style.transition = '0.5s';
      			woul.style.transform = 'matrix(0.7, 0, 0, 0.7, 0, 0)';
      		}
  		}
  		////每次刷新页面，让滚动条回到顶端的位置
  		setTimeout(function(){
  			window.scrollTo(0,0);
  		}, 20);
  		 //点击小鼠标，调到下一屏的页面
  		$("#cus img").click(function(){
			$('body,html').animate({scrollTop:$(window).height()}, 1000);
 		})
  		 //点击导航里面的按钮跳转相关页面
  		$("#msi").click(function(){
  			scrolly($(this));
  		});
  		$("#ms").click(function(){
			scrolly($(this));	
	    })
	      
	    $("#me").click(function(){
			scrolly($(this));
	    })
	    $("#my").click(function(){
			scrolly($(this));
	    })
	    $('#msi','#ms','#me','#my').click(function(){
		  	
		  		scrolly($(this));
		  })
  		
  		function scrolly($item){
  			$("#nav").addClass('close');
  			$("#bg-mask").addClass("close1");
  			$("#onoff").css({background: ''});
  			$("#waof").css({background:''});
  			$("html,body").animate({scrollTop:$item.attr('st')},1000);
  			onoff.onff = !onoff.onff
  		}
  		$("#msi").attr('st',$("#about_us").offset().top);
		$("#ms").attr('st',$("#works").offset().top);
		$("#me").attr('st',0);
		$("#my").attr('st',$("#foote").offset().top);
  		
  		
	}


















}