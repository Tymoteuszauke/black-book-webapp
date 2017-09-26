import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BookDiscount } from '../../model/bookDiscount';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  constructor(private http: Http) { }

  totalPages: number;
  currentPage: number;

  getBookDiscountsQueried(query: string, page: number, priceFrom: string, priceTo: string, genreId: number): Observable<BookDiscount[]> {
    return this.http.get('http://localhost:8101/api/book-discounts?query=' + query + '&page=' + page + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo + '&genre=' + 4)
      .map(response => {
        console.log('http://localhost:8101/api/book-discounts?query=' + query + '&page=' + page + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo + '&genre=' + 4);
        console.log(response)
        this.totalPages = response.json().totalPages;
        this.currentPage = response.json().number;
        return response.json().content as BookDiscount[];
      })
      .catch(this.handleError);
  }

  getTotalPages(): number {
    return this.totalPages;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
