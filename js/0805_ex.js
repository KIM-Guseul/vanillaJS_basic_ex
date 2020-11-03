function init() {

    //=========================================================

    var slt = document.querySelector('.ex1 input');
    var btn = document.querySelector('.ex1 button');
    var ex1Div = document.querySelector('.ex1 div');
    var idx = 0;

    slt.style = 'border:1px solid #f00';

    function fun() {
        if (slt.value == '') {
            alert('값을 입력하시오');
            slt.focus();
        } else {
            idx++;
            ex1Div.innerHTML += '<br>' + idx + '. ' + slt.value;
        }
    }

    btn.addEventListener('click', fun);


    //========================================================

    var slt2 = document.querySelector('.ex2');
    var slt2Input = document.querySelector('.ex2 input');
    var btn2 = document.querySelector('.ex2 button');
    var ex2Div = document.querySelector('.ex2 div');
    var idx2 = 0;

    slt2Input.style = 'border:1px solid #f00';

    btn2.addEventListener('click', fun2);

    function fun2() {
        if (slt2Input.value == '') {
            alert('값을 입력하시오');
            slt2Input.focus();
        } else {
            idx2++;
            ex2Div.innerHTML += '<p>' + idx2 + '. ' + slt2Input.value +
                ' <a>삭제</a></p>';
        }
    }

    ex2Div.addEventListener('click', funDel);

    function funDel(e) {
        e.target.parentElement.remove();
    }

    //==========================================================

    var ex3 = document.querySelectorAll('.ex3 div');
    var div1 = ex3[0].innerHTML;
    var div2 = ex3[1].innerHTML;

    ex3.addEventListener('click', change);

        ex3[0].innerHTML = div2;
        ex3[1].innerHTML = div1;







}
window.addEventListener('DOMContentLoaded', init);
