import { Component, Input } from '@angular/core';
import { BookDiscount } from './model/bookDiscount';

@Component({
  selector: 'book-discount-detail',
  template: `
    <div class=bookDiscountDetailsContainer *ngIf="bookDiscount">
    <h2>{{bookDiscount.bookView.title}}</h2>
      <div id=linesContainer>
        <div class=bookDiscountInfoLineContainer>
          <label>id: </label>{{bookDiscount.id}}
        </div>
        <div>
          <label>author: </label>
          <input [(ngModel)]="bookDiscount.bookView.authors" placeholder="authors"/>
        </div>
        <div class=bookDiscountInfoLineContainer>
          <label>name: </label>
          <input [(ngModel)]="bookDiscount.bookView.title" placeholder="title"/>
        </div>
        <div class=bookDiscountInfoLineContainer>
          <label>price: </label>
          <input [(ngModel)]="bookDiscount.price" placeholder="price"/>
        </div>
        <div class=bookDiscountInfoLineContainer>
          <label>discount: </label>
          <input [(ngModel)]="bookDiscount.discountDetails" placeholder="discount"/>
        </div>
      </div>
      <div class=bookDiscountDetailsCoverContainer>
        <img src="{{bookDiscount.bookView.coverUrl}}">
      </div>
    </div>
  `,
  styles: [`
    .bookDiscountDetailsContainer {
      margin: 0;
      border-size:20px;
      border-style:solid;
      border-color: #607D8B;
      border-radius: 4px;
      background: #EEE;
      position: absolute;
      width: 600px;
      height: 500px;
      padding: 5px;
      top: 55%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }

    .bookDiscountDetailsCoverContainer {
      margin: 20px;
      height: 400px;
      width: 300px;
      display: flex;
    }

    .bookDiscountInfoLineContainer {
      padding: 1px;
    }

    img {
      height: 400px;
      width: 300px;
      margin-left: 35px;
    }

    #linesContainer {
      float: left;
    }

    `
  ]
})
export class BookDetailComponent {
  @Input() bookDiscount: BookDiscount;
}
