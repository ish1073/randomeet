import { Component } from '@angular/core';
import { Adminlogin } from '../models/adminlogin';
import { FormsModule } from '@angular/forms';
import { AdminloginService } from '../services/adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  adm:Adminlogin=new Adminlogin()
  constructor(private admserv:AdminloginService,private router:Router) {}
  submitdata(){
    this.admserv.login(this.adm.emailid,this.adm.password).subscribe(data=>{
      if(data.length>0) {
        alert("Admin Login successful")
        localStorage.setItem("emailid",this.adm.emailid)
        localStorage.setItem("usertype","admin")
        this.router.navigate(["/"])
      }
      else{
        alert("Invalid email or password")
        }
    })
  }
}