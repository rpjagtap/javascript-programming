function greateNumber(num1,num2){
console.log("==========1:Find the greatest number amongst two number========");
var num1=10;
var num2=-10;
var greatnum=(num1>=num2) ? num1 : num2;
console.log(`Greater Number is:${greatnum}`);
var num1=800;
var num2=899;
var greatnum=(num1>=num2) ? num1 : num2;
console.log(`Greater Number is:${greatnum}`);

}
greateNumber();

function isEvenOrOddNum(num1){
    console.log("===========Even Or Odd Number===========");
    
    var num1=29;
    var result= (num1 % 2==0) ? "Even":"Odd";    
    console.log(`Number ${num1} is :${result}`); 

    var num1=44
    var result= (num1 % 2==0) ? "Even":"Odd";    
    console.log(`Number ${num1} is :${result}`); 

    var num1=0
    var result= (num1 % 2==0) ? "Even":"Odd";    
    console.log(`Number ${num1} is :${result}`);

    var num1=101
    var result= (num1 % 2==0) ? "Even":"Odd";    
    console.log(`Number ${num1} is :${result}`);
    return result; 
}
isEvenOrOddNum();

function wordLength( str1)
{
    var str1="javaScript";
    var result=(str1.length % 2==0) ? "Even" : "Odd";
    console.log(`The Length Of the ${str1} word is ${result}`);
    var str1="developer";
    var result=(str1.length % 2==0) ? "Even" : "Odd";
    console.log(`The Length Of the ${str1} word is ${result}`);
    var str1="Google";
    var result=(str1.length % 2==0) ? "Even" : "Odd";
    console.log(`The Length Of the ${str1} word is ${result}`);
    return result;  
}
wordLength();


