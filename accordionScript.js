const btns = document.getElementsByClassName("accordion");//手风琴
const panel = document.getElementsByClassName("panel");//控制板

for(i=0; i<btns.length; i++){
  btns[i].addEventListener("click",handler);// addEventListener监听
  function handler(){
    this.classList.toggle("active");//toggle 切换打开的作用
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
    }else{
        panel.style.maxHeight = panel.scrollHeight + "px";
        // scrol滚动
    }
  }
}