import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Bookstore } from '../../model/bookstore';

@Injectable()
export class BookstoreService {
  constructor(private http: Http) {}

  getBookstores(): Observable<Bookstore[]> {
    return this.http.get(`http://localhost:8101/api/bookstores`)
    .map((res: Response) => res.json() as Bookstore[])
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
