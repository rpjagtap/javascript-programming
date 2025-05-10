
function stringBasic(){
    console.log(`======= My Dream Company =========`);
    var company="MicroSoft";
    console.log(`My Dream company is`,company);    
}
stringBasic();
function hobby(){
    console.log(`======= My Hobbies =========`);
    var hobby1="Reading";
    var hobby2="Swimming";
    var hobby3="Trekking";
    console.log(`My Hobbies are:`,hobby1,hobby2,hobby3); 

    console.log(`======= Find the length of the string =========`);
    var allHobby=hobby1+hobby2+hobby3;
    var allHobbyLength = allHobby.length;    
    console.log(`${allHobby} - String length is : ${allHobbyLength}`);      
}
hobby();