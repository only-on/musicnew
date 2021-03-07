/*
* @Author: yz
* @Date:   2017-08-11 23:04:29
* @Last Modified by:   yz
* @Last Modified time: 2017-08-20 13:28:33
*/
window.onload = function(){
	/*小米手机下拉*/
	let navitemson = document.getElementsByClassName('navitemson');
	let navitemsondow = document.getElementsByClassName('navitemsondow');
	for(let i=0;i<navitemson.length-2;i++){
		navitemson[i].onmouseenter = function(){
			for(let i=0;i<navitemson.length-2;i++){
				navitemsondow[i].style.display='none';
			}
			navitemsondow[i].style.display='block';
		}
		navitemson[i].onmouseleave = function(){
			for(let i=0;i<navitemson.length-2;i++){
				navitemsondow[i].style.display='none';
			}
		}
	}
	/*侧边栏aside*/
	let cate = document.getElementsByClassName('cate');
	let cateaside = document.getElementsByClassName('cateaside');
	for(let i=0;i<cate.length;i++){
		cate[i].onmouseenter = function(){
			cateaside[0].style.opacity = 1;
		}
		cate[i].onmouseleave = function(){
			cateaside[0].style.opacity = 0;
		}
	}
	/*搜索下拉框*/
	let searchtext = document.getElementsByClassName('searchtext');
	let searchbtn = document.getElementsByClassName('searchbtn');
	let searchhotwords = document.getElementsByClassName('searchhotwords');
	let searchtextdown = document.getElementsByClassName('searchtextdown');
	searchtext[0].onclick = function(){
		searchtextdown[0].style.display = 'block';
		searchtext[0].style.border = '1px solid #FF6B00';
		searchbtn[0].style.border = '1px solid #FF6B00';
		searchhotwords[0].style.display = 'none';
	}
	searchtext[0].onblur = function(){
		searchtextdown[0].style.display = 'none';
		searchhotwords[0].style.display = 'block';
		searchtext[0].style.border = '1px solid #EEEEEE';
		searchbtn[0].style.border = '1px solid #EEEEEE';
	}
	/*中心轮播图*/
	let homeheroslider = document.getElementsByClassName('homeheroslider');
	let banner = document.getElementsByClassName('banner');
	let bannerson = banner[0].getElementsByClassName('bannerson');
	let button = document.getElementsByClassName('button');
	let buttonson = button[0].getElementsByClassName('buttonson');
	let uiprev = document.getElementsByClassName('uiprev');
	let uinext = document.getElementsByClassName('uinext');
	for(let i=0;i<buttonson.length;i++){
		buttonson[i].onclick=function(){
			for(let i=0;i<buttonson.length;i++){
				bannerson[i].style.display='none';
				buttonson[i].classList.remove('hot');
			}
			bannerson[i].style.display='block';
			buttonson[i].classList.add('hot');
		}
	}
	let t;
	t = setInterval(slider, 3000);
	let num=0;
	function slider(){
		num = num+1;
		if(num == buttonson.length){
			num=0;
		}
		for(let i=0;i<buttonson.length;i++){
			bannerson[i].style.display='none';
			buttonson[i].classList.remove('hot');
		}
		bannerson[num].style.display='block';
		buttonson[num].classList.add('hot');
	}
	function slider1(){
		num = num-1;
		if(num == -1){
			num=buttonson.length-1;
		}
		for(let i=0;i<buttonson.length;i++){
			bannerson[i].style.display='none';
			buttonson[i].classList.remove('hot');
		}
		bannerson[num].style.display='block';
		buttonson[num].classList.add('hot');
	}
	homeheroslider[0].onmouseenter = function(){
		clearInterval(t);
	}
	homeheroslider[0].onmouseleave = function(){
		t = setInterval(slider, 3000);
	}
	uiprev[0].onclick = slider;
	uinext[0].onclick = slider1;
	/*明星单品*/
	let xmcarouseloutwrapper = document.getElementsByClassName('xmcarouseloutwrapper');
	let wrapper1 = document.getElementsByClassName('wrapper1');
	let thumb = document.getElementsByClassName('thumb');
	let thumb2 = document.getElementsByClassName('thumb2');
	let children = wrapper1.length;
	let width = wrapper1[0].offsetWidth;
	let allwidth = children*width;
	xmcarouseloutwrapper[0].style.width = `${allwidth}px`;
	// xmcarouseloutwrapper[0].onmouseover = function(){
	// 	clearInterval(t1);
	// }
	// xmcarouseloutwrapper[0].onmouseout = function(){
	// 	clearInterval(t1);
	// }
	let index = 0;
	thumb[0].onclick = function(){
		if(index == (children-1)){
		return;
		}
		index++;
		xmcarouseloutwrapper[0].style.marginLeft = `${-index*width}px`;
		// thumb[0].classList.remove('thumbcolor1');
		thumb[0].classList.remove('thumbhot');
		thumb2[0].classList.add('thumbhot');
	}
	thumb2[0].onclick = function(){
		if(index == 0){
		return;
		}
		index--;
		xmcarouseloutwrapper[0].style.marginLeft = `${-index*width}px`;
		thumb2[0].classList.remove('thumbhot');
		thumb[0].classList.add('thumbhot');
	}
	let t1;
	t1 = setInterval(move, 3000);
	function move(){
		while(index == (children-1)){
			index--;
			xmcarouseloutwrapper[0].style.marginLeft = `${-index*width}px`;
			thumb[0].classList.remove('thumbhot');
		thumb2[0].classList.add('thumbhot');
			return;
		}
		while(index == 0 ){
			index++;
			xmcarouseloutwrapper[0].style.marginLeft = `${-index*width}px`;
			thumb2[0].classList.remove('thumbhot');
			thumb[0].classList.add('thumbhot');
			return;
		}
	}
	/*家电区*/
	let spansecond = document.getElementsByClassName('spansecond');
	let tablistson = document.getElementsByClassName('tablistson');
	for(let i=0;i<spansecond.length;i++){
		tablistson[i].onmouseenter = function(){
			for(let i=0;i<spansecond.length;i++){
				spansecond[i].style.display='none';
			}
			spansecond[i].style.display='block';
		}
	}
	/*智能*/
	let spansecond1 = document.getElementsByClassName('spansecond1');
	let tablistson1 = document.getElementsByClassName('tablistson1');
	console.log(spansecond1.length);
	for(let i=0;i<spansecond1.length;i++){
		tablistson1[i].onmouseenter = function(){
			for(let i=0;i<spansecond1.length;i++){
				spansecond1[i].style.display='none';
			}
			spansecond1[i].style.display='block';
		}
	}
	/*推荐*/
	let homestargoods3 = document.getElementsByClassName('homestargoods3');
	let xmcerpuselcol1 = document.getElementsByClassName('xmcerpuselcol1');
	let thumb3 = document.getElementsByClassName('thumb3');
	let thumb5 = document.getElementsByClassName('thumb5');
	let children1 = xmcerpuselcol1.length;
	let width1 = xmcerpuselcol1[0].offsetWidth;
	let allwidth1 = children1*width1;
	homestargoods3[0].style.width = `${allwidth1}px`;
	let index1 = 0;
	thumb3[0].onclick = function(){
		if(index1 == (children1-1)){
		return;
		}
		index1++;
		homestargoods3[0].style.marginLeft = `${-index1*width1}px`;
		thumb3[0].classList.remove('thumbcolor1');
		thumb3[0].classList.remove('thumbhot');
		thumb5[0].classList.add('thumbhot');
	}
	thumb5[0].onclick = function(){
		if(index1 == 0){
		return;
		}
		index1--;
		homestargoods3[0].style.marginLeft = `${-index1*width1}px`;
		thumb5[0].classList.remove('thumbhot');
		thumb3[0].classList.add('thumbhot');
	}
	/*内容*/
	let contentlist = document.getElementsByClassName('contentlist');
	let contentitem = contentlist[0].getElementsByClassName('contentitem');
    let itemlist = document.getElementsByClassName('itemlist');

	let li = itemlist[0].getElementsByTagName('li');
	let controlprev = document.getElementsByClassName('controlprev');
	let controlnext = document.getElementsByClassName('controlnext');
	let children2 = li.length;
	let width2 = li[0].offsetWidth;
	let allwidth2 = children2*width2;
	itemlist[0].style.width = `${allwidth2}px`;
	let index2 = 0;
	/*for(let i=0;i<contentitem.length;i++){
		contentitem[i].onmouseover = function(){
			// alert(i);
				controlprev[0].onclick = function(){
				if(index2 == (children2-1)){
				return;
				}
				index2++;
				itemlist[0].style.marginLeft = `${-index2*width2}px`;
			}
				controlnext[0].onclick = function(){
				if(index2 == 0){
				return;
				}
				index2--;
				itemlist[0].style.marginLeft = `${-index2*width2}px`;
			}
		}			
	}	*/
		contentitem[0].onmouseover = function(){
			// alert(i);
				controlprev[0].onclick = function(){
				if(index2 == (children2-1)){
				return;
				}
				index2++;
				itemlist[0].style.marginLeft = `${-index2*width2}px`;
			}
				controlnext[0].onclick = function(){
				if(index2 == 0){
				return;
				}
				index2--;
				itemlist[0].style.marginLeft = `${-index2*width2}px`;
			}
		}	
		contentitem[1].onmouseover = function(){
			// alert(i);
				controlprev[0].onclick = function(){
				if(index2 == (children2-1)){
				return;
				}
				index2++;
				itemlist[0].style.marginLeft = `${-index2*width2}px`;
			}
				controlnext[0].onclick = function(){
				if(index2 == 0){
				return;
				}
				index2--;
				itemlist[0].style.marginLeft = `${-index2*width2}px`;
			}
		}					
}