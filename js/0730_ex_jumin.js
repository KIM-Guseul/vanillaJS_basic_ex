function init() {
    //주민 유효성 검사
    var j01 = document.querySelector('input[name=j01]');
    var j02 = document.querySelector('input[name=j02]');
    var result = document.querySelector('.result');
    
    function jumin() {
        var arr = j01.value + j02.value;
        var key = [2,3,4,5,6,7,8,9,2,3,4,5];
        var total = 0;

        for (var i in key) {
            total += arr[i] * key[i];
        }
        
        var cNum = (11 - total % 11)%10; //끝자리 한자리수만 허용.
        result.innerHTML = j02.value[6] == cNum ? '정상적인 주민번호입니다. ' : '주민번호를 확인하십시오. ';
      
        gender(j02.value);
    }

    function gender(g) {
        var gen = g;
        var aa = (gen[0] == '1') ? '남자' : '여자';
        //상황연산자. if문을 한줄로 표현. 조건 ? true : faulse;
        
        result.innerHTML += '성별 : '+aa; 

        /*if (gen[0] == 1){
           result.innerHTML = "성별 : 남자"
        }else{
           result.innerHTML = "성별 : 여자"
        } */
    }

    var btn = document.querySelector('.ex_jumin button');
    btn.addEventListener('click', jumin);

}

window.addEventListener('DOMContentLoaded', init);
