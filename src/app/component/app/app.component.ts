import { Component, OnInit } from '@angular/core';

import { BookDiscount } from '../../model/bookDiscount';
import { HighestPrice } from '../../model/highestPrice'
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
  currentGenre: string = '';
  selectedBookDiscount: BookDiscount;
  page: number = 0;
  priceFrom: string = '0';
  priceTo: string = '0';
  maxPriceTo: number = 0;

  constructor(private bookService: BookService, private genreService: GenreService) {
    this.genres = [];
  }

  getBookDiscounts(): void {
    this.bookService.getBookDiscountsQueried("", this.page, '0', '2000', this.currentGenre)
      .subscribe((bookDiscounts => {
        console.log(bookDiscounts);
        console.log(this.genres)
        this.bookDiscounts = bookDiscounts;
      }))
  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
      this.genres.unshift(new Genre(0, ''));
    });
    this.bookService.getHighestBookPrice().subscribe(highestPrice => {
      this.maxPriceTo = highestPrice;
      this.priceTo = this.maxPriceTo.toString()
    })
    this.getBookDiscounts();
  }

  onSelect(bookDiscount: BookDiscount): void {
    this.selectedBookDiscount = bookDiscount;
  }

  updatePriceFrom(priceFrom: string): void {
    console.log(priceFrom)
    this.priceFrom = priceFrom;
  }

  updatePriceTo(priceTo: string): void {
    this.priceTo = priceTo;
  }

  searchEvent(query: string, priceFrom: string, priceTo: string, genre: string): void {
    this.bookService.getBookDiscountsQueried(query, 0, priceFrom, priceTo, genre)
      .subscribe((bookDiscounts => {
        console.log(bookDiscounts);
        this.bookDiscounts = bookDiscounts;
      }))
  }

  nextPage(query: string): void {
    this.page += 1;
    this.bookService.getBookDiscountsQueried(query, this.page, this.priceFrom, this.priceTo, this.currentGenre)
      .subscribe((bookDiscounts => {
        console.log(bookDiscounts);
        this.bookDiscounts = bookDiscounts;
      }))
  }

  previousPage(query: string): void {
    if (this.page >= 0) {
      this.page -= 1;
      this.bookService.getBookDiscountsQueried(query, this.page, this.priceFrom, this.priceTo, this.currentGenre)
        .subscribe((bookDiscounts => {
          console.log(bookDiscounts);
          this.bookDiscounts = bookDiscounts;
        }))
    }
  }

  selectGenre(name: string) {
    this.currentGenre = name;
  }
}
