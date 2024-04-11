class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    public describe(): void {
        console.log("ID:", this.id);
        console.log("Tên:", this.name);
    }
}
let employees: string[] = ["Linh", "Linh2", "Linh3"];
let department = new Department(1, "Hehehehe", employees);
department.describe();
