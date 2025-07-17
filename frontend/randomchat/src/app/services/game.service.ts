import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:9009/api/game';

  constructor(private http: HttpClient) {}

  submitStatements(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, data);
  }

  getOpponentData(opponentId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/opponent/${opponentId}`);
  }
}
