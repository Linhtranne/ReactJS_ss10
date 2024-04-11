class Song{
    public readonly id: number;
    _name: string;
    _length: number;
    constructor(id: number, name: string, length: number){
        this.id = id;
        this._name = name;
        this._length = length;
    }
    public get name(): string {
        return this._name;
    }

    public set name(newName: string) {
        this._name = newName;
        this._length = newName.length;
    }

    public get length(): number {
        return this._length;
    }

}
let change = new Song(1,"hehe",3)
change._length = 1;
change._name = "hehehehe"
console.log(change.id,change._name, change._length);

