import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-customization',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile-customization.component.html',
  styleUrl: './profile-customization.component.css'
})
export class ProfileCustomizationComponent implements OnInit {
  profile = {
    emailid: '',
    username: '',
    bio: '',
    themeColor: '#ffffff',
    interest:''
  };
  constructor(private profileService: ProfileService) {}

  ngOnInit():void {
    const emailid = this.profileService.getLoggedInEmail();
    if (emailid) {
      this.profile.emailid = emailid;
      this.loadProfile(emailid);
    }

  }

  loadProfile(emailid:string):void {
    this.profileService.getProfile(emailid).subscribe((data) => {
      this.profile ={ ...data,emailid };
    });
  }

  saveProfile(): void {
    this.profileService.updateProfile(this.profile.emailid, this.profile).subscribe((updatedProfile) => {
      this.profile = updatedProfile;
      if(updatedProfile!=null){
        alert("Profile saved successfully")

      }else{
        alert("Unsucessfull")}
    });
  }
}
