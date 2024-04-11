class Circle{
    private radiuss: number;
    constructor(radius: number){
        this.radiuss = radius;
    }
     public get areaCircle(){
        let area = this.radiuss*Math.PI;
        return area;
    }
    public get prerimeterCircle(){
        let prerimeter = 2*Math.PI*this.radiuss;
        return prerimeter;
    }
}
let Circle1 = new Circle(2);
console.log(Circle1.prerimeterCircle);
console.log(Circle1.areaCircle);


