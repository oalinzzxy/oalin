$(function(){	
	$(".list ul li:nth-child(3n),.xgwz ul li:nth-child(2n),.cms ul li:nth-child(3n)").css("margin-right","0");
	$(".list li").hover(
				function(){$(this).addClass('hover');		
				$(".list li.hover p").animate({bottom:'30px',opacity:1},280)
								  
				},
				function(){$(this).removeClass('hover');
				$(".list li p").animate({bottom:'14px',opacity:1},280)
	
				});
					
	
	//picbox
	$('.picbox ul:eq(0) li,.picbox ul:eq(1) li,.list li:eq(0),.list li:eq(1),.list li:eq(2)').hover(
			function(){$(this).addClass('hover');$(this).find(".xj").css("display","block");},
			function(){$(this).removeClass('hover');}
		);
	// JavaScript Document  
	function DY_scroll(wraper,prev,next,img,speed,or)
	 { 
	  var wraper = $(wraper);
	  var prev = $(prev);
	  var next = $(next);
	  var img = $(img).find('ul');
	  var w = img.find('li').outerWidth(true);
	  var s = speed;
	  next.click(function()
		   {
			img.animate({'margin-left':-w},function()
					  {
					   img.find('li').eq(0).appendTo(img);
					   img.css({'margin-left':0});
					   });
			});
	  prev.click(function()
		   {
			img.find('li:last').prependTo(img);
			img.css({'margin-left':-w});
			img.animate({'margin-left':0});
			});
	  if (or == true)
	  {
	   ad = setInterval(function() { next.click();},s*1000);
	   wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
	
	  }
	 }
	 DY_scroll('.img-scroll','.prev','.next','.box',3,false);// true为自动播放，不加此参数或false就默认不自动
	//
	
	$('.list li em strong:gt(1)').each(function(){
			 var divT=$(this).text();
			 var divTlength=divT.length;
			 if(divTlength>60){
			  divTlength=60
			   divT=divT.substring(0,56); 
			  }
			  $(this).html(divT+'...')
		});
	
	
	//根据当前第几页判断是否显示推荐 
	var currentPage = $("div.page span.active_page").html();
	//第一页才显示推荐
	if(currentPage == null || typeof(currentPage) == "undefined" || currentPage == '1'){
		$(".list li:eq(0)").addClass("lp0");
		$(".list li:eq(1)").addClass("lp1");
		$(".list li:eq(2)").addClass("lp2");
		$(".list li:eq(3) p,.list li:eq(4) p,.list li:eq(5) p").append(" <u>推荐</u>");
		$(".list li:lt(3) p").append(" <u></u>");
	}
		
	//窗口打开
		$("#topNavC a,.con a").click(function(){
		$(this).attr("target","_blank");
		});
		$(".cms .moreTab,.page a").click(function(){
		$(this).attr("target","_self");
		});
	
	//more
	var cont=$('.cms ul li').length;
	$(".cms .moreTab").click(function(){
		if($(".cms ul").css("height")=="112px"){
				$(".cms ul").css({"height":"auto","overflow":"visible"})
				$(this).html("隐藏↑").css("background","#17739E");
	
			}else{
				$(".cms ul").css({"height":112,"overflow":"hidden"});
				$(this).html("全部↓").css("background","#1691CC");
			}
		
	});
	
	//平台显示
	$('.platform').each(function(){
		if($(this).find("a").length == 0){
			$(this).remove();//删除元素
		}
		$(this).find("a:last").css("margin-right","0").css("padding-right","0").css("border","0");
		if($(this).find("a").length>0){
			$('.platform a').each(function(){
				var str = $(this).find("strong").html();
				if(str == '安卓版'){$(this).addClass("az");}
				if(str == '苹果版'){$(this).addClass("iphone");}
				if(str == 'PC版'){$(this).addClass("pc");}
				if(str == 'Mac版'){$(this).addClass("mac");}
				if(str == '安卓版'||str == '苹果版'){
				   $(this).hover(
							function(){$(this).addClass('cur');},
							function(){$(this).removeClass('cur');
							});
					}
				else{$(this).find("s").remove();}
				
			});
			
		}
	});
	
	if($('.cms ul li').length>0){$(".cms s").show();}
	else{$(".cms").remove();}
	if($('.cms ul li').length<13){$(".cms .moreTab").hide();}
	
	if($('.img-list ul li').length>0){$(".box").show();}
	else{$(".box").remove();}
	if($('.img-list ul li').length<5){$(".prev,.next").hide();}
	
	var $tab_li = $('.tags-hd span');
	$tab_li.click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		var index = $tab_li.index(this);
		$('ul.tags-con>li').eq(index).show().siblings().hide();
	});
	
	//gotop
	 $('body').append('<p id="gotop"><a href="javascript:void(0);"></a></p>');
		function gotop(){
			$(window).scroll(function(){
				if($(window).scrollTop()>100){
				  $('#gotop').fadeIn();
				}else{
				   $('#gotop').fadeOut();
				};
			  });
			$('#gotop').click(function(){
				$('body,html').animate({'scrollTop':0},350);
				});
		  };	 
		gotop();
	
	//分享
	$('.con .content').append('<div id="share"><span>分享到:</span><div class="sinaGFoot-share bdsharebuttonbox" data-tag="share_1"><a data-cmd="qzone" class="a1" href="javascript:void 0" title="分享至QQ空间" rel="nofollow"></a><a data-cmd="tsina" class="a2" href="javascript:void 0"  title="分享到新浪微博" rel="nofollow"></a><a data-cmd="tqq" class="a3" href="javascript:void 0" title="转播到腾讯微博" rel="nofollow"></a><a data-cmd="renren" class="a4" href="javascript:void 0" title="分享到校内人人网" rel="nofollow"></a><a data-cmd="tieba" class="a6" href="javascript:void 0" rel="nofollow"></a><a data-cmd="sqq" class="a7" href="javascript:void 0" rel="nofollow"></a><a href="#" onclick="return false;" class="popup_weixin a5" data-cmd="weixin" rel="nofollow">微信</a><a href="javascript:void 0" id="wz-btn">查看文章</a></div></div>');
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
    //查看文章按钮
    $("#wz-btn").click(
        function(){$('html,body').animate({scrollTop:$('#footer').offset().top},700);
    })	
	
	$(" .tab-nav span").each(function(index){
		$(this).click(function(){   
			var liNode = $(this);
			$(".tagBox").removeClass("on");
			$(".tab-nav span.cur").removeClass("cur");
			$("div.tagBox:eq(" + index + ")").addClass("on");
			liNode.addClass("cur");       
		});		
	});
});	
//preview softimg
function jQueryReady($){
	$(function(){	
		var $preview = $('<div id="image-preview"></div>').insertAfter("#footer").hide(),
		imgLoaded = {}, // 储存图片地址
		last = '', //用于鼠标移除后取消图片显示事件
		mouse, // 储存最后的鼠标事件对象
		showImg = function(img){
		position(img);
		$preview.empty().append(img.elem).show();
		},
		// 计算和定位
		position = function(img){
		// 显示区域应该用 winWidth 和 clinetX 来计算而不是 pageX，窗口宽度可能小于 网页宽度		
		var e = mouse,
			$img = $(img.elem),
			imgWidth = img.w,
			imgHeight = img.h,
			imgRate = imgWidth/imgHeight,
		
			winWidth = $(window).width(),
			winHeight = $(window).height(),
			spaceX = 20,
			spaceY = 17,
			padding = 7, // 补正
			clientX = e.clientX,
			clientY = e.clientY,
			pageX = e.pageX,
			pageY = e.pageY,
			
			MINWIDTH = 300,
			// 判断窗口可显示区域的最大值，用于缩放
			maxWidth = Math.max(clientX -spaceX - padding*2, winWidth-clientX-spaceX - padding*2),
			
			// 缩放后的尺寸
			zoomWidth = imgWidth,
			zoomHeight = imgHeight;
				
		maxWidth = Math.min(maxWidth,600);
		
		// 缩放图片
		if(imgWidth > maxWidth || imgHeight > winHeight){
			if( imgRate > maxWidth / winHeight) {
				zoomWidth = maxWidth;
				zoomHeight = zoomWidth / imgRate;
			} else {
				zoomHeight = winHeight;
				zoomWidth = zoomHeight * imgRate;
			}
			
		}
		
		// 缩放后小于最小宽度则重新调整
		if(imgWidth > MINWIDTH  && zoomWidth < MINWIDTH){
			zoomWidth = MINWIDTH;
			zoomHeight = zoomWidth / imgRate;
		}
				
		//@return 返回最终坐标
		//@do 先计算各宽度间的关系，赋予状态值。再根据状态转换显示位置。
		var pos = function(){ 		
			// 为了显示上的统一性，只划分左右显示区域
			var xMode = clientX > winWidth / 2 ?  "left" : "right", 
				yMode;									
			if(winHeight - clientY - spaceY > zoomHeight ) yMode = "base"; //显示在鼠标下方
			else if ( winHeight >= zoomHeight ) yMode = "bottom"; // 对齐窗口底部
			else yMode = "top" // 对齐窗口顶部
						
			var x = {
				right : pageX + spaceX ,
				left: pageX - spaceX - zoomWidth - padding
			}, y = {
				base : pageY+ spaceY,
				top : 0 ,
				bottom : pageY - clientY + winHeight - zoomHeight - padding - 7
			};			
			return {
				x : x[xMode],
				y : y[yMode],
				w : zoomWidth,
				h : zoomHeight
			}		
		}()		
		
		// 应用样式
		$img.css({
			width : pos.w,
			height: pos.h		
		});
		$preview.css({
			left : pos.x,
			top : pos.y
		});					
		  }; 
	
		  $.fn.bigShow = function(rel){
		rel = rel || "preview"; // 保存大图地址的属性
		
		this.hover(function(e){						
			var $this = $(this),
				src = $this.attr(rel),
				img = imgLoaded[src];
				
			mouse = e;
			last = src;
			
			if(img){
				showImg(img);
			} else {
				$("<img>").load(function(){

					imgLoaded[src] = { elem : this , w: this.width, h : this.height };
					if(last == src ) showImg(imgLoaded[src]);
				}).attr("src",src);
			}
			
		}, function(){
			last = "";
			$preview.hide();	
		}).mousemove(function(e){		
			mouse = e;
			var $this = $(this),
			src = $this.attr(rel),
			img = imgLoaded[src];

			img && position(img);
				});
		  }
	
		  // 注册显示大图事件
		  $("a[preview]").bigShow();
	}); // end	
}

(function(){
	if (typeof jQuery == "undefined"){
		setTimeout( arguments.callee,200)
	} else {
		jQueryReady(jQuery);// jQuery 加载后执行
	}
})()

//统计
var _hmt = _hmt || [];
document.write(unescape("%3Cscript src='http://hm.baidu.com/hm.js?4c44a2def8d372ee44ba767279cef306' type='text/javascript'%3E%3C/script%3E"));

//百度自动推送
(function(){
	var bp = document.createElement('script');
	bp.src = 'http://push.zhanzhang.baidu.com/push.js';
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(bp, s);
})();
