function init(){

    //date
    var today = new Date();
    var date = document.querySelector('.date div');
    var day = ['일','월','화','수','목','금','토',];

    var result = today;

        result += "<br><br>" + today.getFullYear() + "년";
        result += " " + (today.getMonth()+1) + "월";
        result += " " + today.getDate() + "일";
        result += " " + day[today.getDay()] + "요일";

        result += " " + today.getHours() + "시";
        result += " " + today.getMinutes() + "분";
        result += " " + today.getSeconds() + "초";

        result += "<br><br>" + today.getTime() + " 유닉스 초";
        // 1970년도 1월 1일 12시 0분 0초부터 마이크로 초로 환산한 시간.

        // console.log(24*60*60*1000*365*50);

    date.innerHTML += result;

    var sDate = new Date(); 
    var eDate = new Date('2020-11-20');
    var dDay = eDate - sDate;
    var oDay = 24*60*60*1000;
    var end =  Math.round(dDay / oDay); //반올림

    date.innerHTML += '<br><br>종강일 D - ' + end;


    // 이벤트 참여 기간
    var today = new Date();
    var eventS = new Date('2020-08-03 09:30:00');
    var eventE = new Date('2020-08-05 18:20:00');
    var DDay = (eventE - today);

     if(today >= eventS && today <= eventE){
        date.innerHTML += '<br><br>이벤트에 참여할 수 있습니다.';
     }else{
        date.innerHTML += '<br><br> 이벤트가 종료되었습니다.';
     }

     if(DDay >= 0){
        date.innerHTML += '<br><br>이벤트 종료 '+ Math.round(DDay/1000/60)+'분 전입니다.';
     }else{
        date.innerHTML += '<br><br> 이벤트가 종료되었습니다.';
     }


     // 날짜 수정

     var editDate = today.setDate(today.getDate()+3);
     var lastDay = new Date(editDate);

     date.innerHTML += '<br><br>'+lastDay;


     //=== ex =========================================

     var eClass = new Date('2020-08-04 18:20:00');
     var today = new Date();
     
     date.innerHTML += '<br><br> 수업 종료까지 '+ Math.round((eClass - today)/1000) +'초 남았습니다.';
     date.innerHTML += '<br><br> 수업 종료까지 '+ Math.round((eClass - today)/1000/60) +'분 남았습니다.';


    


    





    console.log(lastDay);







    
    
    
}

window.addEventListener('DOMContentLoaded',init);