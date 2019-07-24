window.onload = function(){
	var oHeaderMenuList = document.getElementsByClassName('header-menuList');
	var oCoutureMenuBox = document.getElementsByClassName('couture-menu-box')[0];
	var oProductMenuBox = document.getElementsByClassName('product-menu-box')[0];
	var oCloseBtn = document.getElementsByClassName('close-btn');
	slider();
	function slider(){
		var iNow = 0;
		for(var i = 0;i<oHeaderMenuList.length;i++){
			bind(i);	
		}
		function bind(index){
				oHeaderMenuList[index].onclick = function(){
					iNow = index;
					if (iNow == 1) {
						oProductMenuBox.style.display='none'
						oHeaderMenuList[2].setAttribute('valueTwo','0');
						var a3 = oHeaderMenuList[iNow].getAttribute('valueTwo');
						changing();
						if (a3 == 0) {
							oCoutureMenuBox.style.display='block'
							oHeaderMenuList[iNow].setAttribute('valueTwo','1');
						}else{
							oCoutureMenuBox.style.display='none'
							oHeaderMenuList[iNow].setAttribute('valueTwo','0');
							iNow = 0;
							changing();
						}
//						console.log(oHeaderMenuList[iNow].getAttribute('valueTwo'));
					}
					
					else if(iNow == 2){
						oCoutureMenuBox.style.display='none';
						oHeaderMenuList[1].setAttribute('valueTwo','0');
						var a4 = oHeaderMenuList[iNow].getAttribute('valueTwo');	
						changing();
						if (a4 == 0) {
							oProductMenuBox.style.display='block'
							oHeaderMenuList[iNow].setAttribute('valueTwo','1');
						}else{
							oProductMenuBox.style.display='none'
							oHeaderMenuList[iNow].setAttribute('valueTwo','0');
							iNow = 0;
							changing();
						}
					}else{
						oProductMenuBox.style.display='none';
						oCoutureMenuBox.style.display='none';
						changing();
					}
					
				}
			}
		function changing(){
			for (var j = 0;j<oHeaderMenuList.length;j++) {
				oHeaderMenuList[j].children[0].style.borderBottom = 0+'px';
				oHeaderMenuList[j].setAttribute('value','0');
				if(j == iNow){
					oHeaderMenuList[j].setAttribute('value','1');
					oHeaderMenuList[j].children[0].style.borderBottom =  4+'px'+' '+'solid'+' '+'black';
				}
			}
		}
		oCloseBtn[0].onclick = function(e){
			e.stopPropagation();
			oCoutureMenuBox.removeAttribute('style');
			oHeaderMenuList[1].setAttribute('valueTwo','0');
			iNow = 0;
			changing();
		}
		oCloseBtn[1].onclick = function(e){
			e.stopPropagation();
			oProductMenuBox.removeAttribute('style');
			oHeaderMenuList[2].setAttribute('valueTwo','0');
			iNow = 0;
			changing();
		}
	}
	
	
	
	document.documentElement.scrollTop = 0;
	//内容图片滚动监听
	window.onscroll= function(){
                //变量t是滚动条滚动时，距离顶部的距离
                var t = document.documentElement.scrollTop;
                var oContainPic = document.getElementsByClassName('containPic')[1];
                var oFooterContainer = document.getElementsByClassName('footer-container')[0];
            	if(t<300){
	                oContainPic.children[0].style.top = -(300-t)*1/6+'px';
				}
            	else{
            		oContainPic.children[0].style.top=0+'px';
            	}
//          	console.log(Number(oFooterContainer.style.top))
            	if(t>=420&&t<=994){
	                oFooterContainer.style.top = -(570-(t-420)*570/574)+'px';
//	                console.log(oFooterContainer.style.top);
				}
            	else if(t<420){
            		oFooterContainer.style.top = -570+'px';
            	}else if(t>994){
            		oFooterContainer.style.top = 0+'px';
            	}
            }
      
	
}
