// (function(){
//     var matcher = {
//         toHaveKeys: function(util, customEqualityTesters){
//
//             return {
//                 compare: function(actual, expected){
//                     if (expected === undefined) {
//                         expected = '';
//                     }
//
//                     var result = {};
//                     //result.pass = util.equals(Object.keys(actual).sort(), Object.keys(expected).sort(), customEqualityTesters);
//                     result.pass = actual.x == expected.x;
//
//                     if(result.pass){
//                         result.message = 'They have the same keys';
//                     }else{
//                         result.message = 'Expected: ' + dump(actual) + ' to have the same keys as  ' + dump(expected);
//                     }
//
//                     return result;
//                 }
//             }
//         }
//     };
//
//     beforeAll(function() {
//         jasmine.addMatchers(matcher);
//     });
//
// })();
