console.log(`******Printing the Vowels from Given String********`);

const str = "I am very good IT Developer";
const vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    vowelCount++;
  }
}
console.log(`Total Number Of vowels → ${vowelCount}`); 

console.log(`******Printing the sum of cubs of numbers ********`);
function sumOfCubes() {
    let total= 0;
    for (let index = 1; index <= 5; index++) {
        total += index * index * index;  
        // console.log(`${total}`);
                 
    }
    return total;
}
console.log(`Sum Of  Cubs From 1 to 5 is:`,sumOfCubes());

console.log(`***** Odd Position Character to be counted and printed on console********`);
function oddPositionChar(str) {    
    let result= "";
    let position =0;
    for (let i = 0; i < str.length; i++) {
        
        if (str[i]!== " ") { 
            //condition for non empty space
            if (position % 2 !==0) {
                result +=str[i];                  
            }
            position++;                      
        }               
    }
    console.log("Odd-positioned characters:", result);     
}
    let str1 ="Hard Work always pay back";
    let str2 ="Soon I will be UI IT Champ"; 
    oddPositionChar(str1);
    oddPositionChar(str2);







