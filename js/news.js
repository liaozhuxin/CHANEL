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
	//点击按钮图片轮播
	var num=1;
	var picNum = 1;
	$('.viwepagerBtnOneLeft').eq(0).click(function(){
		num--;
		if(num<0){
			num=8;
			$('.viwepagerPicBox').eq(0).css({'left':-670*num+'px'});
			num=7;
		}
		$('.viwepagerPicBox').eq(0).animate({'left':-670*num+'px'});
		picNum=num;
		if (picNum<1) {
			picNum=8;
		}
		if (picNum>8) {
			picNum=1;
		}
		$('.onePicNum').eq(0).html(picNum);
	})
	$('.viwepagerBtnOneRight').eq(0).click(function(){
		num++;
		if(num>9){
			num=1;
			$('.viwepagerPicBox').eq(0).css({'left':-670*num+'px'});
			num=2;
		}
		$('.viwepagerPicBox').eq(0).animate({'left':-670*num+'px'});
		picNum=num;
		if (picNum<1) {
			picNum=8;
		}
		if (picNum>8) {
			picNum=1;
		}
		$('.onePicNum').eq(0).html(picNum);
	})
	
	
	//      2
	var numT=1;
	var picNumT = 1;
	$('.viwepagerBtnOneLeft').eq(1).click(function(){
		num--;
		if(num<0){
			num=6;
			$('.viwepagerPicBox').eq(1).css({'left':-670*num+'px'});
			num=5;
		}
		$('.viwepagerPicBox').eq(1).animate({'left':-670*num+'px'});
		picNum=num;
		if (picNum<1) {
			picNum=6;
		}
		if (picNum>6) {
			picNum=1;
		}
		$('.onePicNum').eq(1).html(picNum);
	})
	$('.viwepagerBtnOneRight').eq(1).click(function(){
		num++;
		if(num>7){
			num=1;
			$('.viwepagerPicBox').eq(1).css({'left':-670*num+'px'});
			num=2;
		}
		$('.viwepagerPicBox').eq(1).animate({'left':-670*num+'px'});
		picNum=num;
		if (picNum<1) {
			picNum=6;
		}
		if (picNum>6) {
			picNum=1;
		}
		$('.onePicNum').eq(1).html(picNum);
	})
	
	
	
	//      3
	var numS=1;
	var picNumS = 1;
	$('.viwepagerBtnOneLeft').eq(2).click(function(){
		num--;
		if(num<0){
			num=3;
			$('.viwepagerPicBox').eq(2).css({'left':-670*num+'px'});
			num=2;
		}
		$('.viwepagerPicBox').eq(2).animate({'left':-670*num+'px'});
		picNum=num;
		if (picNum<1) {
			picNum=3;
		}
		if (picNum>3) {
			picNum=1;
		}
		$('.onePicNum').eq(2).html(picNum);
	})
	$('.viwepagerBtnOneRight').eq(2).click(function(){
		num++;
		if(num>4){
			num=1;
			$('.viwepagerPicBox').eq(2).css({'left':-670*num+'px'});
			num=2;
		}
		$('.viwepagerPicBox').eq(2).animate({'left':-670*num+'px'});
		picNum=num;
		if (picNum<1) {
			picNum=3;
		}
		if (picNum>3) {
			picNum=1;
		}
		$('.onePicNum').eq(2).html(picNum);
	})
	
	
	
/////////////////////////////////头部监听////////////////////////////////////////////////////
var a;
$(document).mousewheel(function(e,d){
	a=d;
})
$(document).scroll(function(){
	console.log($(document).scrollTop());	
	if ((a>0&&$(document).scrollTop()>100)||$(document).scrollTop()<=100){
		$('.headerMainMenuBox').fadeIn();
	}
	else{
		$('.headerMainMenuBox').fadeOut();
	}
	if ($(document).scrollTop()>300) {
		$('.newPicAContBox').children('h3').addClass('animated fadeInUp').removeClass('fadeOut');
		$('.newPicAContBox').children('p').addClass('animated fadeInUp').removeClass('fadeOut');
	} else{
		$('.newPicAContBox').children('h3').removeClass('fadeInUp').addClass('fadeOut');
		$('.newPicAContBox').children('p').removeClass('fadeInUp').addClass('fadeOut');
	}
	if ($(document).scrollTop()>900) {
		$('.viwepagerOneDetail').eq(0).children('h3').addClass('animated fadeInUp').removeClass('fadeOut');
		$('.viwepagerOneDetail').eq(0).children('p').addClass('animated fadeInUp').removeClass('fadeOut');
	} else{
		$('.viwepagerOneDetail').eq(0).children('h3').removeClass('fadeInUp').addClass('fadeOut');
		$('.viwepagerOneDetail').eq(0).children('p').removeClass('fadeInUp').addClass('fadeOut');
	}
	if ($(document).scrollTop()>1500) {
		$('.viwepagerOneDetail').eq(1).children('h3').addClass('animated fadeInUp').removeClass('fadeOut');
		$('.viwepagerOneDetail').eq(1).children('p').addClass('animated fadeInUp').removeClass('fadeOut');
	} else{
		$('.viwepagerOneDetail').eq(1).children('h3').removeClass('fadeInUp').addClass('fadeOut');
		$('.viwepagerOneDetail').eq(1).children('p').removeClass('fadeInUp').addClass('fadeOut');
	}
	if ($(document).scrollTop()>2200) {
		$('.viwepagerOneDetail').eq(2).children('h3').addClass('animated fadeInUp').removeClass('fadeOut');
		$('.viwepagerOneDetail').eq(2).children('p').addClass('animated fadeInUp').removeClass('fadeOut');
	} else{
		$('.viwepagerOneDetail').eq(2).children('h3').removeClass('fadeInUp').addClass('fadeOut');
		$('.viwepagerOneDetail').eq(2).children('p').removeClass('fadeInUp').addClass('fadeOut');
	}



//让签名不再动
if($(document).scrollTop()>3150){
	$('.signature').children('img').css({'position':'absolute','top':'3150px'})
}else{
	$('.signature').children('img').css({'position':'fixed','top':''})
}






})





//点击input框事件

$('.searchMsgBox').eq(0).click(function(){
	console.log($('.searchMsgBox').is(':focus'))
	$('.searchBox').eq($(this).index()).addClass('bordersty');
	$('.searchMsgBox').eq(0).css('font-size','12px');
	$('.searchBox').eq(1).removeClass('bordersty');
	$('.searchMsgBox').eq(1).css('font-size','14px');
})
$('.searchMsgBox').eq(1).click(function(){
	$('.searchBox').eq(1).addClass('bordersty');
	$('.searchMsgBox').eq(1).css('font-size','12px');
	$('.searchBox').eq(0).removeClass('bordersty');
	$('.searchMsgBox').eq(0).css('font-size','14px');
})
//if(!$('.searchMsgBox').eq(0).is(':focus')){
//	$('.searchBox').eq(0).removeClass('bordersty');
//	$('.searchMsgBox').eq(0).css('font-size','14px');
//}
//if($('.searchMsgBox').eq(1).is(':focus')==false){
//	$('.searchBox').eq(1).removeClass('bordersty');
//	$('.searchMsgBox').eq(1).css('font-size','14px');
//}	
	
	
	
	
	
	
	
	
})