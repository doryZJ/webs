$(function(){
	var audio=document.getElementById("mymusic");
	/*alert("d");*/
	/*audio.play();*/
	
	/*播放列表*/
	$(".sortboxnor").hover(function(){
		
		$(this).find(".sorttxt").html("");
		$(this).find(".sorttxt").addClass("sortbofang");
	},function(){
		var count=$(this).find(".sorttxt").attr("index");
		/*alert(count);*/
		/*alert("count");*/
		$(".conrbul").hide();
		$(".conrbul"+count).show();
		$(this).find(".sorttxt").html(""+count+"");
		$(this).find(".sorttxt").removeClass("sortbofang");
	});
	$(document).on("click",".sortbofang",function(){
		$(".concmitem").hide();
		var bofangid=$(this).attr("index");
		/*alert(bofangid);*/
		$(".concminortop").show();
		$(this).parent().parent().hide();
		$(this).parent().parent().next().show();
		var thispar=$(this).parent().parent().parent().parent().parent().parent();
		var footpar=$(this).parent().parent().parent().parent().parent().parent().parent().next().find(".MainControl");
		footpar.removeClass("MainControl").addClass("StopControl");
		/*var thisid=*/
		thispar.next().find(".conrbul").hide();
		thispar.next().find(".conrbul"+bofangid).show();
		var item=$(this).parent().parent().next();
		var name=item.find(".concmittxt").html();
		/*alert(name);*/
		/*item.show();*/
		$("#mymusic").attr("src","music/"+name+".mp3");
		$("#mymusic").attr("musicid",bofangid);
		$(".conrbul").find(".ui-lrc-line1").removeClass("newcolor");
		$(".conrbul"+""+bofangid+"").find(".ui-lrc-line1").addClass("newcolor");
		$(".songnamelink").html(""+name+"");
		audio.play();
		TimeSpan();	
	});
	/*开始暂停*/

	$(document).on("click",".MainControl",function(){
		/*alert("d");*/

			var musicid=$("#mymusic").attr("musicid");
			
			$(".conrbul").find(".ui-lrc-line1").removeClass("newcolor");
			$(".conrbul"+""+musicid+"").find(".ui-lrc-line1").addClass("newcolor");
			$(this).removeClass("MainControl").addClass("StopControl");
			audio.play();
			TimeSpan();	
			

	});
	$(document).on("click",".StopControl",function(){
		$(this).removeClass("StopControl").addClass("MainControl");
		audio.pause();
	});
	/*前一首*/
	$(document).on("click",".prevmusic",function(){
		
		var next=$(this).parent().parent().parent().next();
		var songid=next.find(".Songid").html();
		var nsong=parseInt(songid)-1;
		/*alert(nsong);*/
		if (nsong==0)
		{
			nsong=2;
		}
		$(".concmitem").hide();
		$(".concminortop").show();
		$(".concminortop"+""+nsong+"").hide();
		/*var a="concmitem"+nsong;
		alert(a);*/
		$(".concmitem"+nsong).show();
		$(".conrbul").hide();
		$(".conrbul"+nsong).show();
		var conrb=".conrbul"+nsong;
		$(".conrbul").find(".ui-lrc-line1").removeClass("newcolor");
		$(""+conrb+"").find(".ui-lrc-line1").addClass("newcolor");
		$(this).parent().next().find(".musicico").removeClass("MainControl").addClass("StopControl");
		var name=$(".concmitem"+nsong).find(".concmittxt").html();
		next.find(".Songid").html(""+nsong+"");
		$("#mymusic").attr("src","music/"+name+".mp3");
		$("#mymusic").attr("musicid",""+nsong+"");
		$(".songnamelink").html(""+name+"");
		audio.play();
		TimeSpan();	
	});
	/*后一首*/
	$(document).on("click",".nextmusic",function(){
		
		var next=$(this).parent().parent().parent().next();
		var songid=next.find(".Songid").html();
		var nsong=1+parseInt(songid);
		if (nsong==3) {nsong=1;}
		/*alert(nsong);*/
		$(".concmitem").hide();
		$(".concminortop").show();
		$(".concminortop"+""+nsong+"").hide();
		/*var a="concmitem"+nsong;
		alert(a);*/
		$(".concmitem"+nsong).show();
		$(".conrbul").hide();
		$(".conrbul"+nsong).show();
		var conrb=".conrbul"+nsong;
		/*alert(conrb);*/

		$(".conrbul").find(".ui-lrc-line1").removeClass("newcolor");
		$(""+conrb+"").find(".ui-lrc-line1").addClass("newcolor");
		$(this).parent().prev().find(".musicico").removeClass("MainControl").addClass("StopControl");
		var name=$(".concmitem"+nsong).find(".concmittxt").html();
		next.find(".Songid").html(""+nsong+"");
		$("#mymusic").attr("src","music/"+name+".mp3");
		$("#mymusic").attr("musicid",""+nsong+"");
		$(".songnamelink").html(""+name+"");
		audio.play();
		/*alert(nsong);*/
		TimeSpan();	
	});
	/*进度条进度增加*/
	$(document).on("click",".Process",function(e){
		var process=$(".Process").offset();
		var processstart=process.left;
		/*alert(processstart);*/
		var ProcessLength = $(".Process").width();
		/*alert(ProcessLength);*/
		var currentprocess=e.clientX-processstart;
		/*alert(e.clientX);*/
		DurationProcessRange(currentprocess / ProcessLength);
		 $(".ProcessControl").css("width", ""+currentprocess+"px");
		 $(".ProcessCico").css("left",""+currentprocess+"px");
	});
	/*进度条进度减小*/
	$(document).on("click",".ProcessControl",function(e){
		var process=$(".Process").offset();
		var processstart=process.left;
		var ProcessLength = $(".Process").width();

		var currentprocess=e.clientX-processstart;
		DurationProcessRange(currentprocess / ProcessLength);
		 $(".ProcessControl").css("width", ""+currentprocess+"px");
		 $(".ProcessCico").css("left",""+currentprocess+"px");
	});
});
//播放进度条的转变事件
function DurationProcessRange(rangeVal){
	$(".MainControl").removeClass("MainControl").addClass("StopControl");
	var audio = document.getElementById("mymusic");
     audio.currentTime = rangeVal * audio.duration;
   /* var time= TimeDispose(audio.currentTime);
    alert(time);*/
    /* var dur=audio.duration;*/
    audio.play();
}
var video;
//时间进度处理程序
function TimeSpan(){
	/*clearInterval(video);*/
	var audio = document.getElementById("mymusic");
	var ProcessControl=0;
	var index=0;
	var musicid=$("#mymusic").attr("musicid");
	/*alert(musicid);*/
	var ulid=".conrbul"+musicid;
	/*alert(ulid);*/
	/*alert(ele);*/
	setInterval(function(){

		
		var ProcessControl=(audio.currentTime/audio.duration)*500;
		$(".ProcessControl").css("width",""+ProcessControl+"px");
		$(".ProcessCico").css("left",""+ProcessControl+"px");
		
		var currentTime=timeDispose(audio.currentTime);

		$(".SongTime").html(currentTime);
		var timeAll=timeDispose(TimeAll());
		$(".SongallTime").html(timeAll);
		var st=$(".SongTime").html();
		/*for(stime=)*/
		/*alert(st);*/
		var timeline=$(".newcolor").next().attr("timeline");
		 /*alert(timeline);*/
		if(st==timeline){
			/*alert("d");*/
			index=index+1;
			/*alert(timeline);*/
			var scroll=(index-5)*22;
			/*alert(scroll);*/
			
			// alert(index);
			var licount=$(""+ulid+"").find(".ui-lrc-line").length;

			var mins=(scroll/(licount*22))*270;
			/*alert(mins);*/			
			$(""+ulid+" li:lt("+index+")").removeClass("newcolor");
			$(""+ulid+" li:eq("+index+")").addClass("newcolor");
			if(index>4){
				$(".conrbul").css("margin-top","-"+scroll+"px");
			}
			$(".conrbsgl").css("top",""+mins+"px");
		}
	},1000);
}
function timeDispose(number){
	/*alert("d");*/
	var minute=parseInt(number/60);
	var second=parseInt(number%60);
	minute = minute >= 10 ? minute : "0"+minute;
    second = second >= 10 ? second : "0"+second;
    return minute + ":" + second;
}
//当前歌曲的总时间
function TimeAll(){
	 var audio = document.getElementById("mymusic");
    return audio.duration;
}
