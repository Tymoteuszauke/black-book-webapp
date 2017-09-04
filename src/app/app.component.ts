import { Component, OnInit } from '@angular/core';

import { BookDiscount } from './model/bookDiscount';
import { BookService } from './book.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Discount Library</h2>
    <ul class="bookDiscounts">
      <li *ngFor="let bookDiscount of bookDiscounts"
        [class.selected]="bookDiscount === selectedBookDiscount"
        (click)="onSelect(bookDiscount)">
        <span class="badge">{{bookDiscount.id}}</span> {{bookDiscount.bookView.title}}
      </li>
    </ul>
    <book-discount-detail [bookDiscount]="selectedBookDiscount"></book-discount-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .bookDiscounts {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .bookDiscounts li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .bookDiscounts li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .bookDiscounts li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .bookDiscounts .text {
      position: relative;
      top: -3px;
    }
    .bookDiscounts .badge {
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
  title = 'Book discounts library';
  bookDiscounts: BookDiscount[];
  selectedBookDiscount: BookDiscount;

  constructor(private bookService: BookService) { }

  getBookDiscounts(): void {
    this.bookService.getBookDiscounts().then((bookDiscounts => {
      console.log(bookDiscounts);
      this.bookDiscounts = bookDiscounts; }))
  }

  ngOnInit(): void {
    this.getBookDiscounts();
  }

  onSelect(bookDiscount: BookDiscount): void {
    this.selectedBookDiscount = bookDiscount;
  }
}
