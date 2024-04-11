class Vehicle{
    name:string;
    year:number;
    company:string;
    constructor(name:string, year:number, company:string){
            this.name=name;
            this.year=year;
            this.company=company;
    }
}
let Vehicle1 = new Vehicle("Mec 300",2024,"Mecerdes");
console.log(Vehicle1.name,Vehicle1.year,Vehicle1.company);
let Vehicle2 = new Vehicle("Mec 200",2022,"Mecerdes");
console.log(Vehicle2.name,Vehicle2.year,Vehicle2.company);

