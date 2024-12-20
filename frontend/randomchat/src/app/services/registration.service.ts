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
  private rg:Registration[]=[]
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

  loginm(){
    return localStorage.setItem('userName','loginname')
  }
  getint():string{
    return this.loginint
  }
  setint(item:string){
    this.loginint=this.loginint
  }
  getrecords(): Registration[]{
    return this.rg.filter(r=>r.interest===this.loginint)
  }
}
