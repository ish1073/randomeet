import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-profiles',
  imports: [CommonModule,FormsModule],
  templateUrl: './view-profiles.component.html',
  styleUrl: './view-profiles.component.css'
})
export class ViewProfilesComponent implements OnInit{
  rarr:Profile[]=[]
  
      constructor(private rserv:ProfileService,private router:Router) {
      
      }
  ngOnInit(){
    this.rserv.getAll().subscribe(data=>{
      if(data.length>0)
        this.rarr=data
    })
  }
}
