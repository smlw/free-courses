/* Task 1 */

/* Put your code here */

(function () {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Соберем данные
    var i = process.argv[2];
    var a = +process.argv[3];
    var b = +process.argv[4];

    // Переведем сначала в 10ю СС
    var x = parseInt(i, a);

    // Теперь переведем из 10й в любую другую
    var m;
    var result = [];
    while(x > 0){
        m = ~~(x%b); // остаток
        x = ~~(x/b); // Целая часть

        // Кодирование чисел
        m = m >= 10 ? alphabet[m-10] : m.toString();

        // пушим в массив
        result.push(m);
    }

    result = result.reverse().join('');

    process.stdout.write(result);

})();



