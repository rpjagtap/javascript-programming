
class Vehicle{
    constructor(CompanyName, model, year,color,fuelType){
        this.CompanyName = CompanyName;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelType = fuelType;
    }
            display(){
        console.log(`CompanyName: ${this.CompanyName}, Model: ${this.model}, Year: ${this.year},Color: ${this.color},FuelType: ${this.fuelType}`);   
    }

}
   const VehicleMahindra = new Vehicle("Mahindra","scorpio",2024,"Black","Hybrid");
   console.log(VehicleMahindra);
   const VehicleTata = new Vehicle("TATA","Safari",2022,"Blue","Pertol");
   console.log(VehicleTata);
   const VehicleToyota = new Vehicle("Toyota","Inova",2020,"Grey","Pertol");
   console.log(VehicleToyota);
   const VehicleHero = new Vehicle("Hero","Ignitor",2014,"Black","Pertol");
   console.log(VehicleHero);
   const VehicleBMW = new Vehicle("BMW","X5",2022,"White","Pertol");
   console.log(VehicleBMW);

   class College{
    constructor(collegeName,Location,establishYear,university,rank){
        this.collegeName= collegeName;
        this.Location =Location;
        this.establishYear= establishYear;
        this.university=university;
        this.rank=rank;
    }
    display(){
        console.log(`College Name : ${this.collegeName},Location : ${this.Location},Establishment Year: ${this.establishYear},University:${this.university},Rank: ${this.rank}`);
        
    }
   }
   const TernaCollege = new College("Terna","Dharashiv",1975,"BAMUA",18);
   const LHMVCollege = new College("LHMV","Jamkhed",1958,"Pune",23);
   const KMJMCollege = new College("KMJM","Washi",1980,"BAMUA",27);
   const VPCollege = new College("VP","Baramati",1990,"Pune",13);
   const IndiraCollege = new College("Indira","Pune",2000,"Pune",12);
   console.log("======***Task 2 College Details *** =====");   
   console.log(TernaCollege);
   console.log(LHMVCollege);
   console.log(KMJMCollege);
   console.log(VPCollege);
   console.log(IndiraCollege);
   
   
   
   
   
   
   
