import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'book-detail',
  template: `
    <div *ngIf="book">
      <h2>{{book.title}} details!</h2>
      <div>
        <label>id: </label>{{book.id}}
      </div>
      <div>
        <label>author: </label>
        <input [(ngModel)]="book.author" placeholder="author"/>
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="book.title" placeholder="title"/>
      </div>
      <div>
        <label>price: </label>
        <input [(ngModel)]="book.price" placeholder="price"/>
      </div>
    </div>
  `
})
export class BookDetailComponent {
  @Input() book: Book;
}
