function init() {
    //초기 세팅
    var ex1 = document.querySelector('.ex1');
    var img = ex1.querySelector('img');
    var num = null;
    var arr = [];

    //chang ==================================

    /*function change() {
        num = Math.floor(Math.random() * 3 + 1);

        if (arr.length == 3) {
            arr = [];
            // arr.splice(0);
        }

        for (var i in arr) {
            if (arr[i] == num) {
                change();
                return;
            }
        }

        arr.push(num);
        img.src = "img/f0" + num + ".jpg";
    }

    img.addEventListener('mouseover', change);*/

    //move ============================================
    var idx = 0;

    function move() {
        idx++;
        if (idx % 5 == 0) {
            
            num = Math.floor(Math.random() * 3 + 1);

            if (arr.length == 3) {
                arr = [];
                // arr.splice(0);
            }

            for (var i in arr) {
                if (arr[i] == num) {
                    move();
                    return;
                }
            }

            arr.push(num);
            img.src = "img/f0" + num + ".jpg";
            
            console.log(img.src);
        }
    }
    img.addEventListener('mousemove', move);
}

window.addEventListener('DOMContentLoaded', init);
