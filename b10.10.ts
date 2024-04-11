class Book{
    private title: string;
    private author: string;
    private quantity: number;
    constructor(title: string, author: string, quantity: number = 100) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getQuantity(): number {
        return this.quantity;
    }
    increaseQuantity(amount: number = 1): void {
        this.quantity += amount;
    }
}

class Library{
    private bookList: Array<Book>;
    constructor() {
        this.bookList = [];
    }
    addBook(book: Book): void {
        const existingBook = this.bookList.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity();
        } else {
            this.bookList.push(book);
        }
    }

    watchBook(): void {
        this.bookList.forEach((book) => {
            console.log("Book: " + book.getTitle() + " by " + book.getAuthor() + ", Quantity: " + book.getQuantity());
        });
    }
}

let book6 = new Book("Hehehe","ling",100);
let book7 = new Book("Hehehehe","linhk",200);
let book8 = new Book("HE","linhh",300);
let book9 = new Book("HEHE"," lingg",400);
let book10 = new Book("HEHEHEHE","link"500);

let library1 = new Library();

library1.addBook(book6);
library1.addBook(book7);
library1.addBook(book8);
library1.addBook(book9);
library1.addBook(book10);

library1.watchBook();