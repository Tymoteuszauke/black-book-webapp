import { Injectable } from '@angular/core';

@Injectable()
export class SortService {

  columns: string[];

  constructor() {
    this.columns = ['book.title,ASC', 'book.title,DESC', 'book.authors,ASC', 'book.authors,DESC', 'price,ASC', 'price,DESC', 'bookstore.name,ASC', 'bookstore.name,DESC'];
  }

}
