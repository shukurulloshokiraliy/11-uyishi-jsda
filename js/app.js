// 20-masalalar 

//1-masala
// const names =['shukurullo','oybek','bibixon']

// names.forEach(function(ism){
//     const newname =ism.charAt().toUpperCase() + ism.slice(1).toLowerCase()
// console.log(newname)
// }
// )

//2-masala
// const names =['shukurullo','oybek','bibixon']

// names.map(function(ism){
//     const newname =ism.toUpperCase()
// console.log(newname)
// }
// )

//3-masala
// const  num = [1, -3, 4, 0, 6]

// const manfiy = num.filter(adult)
// console.log( "manfiy son:",manfiy)
// function adult(element) {
//    return element < 0;
// }

//4-masala
// function removeSpaces(str) {

//     let tozalangan = str.trim(); 
//     return tozalangan.replaceAll(" ", "");
//   }
//   console.log(removeSpaces("  salom   dunyo  ")); 

//5-masala
// const  num = [1, 3, 5, 8,6]

// const juft = num.filter(adult)
// console.log( "juft son:",juft)
// function adult(element) {
//    return element % 2 == 0;
// }

//6-masala
// const  num = [0, 1, 2, 0, 3]

// const zero = num.filter(adult)
// console.log( "nozero son:",zero)
// function adult(element) {
//    return element > 0;
// }

//7-masala






//8-masala

// function threeLetterWords(words) {
//     return words.filter(soz => soz.length === 3);
//   }
//   console.log(threeLetterWords(["sal", "olma", "ko‘r", "bor","yoq"])); 

//9-masala

// const doubleNumbers = [1, 2, 3]; 

// doubleNumbers.map(function(two){
//     const newname =two * 2;
// console.log(newname)
// }
// )

//10-masala
// function splitChars(str) {
//     return str.split('');
//   }
//   console.log(splitChars("hello")); 
  
//11-masala

// const onlyIntegers = [1.5, 2, 3.1, 4]

// onlyIntegers.map(function(num){
//     const newname =num % 2==0;
// console.log(newname)
// }
// )

// 12
// function addIndex(arr) {
//     return arr.map((qiymat, indeks) => qiymat + indeks);
//   }
//   console.log(addIndex([10, 20, 30])); 
  
//   // 13
//   function countA(str) {
//     return str.toLowerCase()
//               .split('')
//               .filter(harf => harf === 'a')
//               .length;
//   }
//   console.log(countA("Ananas")); 
  
//   // 14
//   function getInitials(str) {
//     return str.split(' ')
//               .map(soz => soz[0])
//               .join('');
//   }
//   console.log(getInitials("Hello World From JS")); 
  
//   // 15
//   function flattenArray(arr) {
//     return arr.flat();
//   }
//   console.log(flattenArray([1, [2, 3], [4, 5]])); 
  
//   // 17
//   function extractNumbers(str) {
//     return str.split('')
//               .filter(harf => !isNaN(harf) && harf !== ' ')
//               .map(raqam => Number(raqam));
//   }
//   console.log(extractNumbers("ab1c3d2"));
  
//   // 18
//   function specialReverse(str) {
//     let sozlar = str.split(' ').map(soz => soz.split('').reverse().join(''));
//     sozlar[sozlar.length - 1] = sozlar[sozlar.length - 1].toUpperCase();
//     return sozlar;
//   }
//   console.log(specialReverse("salom dunyo js")); 
  
//   // 19
//   function flatMapExample(arr) {
//     return arr.flatMap(el => Array.isArray(el) ? el : [el]);
//   }
//   console.log(flatMapExample([1, [2, [3, 4]], 5])); 
  
//   // 20
//   function allNumbers(arr) {
//     return arr.every(el => typeof el === 'number');
//   }
//   console.log(allNumbers([1, 2, 3])); 
  
