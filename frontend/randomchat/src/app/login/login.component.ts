import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reg:Registration=new Registration()
  logininterest:any
  loginname:any
  constructor(private regserv:RegistrationService,private router:Router) {  }

  submitdata() {
    this.regserv.login(this.reg.emailid,this.reg.password).subscribe(data=>{
      if(data.length>0){
        alert("Login successful")
        localStorage.setItem("emailid",this.reg.emailid)
        this.logininterest=localStorage.getItem(this.reg.interest)
        this.regserv.setint(this.logininterest)
        localStorage.setItem(this.loginname,this.reg.username)
        localStorage.setItem("usertype","user")
        this.router.navigate(["/"])
      }
      else{
      alert("Invalid email or password")
      }
    })
  }

}
