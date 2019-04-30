// 1번 문제
function insensitiveEqual(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  }
  return false;
}

console.log(insensitiveEqual('hello', 'Hello'));

// 2번 문제
// function leftPad(str, number) {
//   const differ = number - str.length;
//   const space = ' ';
//   const estr = space.repeat(differ) + str;
//   if (str.length < number) {
//     return estr;
//   }
//   return str;
// }

// console.log(leftPad('hello', 8));
// console.log(leftPad('hello', 5));

// 3번 문제
// function searchchar(str) {
//   const arr = ['a', 'e', 'i', 'o', 'u'];
//   const strarr = str.split('');
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < strarr.length; j++) {
//       if (arr[i] === strarr[j]) {
//         sum += 1;
//       }
//     }
//   }
//   return sum;
// }

// console.log(searchchar('airplane'));
