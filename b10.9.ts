class Book{
    private title: string
    private author: string
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}
class Libary{
    private bookList: Array<Book>
    constructor() {
        this.bookList = new Array<Book>();
    }
    addbook(book: Book) {
        this.bookList.push(book);
    }
    watchBook(): void {
        this.bookList.forEach((book) => {
            console.log("book: " +  book);
    })
        
    }
}
let book1 = new Book("Hehehe","ling");
let book2 = new Book("Hehehehe","linhk");
let book3 = new Book("HE","linhh");
let book4 = new Book("HEHE"," lingg");
let book5 = new Book("HEHEHEHE","link");


let libary = new Libary();

libary.addbook(book1);
libary.addbook(book2);
libary.addbook(book3);
libary.addbook(book4);
libary.addbook(book5);
libary.watchBook();