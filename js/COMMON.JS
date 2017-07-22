 $(document).ready(function(){
			/*定义一个变量是为了接收setInterval,以便需要的时候可以清除动画*/	
			var lunbo;
			/*为了获取当前浏览器窗口的宽度*/
			var winW = $(window).width();
			/*初始化索引值*/
			var index = 0;
			/*bool = true,是为了设定一个开关*/
			var bool = true;
			/*获取图片的个数*/
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
				/*通过if判断去执行动画，如果bool == true,那么就会执行if里面的代码*/
				if(bool){
					/*当我们进入if判断之后，为了防止下一次点击事件的立即执行，所以我们把开关关掉，bool = false*/
					bool = false;
					index+=1;
					if(index > liLen-1){
						index=0;
					}
					/*当我们执行完当前的animate()动画之后，那么我们需要使用回调函数重新把开关打开，以便下一次动画的执行*/
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
			/*实现自动轮播*/
			/*
			首先需要声明一个函数，
			声明方式：function functionName(){},
			调用函数：functionName();
			*/
			function show(){
				/*需要有一个变量去接收一个setInterval()方法，是为了能够通过这个变量使用clearInterval()去清除这个动画*/
				lunbo = setInterval(function(){
					/*因为我们需要执行下一张图片，所以对应的索引值需要+1*/
					index+=1;
					/*但是，如果没有一个方法能够阻止自增，那么这个索引值变量将会一直增加下去，所以，我们需要有一个判断能够停止这个索引值自增，而且我们要返回第一张图片，那么对应第一张图片索引值为0，所以我们给index赋值为0*/
					if(index > liLen-1){
						index=0;
					}
					/*animate()动画*/
					$(".middle .banner_img ul").animate({marginLeft:-winW*index+"px"});
					/*我们通过对应的索引值的小圆点增加当前样式.on，siblings()方法是找到除了自身元素之外的其他兄弟元素，也就是通过removeClass()这个方法去移除其他兄弟元素的.on*/
					$(".middle .banner_button li").eq(index).addClass("on").siblings().removeClass('on')
				},3000)
			}
			show();
		})
 


                    
                   
                    	$(function(){
                    		$(".sidebar ul li").click(function(){
                    			var index = $(this).index();
                    			console.log(index);
                    			$(this).addClass("on").siblings().removeClass("on");
                    			$(".pro_img ul").eq(index).addClass("action").removeClass("hidden").siblings().addClass("hidden").removeClass("action")
                    		})
                    	})
                 