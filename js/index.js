window.onload = function(){
			var oPicBtn = document.getElementsByClassName('picBtn');
			var oBigPic = document.getElementsByClassName('Pic');
			var olistBtn = document.getElementsByClassName('listBtn');
			var oExplain = document.getElementsByClassName('explain');
			var style1 = document.createElement('style');
			console.log(olistBtn[0].children[1]);
			slider();
			function slider(){
				inter();				
				var iNow = 0;
				var timer;
				for(var i = 0;i<oPicBtn.length;i++){
//					console.log(i);
					bind(i);
					bind2(i);
//					console.log(oPicBtn[i].children[0]);
				}
				function bind(index){
					oPicBtn[index].onmouseover = function(){
						clearInterval(timer);
						iNow = index;
						console.log(index);
						changePic();
					}
					oPicBtn[index].onmouseout = function(){
						clearInterval(timer);
						iNow = index;
						inter();
					}
				}
				
				function bind2(index){
					olistBtn[index].onclick = function(){
						clearInterval(timer);
						iNow = index;
						console.log(index);
						changePic();
						oExplain[iNow].style.display = "block";
						olistBtn[iNow].children[0].style.backgroundColor = "black";
						olistBtn[iNow].children[1].style.display = "block"
						inter();
					}
				}
				function changePic(){					
					for(var j = 0;j<oBigPic.length;j++){
						//把所有照片的透明度改为零
						//把所有字体变色
						oBigPic[j].style.opacity = 0;
						oPicBtn[j].children[0].style.color = "#767676";
						oExplain[j].style.display = "none";
						olistBtn[j].children[0].style.backgroundColor = "#767676";
						olistBtn[j].children[1].style.display = "none"
						
						//当j等于索引值是
						if(j==iNow){
							oBigPic[j].style.opacity = 1;
							oPicBtn[j].children[0].style.color = "black";
							oExplain[j].style.display = "block";
							olistBtn[j].children[1].style.display = "block"							
							olistBtn[j].children[0].style.backgroundColor = "black";
							
						}
					}
				}

				//定时器
				function inter(){					
					timer = setInterval(function(){										
						iNow++;
						if(iNow>7){
							iNow = 0;
						}					
						changePic(iNow);
					},5000)
				}
			}
			
		//点击按钮触发菜单
		omenuBtn = document.getElementsByClassName('menuBtn')[0];
		omenuBox = document.getElementsByClassName('menuBox')[0];
//		oHeadPic = document.getElementById('headPic').value;
		oHeadPic = document.getElementsByTagName('img')[0];
//		alert(oHeadPic);
		var a;
		omenuBtn.onclick = function(){
		a = omenuBtn.getAttribute('value');			
			if(a == 0){
				oHeadPic.style.display = 'none';
				omenuBox.style.display = 'block';
				omenuBtn.setAttribute('value','1');
				omenuBtn.style.backgroundPositionX = '-29px';
			}
			else {
				oHeadPic.style.display = 'block';
				omenuBox.style.display = 'none';
				omenuBtn.setAttribute('value','0');
				omenuBtn.style.backgroundPositionX = '0px';
			}
			
		}
			
			
			
			
}