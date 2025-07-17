import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgParticlesModule } from 'ng-particles';

@Component({
  selector: 'app-login',
  imports: [FormsModule,NgParticlesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reg:Registration=new Registration()
  logininterest:any
  loginname:any
  constructor(private regserv:RegistrationService,private router:Router) {  }
  email: string = '';
  password: string = '';
  particlesOptions = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }}}

  submitdata() {
    this.regserv.login(this.reg.emailid,this.reg.password).subscribe((data:any)=>{
      if(data.length>0){
        alert("Login successful")
        localStorage.setItem("emailid",this.reg.emailid)
        localStorage.setItem("usertype","user")
        this.router.navigate(["/profile"])
      }
      else{
      alert("Invalid email or password")
      }
    })
  }

}
