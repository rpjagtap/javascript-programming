
function squareOfWordLength(){
    var str="squareOfWordLength";
    // console.log(`Length Of the Word is: ${str.length} and square of the length is:${str.length*str.length}`);
    console.log(`Length Of the Word is: ${str.length} and square of the length is:${str.length ** 2}`);
    console.log(`=======javaScript=======`);
    var strjs="JavaScript";
    console.log(`Length Of the Word is: ${strjs.length} and square of the length is:${strjs.length ** 2}`);
    console.log(`=======Google Chrome=======`);
    var strgc="Google Chrome";
    console.log(`Length Of the Word ${strgc} is: ${strgc.length} and square of the length is:${strgc.length ** 2}`);
    console.log(`=======Web developer smart=======`);
    var strwd="Web Developer Smart";
    console.log(`Length Of the Word ${strwd} is: ${strwd.length} and square of the length is:${strwd.length ** 2}`);
    

}
squareOfWordLength();

function fullstackdev(){
    console.log(`====I am Fullstack Developer====`);
    
    var fullsd="I am Fullstack Developer";
    // console.log(`${fullsd}`); 
    console.log(` ${fullsd} ,Length Of the Word  is:${fullsd.length} `);
    console.log("====Finding string length and divided by number of words");
    
    var strword =fullsd.split(" ");
    console.log(`Length of the string is:${fullsd.length},Result after divided by its number or words is:${ fullsd.length / strword.length}`);
    console.log("====Finding string length and Multiply by number of words");
    console.log(`Length of the string is:${fullsd.length},Result after Multiply by its number or words is:${ fullsd.length * strword.length}`);
    
       
}
 fullstackdev();