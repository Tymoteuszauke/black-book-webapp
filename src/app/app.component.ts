import { Component, OnInit } from '@angular/core';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Library</h2>
    <ul class="books">
      <li *ngFor="let book of books"
        [class.selected]="book === selectedBook"
        (click)="onSelect(book)">
        <span class="badge">{{book.id}}</span> {{book.author}}
      </li>
    </ul>
    <book-detail [book]="selectedBook"></book-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .books {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .books li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .books li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .books li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .books .text {
      position: relative;
      top: -3px;
    }
    .books .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [BookService]
})
export class AppComponent implements OnInit {
  title = 'My little library';
  books: Book[];
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().then((books => {
      console.log(books);
      this.books = books; }))
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
