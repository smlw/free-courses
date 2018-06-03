/* Task 3 */

/* Put your code here */
(function () {
    var t1 = +process.argv[2];
    var t2 = +process.argv[3];

    if( t1 >= 1 && t2 <= 100000){
        // Summarize
        var sum = t1 + t2;

        // Calculate the time
        var h  = ~~(sum / 3600);
        var m  = ~~(sum / 60 % 60);
        var s  = ~~(sum % 60);

        // Function for case
        function declOfNum(number, titles)
        {
            var cases = [2, 0, 1, 1, 1, 2];
            return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10:5] ];
        }

        // Generate title
        var hTitle = declOfNum(h,[' час',' часа',' часов']);
        var mTitle = declOfNum(m,[' минута',' минуты',' минут']);
        var sTitle = declOfNum(s,[' секунда',' секунды',' секунд']);

        // Output results
        var res;


        if(h > 0){
            res = ((h + hTitle) + ' ' + (m + mTitle) + ' ' + (s + sTitle)).toString();
        } else if (m > 0){
            res = ((m + mTitle) + ' ' + (s + sTitle)).toString();
        }else {
            res = (s + sTitle).toString();
        }

        process.stdout.write(res);
    } else {
        console.log('Error')
    }

})();