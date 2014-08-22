$(function(){
	/*<!-- 左边内容 -->*/
	$(".conlsetop").click(function(){
		var show=$(this).attr("show");
		if (show=="no") {
			$(this).hide();
			$(".conlsegroup").slideDown(500);
			$(this).attr("show","yes");
		}
		else{
			$(this).attr("show","no");
		}	
	});
	$(document).on("click",".conlsebomsq",function(){
		$(".conlsegroup").slideUp(500);
		$(".conlsetop").attr("show","no");
		/*$(".conlsetop").css("transition","1s");*/
		 $(".conlsetop").toggle("slow");
	});
});