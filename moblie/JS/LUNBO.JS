$(function(){
	var winlen=$(window).innerWidth();
	var lis=$(".banner>ul>li");
	
	$(".banner>ul").css("width",lis.length*winlen+"px");
	$(".banner>ul>li").css("width",winlen+"px")
	$(window).resize(function(){
		console.log("-----------窗口发生变化---------------")
		location.reload();
	})
	for(var i=0;i<lis.length;i++){
		$(".banner>ul>li").eq(i).css("left",i*winlen+"px");
	}
	var num;
	var tag=true;

	//滑动轮播
	$(".banner>ul>li").swipe({
		swipeLeft:function(){
			clearInterval(lb);
			if(tag){
				num=$(this).index();
				tag=false;
				$(".banner>ul>li").eq(num).animate({"left":-winlen+"px"},function(){
//					$(this).css("left",(lis.length)-1*winlen+"px");
					tag=true;
					console.log("-----------左滑动--------------")
				});
				for(var i=num+1;i<lis.length;i++){
					$(".banner>ul>li").eq(i).animate({"left":(i-1)*winlen+"px"});
				}
				$(".banner>ul>li").eq(num).appendTo(".banner>ul").animate({"left":(lis.length-1)*winlen+"px"},10);
					var id=$(".banner>ul>li").eq(num).attr("id");
				console.log("===***==="+id+"===***==");
				$(".circle>li").eq(id-1).addClass("on").siblings().removeClass('on');
			}
			show();
		},
		swipeRight:function(){
			clearInterval(lb);
			if(tag){
				num=$(this).index();
				tag=false;
				$(".banner>ul>li").eq(num).animate({"left":winlen+"px"},function(){
					tag=true;
					console.log("-----------右滑动--------------")
					
				});
				$(".banner>ul>li").eq(lis.length-1).prependTo(".banner>ul").css({"left":-winlen+"px"}).animate({"left":"0px"});
			for(var i=num+2;i<lis.length;i++){
				$(".banner>ul>li").eq(i).animate({"left":i*winlen+"px"});
					console.log("-----------0000右滑动0000----------")
			}
			var id=$(".banner>ul>li").eq(num).attr("id");
			console.log("===***==="+id+"===***==");
			$(".circle>li").eq(id-1).addClass("on").siblings().removeClass('on');
		}
		show();
		}
	})
	
	//自动轮播
	function lunbo(){
		
			num=$(".banner>ul>li").index();
			
			
			$(".banner>ul>li").eq(num).animate({"left":-winlen+"px"},function(){
						console.log("-----------自动轮播--------------");
						$(".banner>ul>li").css("z-index","0");
					});
					for(var i=num+1;i<lis.length;i++){
						$(".banner>ul>li").eq(i).animate({"left":(i-1)*winlen+"px"});
					}
					$(".banner>ul>li").eq(num).appendTo(".banner>ul").animate({"left":(lis.length-1)*winlen+"px"},10);
					var id=$(".banner>ul>li").eq(num).attr("id");
					console.log("========"+id+"========");
					$(".circle>li").eq(id-1).addClass("on").siblings().removeClass('on');
	}
	var lb;
	function show(){
		lb=setInterval(function(){
		lunbo()
	},2000)
	}
	show();
	
	
	$(".circle>li").click(function(){
			clearInterval(lb);
		
		$(this).css("background-color","#A4CA1A");
		$(".circle>li").removeAttr("style");
		num=$(this).index();
		console.log("*num*"+num+"****");
		var id="#"+(num+1);
		console.log($("#"+(num+1)))
		if(tag){
			tag=false;
			/**
			 * var id = "#"+id
			 * console.$(id)
			 */
			$(id).prependTo(".banner>ul").css("z-index","10").animate({"left":"0px"},function(){tag=true;
		console.log("**000***0000*");
			for (num;num<lis.length;num++) {
				$(".banner>ul>li").eq(num).appendTo(".banner>ul")
				
			}
		show();
		
			
			});
			$(".circle>li").eq(num).addClass("on").siblings().removeClass('on');
		}
		
	});
})
