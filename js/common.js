 $(document).ready(function(){
			var lunbo;
			var winW = $(window).width();
			var index = 0;
			var bool = true;
			var liLen = $(".middle .banner_img li").length;
			$(".middle .banner_img ul").css({"width":winW*liLen+"px"});
			$(".middle .banner_img li").width(winW);

			$(".middle .banner_button li").click(function(){
				index = $(this).index();
				if(bool){
					bool = false;
					$(".middle .banner_img ul").animate({marginLeft:-winW*index+"px"},function(){bool = true;});
					$(".middle .banner_button li").eq(index).addClass("on").siblings().removeClass('on');
				}
			})
			$(".banner .right_button").click(function(){
				index = $(".middle .banner_button li.on").index();
				if(bool){
					bool = false;
					index+=1;
					if(index > liLen-1){
						index=0;
					}
					$(".middle .banner_img ul").animate({marginLeft:-winW*index+"px"},700,function(){bool = true;});
					$(".middle .banner_button li").eq(index).addClass("on").siblings().removeClass('on');
				}

			})
			$(".banner .left_button").click(function(){
				index = $(".middle .banner_button li.on").index();
				if(bool){
					bool = false;
					index-=1;
					if(index < 0){
						index=liLen-1;
					}
					$(".middle .banner_img ul").animate({marginLeft:-winW*index+"px"},700,function(){bool = true;});
					$(".middle .banner_button li").eq(index).addClass("on").siblings().removeClass('on');
				}

			})
			$(".banner").mouseover(function(){
				clearInterval(lunbo);
			})
			$(".banner").mouseout(function(){
				show()
			})
			function show(){
				lunbo = setInterval(function(){
					index+=1;
					if(index > liLen-1){
						index=0;
					}
					$(".middle .banner_img ul").animate({marginLeft:-winW*index+"px"});
					$(".middle .banner_button li").eq(index).addClass("on").siblings().removeClass('on')
				},3000)
			}
			show();
		})
 


                    
                 //产品中心  
                    	$(function(){
                    		$(".pro_img ul").eq(0).addClass("action").siblings().addClass("hidden");
                    		$(".sidebar ul li").click(function(){
                    			var index = $(this).index();
                    			console.log(index);
                    			$(this).addClass("on").siblings().removeClass("on");
                    			$(".pro_img ul").eq(index).addClass("action").removeClass("hidden").siblings().addClass("hidden").removeClass("action")
                    		})
                    	})
                    	
                 //新闻中心
                 		$(function(){
                    		$(".list ul").eq(0).addClass("action").siblings().addClass("hidden");
                    		$(".sidebar ul li").click(function(){
                    			var index = $(this).index();
                    			console.log(index);
                    			$(this).addClass("on").siblings().removeClass("on");
                    			$(".list ul").eq(index).addClass("action").removeClass("hidden").siblings().addClass("hidden").removeClass("action")
                    		})
                    	})
                 