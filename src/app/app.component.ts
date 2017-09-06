import { Component, OnInit } from '@angular/core';

import { BookDiscount } from './model/bookDiscount';
import { BookService } from './book.service';
import { TextComponent } from './text.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Discount Library</h2>
    <pre>
      <input type="text"  #titleInput (keypress)= 'searchEvent(titleInput.value)'>
      <button type="submit" (click) = 'searchEvent(titleInput.value)'>Search</button>
    </pre>
    <button type="submit" (click) = 'previousPage(titleInput.value)'> < </button>
    <button type="submit" (click) = 'nextPage(titleInput.value)'> > </button>
    <div>
    <ul class="bookDiscounts">
      <li *ngFor="let bookDiscount of bookDiscounts"
        [class.selected]="bookDiscount === selectedBookDiscount"
        (click)="onSelect(bookDiscount)">
        <span class="badge">{{bookDiscount.id}}</span> {{bookDiscount.bookView.title}} <span class="badge-price"> {{bookDiscount.price}} pln</span>
      </li>
    </ul>
    <book-discount-detail [bookDiscount]="selectedBookDiscount"></book-discount-detail>
    </div>
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
      width: 35em;
      float: left;
    }
    .bookDiscounts li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .6em;
      padding: .4em 0;
      height: 1.4em;
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
      left: -12px;
      top: -5px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }

    .bookDiscounts .badge-price {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D7B;
    line-height: 1em;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 1.9em;
    min-width: 5em;
    border-radius: 0 4px 4px 0;
  }
  `],
  providers: [BookService]
})
export class AppComponent implements OnInit {
  title = 'Book discounts library';
  bookDiscounts: BookDiscount[];
  selectedBookDiscount: BookDiscount;
  page: number = 0;

  constructor(private bookService: BookService) { }

  getBookDiscounts(): void {
    this.bookService.getBookDiscounts("", this.page).then((bookDiscounts => {
      console.log(bookDiscounts);
      this.bookDiscounts = bookDiscounts;
    }))
  }

  ngOnInit(): void {
    this.getBookDiscounts();
  }

  onSelect(bookDiscount: BookDiscount): void {
    this.selectedBookDiscount = bookDiscount;
  }

  searchEvent(query: string): void {
    this.bookService.getBookDiscounts(query, 0).then((bookDiscounts => {
      console.log(bookDiscounts);
      this.bookDiscounts = bookDiscounts;
    }))
  }

  nextPage(query: string): void {
    this.page += 1;
    this.bookService.getBookDiscounts(query, this.page).then((bookDiscounts => {
      console.log(bookDiscounts);
      this.bookDiscounts = bookDiscounts;
    }))
  }

  previousPage(query: string): void {
    if (this.page >= 0) {
      this.page -= 1;
      this.bookService.getBookDiscounts(query, this.page).then((bookDiscounts => {
        console.log(bookDiscounts);
        this.bookDiscounts = bookDiscounts;
      }))
    }
  }
}
