import { Component, Input } from '@angular/core';
import { BookDiscount } from './model/bookDiscount';

@Component({
  selector: 'book-discount-detail',
  template: `
    <div class=bookDiscountDetailsContainer *ngIf="bookDiscount">
      <h2>{{bookDiscount.bookView.title}} details!</h2>
      <div div class=bookDiscountInfoLineContainer>
        <label>id: </label>{{bookDiscount.id}}
      </div>
      <div div class=bookDiscountInfoLineContainer>
        <label>author: </label>
        <input [(ngModel)]="bookDiscount.bookView.authors" placeholder="authors"/>
      </div>
      <div div class=bookDiscountInfoLineContainer>
        <label>name: </label>
        <input [(ngModel)]="bookDiscount.bookView.title" placeholder="title"/>
      </div>
      <div div class=bookDiscountInfoLineContainer>
        <label>price: </label>
        <input [(ngModel)]="bookDiscount.price" placeholder="price"/>
      </div>
      <div class=bookDiscountInfoLineContainer>
        <label>discount: </label>
        <input [(ngModel)]="bookDiscount.discountDetails" placeholder="discount"/>
      </div>
      <div class=bookDiscountDetailsCoverContainer>
        <img src="{{bookDiscount.bookView.coverUrl}}" width="40%">
      </div>
    </div>
  `,
  styles: [
    `
    .bookDiscountDetailsContainer {
      margin: 0;
      background: #EEE;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%)
    },
    .bookDiscountDetailsCoverContainer {
      margin: 20px;
    },
    .bookDiscountInfoLineContainer {
      padding: 12px;
      background: yellow;
    }
    `
  ]
})
export class BookDetailComponent {
  @Input() bookDiscount: BookDiscount;
}
