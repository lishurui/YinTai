$(function(){
	/*-------------------------------------------*/
	//确保信息全部填写完成了
var register_flag, register_arr = [];
//用户名
var isPhone = false;
var name_reg = /^\d+$/;
//电话
var name_reg1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
//邮箱
var name_reg2 = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
$('#register_name').focus(function() {
    $(this).siblings('.tip').children('.begin').show()
})
$('#register_name').blur(function() {
        if ($(this).val() == '') {
            $(this).siblings('.tip').children('.error4').show().siblings().hide()
        } else {

            if (name_reg.test($(this).val())) {
                if (!name_reg1.test($(this).val())) {
                    $(this).siblings('.tip').children('.error2').show().siblings().hide()
                } else {
                    $(this).siblings('.tip').children('.correct1').show().siblings().hide()
                    register_arr[0] = 1
                    isPhone = true;
                }
            } else {
                if (!name_reg2.test($(this).val())) {
                    $(this).siblings('.tip').children('.error3').show().siblings().hide()
                } else {
                    $(this).siblings('.tip').children('.correct2').show().siblings().hide()
                    register_arr[0] = 1
                }
            }
        }
    })
	//------------------------------密码----------------------------------------------------------------
	$('#psw').focus(function() {
        $(this).siblings('.tip').children('.begin').show()
    })
    //密码
    //只有数字
	var psw_reg1 = /[0-9]+/;
	//有大写字母
	var psw_reg2 = /[A-Z]/;
	//有小写字母
	var psw_reg3 = /[a-z]/;
	//只有数字字母,通过取反来达到判断自他字符的要求
	var psw_reg4 = /^[0-9a-zA-Z]+$/;
	//密码中种类的个数
	var flag, arr = [];
	$('#psw').blur(function() {
    	if ($(this).val() == '') {
        	$(this).siblings('.tip').children('.error1').show().siblings().hide()
    	}
	})

	$('#psw').keyup(function() {
        var $tip = $(this).siblings('.tip');
        var $value = $(this).val();
        if ($value.length >= 2) {
            $tip.children('.error2').show().siblings().hide()
        }
        if ($value.length >= 6) {
            $tip.children('.rank').show().siblings().hide()
            $tip.children('.rank').children('span').eq(0).css('background', 'red')
            if (psw_reg1.test($value)) {
                arr[0] = 1;
            };
            if (psw_reg2.test($value)) {
                arr[1] = 1
            };
            if (psw_reg3.test($value)) {
                arr[2] = 1
            };
            if (!psw_reg4.test($value)) {
                arr[3] = 1;
            };
            flag = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == 1) {
                    flag++;
                };
            };
            if (flag == 2) {
                $tip.children('.rank').children('span').css('background', '#CCCCCC').eq(1).css('background', 'red')
            };
            if (flag >= 3) {
                $tip.children('.rank').children('span').css('background', '#CCCCCC').eq(2).css('background', 'red')
            };
           register_arr[1] = 1
        };
        
    })
/*---------------------------密码二次验证----------------------------------------------*/
	$('#repsw').focus(function() {
	    $(this).siblings('.tip').children('.begin').show().siblings().hide();
	    if (isPhone) {
	        $('.pic_code').show()
	        $('.phone_code').show()
	    };
	})
	$('#repsw').blur(function() {
        if ($(this).val() == '') {
            $(this).siblings('.tip').children('.error1').show().siblings().hide()
        } else if ($(this).val() != $('#psw').val()) {
            $(this).siblings('.tip').children('.error2').show().siblings().hide()
        } else {
            $(this).siblings('.tip').children('.correct').show().siblings().hide();
            register_arr[2] = 1
        }

    })
//--------------------------图片验证码----------------------------------------------------
	function randNum(length) {
    var str = '';
    for (var i = 0; i < length; i++) {
        str += Math.floor(Math.random() * 10);
    };
    return str;
}
var randomN = randNum(4);
$('.number').text(randomN);
$('.tab').click(function() {
    randomN = randNum(4);
    $('.number').text(randomN);

$arr = ["red","blue","yellow","black","green","pink","orange","purple","white","sienna"];
$num = Math.floor(Math.random() * 10);
$col = $arr[$num];
$('.con .con_right .con_register .number').css({"background":$col})
});
$('#pic_code').focus(function() {
    $(this).parent().siblings('.tip').children('.begin').show().siblings().hide()
})
$('#pic_code').blur(function() {
        if ($(this).val() == randomN) {
            $(this).parent().siblings('.tip').children('.correct').show().siblings().hide()
            register_arr[3] = 1
        } else {
            $(this).parent().siblings('.tip').children('.error1').show().siblings().hide()
        }
    })
//------------------------------------------------------------------------------------------
	$('#register').click(function() {
    var n = 0;
    for (var i = 0; i < register_arr.length; i++) {
        if (register_arr[i] == 1) {
            n++;
        };
    }
    if (n == 4) {
        var name = $('#register_name').val();
        var psw = $('#psw').val();
        cookie('register', 'name#' + name + '|psw#' + psw, 7);
        window.location.href = 'login.html'

    }else{
        alert('注册信息不完整')
    }
})



//----------------------------------------------------------------------



$('.click_login').click(function() {
    $(this).addClass('active').siblings('span').removeClass('active');
    $('.con_register').show().siblings('.app_register').hide()
})
$('.app_login').click(function() {
    $(this).addClass('active').siblings('span').removeClass('active');
    $('.app_register').show().siblings('.con_register').hide()

})

// cookie('register','',7);
var ss = cookie('register');

$('#login').click(function() {
    var user_name = $('#login_name').val();
    var user_psw = $('#psw_login').val();
    if (document.cookie) {
        var cook = document.cookie;
        //-----------------
         var cookb = cook.split(';')
         alert(cookb[0])
         var cooks = cookb[0].split('=')
         //-----------

        //var cooks = cook.split('=')
            //此时只有用户名和密码
        var co = unescape(cooks[1]).split('|');
        var arr = []
        for (var i = 0; i < co.length; i++) {
            arr.push(co[i].split('#'))
        };
        var getName = arr[0][1]
        var getPsw = arr[1][1]
    };
    if (user_name == getName && user_psw == getPsw) {
        setTimeout(function() {
            document.location.href = 'index.html'
        }, 1000)
    } else {
        alert('用户名密码不匹配')
    }

})





			
})
