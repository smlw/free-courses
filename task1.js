/* Task 1 */

/* Put your code here */

// Соберем данные
var i = +process.argv[2];
var a = +process.argv[3];
var b = +process.argv[4];


// проверяем недопустимые числа
function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

var arr = i.toString().split('');
var maxNum = arrayMax(arr);

if((i >= 0 && i <= 10000) && (a >= 2 && a <= 36) && (b >= 2 && b <= 36) && (maxNum < a) && Number.isInteger(i) && Number.isInteger(a) && Number.isInteger(b) ){

    i = i.toString();
    // Переводим в десятичную
    var alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
    var x = 0;
    for(var k=0; k<i.length; k++){
        x += alphabet.indexOf(i[k]) * Math.pow(a, i.length - k - 1);
    }

    // Теперь переведем из 10й в любую другую
    var m;
    var result = [];
    while(x > 0){
        m = ~~(x%b); // остаток
        x = ~~(x/b); // Целая часть

        // Кодирование чисел
        m = m >= 10 ? alphabet[m] : m;

        // пушим в массив
        result.push(m);
    }

    result = result.reverse().join('').toString();

    process.stdout.write(result);
}






