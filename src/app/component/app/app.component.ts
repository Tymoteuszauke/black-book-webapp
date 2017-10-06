import { Component, OnInit } from '@angular/core';

import { BookDiscount } from '../../model/bookDiscount';
import { BookService } from '../../service/bookService/book.service';
import { GenreService } from '../../service/genreService/genre.service'
import { Genre } from '../../model/genre'
import { Bookstore } from '../../model/bookstore'
import { BookstoreService } from '../../service/bookstoreService/bookstore.service'
import { SortService } from '../../service/sortService/sort.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
  ,
  styleUrls: ['./app.component.css'],
  providers: [BookService, GenreService, SortService, BookstoreService]
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
  bookstores: Bookstore[];
  currentBookstore: Bookstore;
  currentSort: string = '';
  sortColumns: string[];

  detailsHidden: boolean = true;
  detailsId: number;

  constructor(private bookService: BookService, private genreService: GenreService,
    private sortService: SortService, private bookstoreService: BookstoreService) {
  }

  getBookDiscounts(): void {
    this.bookService.getBookDiscountsQueried("", this.page, '0', '2000', this.currentGenre, this.currentSort)
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
    this.bookstoreService.getBookstores().subscribe(bookstore => {
      this.bookstores = bookstore;
    })
    this.getBookDiscounts();
    this.sortColumns = this.sortService.columns;
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

  searchEvent(query: string, priceFrom: string, priceTo: string, genre: string, sort: string): void {
      this.bookService.getBookDiscountsQueried(query, 0, priceFrom, priceTo, genre, sort)
        .subscribe((bookDiscounts => {
          console.log(bookDiscounts);
          this.bookDiscounts = bookDiscounts;
        }))
    }

    nextPage(query: string): void {
      this.page += 1;
      this.bookService.getBookDiscountsQueried(query, this.page, this.priceFrom, this.priceTo, this.currentGenre, this.currentSort)
        .subscribe((bookDiscounts => {
          console.log(bookDiscounts);
          this.bookDiscounts = bookDiscounts;
        }))
    }

    previousPage(query: string): void {
      if (this.page >= 0) {
        this.page -= 1;
        this.bookService.getBookDiscountsQueried(query, this.page, this.priceFrom, this.priceTo, this.currentGenre, this.currentSort)
          .subscribe((bookDiscounts => {
            console.log(bookDiscounts);
            this.bookDiscounts = bookDiscounts;
          }))
      }
    }

    selectGenre(name: string) {
      this.currentGenre = name;
      console.log(this.currentGenre);
    }

    selectBookstore(bookstore: string) {
      this.currentBookstore = bookstore;
      console.log(this.currentBookstore);
    }

    selectSort(column: string) {
      this.currentSort = column;
      console.log(this.currentSort);
    }
}
