const fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
//   let result = fruits.slice[0];
  console.log(`First element of array is:`,fruits[0]);
  console.log(`Last element of array is:`,fruits[fruits.length-1]);
  console.log(`****Adding element at beginning *****`);
  
  fruits.splice(0,0,'Papaya')
  console.log(fruits);

  console.log(`****Deleting element Mango *****`);
  const removeElement = fruits.splice(4,1)
  console.log(fruits);

  console.log(`****Add element at last position of array*****`);
       fruits.push("Pineapple")
        console.log(fruits);

   console.log(`****Add element before water melon of array*****`);
   //const fruits = ["Banana","Orange","Apple","Water Melon","Pineapple"];
         fruits.splice(fruits.length-2,0,"Dragon fruit")
         console.log(fruits);

    console.log(`****Replace  element orange with kiwi of array*****`);
   //const fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
         fruits[2]="Kiwi";
         console.log(fruits);   
         
    console.log(`****Printing 1 to 4 on console*****`);
   const fruits2 = ['Papaya', 'Banana', 'Kiwi', 'Apple', 'Dragon fruit', 'Water Melon', 'Pineapple'];
         let result2 =fruits2.slice(1,5);
         console.log(result2);

  console.log(`****Printing Last 3   element on console*****`);
   //const fruits = ["'Papaya', 'Banana', 'Kiwi', 'Apple', 'Dragon fruit', 'Water Melon', 'Pineapple'"];
         let startingIndex =fruits2.length-3; //starting index
         console.log(startingIndex);
         //slice startingIndex from array index to get last 3 element
         let lastElement =fruits2.slice(startingIndex,fruits2.length)
         console.log(`Last 3 element is:`,lastElement);
         
         
         
        


  
  
  
  
  
