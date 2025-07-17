import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-notifications',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-notifications.component.html',
  styleUrl: './user-notifications.component.css'
})
export class UserNotificationsComponent implements OnInit{
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationService.getUnseenNotifications().subscribe((data) => {
      this.notifications = data;
      if(data.length>0)
        alert("New Notification")
      else
        if(confirm("No new notification\nWant to View all notifications")==true){
          this.allNotifications();
        }
    });
  }
  
  allNotifications() {
    this.notificationService.getNotifications().subscribe((data) => {
      this.notifications = data;
    });
  }
  markAsSeen(id: number) {
    this.notificationService.markAsSeen(id).subscribe(() => {
      this.loadNotifications();
    
    });
  }
}
