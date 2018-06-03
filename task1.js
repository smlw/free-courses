/* Task 1 */

/* Put your code here */

(function () {
    var alphabet = [[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
                    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
                    ];

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
        x = ~~(x/b); // Целая часть

        m = m >= 10 ? alphabet[1][alphabet[0].indexOf(m)] : m;
        console.log(m);
    }

})();



