class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }
    public get width(): number {
        return this._width;
    }

    public set width(newWidth: number) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
    }
    public get height(): number {
        return this._height;
    }

    public set height(newHeight: number) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
    }
    public rectangleArea(): number {
        return this._width * this._height;
    }
    public rectanglePerimeter(): number {
        return 2 * (this._width + this._height);
    }
}
let rectangle = new Rectangle(5, 10);
rectangle.width = 8;
rectangle.height = 12;
console.log( rectangle.width);
console.log( rectangle.height);
console.log( rectangle.rectanglePerimeter());
console.log(rectangle.rectangleArea());
