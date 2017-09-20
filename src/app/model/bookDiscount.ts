export class BookDiscount {
  id: number;
  price: number;
  discountDetails: string;
  book: Book;
}

export class Book {
  id: number;
  authors: string;
  title: string;
  subtitle: string
  bookPageUrl: string;
  coverUrl: string;
}
