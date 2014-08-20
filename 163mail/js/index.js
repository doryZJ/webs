$(function(){
	/*首页*/
	$(".consyrbtmailli").hover(
		function(){
			var index=$(this).attr("dateindex");
			/*alert(index);*/
			clearInterval(video);
			$(".consyrbtmailpic").hide();
			$(".consyrbtmailli").removeClass("consyrbtmailliadd");
			$(".consyrbtmailpic"+index).show();
			$(".consyrbtmailli"+index).addClass("consyrbtmailliadd");
		},function(){
			video=setInterval("videochange()",2000);
		});
	video=setInterval("videochange()",2000);
});
var index=1
var video;
function videochange(){
	if (index==8) {
		index=1;
	}
	$(".consyrbtmailpic").hide();
	$(".consyrbtmailli").removeClass("consyrbtmailliadd");
	$(".consyrbtmailpic"+index).show();
	$(".consyrbtmailli"+index).addClass("consyrbtmailliadd");
	index++;
}