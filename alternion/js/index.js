$(function(){
	/*search*/
	$(".headersleft").hover(function(){
		$(this).css("background-color","#9ca0a5");
		$(".headsinput").css("background-color","#9ca0a5");
	},function(){
		$(this).css("background-color","");
		$(".headsinput").css({"background-color":"","border":"0px"});
	});
	$(".headsinput").click(function(){
		$(this).css({"background-color":"#fff","border":"#fff"});
		$(".headersleft").css("background-color","#fff");
		$(".searchlogo").css("background-position","0 -17px");
	});
	$(".headrandom").hover(function(){
		$(this).css("background-position","0 -20px");
	},function(){
		$(this).css("background-position","");
	});

	/*登录注册区*/
	$(".conmorebox").hover(function(){
		$(".commoredown").show();
	},function(){
		$(".commoredown").hide();
	});
	$(".comdowmli1").click(function(){
		$(".consignin").css("background-position","-719px -16px");
		$(".consignup").css("background-position","-225px -16px");
	});
});