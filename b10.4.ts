class Vehiclee{
    name:string;
    year:number;
    company:string;
    readonly Id:number
    constructor(name:string, year:number, company:string, Id:number){
            this.name=name;
            this.year=year;
            this.company=company;
            this.Id=Id;
    }
}
let Vehiclee1 = new Vehiclee("Mec 300",2024,"Mecerdes", 3);
console.log(Vehiclee1.name,Vehiclee1.year,Vehiclee1.company,Vehiclee1.Id);