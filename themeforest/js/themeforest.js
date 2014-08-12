$(function(){

	$(".abouttpic").hover(function(){
		
		$(this).animate({opacity:"1",},500);
	},function(){
		$(this).animate({opacity:"0.5"},500);
	});
	/*$(".diduanimg").hover(function(){
		/*alert("d");*/
		/*$(this).animate({rotate:360};
	},function(){

	});*/
	$(".footlaul li a").hover(function(){
		$(this).css("color","#ddd");
	},function(){
		$(this).css("color","");
	});
	$(".footliimg").hover(function(){
		$(this).css("opacity","1");
	},function(){
		$(this).css("opacity","");
	});
	$(".footbomlink").hover(function(){
		$(this).addClass("footbomanimate");
	},function(){

		$(this).removeClass("footbomanimate");
	});
});