import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  private apiUrl = 'http://localhost:9009/api/events';

  constructor(private http: HttpClient) {}
  getEvents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEventsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${category}`);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, event);
  }
}
