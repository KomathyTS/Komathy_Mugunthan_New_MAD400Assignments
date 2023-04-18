import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChessPlayerService {

 private httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/jason'
  })
 };

 constructor(private http:HttpClient) {

 }

  getContent(): Observable<IContent[]> {
    return this.http.get<IContent[]>("api/games");
  }

  getContentItem(index: number): Observable<IContent> {
    console.warn("Got to get content item");
    return this.http.get<IContent>("api/games/" + index);
  }

  addContentItem(item: IContent): Observable<IContent>{
    return this.http.post<IContent>("api/games", item, this.httpOptions);
  }

  updateContentItem(item: IContent): Observable<IContent>{
    return this.http.put<IContent>("api/games", item, this.httpOptions);
  }

  deleteContentItem(index: number): Observable<unknown> {
    return this.http.delete("api/games/" + index, this.httpOptions)
  }


}