import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BookDiscount } from './model/bookDiscount';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  constructor(private http: Http) { }

  getBookDiscounts(query: string, page: number): Promise<BookDiscount[]> {
    return Promise.resolve(this.getBookDiscountsQueried(query, page));
  }

  // See the "Take it slow" appendix
  // getBooksSlowly(): Promise<BookDiscount[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getBookDiscounts()), 2000);
  //   });
  // }

  getBookDiscountsQueried(query: string, page: number): Promise<BookDiscount[]> {
    return this.http.get('http://localhost:8101/api/book-discounts?query=' + query + '&page=' + page)
      .toPromise()
      .then(response => {
        console.log(response)
        return response.json().content;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
