const array=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`**** Printing Length Of the array ******`);
let arrayLength = array.length;
console.log(`The Length of the array is:${arrayLength}`);
console.log(`**** Printing First Element Of the array ******`);

// let firstElement = array.at(0);// we can use this method also
let firstElement=array.slice(0,1);
console.log(`First Element of array is:${firstElement}`);

console.log(`**** Printing Last Element Of the array ******`);
// let lastElement = array.slice(-1)[0]; // we can use this method also
// let lastElement = array[array.length-1]; /// we can use this method also
let lastElement = array.at(-1);
console.log(`The Last Element of the array is :${lastElement}`);

console.log(`*** Printing the 3rd last element from array using length method ***`);
let thirdLast = array[array.length-3];
console.log(`The 3rd Last element of the array is : ${thirdLast} `);

console.log(`*** Printing the all even numbers from array ***`);
let num=[];
for (let i = 0; i <array.length; i++) {
    const evenElement = array[i];
    if (evenElement%2==0) {        
        num.push(evenElement) 
                 
    }    
}
console.log(`All Even numbers:`,num.join(' ,'));

console.log(`*** Printing the all Odd numbers from array ***`);
let allOddNum=[];
for (let i = 0; i <array.length; i++) {
    const oddElement = array[i];
    if (oddElement%2!==0) {
        allOddNum.push(oddElement);
                 
    }    
}
console.log(`All Odd Number from array:`,allOddNum.join(' ,')); 

console.log(`*** Printing the all even numbers from array and sum it ***`);
let allsumNumbers=[];
let sum=0;
for (let i = 0; i <array.length; i++) {
    const evenElement = array[i];
    
    if (evenElement%2==0) {
        sum=sum+evenElement;       
        allsumNumbers.push(evenElement);                   
    }       
}
console.log(`All even number from array :${allsumNumbers.join(' ,')}`); 
console.log(`The sum of all even numbers from array :${sum}`);

console.log(`*** Printing the all odd numbers from array and sum it ***`);
let allOddumbers=[];
let sumofOdd=0;
for (let i = 0; i <array.length; i++) {
    const oddElement = array[i];
    
    if (oddElement%2!==0) {
        sumofOdd=sumofOdd+oddElement;
        allOddumbers.push(oddElement);       
                           
    }       
}
console.log(`All Odd numbers from array:${allOddumbers.join(' ,')}`); 
console.log(`The sum of all odd numbers from array :${sumofOdd}`);

console.log(`*** Printing the all numbers from array and sum it ***`);
let allnumber=0;
let numbers = [];
for (let i = 0; i <array.length; i++) {
    const sumAll = array[i]; 
   
        allnumber=allnumber+sumAll;
        // console.log(sumAll); 
        numbers.push(sumAll);                          
           
}
console.log(numbers.join(', '));
console.log(`The sum of all odd numbers from array :${allnumber}`);





