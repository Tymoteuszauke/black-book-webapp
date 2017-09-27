import { Component, OnInit } from '@angular/core';

import { BookDiscount } from '../../model/bookDiscount';
import { BookService } from '../../service/bookService/book.service';
import { GenreService } from '../../service/genreService/genre.service'
import { Genre } from '../../model/genre'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
  ,
  styleUrls: ['./app.component.css'],
  providers: [BookService, GenreService]
})
export class AppComponent implements OnInit {
  title = 'Book discounts library';
  bookDiscounts: BookDiscount[];
  genres: Genre[];
  selectedBookDiscount: BookDiscount;
  page: number = 0;
  priceFrom: string = '0';
  priceTo: string = '2000';

  detailsHidden: boolean = true;
  detailsId: number;

  constructor(private bookService: BookService, private genreService: GenreService) { }

  getBookDiscounts(): void {
    this.bookService.getBookDiscounts("", this.page, '0', '2000').then((bookDiscounts => {
      console.log(bookDiscounts);
      console.log(this.genres)
      this.bookDiscounts = bookDiscounts;
    }))
  }

  ngOnInit(): void {
    this.getBookDiscounts();
    this.genreService.getGenres().subscribe(genres => this.genres = genres);
  }

  getStyle(bookDiscount: BookDiscount) {
    if (this.detailsHidden || bookDiscount.id != this.detailsId) {
      return 'none';
    } else {
      return '';
    }
  }

  onSelect(bookDiscount: BookDiscount): void {
    this.selectedBookDiscount = bookDiscount;
    this.detailsHidden = !this.detailsHidden;
    this.detailsId = bookDiscount.id;
  }

  updatePriceFrom(priceFrom: string): void {
    console.log(priceFrom)
    this.priceFrom = priceFrom;
  }

  updatePriceTo(priceTo: string): void {
    this.priceTo = priceTo;
  }

  searchEvent(query: string, priceFrom: string, priceTo: string): void {
    this.bookService.getBookDiscounts(query, 0, priceFrom, priceTo).then((bookDiscounts => {
      console.log(bookDiscounts);
      this.bookDiscounts = bookDiscounts;
    }))
  }

  nextPage(query: string): void {
    this.page += 1;
    this.bookService.getBookDiscounts(query, this.page, this.priceFrom, this.priceTo).then((bookDiscounts => {
      console.log(bookDiscounts);
      this.bookDiscounts = bookDiscounts;
    }))
  }

  previousPage(query: string): void {
    if (this.page >= 0) {
      this.page -= 1;
      this.bookService.getBookDiscounts(query, this.page, this.priceFrom, this.priceTo).then((bookDiscounts => {
        console.log(bookDiscounts);
        this.bookDiscounts = bookDiscounts;
      }))
    }
  }
}
