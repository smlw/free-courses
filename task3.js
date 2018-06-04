/* Task 3 */

/* Put your code here */
var t1 = +process.argv[2];
var t2 = +process.argv[3];

if ((t1 >= 1 && t2 <= 100000) && !(t2 + t1 < 0)) {
    // Summarize
    var sum = t1 + t2;

    // Calculate the time
    var h = ~~(sum / 3600);
    var m = ~~(sum / 60 % 60);
    var s = ~~(sum % 60);


    // Function for case
    function declOfNum(number, titles) {
        var cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    var res = [];
    if(h > 0){
        var hTitle = declOfNum(h, ['час', 'часа', 'часов']);
        res.push(h, hTitle);
    }
    if(m > 0){
        var mTitle = declOfNum(m, ['минута', 'минуты', 'минут']);
        res.push(m, mTitle);
    }
    if(s > 0){
        var sTitle = declOfNum(s, ['секунда', 'секунды', 'секунд']);
        res.push(s, sTitle);
    }

    res = res.join(' ');

    process.stdout.write(res);

} else {
    process.stdout.write('Error')
}
