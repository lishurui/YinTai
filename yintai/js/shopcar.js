$(function(){
	$.getJSON('js/list.json',function(data){
		
		var index = $.cookie('zhi')
		var num = JSON.parse($.cookie('number'));
		console.log(num)
		

		var html=''
		//alert(num)

		for(var key in num){
			console.log(data[key].pic)
			html+=
				'<div class="item" data-id="'+key+'"><div class="left">'
			
			+ 	'</div>'
			+	'<div class="pic">'
			+	'<img style="width:45px;height:57px;" src="img-goods/'+data[key].pic[0]+'"/>'
			+	'</div>'
			+	'<div class="center">'
			+	'<p class="name">'+data[key].title+'</p>'
			+	'<p class="number">12678'+key+'</p>'
			+	'<div class="xinghao">'
			+	'<p class="color">颜色:</p>'
			+	'<p class="scolor">黑色</p>'
			+	'<p class="size">尺码:</p>'
			+	'<p class="nnumber">35</p>'
			+	'</div>'
			+	'</div>'
			+	'<p class="dajia">￥'+num[key].price+'</p>'
			+	'<div class="shu">'
			+	'<button class="jian">-</button>'
			+	'<input class="num" type="text" value="'+num[key].num+'">'
			+	'<button class="jia">+</button>'
			+	'</div>'
			+	'<p class="jifen">￥'+num[key].price*num[key].num+'</p>'
			+	'<div class="shifou">'
			+	'<p class="shoucang"><a href="javascript:;">移出收藏</a></p>'
			+	'<p class="shanchu"><a href="javascript:;">删除商品</a></p>'
			+	'</div> </div>'     
		}
		/*console.log(html)*/
		$("#webpage #body .car").html(html)
	



//-----------------------加减号--------------------------------------
	
		$('.car').on('click','.jia',function(){
			//alert($('.car').find('.num').val())
			var price =$(this).parent().siblings('.dajia').html().split('￥')[1];
			console.log(price)
			var amount = $(this).siblings('.num').val();
			amount++;
			$(this).siblings('.num').val(amount);
			var jifen = price * amount;
			console.log(jifen)
			$(this).parent().siblings('.jifen').html('￥'+jifen);
			//$('.jiesuan').find('.zj').html('￥'+jifen)
			if(jifen>500){
				jifen=jifen-100
			}else{
				jifen=jifen
			}
			$('.jiesuan').find('.jjj').html('￥'+jifen)
			console.log($(this).parents('.car').find('.item'))
			var item = $(this).parents('.car').find('.item');
			var total = 0;
			for(var i=0;i<item.length;i++){
				total += parseInt(item.eq(i).find('.jifen').html().split('￥')[1]);
			}
			console.log(total)
			$('.jiesuan').find('.zj').html('￥'+total);
			var fei=0
			var sheng=0
			if(total>500){
				total=total-100
				fei=0
				sheng=100
			}else{
				total=total+15
				fei=15
				sheng=0
			}
			$('.jiesuan').find('.jiaq').html('￥'+fei)
			$('.jiesuan').find('.js').html('￥'+sheng)
			$('.jiesuan').find('.jjj').html('￥'+total)
			$('.jiesua .zuihou').find('.qq').html('￥'+total)
		})



		$('.car').on('click','.jian',function(){
			//alert($('.car').find('.num').val())
			var price =$(this).parent().siblings('.dajia').html().split('￥')[1];
			console.log(price)
			var amount = $(this).siblings('.num').val();
			amount--;
			if(amount<=1){
				amount=1
			}
			$(this).siblings('.num').val(amount);
			var jifen = price * amount;
			console.log(jifen)
			$(this).parent().siblings('.jifen').html('￥'+jifen);
			//$('.jiesuan').find('.zj').html('￥'+jifen)
			if(jifen>500){
				jifen=jifen-100
			}else{
				jifen=jifen
			}
			$('.jiesuan').find('.jjj').html('￥'+jifen)
			console.log($(this).parents('.car').find('.item'))
			var item = $(this).parents('.car').find('.item');
			var total = 0;
			for(var i=0;i<item.length;i++){
				total += parseInt(item.eq(i).find('.jifen').html().split('￥')[1]);
			}
			console.log(total)
			$('.jiesuan').find('.zj').html('￥'+total);
			var fei=0
			var sheng=0
			if(total>500){
				total=total-100
				fei=0
				sheng=100
			}else{
				total=total+15
				fei=15
				sheng=0
			}
			$('.jiesuan').find('.jiaq').html('￥'+fei)
			$('.jiesuan').find('.js').html('￥'+sheng)
			$('.jiesuan').find('.jjj').html('￥'+total)
			$('.jiesua .zuihou').find('.qq').html('￥'+total)
		})

		/*$('.car').on('click','.jian',function(){
			//alert($('.car').find('.num').val())
			var price =$(this).parent().siblings('.dajia').html().split('￥')[1];
			console.log(price)
			var amount = $(this).siblings('.num').val();
			amount--;

			if(amount<1){
				amount=1
			}
			$('.car').find('.num').val(amount);
			var jifen = price * amount;
			console.log(jifen)
			$('.car').find('.jifen').html('￥'+jifen);

			$('.jiesuan').find('.zj').html('￥'+jifen)
			if(jifen>500){
				jifen=jifen-100
			}else{
				jifen=jifen
			}
			$('.jiesuan').find('.jjj').html('￥'+jifen)

		})*/



//----------------------------------------------------------------------------


		var ooo = 0;
		for(var key in num){
		//$("#webpage #body .car .oo").html(html)

		var str=''
		ooo += num[key].price*num[key].num
		var ddd = 0;
		var bbb=0
		var ccc=100
		if(ooo>500){
			ddd=ooo-ccc;
			bbb=0
			ccc=100;
		}else{
			ooo=ooo+15;
			bbb=bbb+15;
			ccc=0;
			ddd=ooo+15
		}

	
		str+='<div class="j-left">'
		 
		   + '</div>'
		   + '<p class="quan"></p>'
		   + '<p class="shans"><a href="list.html">继续购物</a></p>'
		   + '<p class="jixu"><a href="list.html"></a></p>'
		   + '<p class="spzj">商品总价</p>'
		   + '<p class="zj">￥'+ooo+'</p>'
		   + '<p class="jsje">-  节省金额:</p>'
		   + '<p class="js">￥'+ccc+'</p>'
		   + '<div class="j-right">'
		   + '<img src="img-goods/tan.png">'
		   + '<p class="yunfei">满500减100免运费，否则，需支付运费15元</p>'
		   + '<div class="yun">'
		   +	'<p class="fei">+ 运费 :</p>'
		   +	'<p class="jiaq">￥'+bbb+'</p>'
		   +	'<p class="jje">= 结算金额 :</p>'
		   +	'<p class="jjj">￥'+ddd+'</p>'
		   +	'</div>'
		   + '</div>'
		   $("#webpage #body .jiesuan").html(str)
		}


		var str2=''
		str2+='<b class="zjs">结算金额:</b>'
			+ 	'<p class="qw">(包含运费)</p>'
			+	'<p class="qq">￥'+ddd+'</p>'
			+	'<a href="javascript:;"><img src="img-goods/jiesuan.png"></a>'

			$("#webpage #body .jiesua .zuihou").html(str2)

		/*<b class="zjs">结算金额:</b>
				<p class="qw">(包含运费)</p>
				<p class="qq">￥204.00</p>
				<a href="javascript:;"><img src="img-goods/jiesuan.png"></a>*/
		/*<div class="j-left">
				<input class="two" type="checkbox">
			</div>
			<p class="quan">全选</p>
			<p class="shans">删除选中的商品</p>
			<p class="jixu">继续购物</p>
			<p class="spzj">商品总价</p>
			<p class="zj">￥189.00</p>
			<p class="jsje">-  节省金额:</p>
			<p class="js">￥0.00</p>
			<div class="j-right">

				<img src="img-goods/tan.png">
				<p class="yunfei">该订单未满199元，需支付运费15元</p>
				<div class="yun">
					<p class="fei">+ 运费 :</p>
					<p class="jiaq">￥15.00</p>
					<p class="jje">= 结算金额 :</p>
					<p class="jjj">￥204.00</p>
				</div>
			</div>	*/

	});

	
	$('.car').on('click',".item .shanchu",function(){
		var car = $(this).parents('.car')



		var num = JSON.parse($.cookie('number'));
		var id = $(this).parents('.item').data('id');
		console.log(id)
		delete num[id];
		$.cookie('number',JSON.stringify(num),{expires:7,path:'/'})
		$(this).parents('.item').remove();
		num = JSON.parse($.cookie('number'));
		if($.cookie('number')=='{}'){
			$('.car').next().remove();
			$('.car').siblings('.jiesua').remove()

			$('<div class="kong"><p>你的购物车以空空如也<br/><a href="list.html">请继续选购</a></p>').appendTo(".car")
		}
		var item = car.find('.item');
		console.log(item)
		var total = 0;
			for(var i=0;i<item.length;i++){
				total += parseInt(item.eq(i).find('.jifen').html().split('￥')[1]);
			}
			console.log(total)
			$('.jiesuan').find('.zj').html('￥'+total);
			//$('.jiesuan').find('.jjj').html('￥'+total);
			var fei=0
			var sheng=0
			if(total>500){
				total=total-100;
				fei=0;
				sheng=100;
			}else{
				total=total+15;
				fei=15;
				sheng=0
			}
			$('.jiesuan').find('.jjj').html('￥'+total)
			$('.jiesuan').find('.jiaq').html('￥'+fei);
			$('.jiesuan').find('.js').html('￥'+sheng);
			$('.jiesua .zuihou').find('.qq').html('￥'+total)
	})

})
