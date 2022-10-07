// 1.
// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  // }
  
  // console.log(maxOfTwoNumbers(3, 9));

  // 2.
// function maxOfThree(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         return num1;
//     }   else if (num2 > num1 && num2 > num3){
//         return num2;
//     }   else{
//         return num3
//     }
//  }
// console.log(maxOfThree(54, 42, 24))

// const maxOfThree = (x, y, z) => {
//   if (x >= y && x >= z) {
//     return x;
//   } else if (y >= x && y >= z) {
//     return y;
//   } else if (z >= x && z >= y) {
//     return z;
//   } else {
//     return "Nothing"
//     console.log("Nothing")
//   }
// }
// console.log(maxOfThree(54, 42, 24))

  // 3.
  // function isCharAVowel(char) {
  //   if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')){
  //       return true;
  //   } else{
  //       return false;
  //   }
  // }
  // console.log(isCharAVowel('a'))
  // console.log(isCharAVowel('b'))

  // 4.
// const sumArray = function(nums) {
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }
// console.log(sumArray([5, 4, 3, 2, 1]));

// 5.
// function multiplyArray(nums) {
//   let product = 1;
//   nums.forEach(function(num) {
//     product *= num;
//   });
//   return product;
// }
// console.log(multiplyArray([5, 4, 3, 2, 1]))

// 6.
// const numArgs = function(...args) {
//   return args.length;
// }
// console.log(numArgs(1, 2, 3, 4, 5));

// 7.
// function reverseString(str) {
//   let reversed = '';
//   let count = -1;
//   for (let i = 0; i < str.length; i++) {
//     reversed = reversed + str.substr(count, 1)
//     count--;
//   }
// return reversed;
// }
// console.log(reverseString('rockstar'));

// 8.
// const longestStringInArray = function(args) {
//     let longest = 0;
//     args.forEach((str) => {
//         if (str.length > longest)
//         {
//             longest = str.length;
//         }
//     });
//     return longest;
// }
// console.log( longestStringInArray(["primo", "segundo", "tertiary", "quadruple", "quintuple"]))

// 9.
function stringsLongerThan(num, ...args) {
  const keptStrings = [];
  args.forEach((function(str) {
      if(str.length > num) {
          keptStrings.push(str);
      }
  }));
  return keptStrings;
}
console.log(stringsLongerThan(4, "say", "hello", "in", "the", "morning"));