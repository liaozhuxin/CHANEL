$(function(){
	$('.menuBoxCloseBtn').click(function(e){
		e.stopPropagation();
		$('.phoneMenuVeiwWindow').css('display','none');
		$('.allShadow').css('display','none');
	})
	$('.menu-icon').click(function(){
		$('.phoneMenuVeiwWindow').css('display','block');
		$('.allShadow').css('display','block');
	})
	$('.phoneMenuList').eq(1).click(function(){
		$('.phoneAllMenuBox').css('left','-85vw');
	})
	$('.phoneMenuList').eq(2).click(function(){
		$('.phoneAllMenuBox').css('left','-85vw');
		$('.phoneMenuBox').eq(2).css('z-index','1');
	})
	$('.back').click(function(){
		$('.phoneAllMenuBox').css('left','0vw');
		$('.phoneMenuBox').eq(2).css('z-index','-1');
	})
	$('.Productback').click(function(){
		$('.phoneAllMenuBox').css('left','-85vw');
		$('.phoneMenuBox').eq(4).css('z-index','-1');
		$('.phoneMenuBox').eq(5).css('z-index','-2');
		$('.phoneMenuBox').eq(6).css('z-index','-3');
	})
	$('.phoneMenuProductList').eq(0).click(function(){
		$('.phoneAllMenuBox').css('left','-170vw');
	})
	$('.phoneMenuProductList').eq(1).click(function(){
		$('.phoneAllMenuBox').css('left','-170vw');
		$('.phoneMenuBox').eq(4).css('z-index','2');
	})
	$('.phoneMenuProductList').eq(2).click(function(){
		$('.phoneAllMenuBox').css('left','-170vw');
		$('.phoneMenuBox').eq(5).css('z-index','2');
	})
	$('.phoneMenuProductList').eq(3).click(function(){
		$('.phoneAllMenuBox').css('left','-170vw');
		$('.phoneMenuBox').eq(6).css('z-index','2');
	})
	var num = 0;
//	console.log($(window).width());
if ($(window).width()<=800) {
	$(document).mousewheel(function(e,d){
		num = num -d;
		if(num==0){num=0;}
		if(num==3){num=3;}
			if(num>1&&d == -1){
				$('html,body').animate({'scrollTop':716*(num-1)})
			}
			if(d == 1){
				$('html,body').animate({'scrollTop':716*num})
			}
			if(num == 1){
				$('.pBigPicBox').eq(0).addClass('containTextAnimationOne');
			}else{
				$('.pBigPicBox').eq(0).removeClass('containTextAnimationOne');
			}
			if(num == 2){
				$('.pBigPicBox').eq(1).addClass('containTextAnimationOne');
				$('.containTextAnimationTwo').animate({'top':'-50px'});
			}else{
				$('.pBigPicBox').eq(1).removeClass('containTextAnimationOne');
				$('.containTextAnimationTwo').animate({'top':'-300px'});
			}

	})
}	
	
	
	
	
	
	
	
	
	
})