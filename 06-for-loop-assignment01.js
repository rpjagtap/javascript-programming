

console.log(`*******Printing 5 to 15 numbers just incrementing by 1********** `);

for (let index = 5; index <=15; index++) {
    console.log(index);    
    
}

console.log(`*******Printing 50 to 40 numbers just Decrementing by 1********** `);
for (let index = 50; index >=40 ; index--) {
        console.log(index);
            
}

console.log(`*******Printing First 15 odd number********** `);
for (let index = 1; index <=30; index++) {
    var oddNumber=index;
    if (oddNumber%2!=0) {
        console.log(` ${oddNumber} is  Odd number`);        
        
    }
    
}
console.log(`*******Printing First 10 Even number********** `);
for (let index = 1; index <=20; index++) {
    var evenNumber=index;
    if (evenNumber%2==0) {
        console.log(` ${evenNumber} is  Even number`);       
        
    }    
}

console.log(`*******Printing table of 5 ********** `);
for (let index = 1; index <=10; index++) {
    var result=index*5;    
        console.log(result);     
}

console.log(`*******Printing Revers 100 to  10 like 100,90,80..... ********** `);

   for (let index = 10; index >=1; index--) {
    console.log(index * 10); 
}
