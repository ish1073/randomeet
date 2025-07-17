import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-notifications',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-notifications.component.html',
  styleUrl: './admin-notifications.component.css'
})
export class AdminNotificationsComponent {
  notification = { title: '', message: '' };

  constructor(private notificationService: NotificationService) {}

  sendNotification() {
    this.notificationService.sendNotification(this.notification).subscribe(() => {
      alert('Notification sent successfully!');
      this.notification = { title: '', message: '' };
    });
  }
}
