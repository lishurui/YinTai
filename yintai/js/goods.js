$(function(){
	function fangda(){
			//鼠标移动到遮罩层上显示小区块跟大图
			var $move=$("#webpage #body .wrap .major .major-intro .intro-left .int-left .img-show .img-large .move")
			var $shade=$("#webpage #body .wrap .major .major-intro .intro-left .int-left .img-show .img-large .shade")
			var $boxlar=$("#webpage #body .wrap .major .major-intro .intro-left .int-right .box-lar")
			var $imglarge=$("#webpage #body .wrap .major .major-intro .intro-left .int-left .img-show .img-large")
			
			var $boxlarimg=$("#webpage #body .wrap .major .major-intro .intro-left .int-right .box-lar img")
			$shade.hover(function(){
				$move.show();
				$boxlar.show();//$("#box .bimg")
			},function(){ //鼠标移出到遮罩层上显示小区块跟大图
				$move.hide();//$(#box .move)
				$boxlar.hide();
			});
			
			//让透明的小区块跟随鼠标的位置移动
			$shade.mousemove(function(e){
				
				var $x = e.pageX;//鼠标与浏览器X轴的距离
				var $y = e.pageY;//鼠标与浏览器Y轴的距离
				var $l = $imglarge.offset().left; //获取BOX与浏览器窗口左边的距离   offset设置盒子的位子
				var $t = $imglarge.offset().top; //获取BOX与浏览器窗口上边的距离
				
				//小区块的长度
				var $w = $move.width()/2; 
				//小区块的高度
				var $h = $move.height()/2;
				var $left = $x - $l - $w; //透明小区块左面的距离
				var $top = $y - $t - $h;  //透明小区块上面的距离
				//alert($left+":"+$top)
				
				//做判断，不能让透明区块移出去
				if($top < 0){ //不让他从上面跟下面出去
					$top = 0;
					}else if($top > ($shade.height() - $h * 2 - 2)){
						$top = $shade.height() - $h * 2 - 2;
					};
					
				if($left < 0){//不让他从左面跟右面出去
					$left = 0;
					}else if($left >  ($shade.width() - $w * 2 - 2)){
						$left = $shade.width() - $w * 2 - 2;
					}
				//跟随鼠标移动
				$move.css({left:$left,top:$top});
				
				var $yd_w = $shade.width() - $w * 2; //透明区块能滑动的最大宽度
				var $yd_h = $shade.height() - $h * 2; //透明区块能滑动的最大高度
				
				
				//滑动宽度的比例
				var $yd_wbl = $left / $yd_w; 
				//滑动高度的比例
				var $yd_hbl = $top / $yd_h;
				
				var $big_left = ($boxlarimg.width() - $boxlar.width()) * $yd_wbl; //大图对应的左面的距离
				var $big_top = ($boxlarimg.height() - $boxlar.height()) * $yd_hbl; //大图对应的上面的距离
				
				//alert($big_left+":"+$big_top)
				
				$boxlarimg.css({left:-$big_left,top:-$big_top});
				
			});
}
fangda()
//-----------------------------------------------------------------------------------
function qiehuan(){
	var list = $('#webpage #body .wrap .major .major-intro .intro-left .int-left .img-show .img-small li');
	var intro = $("#webpage #body .wrap .major .major-intro .intro-left .int-left .img-show .img-large .lbox").children();
	var boxlarc= $("#webpage #body .wrap .major .major-intro .intro-left .int-right .box-lar").children();
		list.mouseenter(function(){
			
			intro.eq($(this).index()).show().siblings().hide();
			boxlarc.eq($(this).index()).show().siblings().hide();
		});
}
qiehuan()

//-------------------------放大镜JSON----------------------------------------

	$.getJSON('js/list.json',function(data){
		var index = $.cookie('zhi'); 
		$('#webpage #body .wrap .major .major-intro .intro-left .img-large').attr("data-id",index);
		
		var html=''
		html+='<img style="width:300px;height:300px;" src="img-list/'+data[index].pic[0]+'"/>'
			+'<img style="width:300px;height:300px;" src="img-list/'+data[index].pic[1]+'"/>'
			+'<img style="width:300px;height:300px;" src="img-list/'+data[index].pic[2]+'"/>'
			+'<img style="width:300px;height:300px;" src="img-list/'+data[index].pic[3]+'"/>'
					
		$("#webpage #body .wrap .major .major-intro .intro-left .int-left .img-show .img-large .lbox").html(html)





		var str=''
		str+='<img style="width:1000px;height: 1000px;" src="img-goods/'+data[index].pic[0]+'"/>'
			+'<img style="width:1000px;height: 1000px;" src="img-goods/'+data[index].pic[1]+'"/>'
			+'<img style="width:1000px;height: 1000px;" src="img-goods/'+data[index].pic[2]+'"/>'
			+'<img style="width:1000px;height: 1000px;" src="img-goods/'+data[index].pic[3]+'"/>'

		$('#webpage #body .wrap .major .major-intro .intro-left .int-right .box-lar').html(str)




		var str2=''
		str2+='<li><img style="width:39px;height:39px;" src="img-goods/'+data[index].spic[0]+'"/></li>'
			 +'<li class="l2"><a href="#">'
			 +'<img style="width:39px;height:39px;" src="img-goods/'+data[index].spic[1]+'"/>'
			 +'</a></li>'
			 +'<li>'
			 +    '<img style="width:39px;height:39px;" src="img-goods/'+data[index].spic[2]+'"/>'
			 +'</li>'
			 +'<li>'
			 +'<img style="width:39px;height:39px;" src="img-goods/'+data[index].spic[3]+'"/>'
			 +'</li>'
			$('#webpage #body .wrap .major .major-intro .intro-left .int-left .img-show .img-small .box').html(str2)
		var str3=''
		str3+='<p>银泰价 :</p><b>'+data[index].pre1+'</b>'
		$('#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .pricet').html(str3)
		var str4=""
		str4+='<p>参考价 :</p><b>'+data[index].pre2+'</b>'
		$('#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .priceb').html(str4)
		var str5=''
		str5+='<p>'+data[index].title+'</p>'
		$('#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .name').html(str5)
		fangda()
		qiehuan()
	})
	

//------------------小框里的数字加---------------------------------------
		var num;
	$("#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .car .number-box .numright .top").click(function(){
		num=$("#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .car .number-box input").val();
		num++;
		if(num>10){
			num=10
		}
		$("#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .car .number-box input").val(num)
	})
	$("#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .car .number-box .numright .bottom").click(function(){
		num=$("#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .car .number-box input").val();
		num--;
		if(num<0){
			num=0
		}
		$("#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .car .number-box input").val(num)
	})	

	var buy=$("#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .car .buy")

	buy.click(function(){
		//console.log(111)
		var price = $('.pricet b').html();
		var id = $('.img-large').data('id');
		console.log(id)
		var num = $("#webpage #body .wrap .major .major-intro .intro-left .int-right .intro-r .car .number-box input").val();
		var cookie = $.cookie('number') || '{}';
		cookie = JSON.parse(cookie);//将字符串转成对象
		if(!cookie[id]){
			cookie[id] = {
					price:price,
					num:num
				}
		}else{
			cookie[id].num = parseInt(cookie[id].num) + parseInt(num);
		}
		console.log(cookie)
		
		$.cookie('number',JSON.stringify(cookie),{expires:7,path:'/'})
		//JSON.stringify(cookie) 对象转字符串
		window.location.href = "shopcar.html"
		console.log(JSON.parse($.cookie('number')))
	})




					
									
})									