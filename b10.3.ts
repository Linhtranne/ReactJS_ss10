class Employee{
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone =  phone;
    }
    printInfo():void {
        console.log(this.name, this.company, this.phone);
}
}
let Employee1 = new Employee("Linh","PTIT", "01234567890");
Employee1.printInfo;
