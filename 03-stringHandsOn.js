
function stringHandsOn(){
    console.log("========Printing string========");
    
 var str="  Hey you are doing good,keep it up  ";
 console.log(str);
 console.log(`Length of the String:`,str.length);
 
}
stringHandsOn();

function trim(){
    console.log("=======Remove the extra spaces from both side=======");

     var str1 = "  Hey you are doing good,keep it up  ";
     var strlength = str1.length;
     var resultstr = str1.trim();
     var totalRemovedSpaces = strlength - resultstr.length;
     console.log(`Total Number Of Space removed: ${totalRemovedSpaces}`);
     var lastLetter = resultstr.length -1;
     console.log(`First Letter is ,${resultstr.charAt(0)}`,`Last Letter is ${resultstr.charAt(lastLetter)}`);
     var strWords = resultstr.length;
     console.log(`Number Of Letters:${strWords}`);
     console.log(`Index of - good word from string is:`, resultstr.indexOf("good"));
     console.log(`Printing the substring starting index 22 ${resultstr.substring(22)}`);
     console.log(`String end with the key word up is true or flase = ${resultstr.endsWith("up")}`);
     console.log(`String Starts with keyword Hey is true  or false = ${resultstr.startsWith("Hey")}` );
     
     
     
     
     
     
     

          
}
trim();
