

console.log(`*****Creating object and update it with nested object,array and then adding new property`);

let professor ={
    proName :"John",
    proLastName :"Smith",
    proSubject :"JAVA",
    collegeName :"Indira",
    proAge:35,
    isMarried :true,
    // console.log(`**********Nested object ******`),
         degrees :{
        engineering:"CSC",
        PHD :"Adv Computing",
        masters:"CS",
        certificates :["Hacker Rank participation","Certification in IFE course","Certification in Adv Programming"]
    }   
}
console.log(professor);
console.log(professor.degrees);
console.log("====== *** Adding one array Certificate**** =========");
console.log(professor.degrees.certificates);
console.log(" ==== *** Adding new property totalExperience *** === ");
professor.totalExperience="14 Years";
console.log(`total Experience:`,professor.totalExperience);
console.log("====== Updating properties in the object =========");
professor.proAge = 34;
console.log(professor);
console.log(" === *** Adding new certificate at 2nd index of property certificates *** === ");
professor.degrees.certificates.splice(2,0,"Oracle Certificate");
console.log(professor.degrees.certificates);
console.log(" === *** Last element of the certificate *** ===");
const lastCertificate = professor.degrees.certificates[professor.degrees.certificates.length-1];
console.log(`Last element of the certificates  is :${lastCertificate}`);








// console.table(professor.degrees);







