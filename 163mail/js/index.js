$(function(){
	/*<!--  写信 -->*/
	var um=UM.getEditor("sendmail");
	um.setHeight(266);
	um.setWidth(1054);
	/*首页*/
	$(".consyrbtmailli").hover(
		function(){
			clearInterval(video);
			var index=$(this).attr("dateindex");
			/*alert(index);*/			
			$(".consyrbtmailpic").hide();
			$(".consyrbtmailli").removeClass("consyrbtmailliadd");
			$(".consyrbtmailpic"+index).show();
			$(".consyrbtmailli"+index).addClass("consyrbtmailliadd");
		},function(){
			index=$(this).attr("dateindex");
			video=setInterval("videochange()",2000);
		});
	video=setInterval("videochange()",2000);
});
var index=1
var video;
function videochange(){
	index++;
	if (index==8) {
		index=1;
	}
	$(".consyrbtmailpic").hide();
	$(".consyrbtmailli").removeClass("consyrbtmailliadd");
	$(".consyrbtmailpic"+index).show();
	$(".consyrbtmailli"+index).addClass("consyrbtmailliadd");
	
}