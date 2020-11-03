        //명령과 실행을 분리.
        function init() {

            //초기 세팅
            var p = document.querySelector('.fun_ex3 p');
            var img = document.querySelectorAll('.fun_ex3 img');
            var btn = document.querySelectorAll('.fun_ex3 button');

            var idx = 0;

            (function () {
                for (var i = 0; i < img.length; i++) {
                    img[i].style = "left:" + (i * 100) + "px;";
                }
            })(); //익명 함수. 이름이 없는 함수. 바로 실행하는 함수 마지막()가 익명함수를 호출하고 있어.

            //실행 명령
            function prev() {
                if (idx != 0) idx--;
                update();
                p.style = "left:" + (-idx * 100) + "%";
            }

            function next() {
                if (idx != img.length - 1) idx++;
                update();
                p.style = "left:" + (-idx * 100) + "%";
            };

            
            function update() {
                if (idx == 0) {
                    btn[0].style = 'visibility:hidden;'
                } else {
                    btn[0].style = 'visibility:visible;'
                }

                if (idx == img.length - 1) {
                    btn[1].style = 'visibility:hidden;'
                } else {
                    btn[1].style = 'visibility:visible;'
                }

            }

            //이벤트
            btn[0].addEventListener('click', prev);
            btn[1].addEventListener('click', next);

        };

        window.addEventListener('DOMContentLoaded', init); //load 시점이 달라. html 문서 전체 load 후 실행.
        // window.addEventListener('load', init); window 다 load 후 실행.



        /* //load : element 위치와 상관없이 window를 다~ load 한 후에 명령을 실행.
        window.addEventListener('load', function() {
            var ex3 = document.querySelector('.fun_ex3');
            console.log(ex3);
        });
        */


        /* //똑같은데 옛날 방식.
        window.onload = function() {
             var ex3 = document.querySelector('.fun_ex3');
             console.log(ex3);
         }; 
         */
