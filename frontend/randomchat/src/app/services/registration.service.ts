import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from '../models/registration';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private loginint:string=''
  private loginuser:any=null;
  private rg:Registration=new Registration()
serverurl="http://localhost:9009/registration"
  constructor(private http:HttpClient) { }
  getAll():Observable<Registration[]> {
    return this.http.get<Registration[]>(this.serverurl+"/registrations")
  }
  save(r:Registration):Observable<Registration> {
    return this.http.post<Registration>(this.serverurl+"/addreg",r)
  }
  login(e:any,p:any):Observable<Registration[]> {
    return this.http.get<Registration[]>(this.serverurl+"/login/"+e+"/"+p)
  }
  sameInterest(i:string,ei:string):Observable<Registration[]>{
    return this.http.get<Registration[]>(this.serverurl+"/interests",{params:{i,ei}})
  }
  setLoginUser(user:Registration){
    this.loginuser=user
  }
 

}
