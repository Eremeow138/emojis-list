import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Emoji } from '../models/emoji';

function handleError<T>(operation = 'operation', result?: T) {
  return (error: Response): Observable<T> => {
    // TODO: better job of transforming error for user consumption
    console.error(`${operation} failed: ${error.status}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

@Injectable({
  providedIn: 'root',
})
export class EmojisDataService {
  private emojisUrl = 'http://localhost:3000/api/emojis';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllEmojis(): Observable<Emoji[]> {
    return this.http.get<Emoji[]>(`${this.emojisUrl}`);
  }

  getFavoriteEmojis(): Observable<Emoji[]> {
    return this.http.get<Emoji[]>(`${this.emojisUrl}/favorite`);
  }

  getRemovedEmojis(): Observable<Emoji[]> {
    return this.http.get<Emoji[]>(`${this.emojisUrl}/removed`);
  }

  setToFavoritesEmojis(emoji: Emoji): Observable<Emoji> {
    const url = `${this.emojisUrl}/setFavorite`;
    return this.http
      .put<Emoji>(url, emoji, this.httpOptions)
      .pipe(catchError(handleError<Emoji>(`put error`)));
  }
}
