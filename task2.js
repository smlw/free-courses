/* Task 2 */

/* Put your code here */

// (function () {
//
//     var day = +process.argv[2];
//     var month = process.argv[3];
//     var year = +process.argv[4];
//
//     if(( year <= 2999 && year >= 1) && (day >= 1 && day <= 31)){
//         switch (month) {
//             case 'января' :
//                 month = 0;
//                 break;
//             case 'февраля' :
//                 month = 1;
//                 break;
//             case 'марта' :
//                 month = 2;
//                 break;
//             case 'апреля' :
//                 month = 3;
//                 break;
//             case 'мая' :
//                 month = 4;
//                 break;
//             case 'июня' :
//                 month = 5;
//                 break;
//             case 'июля' :
//                 month = 6;
//                 break;
//             case 'августа' :
//                 month = 7;
//                 break;
//             case 'сентября' :
//                 month = 8;
//                 break;
//             case 'октября' :
//                 month = 9;
//                 break;
//             case 'ноября' :
//                 month = 10;
//                 break;
//             case 'декабря' :
//                 month = 11;
//                 break;
//             default :
//                 console.log('нет такого месяца');
//                 break;
//         }
//
//         var startDate = new Date(year, month, day);
//         var endDate = new Date("12/31/2018");
//
//         var time = Math.abs(endDate.getTime() - startDate.getTime());
//         var days = Math.ceil(time / (1000 * 3600 * 24)).toString();
//
//         process.stdout.write(days);
//
//     } else {
//         console.log('Error')
//     }
//
//
// })();