import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BookDiscount } from './model/bookDiscount';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  constructor(private http: Http) { }

  totalPages: number;
  currentPage: number;

  getBookDiscounts(query: string, page: number, priceFrom: string, priceTo: string): Promise<BookDiscount[]> {
    return Promise.resolve(this.getBookDiscountsQueried(query, page, priceFrom, priceTo));
  }

  getBookDiscountsQueried(query: string, page: number, priceFrom: string, priceTo: string): Promise<BookDiscount[]> {
    return this.http.get('http://localhost:8101/api/book-discounts?query=' + query + '&page=' + page + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo)
      .toPromise()
      .then(response => {
        console.log('http://localhost:8101/api/book-discounts?query=' + query + '&page=' + page + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo);
        console.log(response)
        this.totalPages = response.json().totalPages;
        this.currentPage = response.json().number;
        return response.json().content;
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
