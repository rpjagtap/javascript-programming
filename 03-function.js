
console.log("======Function With no argument and no return value ======");

function addition(){
    var result ;
    n1=5;
    n2=55;
    n3=n1+n2;
    console.log("Addition of two number:",n3);
}
addition();

function percentage(){
    var per;
    n1=86;
    per=n1*10/100;
    console.log("Percentage of Number:",per);    
}
percentage();

console.log("==============Funtion with argument but no return type=========  ");

function personalDetails(firstName,lastName,collageName){
    var first=firstName;
    var last=lastName;
    var collage=collageName;
    console.log("My First Name is",firstName);
    console.log("My Last Name is",lastName); 
    console.log("My Collage Name is ",collageName);    
          
}
personalDetails('Ratnadeep','Jagtap','Indira Collage pune');


console.log("=============Function with argument and return type=========== ");
function addThreevalues(n1,n2,n3){
    var addition=n1+n2+n3;    
    // console.log("multiplication of two Number",multi); 
    return addition;   
    }
     var cal = addThreevalues(10.23,600,40);     
     console.log("Addition Of Three number:",cal);
     var hello =addThreevalues(" Hello"," Good"," Morning");
     console.log(hello);

     function bankDetails(bank,acc,city,pin){
        var bdetails =bank+acc+city+pin;
        return bdetails;

     }
      var bd=  bankDetails("CITI Bank"," 344534231"," Pune"," 410411" );
     console.log("bankDetails",bd);
     
    var bd1= bankDetails("Axis Bank"," 423568390"," Dharashiv"," 401435");
     console.log("bankDetails",bd1);
     
      var bd2 = bankDetails("BOM Bank", " 987654321", " PCMC"," 410418");
      console.log("bankDetails",bd2);
      

     
     




