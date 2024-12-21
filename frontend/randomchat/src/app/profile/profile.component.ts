import { Component, OnInit} from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  rarr:Registration[]=[]
  userinterest:any
  filteruser:any[]=[]
    constructor(private rserv:RegistrationService,private router:Router) {
    
    }
    ngOnInit(){
      this.rserv.getAll().subscribe(data=>{
        if(data.length>0)
          this.rarr=data
      })
    }

    chatnow(){
      this.router.navigate(["/chat"])
    }
}
