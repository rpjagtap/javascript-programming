
console.log(`***** Revers the string and print it without including empty spaces ****`);
function reversStr(str) {
    let revers ="";
    for (let i =str.length-1; i >=0 ; i--) {
        let char = str.charAt(i);
     if (char !== " ") {         // ignore spaces
            revers += char;       // add character to the result
        }
    }
    console.log(revers); // show the reversed string
}
// Test the function with both strings
let string1 = "Hard work always pays back";
let string2 = "Soon I will be Angular IT Champ";

reversStr(string1);
reversStr(string2);