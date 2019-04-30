// 1번 문제

function insensitiveEqual(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(insensitiveEqual('hello', 'Hello'));

// 2번 문제
// function leftPad(str, number) {
//   if (str.length < number) {
//     var differ = number - str.length;
//     var space = ' ';
//     estr = space.repeat(differ) + str;
//     return estr;
//   } else {
//     return str;
//   }
// }

// console.log(leftPad('hello', 8));
// console.log(leftPad('hello', 5));

// 3번 문제
// function searchchar(str) {
//   var arr = ['a', 'e', 'i', 'o', 'u'];
//   var strarr = str.split('');
//   sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < strarr.length; j++) {
//       if (arr[i] === strarr[j]) {
//         sum += 1;
//       }
//     }
//   }
//   return sum;
// }

// console.log(searchchar('airplane'));
