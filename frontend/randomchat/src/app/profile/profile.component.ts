import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Output() profileUpdated = new EventEmitter<any>();

  username: string = '';
  avatar: any = null;

  onAvatarChange(event: any) {
    this.avatar = event.target.files[0];
  }

  saveProfile() {
    const profileData = {
      username: this.username,
      avatar: this.avatar,
    };
    this.profileUpdated.emit(profileData);
  }
}
