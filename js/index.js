//-------------------------#hlogo .bag------------------------------------------------

$(window).load(function(){
var shoppingBag = $('#hlogo .bag .shoppingbag');
	shoppingBag.hover(function(){
		$("#head #hlogo .wrap .bag .bagDetail").slideDown();
	},function(){
		$("#head #hlogo .wrap .bag .bagDetail").slideUp();
	});

//----------------------------banner>>outoplay----------------------------------------


var banner = {
	init:function(){
		this.len = $('.bd-banner').children().size();
		this.pic = $('.bd-banner').children()
		this.index = 0
		this.timer = 0
		this.click()
		this.claen()
		this.xiabio()
	},
	claen:function(){
		var that = this
		this.timer=setInterval(function(){
			that.autoplay()
		},3000)
	},
	autoplay:function(){
		this.index++;
			if(this.index==this.len){
				this.index=0
			}
			this.commen()
	},
	click:function(){
		var that = this
		$("#body .nav-banner .arrows-same.next").click(function(){
			clearInterval(that.timer)
			that.index++;
			if(that.index==that.len){
				that.index=0
			}
			that.commen()
			that.claen()
		})
		$("#body .nav-banner .arrows-same.prev").click(function(){
			clearInterval(that.timer)
			that.index--;
			if(that.index==-1){
				that.index=that.len
			}
			that.commen()
			that.claen()
		})
	},
	commen:function(){
		var that = this
		that.pic.eq(that.index).fadeIn(300).siblings().fadeOut(300);
			$("#body .nav-banner .wrap .rolling li").eq(that.index).addClass("hover").siblings().removeClass("hover")
	},
	xiabio:function(){
		var that = this
		$('#body .nav-banner .wrap .rolling li').hover(function(){
			clearInterval(that.timer)
			$(this).addClass('hover');
			$(this).siblings().removeClass('hover');
			that.pic.eq( $(this).index() ).fadeIn(300).siblings().fadeOut(300);	
			that.index = $(this).index();		
		},function(){
			that.claen()
		});
	}	
}
banner.init();


//--------------------------bannerpic>>JSON---------------------------------------


$.getJSON('js/banner.json',function(banner){
	//console.log(banner)
	$('#body .nav-banner .bd-banner .bd-bg.first .wrap a').find("img").attr('src',banner['1'])
	$('#body .nav-banner .bd-banner .bd-bg.second .wrap a').find("img").attr('src',banner['2'])
	$('#body .nav-banner .bd-banner .bd-bg.third .wrap a').find("img").attr('src',banner['3'])
	$('#body .nav-banner .bd-banner .bd-bg.fourth .wrap a').find("img").attr('src',banner['4'])
})

//-------------------------menu_list>>JSON----------------------------------------------------------------------


	$.getJSON('js/index.json',function(d){
		//console.log(d)
		var html='';
		for(var i=0;i<d.length;i++){//大的列表console.log(d.length)
		html+='<dl class="dl'+(i+1)+'"><dt><a href="list.html"><em></em>名品<i></i></a><div><a href="#">秋尚新</a><span></span></div></dt><dd><div class="sub_menu"><div class="sort_list">';
			 for (var j = 0; j < d[i].sub_list.length; j++){
			 	html+='<div class="sort_re"><h3><a href="#">'+d[i].sub_list[j].catlog+'</a></h3><P>'
			 	for(var k=0;k<d[i].sub_list[j].cat_list.length;k++){
			 		html+='<a href="#">'+d[i].sub_list[j].cat_list[k]+'</a>'
			 };
			 	html+='</p></div>'
			 	};
			  	html+='</div><div class="sort_brand"><h3>品牌</h3><div class="brand_list">'
        		for (var j = 0; j < d[i].brand.length; j++) {
            	html+='<a href="#">'+d[i].brand[j]+'&nbsp;</a>'                             
        		}
        		html+='</div></div></div></dd></dl>'
    		};
   				 $('.menu_list').html(html);
		
	})


//-------------------------md-banner&&prev|next-----------------------------------


	$("#body .nav-banner .wrap .ad-image").hover(function(){
		$(this).animate({"right":"10px"},300)
		$("#body .nav-banner:hover .arrows-same").css("display","none")
	},function(){
		$(this).animate({"right":"0"},300)
		$("#body .nav-banner:hover .arrows-same").css("display","block")
	})
	$("#body .nav-banner").hover(function(){
		$("#body .nav-banner:hover .arrows-same").css("display","block")
	},function(){
		$("#body .nav-banner:hover .arrows-same").css("display","none")
	})




//--------------------------body border-change----------------------------------

var intro = $('.intro');
	intro.hover(function(){
		$(this).find('.borderT,.borderR,.borderB,.borderL').addClass('enter');
	},function(){
		$(this).find('.borderT,.borderR,.borderB,.borderL').removeClass('enter');
	});

//---------------------.bd-brand .content-title li>>intro------------------------
function ml(){
	var list = $('.bd-brand .content-title li');
	var intro = list.parent().next().children();
		list.mouseenter(function(){
			$(this).addClass('hover').siblings().removeClass('hover');
			intro.eq($(this).index()).show().siblings().hide();
		});

	var list2=$("#body .special-counter .counter-content .content-right .content-rtop li")
	var intro2 = list2.parent().next().children();
	list2.mouseenter(function(){
			$(this).addClass('hover').siblings().removeClass('hover');
			intro2.eq($(this).index()).show().siblings().hide();
		});
}
//----------------------------brand-change-------------------------------
	
	
$(".next").click(function() {
    var _left = parseInt($('.kuan').children('li').css('left'));
    _left -= 160;
    if (_left <= -800) {
        $('.kuan').children('li').css({ 'left': '0' }).stop(true).animate({ 'left': '-=160px' })
    } else {
        $('.kuan').children('li').stop(true).animate({ 'left': '-=160px' })
    }
});
$('.prve').click(function() {
        var _left = parseInt($('.kuan').children('li').css('left'));
        if (_left >= 0) {
            $('.kuan').children('li').css({ 'left': '-640px' }).stop(true).animate({ 'left': '+=160px' })
        } else {
            $('.kuan').children('li').stop(true).animate({ 'left': '+=160px' })
        }
        _left += 160;
    })
	
	


//-------------------------------small.pic>>autoplay---------------------------------

var exhiScroll = {
		init:function(){
			this.exhi = $('.wrap .wrap-exhibition .exhibition');
			//console.log(this.exhi.length);
			this.cover = this.exhi.find('.cover');	
			this.scroll = this.exhi.find('.exhi-img');
			this.arrowL = this.exhi.find('.prev');
			this.arrowR = this.arrowL.next();
			this.circles = this.exhi.find('ul').children();
			this.scroll.attr('data-index','1');
			this.index = 1;
			this.hover();
			this.arrowClick();
		},
		hover:function(){
			var that = this;
			this.exhi.hover(function(){
				$(this).find('.cover').css('opacity','0.9');
				$(this).find('.prev').stop(true).animate({
					'left':0
				}).next().stop(true).animate({
					'right':0
				});
			},function(){
				$(this).find('.cover').css('opacity','1');
				$(this).find('.prev').stop(true).animate({
					'left':-30
				}).next().stop(true).animate({
					'right':-30
				});
			});
		},
		switch:function( evt ){
			var that = this;
			evt.prev().find('.exhi-img').stop(true).animate({
				marginLeft:-390 * that.index
			});
			evt.prev().find('ul').children().eq(that.index).addClass('hover').siblings().removeClass('hover');
		},
		arrowClick:function(){
			var that = this;
			this.arrowL.on('click',$(this),function(){
				//console.log(index);
				that.index--;
				if(that.index <= 0){
					that.index = 0;
				}
				that.switch( $(this) );
			});
			this.arrowR.on('click',$(this),function(){
				that.index++;
				if(that.index >= $(this).prev().prev().find('.exhi-img').children().length){
					that.index = $(this).prev().prev().find('.exhi-img').children().length-1;
				}
				that.switch( $(this).prev() );
			});
		}
	};
	exhiScroll.init();

//-----------------------------------louti---------------------------------------------

$("#LoutiNav ul li").not(".last").hover(function() {
				//鼠标滑上去
				$(this).addClass("hover");
			}, function() {
				//鼠标移开
				$(this).removeClass("hover");
			});
			 //鼠标点击
			var mark = 1;
			$("#LoutiNav ul li").not(".last").click(function() {
				mark = 2; //改变标记
				$("#LoutiNav ul li").find("span").removeClass("active");
				$(this).find("span").addClass("active");
				//点击左边导航 然后跳到指定的楼层
				var $index = $(this).index(); //找到了对应的序列号
				//alert($index);
				var $top = $("#main .luxury-goods.wrap.wrap-common").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
				//alert($top);
				$("body,html").animate({
					scrollTop: $top
				}, 500, function() {
					mark = 1;
				}); //浏览器滚动的高度
			});
			 //浏览器串口滚动事件
			$(window).scroll(function() {
				if (mark == 1) {
					var $t = $(this).scrollTop(); //获取滚动条滚动的高度
					//document.title = $t;
					if ($t > 1000) { //通过滚动条来判断
						$("#LoutiNav").fadeIn(); //淡入 导航慢慢显示出来
					} else {
						$("#LoutiNav").fadeOut(); //淡出 导航慢慢消失
					}
					var $obj = $("#main .luxury-goods.wrap.wrap-common");
					//循环每一个Louti 然后找到最先满足条件的那个 Louti
					$obj.each(function() {
						var $index = $(this).index();
						//楼层与浏览器上面的高度
						var $height = $obj.eq($index).offset().top + $(this).height() / 2;
						//alert($height) 
						document.title = $t + "--" + $height;
						if ($t < $height) {
							$("#LoutiNav ul li").find("span").removeClass("active")
							$("#LoutiNav ul li").eq($index).find("span").addClass("active");
							return false;
						}
					});
				}
			});
			//点击 Top按钮 跳转到浏览器顶部
			$("#LoutiNav ul li.last").click(function() {
				$("body,html").animate({
					scrollTop: 0
				}, 0, function() {
					mark = 1;
				});
			});



//-------------------------.content-title li>>JSON-----------------------------------------------
	
	
	$.getJSON('js/body.json',function(data){
		var html = '';
		console.log(data);
		console.log(data[0].active)
		for(var i=0;i<data.length;i++){
			html+= '<li>'
				+		'<a href="javascript:;">'+data[i].active+'</a>'
				+		'<span></span>'
				+	'</li>'			
		}
		$("#body .bd-brand .brand-content .content-title").html(html)
		$("#body .bd-brand .brand-content .content-title li:first").addClass("hover")
		ml()
	})
	$("#body .bd-brand .brand-content .content-title li:first").addClass("hover")

//------------------------.detail-intro-img>>JSON----------------------------------------------------

	$.getJSON('js/content.json',function(c){
		var html = ""
		console.log(c)
		for(var i=0;i<c.length;i++){
			
			html+='<div class="intro">'
				+ '<div class="border borderT"></div>'
				+ '<div class="border borderR"></div>'
				+ '<div class="border borderB"></div>'
				+ '<div class="border borderL"></div>'
				+ '<div class="intro-img">'
				+	'<a href="#">'
				+   	'<img src="img/'+c[i].list+'" alt="">'
				+	'</a>'
				+ '</div>'
				+ '</div>'
		}

		$("#body .bd-brand .brand-content .content-detail .intro3").html(html)

		sd();
	})

//--------------------------body border-change----------------------------------
	function sd(){
	var intro = $('.intro');
		intro.hover(function(){
			$(this).find('.borderT,.borderR,.borderB,.borderL').addClass('enter');
		},function(){
			$(this).find('.borderT,.borderR,.borderB,.borderL').removeClass('enter');
		});

	}

//-----------------------------------------------------------------------------------
	$.getJSON('js/content.json',function(c){
		var html=""
		for(var i=0;i<c.length;i++){
			console.log(c[0].list1)
			html+='<li>'
				+ '<div class="intro">'
				+ '<div class="border borderT"></div>'
				+ '<div class="border borderR"></div>'
				+ '<div class="border borderB"></div>'
				+ '<div class="border borderL"></div>'
				+ '<div class="intro-img">'
				+ 	'<a class="img-link" href="#">'
				+		'<img src="img/'+c[i].list1+'" alt="">'
				+	'</a>'
				+	'<p class="goods">'
				+		'<a href="#">'+c[i].p+'</a>'
				+	'</p>'
				+	'<p class="price">'
				+		'<b>银泰价：￥'+c[i].price+'</b>'
				+		'<span>参考价：￥'+c[i].price2+'</span>'
				+	'</p>'
				+'</div>'
				+'</div>'
				+'</li>'
		}
		$("#body .bd-brand .brand-content .content-detail .intro2 .ul-intro").html(html)
		sd()
	})

//---------------------------------------------------------------------------
	$.getJSON('js/content.json',function(c){
		var html=''
		for(var i=0;i<c.length;i++){
			console.log(c[0].list2)
			html+='<a href="#">'
				+ 	'<img src="img/'+c[i].list2+'" alt="">'
				+ '</a>'

		}
		$("#body .bd-brand .brand-content .content-detail .brand-active").html(html)
	})

//----------------------------------------------------------------------------
	$.getJSON('js/contenttwo.json',function(data){
		console.log(data)
		var html=''
		for(var i=0;i<data.length;i++){
			console.log(data[0].pic)
			html+='<a href="#" class="first-'+(i+1)+'">'
				+ '<img src="img/'+data[i].pic+'.jpg" alt="">'
				+ '</a>'
		}
		
		
		$("#body .special-counter .counter-content .content-right .content-rbottom .content-bott").html(html)
	})
	
//--------------------------------------------------------------------------							
		$.getJSON('js/contenttwo.json',function(data){
		console.log(data)
		var html=''
		for(var i=0;i<data.length;i++){
			console.log(data[0].pic)
			html+='<a href="#" class="first-'+(i+4)+'">'
				+ '<img src="img/'+data[i].pic1+'.jpg" alt="">'
				+ '</a>'
		}
		$("#body .special-counter .counter-content .content-right .content-rbottom .content-bottt").html(html)
	})		
//----------------------用户名---------------------------------------------------		
		function getCookie(){
			if (document.cookie) {
        var cook = document.cookie;
        var cooks = cook.split('=')
            //此时只有用户名和密码
        var co = unescape(cooks[1]).split('|');
        var arr = []

        for (var i = 0; i < co.length; i++) {
            arr.push(co[i].split('#'))
        };
        var getName = arr[0][1]
              
    };
			return getName;
		}					
	$("#head #htop .wrap .ht-login li.first").html(getCookie(name))								

})