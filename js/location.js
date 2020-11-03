
function init(){

    var urlHref = location.href;
    var urlHash = location.hash;
    var urlHost = location.host;
    var urlHostname = location.hostname;
    var urlPathname = location.pathname;
    var urlPort = location.port;
    
    console.log(urlHref);
    console.log(urlHash);
    console.log(urlHost);
    console.log(urlHostname);
    console.log(urlPathname);
    console.log(urlPort);
    
    console.log(urlPathname.substr(1,5));
    
    //location.href = 'http://naver.com';
    //location.replace('http://naver.com');
    //location.reload(); //새로고침  
    
var img = document.querySelector('.str_fun img');
img.addEventListener('click',page);
    
function page(){        location.replace('18.location_result.html#main')
}

/*
if(urlHash == '#main'){
var str_fun = document.querySelector('.str_fun');
    str_fun.innerHTML = '메인화면입니다.';
}
*/
var str_fun = document.querySelector('.str_fun');
switch(urlHash){
       case '#main': 
            str_fun.innerHTML = '메인화면입니다.';
            break;
        default : 
            str_fun.innerHTML = '서브화면입니다.';
} 
       

    
    
// <div class="str_fun"> 메인화면입니다. </div>
    

    
    
    
    
    

}  
 
window.addEventListener('DOMContentLoaded',init);
    
