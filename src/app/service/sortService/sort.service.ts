import { Injectable } from '@angular/core';

@Injectable()
export class SortService {

  columns: string[];

  constructor() {
    this.columns = ['book.title', 'book.authors', 'price','bookstore.name'];
  }

}
