$(function(){

$.getJSON('js/list.json',function(data){
	var html='';
	//console.log(data[0].pic)

	for(var i = 0; i < data.length ; i ++){
		
		html+='<div class="picture">'
			+ '<a href="#"><img src="img-list/'+data[i].pic[0]+'"></a>'
			+ '<ul>'
			
			for(var j = 0; j < data[i].spic.length ; j ++){
			
				html+='<li>'
					+ '<img src="img-list/'+data[i].spic[j]+'">'
					+ '</li>'
					
			}

		html+='</ul>'
			+ '<div class="num">'
			+ '<b>'+data[i].pre1+'</b>'
			+ '<s>'+data[i].pre2+'</s>'
			+ '</div>'
			+ '<div class="name">'
			+ '<i><img src="img-list/'+data[i].mpic+'"></i>'
			+ '<p>'+data[i].title+'</p>'
			+ '</div>'
			+ '</div>'
			
	}
	//alert(html);
	$("#webpage #body .wra .contentt .list").html(html)
	$()

	$("#body .contentt .list .picture").click(function(){
	var index = $(this).index();

	$.cookie('zhi',index,{expires:7,path:'/'})
	window.location.href = "goos.html"
	})
})

	$.getJSON('js/list2.json',function(data){
		var html=''
		
		html+='<ul>'
		for(var i = 0;i <data.length; i++){
		html+='<li>'+data[i].ul1+'</li>'
		}
		html+='</ul>'
		$("#body .contentt .gumu").html(html)
	})

	






					
})