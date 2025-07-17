import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  reg:Registration=new Registration()
  constructor(private regserv:RegistrationService,private router:Router){}

  submitdata() {
    this.regserv.save(this.reg).subscribe(data=>{
      if(data!=null){
        alert("Registration Successful")
        this.router.navigate(["/login"])
      }
    })
  }
}
