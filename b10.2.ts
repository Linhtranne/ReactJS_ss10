class Student {
     id: number;
     age: number;
     email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }

    public getId(): number {
        return this.id;
    }

    public getAge(): number {
        return this.age;
    }

    public getEmail(): string {
        return this.email;
    }
}
let students: Student[] = [];
students.push(new Student(1, 18, '1@gmail.com'));
students.push(new Student(2, 19, '2@gmail.com'));
students.push(new Student(3, 20, '3@gmail.com'));
console.log("Danh sách sinh viên:");
for (let student of students) {
    console.log("ID:", student.getId());
    console.log("Age:", student.getAge());
    console.log("Email:", student.getEmail());
}
