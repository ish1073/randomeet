import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private apiUrl = 'http://localhost:9009/api/profile';

  constructor(private http: HttpClient) {}
  getAll():Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl+"/profiles")
  }
 
  getProfile(emailid: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/${emailid}`);
  }

  updateProfile(emailid: string, profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiUrl}/${emailid}`, profile);
  }
  getLoggedInEmail(): string | null {
    return localStorage.getItem("emailid");
  }

  setLoggedInEmail(emailid: string): void {
    localStorage.setItem('userEmail', emailid);
  }

}