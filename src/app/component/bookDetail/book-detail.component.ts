import { Component, Input } from '@angular/core';
import { BookDiscount } from '../../model/bookDiscount';

@Component({
  selector: 'book-discount-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  @Input() bookDiscount: BookDiscount;
}
