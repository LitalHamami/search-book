import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class SearchPageService {
  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<any>{
    const encodedURI  = encodeURI("https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=20")
    return this.http.get(encodedURI);
  }

  getBookByTitle(term): Observable<any>{
    const encodedURI  = encodeURI("https://www.googleapis.com/books/v1/volumes?q="+term+"&maxResults=20")
    return this.http.get(encodedURI);
  }
}
