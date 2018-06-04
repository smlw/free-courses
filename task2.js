/* Task 2 */

/* Put your code here */


var day = +process.argv[2];
var month = process.argv[3];
var year = +process.argv[4];

var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
month = months.indexOf(month);

// if(( year <= 2999 && year >= 1) && (day >= 1 && day <= 31)){

    function f(x,y) {
        return 28 + (x + Math.floor(x / 8)) % 2 + 2 % x + Math.floor((2 - ((y % 4) * ((y % 100) + (y % 400)) + 2) % ((y % 4) * ((y % 100) + (y % 400)) + 1)) / x) + Math.floor(1/x) - Math.floor((1 - ((y % 4) * ((y % 100) + (y % 400)) + 2) % ((y % 4) * ((y % 100) + (y % 400)) + 1))/x);
    }


    var total = 0;
    for(var i = month + 1; i <= 12; i++){
        var daysInMonth = f(i,year);
        total = total + daysInMonth;
    }
    total = total - day;
    console.log(total);





// }
