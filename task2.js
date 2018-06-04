/* Task 2 */

/* Put your code here */

(function () {

    var day = +process.argv[2];
    var month = process.argv[3];
    var year = +process.argv[4];

    var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    month = months.indexOf(month);

    if(( year <= 2999 && year >= 1) && (day >= 1 && day <= 31)){

        var startDate = new Date(year, month, day);
        var endDate = new Date("12/31/2018");

        var time = Math.abs(endDate.getTime() - startDate.getTime());
        var days = Math.ceil(time / (1000 * 3600 * 24)).toString();

        process.stdout.write(days);

    } else {
        console.log('Error')
    }


})();