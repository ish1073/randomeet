import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:9009/api/notifications';

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUnseenNotifications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/unseen`);
  }

  sendNotification(notification: any): Observable<any> {
    return this.http.post(this.apiUrl, notification);
  }

  markAsSeen(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/seen`, {});
  }
}
