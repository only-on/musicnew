/*
* @Author: lenovo
* @Date:   2017-08-10 22:56:38
* @Last Modified by:   yangchao
* @Last Modified time: 2017-08-20 23:27:13
*/

'use strict';
window.onload=function(){
  
	let navlis=document.getElementsByClassName('nav-li');
	// console.log(navlis);
	let navitem = document.getElementsByClassName('nav-bottom');
	// console.log(navitem[0]);
	let navcot=document.getElementsByClassName('nav-bbig');

	for(let n=0;n<navitem.length;n++){
        navlis[n].onmouseover=function(){
        	navitem[n].style.boxShadow='0px 3px 8px 1px rgba(30, 30, 30, 0.5)'
        	navitem[n].style.borderTop='2px solid #E0E0E0'
        	navitem[n].style.display='block';
        }
        navlis[n].onmouseout=function(){
        	navitem[n].style.boxShadow='0px 3px 8px 1px rgba(30, 30, 30, 0)'
        	navitem[n].style.borderTop='none'
        	navitem[n].style.display='none';
        }
	}
  let navl=document.querySelector('.nav-r1');
  // console.log(navr);
  let navtext1=document.querySelector('.nav-r1text');
  // console.log(navtext1);
  let navtext2=document.querySelector('.nav-r2text');
  let navr=document.querySelector('.nav-r2');
  let navblock=document.querySelector('.nav-block');
      navl.onfocus=function(){
            navtext1.style.display='none';
            navtext2.style.display='none';
            navl.style.border='1px solid #ff6700';
            navr.style.border='1px solid #ff6700';
            navr.style.borderLeft='none';
            navblock.style.display='block'

      }
      navl.onblur=function(e){
           navtext1.style.display='block';
            navtext2.style.display='block';
            navl.style.border='';
            navr.style.border='';
            navr.style.borderLeft='none';
            navblock.style.display='none';
            
      }
      	let abig=document.getElementsByClassName('aside-big')[0];
      	let alis=abig.getElementsByClassName('aside-big1');
           console.log(alis);
      	
            for(var i=0;i<alis.length;i++){
            	   alis[i].index=i;
            	   // console.log(i);
                alis[i].onmouseover=function(){
                	let bl=this.getElementsByClassName('item');
                	bl[0].classList.toggle('xianshi');
                	
                }

                alis[i].onmouseout=function(){
                	let bl=this.getElementsByClassName('item');
                	bl[0].classList.toggle('xianshi');
                	  
                	
                }
      	}


      	let lunbo=document.getElementsByClassName('lunbo')[0];
      	// console.log(lunbo);
      	let llis=lunbo.getElementsByTagName('li');
      	// console.log(llis);
      	let yn=document.getElementsByClassName('banner-yuan')[0];
      	let ylis=yn.getElementsByTagName('li');
      	// console.log(ylis);
      	let dq=0;
      	// console.log(dq)
      	     // 点击执行
      	    for(let i=0;i<ylis.length;i++){
                      ylis[i].onclick=function(){
                      	// console.log(dq)
                      	 llis[dq].style.display='none';
                            ylis[dq].classList.remove('yuan');
                      	llis[i].style.display='block';
                      	ylis[i].classList.add('yuan');
                      	 dq=i;
                      }

      	    }
      	     
      	    let t=setInterval(move,2000);

      	    // 轮播函数
      	    //向左滑动
      	    function move(){
      	    	dq++;
      	    	if(dq == llis.length){
                      dq = 0;
      	    	}
      	    	for(let i=0;i<llis.length;i++){
                       
                       llis[i].style.display='none';
                        ylis[i].classList.remove('yuan');
      	    	}
      	       llis[dq].style.display='block';
                 ylis[dq].classList.add('yuan');
      	    }
              // 向右滑动
              function move1(){
      	    	dq--;
      	    	if(dq == -1){
                      dq = llis.length-1;
      	    	}
      	    	for(let i=llis.length-1;i>=0;i--){
                       
                       llis[i].style.display='none';
                        ylis[i].classList.remove('yuan');
      	    	}
      	       llis[dq].style.display='block';
                 ylis[dq].classList.add('yuan');
      	    }
      	    // 鼠标移入停止
      	    let bm=document.getElementsByClassName('banner-main')[0];
      	    bm.onmouseenter=function(){
      	    	clearInterval(t)
      	    }
      	    bm.onmouseleave=function(){
      	    	t=setInterval(move,2000)
      	    }

      	    // 左按钮
      	    let bleft=document.getElementsByClassName('banner-left')[0];
      	    // console.log(bleft)
      	    bleft.onclick=move;

      	    // 右按钮
      	    let bright=document.getElementsByClassName('banner-right')[0];
      	    bright.onclick=move1;

              

        

        let start=document.querySelector('.star-big');
        let widths=start.offsetWidth;
        let sbig=start.getElementsByClassName('star-pro')[0];
      
        // console.log(widths)
        // console.log(start);
        //  // 按钮
        let sleft=document.querySelector('.star-ttr1');
        let sright=document.querySelector('.star-ttr2');
        let lefts=0
           // 初始状态
           sright.style.color='#B5B0B0';
           sright.classList.add('shouxing'); 
             sright.style.corsur='pointer';
           // 右
           sright.onmouseover=function(){
                  sright.style.color='#ff6700';
              }
           sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
              }
          let st= setInterval(fn,5000)
           // 点击左边
          function moveL(){
                  sbig.style.left=0+'px';
                      // 手型设置
              sright.classList.add('shouxing');
              sleft.classList.remove('shouxing');
               // 颜色设置
              sleft.style.color='#e0e0e2';
              sright.style.color='#B5B0B0';
               // 移入效果
               // 左
               sleft.onmouseover=function(){
                  sleft.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sleft.onmouseout=function(){
                  sleft.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
               // 右
              sright.onmouseover=function(){
                  sright.style.color='#ff6700';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
                   st= setInterval(fn,5000)

              }
                  lefts=0;
                  // clearTimeout(st)
                  
            }

             sleft.onclick=moveL;
            console.log(lefts)
            // 点击右边
            function moveR(){
                  // 手型设置
                 sleft.classList.add('shouxing');
                  sright.classList.remove('shouxing');
                 // 颜色设置
                  sright.style.color='#e0e0e2';
                  sleft.style.color='#B5B0B0';
                  // 移入效果
                  // 左
                  sleft.onmouseover=function(){
                      sleft.style.color='#ff6700';
                      clearTimeout(st)
                  }
                  sleft.onmouseout=function(){
                      sleft.style.color='#B5B0B0';
                       st= setInterval(fn,5000)
                  }
                  // 右
                  sright.onmouseover=function(){
                      sright.style.color='#e0e0e2';
                      clearTimeout(st)

                  }
                  sright.onmouseout=function(){
                      sright.style.color='#e0e0e2';
                       st= setInterval(fn,5000)

                  }
                sbig.style.left=`${-widths}px`;

                 lefts=-widths;
            }
           sright.onclick=moveR;


        function fn(){
              lefts=sbig.offsetLeft;
          if(lefts>=0){
            // 手型设置
             sleft.classList.add('shouxing');
              sright.classList.remove('shouxing');
             // 颜色设置
              sright.style.color='#e0e0e2';
              sleft.style.color='#B5B0B0';
              // 移入效果
              // 左
              sleft.onmouseover=function(){
                  sleft.style.color='#ff6700';
                  clearTimeout(st)
              }
              sleft.onmouseout=function(){
                  sleft.style.color='#B5B0B0';
                   st= setInterval(fn,5000)
              }
              // 右
              sright.onmouseover=function(){
                  sright.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
             sbig.style.left=`${-widths}px`;
               // moveR();
          }
          if(lefts<=(-widths)){
            // console.log(lefts)
              // 手型设置
              sright.classList.add('shouxing');
              sleft.classList.remove('shouxing');
               // 颜色设置
              sleft.style.color='#e0e0e2';
              sright.style.color='#B5B0B0';
               // 移入效果
               // 左
               sleft.onmouseover=function(){
                  sleft.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sleft.onmouseout=function(){
                  sleft.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
               // 右
              sright.onmouseover=function(){
                  sright.style.color='#ff6700';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
                   st= setInterval(fn,5000)

              }
             sbig.style.left=0+'px';
          }
        }
       
          let tuijian=document.getElementsByClassName('tuijian-big')[0];
          // console.log(tuijian);
          let zc=tuijian.offsetWidth;
          // console.log(zc)
          let tleft=document.getElementsByClassName('tuijian-ttr1')[0];
          let tright=document.getElementsByClassName('tuijian-ttr2')[0];
           let speed=-1226;
           let tnow=0;
           let snum=zc/(-speed);
           console.log(snum)
           	  tright.style.color='#B5B0B0';
              // 右边按钮移入移出
              tright.onmouseover=function(){
                 if(tnow==snum-1){
                     tright.classList.remove('anniu')
                     tright.style.color='#e0e0e2';
                     return;
                 }else{
                  tright.classList.add('anniu');
                   tright.style.color='#FF6709';
                 }
             	     
             	   
              } 
                
              tright.onmouseout=function(){
             	   if(tnow==snum-1){
                     tright.style.color='#e0e0e2';
                     return;
                 }else{
                  tright.style.color='#B5B0B0';
                 }
             	  
             	} 

              tleft.onmouseover=function(){
                 if(tnow==0){
                     tleft.classList.remove('anniu')
                     tleft.style.color='#e0e0e2';
                     return;
                 }
                 if(tnow>0&&tnow<=snum-1){
                   tleft.classList.add('anniu');
                   tleft.style.color='#FF6709';
                 }  
                 
              } 
                
              tleft.onmouseout=function(){
                 if(tnow==0){
                     tleft.style.color='#e0e0e2';
                     return;
                 }
                 if(tnow>0&&tnow<=snum-1){
                     tleft.classList.remove('anniu');
                    tleft.style.color='#B5B0B0';
                 }
                
              } 
 
           // 点击右键
            tright.onclick=function(){
            	    // 左键变化
            	     tleft.classList.add('anniu');
             	        tleft.style.color='#B5B0B0';
                  let ws=parseInt(window.getComputedStyle(tuijian,null).marginLeft+speed);
                   
                   if(tnow<snum-1){
                      speed = -1226;
             	     }
                   if(tnow==snum-1){
                     return;
                   }
               	   tuijian.style.marginLeft = `${ws+speed}px`;
                    tnow++;
            }

           
           // 点击左键
            tleft.onclick=function(){
              	       tright.classList.add('anniu');
                     
                 	   tright.style.color='#B5B0B0';
                     let ws=parseInt(window.getComputedStyle(tuijian,null).marginLeft+speed);
                      
                     if(tnow>0){
                       	    console.log(tnow);
                         speed = 1226;
                     }
                     if(tnow==0){
                        return;
                     }
                    tuijian.style.marginLeft = `${ws+speed}px`;
                      tnow--;
            }

   content(0);
   content(1);
   content(2);
   content(3);

      

   // 家电开始
   let jiadian=document.querySelectorAll('.jiadian-tright');
     let jiaimg=document.querySelectorAll('.jiadian-nr');
     // console.log(jiaimg);
     // console.log(jiadian);
     jiadian.forEach(function(element,index){
           let now=0;  
           // let next=0;
           let jiaa=element.querySelectorAll('a');
           let jiaaimg=jiaimg[index].querySelectorAll('.nr-right');
           // console.log(jiaaimg)
           // 初始状态
            jiaa[now].style.color='#fb9300';
              jiaa[now].style.borderBottom= '1px solid #fb9300';
              jiaa[now].style.paddingBottom= '5px';
              jiaaimg[now].classList.add('nr-block');
           // console.dir(jiaa)
           for(let ji=0;ji<jiaa.length;ji++){
                  jiaa[ji].onmousemove=function(){
                      jiaa[now].style.color='#424242';
                      jiaa[now].style.borderBottom= 'none';
                      jiaa[now].style.paddingBottom= '0';
                      jiaaimg[now].classList.remove('nr-block');
                      jiaa[ji].style.color='#fb9300';
                      jiaa[ji].style.borderBottom= '1px solid #fb9300';
                      jiaa[ji].style.paddingBottom= '5px';
                      jiaaimg[ji].classList.add('nr-block');
                      now=ji;
                  }
                
           }
           let music =document.getElementById('musica');
   
           music.click=function(){
               alert('aaa');
           };
     })

          
           
}