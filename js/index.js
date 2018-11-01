window.onload=function () {
    let lis = document.querySelectorAll(".banner .list .list-box");
    let son = document.querySelectorAll(".son");
console.log(lis);
console.log(son);
//2.遍历每一个li
    for (let i = 0; i < lis.length; i++) {
        //3.当鼠标移入每一个li时的操作
        lis[i].onmouseenter = function () {
            // alert(1);
            //4.其余子元素消失
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
            }
            //5.当前子元素出现
            son[i].style.display = "block";
        }
        lis[i].onmouseleave = function () {
            for (var j = 0; j < son.length; j++) {
                son[j].style.display = "none";
            }
        }
    }
///////////////////////////////////////////////返回顶部/////////////////////////////////////////////
    let back=document.querySelector(".aalis");
    //页面滚动的高度
    window.onscroll=function () {
        huaH=document.body.scrollTop||document.documentElement.scrollTop;

        // search：页面滚动到一定高度出现
        if(huaH > 800){
            back.style.display="block";
        }else{
            back.style.display="none";
        }
    }
    back.onclick=function () {
        animate(document.body,{scrollTop:0},1000);
        animate(document.documentElement,{scrollTop:0},1000);
    }

}