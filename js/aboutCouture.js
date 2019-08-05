$(function(){
	$('.header-menuList').click(function(){
		$(this).children('span').addClass('bottomC');
		$(this).siblings().children('span').removeClass('bottomC');
	})
	$('.header-menuList').eq(1).click(function(e){
		if($('.product-menu-box').css('display','block')){
			$('.product-menu-box').toggle();
		}
		$('.couture-menu-box').toggle();
		if($('.product-menu-box').is(":hidden")&&$('.couture-menu-box').is(":hidden")){
			$('.header-menuList').eq(3).children('span').addClass('bottomC');
			$(this).children('span').removeClass('bottomC');
		}
	})
	$('.header-menuList').eq(2).click(function(e){
		if($('.couture-menu-box').css('display','block')){
			$('.couture-menu-box').toggle();
		}
		$('.product-menu-box').toggle();
		if($('.product-menu-box').is(":hidden")&&$('.couture-menu-box').is(":hidden")){
			$('.header-menuList').eq(3).children('span').addClass('bottomC');
			$(this).children('span').removeClass('bottomC');
		}
	})
	$('.product-menu-box').click(function(e){
		e.stopPropagation();
	})
	$('.couture-menu-box').click(function(e){
		e.stopPropagation();
	})
	$('.close-btn').click(function(e){
		$('.product-menu-box').css('display','none');
		$('.couture-menu-box').css('display','none');
		$('.header-menuList').eq(3).children('span').addClass('bottomC');
		if($(this).index()==3){
			$('.header-menuList').eq($(this).index()-2).children('span').removeClass('bottomC');
		}
		if($(this).index()==5){
		$('.header-menuList').eq($(this).index()-3).children('span').removeClass('bottomC');
		}
	})
	
	/////////////////////////////////头部监听////////////////////////////////////////////////////
	var a;
	$(document).mousewheel(function(e,d){
		a=d;
	})
	$(document).scroll(function(){
	//	console.log($(document).scrollTop());	
		if ((a>0&&$(document).scrollTop()>100)||$(document).scrollTop()<=100){
			$('.headerMainMenuBox').fadeIn();
		}
		else{
			$('.headerMainMenuBox').fadeOut();
		}
	})
	
	
	
	
	
	
	
	
	
})