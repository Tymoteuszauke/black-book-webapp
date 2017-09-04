import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BookDiscount } from './model/bookDiscount';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  constructor(private http: Http) { }

  getBookDiscounts(): Promise<BookDiscount[]> {
    return Promise.resolve(this.getBookDiscountsFromApi());
  }

  // See the "Take it slow" appendix
  getBooksSlowly(): Promise<BookDiscount[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getBookDiscounts()), 2000);
    });
  }

  getBookDiscountsFromApi(): Promise<BookDiscount[]> {
    return this.http.get('http://localhost:8080/api/book-discounts')
      .toPromise()
      .then(response => {
        console.log(response)
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
