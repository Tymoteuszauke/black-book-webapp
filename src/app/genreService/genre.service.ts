import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Genre } from '../model/genre';

@Injectable()
export class GenreService {
  constructor(private http: Http) {}

  getGenres(): Observable<Genre[]> {
    return this.http.get(`http://localhost:8101/api/genres`)
    .map((res: Response) => res.json() as Genre[])
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
