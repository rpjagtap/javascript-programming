console.log(`========== toString() ===============`);
var age = 22;
console.log(`Age: ${age}, and it's type : ${typeof age}`);
var ageStr = age.toString();
console.log(`Age: ${ageStr}, and it's type : ${typeof ageStr}`);
console.log(`========== includes() ===============`);
var vowels = "aeiou";
var isOAvailable = vowels.includes("ei");
console.log(isOAvailable);

console.log(`========== slice() ===============`);
var greet = "  Good Morning my buddy How are you!  ";
var sliceFive = greet.slice(5);
console.log(sliceFive);
var sliceTwo = greet.slice(2, 10);
console.log(sliceTwo);

console.log(`========== split() ===============`);
var greet = "  Good Morning my buddy How are you!  ";
var words = greet.split(" ");
console.log(words);
var str = "My Life My Rule";
var strWords = str.split(" ");
console.log(strWords);
console.log(strWords.length);