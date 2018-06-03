/* Task 1 */

/* Put your code here */

(function () {

    // Соберем данные
    var i = process.argv[2];
    var a = +process.argv[3];
    var b = +process.argv[4];

    // Переведем сначала в 10ю СС
    var x = parseInt(i, a);

    // Теперь переведем из 10й в любую другую
    var m = 0;
    while(x > 0){
        m = ~~(x%b); // остаток
        x = ~~(x/b);
        console.log(m);
    }

})();