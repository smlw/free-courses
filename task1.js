/* Task 1 */

/* Put your code here */

(function () {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';

    // Соберем данные
    var i = process.argv[2];
    var a = +process.argv[3];
    var b = +process.argv[4];

    // Переведем сначала в 10ю СС
    var x = parseInt(i, a);

    // Теперь переведем из 10й в любую другую
    var m;
    while(x > 0){
        m = ~~(x%b); // остаток
        x = ~~(x/b); // Целая часть


        m = m >= 10 ? alpha[m-10] : m.toString();

        console.log(m, typeof(m));
    }

    console.log();

})();



