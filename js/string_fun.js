
function init(){

    var str = document.querySelector('.str_fun img');
    var imgStr = str.src; //이미지 주소값 가져오기

    //http://127.0.0.1:61679/img/img_01.jpg 
    var strStart = imgStr.lastIndexOf('_')+1; //'_'문자열 인덱스값 찾기
    var strEnd = imgStr.lastIndexOf('.'); 
    //'.'문자열 인덱스값 찾기
    var num = imgStr.slice(strStart,strEnd);
    //slice함수 -> 찾을 문자열의 시작 인덱스값, 끝 인덱스값
    str.src =  imgStr.replace(num,'01');
    //브라우저 화면 이미지 src값 변경

    
    
    
var strFun2 = document.querySelectorAll('.str_fun2 figure img');    
var imgLarge = document.querySelector('.str_fun2 p img');

for(var i=0;i<strFun2.length;i++){
    strFun2[i].addEventListener('click',changeImg);
//선택자.addEventListener('click',function(){changeImg(i)});
}
    
function changeImg(){
    var a = this.src //내가 클릭한 작은 이미지의 src값;
    imgLarge.src = a;
}
    
//console.log(  imgStr.substr(31,2)  );  //01
}  
 
window.addEventListener('DOMContentLoaded',init);
    
