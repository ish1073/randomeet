import { Component, OnInit} from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  rarr:Profile[]=[]
  userinterest:any
  filteruser:any[]=[]
    constructor(private rserv:ProfileService,private router:Router) {
    
    }
    ngOnInit(){
      this.rserv.getAll().subscribe(data=>{
        if(data.length>0)
          this.rarr=data
      })
    }

    chatnow(user:Profile){
      this.router.navigate(["/pchat",user.emailid])
    }
}
