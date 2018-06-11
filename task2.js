/* Task 2 */

/* Put your code here */


var day = +process.argv[2];
var month = process.argv[3];
var year = +process.argv[4];

var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
month = months.indexOf(month.toLowerCase()) + 1;

if(( year <= 2999 && year >= 1) && (day >= 1 && day <= 31) && (month >= 1 && month <= 12) && Number.isInteger(day) && Number.isInteger(year)){

    function f(x,y) {
        return 28 + (x + Math.floor(x / 8)) % 2 + 2 % x + Math.floor((2 - ((y % 4) * ((y % 100) + (y % 400)) + 2) % ((y % 4) * ((y % 100) + (y % 400)) + 1)) / x) + Math.floor(1/x) - Math.floor((1 - ((y % 4) * ((y % 100) + (y % 400)) + 2) % ((y % 4) * ((y % 100) + (y % 400)) + 1))/x);
    }

    // func to get Days
    function getDays() {
        var total = 0;
        for(var i = month; i <= 12; i++){
            var daysInMonth = f(i,year);
            total = total + daysInMonth;
        }
        total = total - day;

        return total.toString();
    }


    // Check valid days
    var res;
    if(day >= 28){
        var dayInMonth = f(month,year);
        if(day <= dayInMonth){
            res = getDays();
            process.stdout.write(res);
        }
    } else {
        res = getDays();
        process.stdout.write(res);
    }
}
