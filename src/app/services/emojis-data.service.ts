import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emoji } from '../models/emoji';

@Injectable({
  providedIn: 'root',
})
export class EmojisDataService {
  private emojisUrl = 'http://localhost:3000/api/emojis';

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
}
