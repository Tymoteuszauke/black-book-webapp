import { Component, Input } from '@angular/core';
import { BookDiscount } from './model/bookDiscount';

@Component({
  selector: 'book-discount-detail',
  template: `
    <div *ngIf="bookDiscount">
      <h2>{{bookDiscount.bookView.title}} details!</h2>
      <div>
        <label>id: </label>{{bookDiscount.id}}
      </div>
      <div>
        <label>author: </label>
        <input [(ngModel)]="bookDiscount.bookView.authors" placeholder="authors"/>
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="bookDiscount.bookView.title" placeholder="title"/>
      </div>
      <div>
        <label>price: </label>
        <input [(ngModel)]="bookDiscount.price" placeholder="price"/>
      </div>
      <div>
        <label>discount: </label>
        <input [(ngModel)]="bookDiscount.discountDetails" placeholder="discount"/>
      </div>
      <div>
        <img src="{{bookDiscount.bookView.coverUrl}}" width="50%">
      </div>
    </div>
  `
})
export class BookDetailComponent {
  @Input() bookDiscount: BookDiscount;
}
