function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;    
}
  const yesBank = new Bank('Yes Bank','PCMC','YESB00002313','YB2313');
  const sbiBank = new Bank('SBI Bank','Wash','SBIN0000754','SBIN754');
  const mahaBank = new Bank('MAHA Bank','Jamkhed','MAHAB000993','MAHAB993');
  const axisBank = new Bank('Axis Bank','Pune','AXISB00000077','AXIS0077');
  console.log(`Bank Detail is:`,yesBank);
  console.log(`Bank Detail is:`,sbiBank);
  console.log(`Bank Detail is:`,mahaBank);
  console.log(`Bank Detail is:`,axisBank);

//   prototype
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="4 PM IST";
// console.log(yesBank.openTime,yesBank.closeTime);
console.log(`YES Bank Timings are:${yesBank.openTime} And Closing Time is:${yesBank.closeTime}`);
// console.log(axisBank.openTime,axisBank.closeTime);
console.log(`Axis Bank Timings are:${axisBank.openTime} And Closing Time is:${axisBank.closeTime}`);
console.log(`Bank Name is:${yesBank.bankName},brachCode:${yesBank.branchCode},opening Time:${yesBank.openTime}`);




  