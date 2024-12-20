import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-chat',
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit {
  messages: { user: any; message: string; timestamp: string }[] = [];
  newMessage: string = '';
  constructor(private rs:RegistrationService) {}

  userName: any

  ngOnInit(): void {
   
    this.loadMessages();
  }

  loadMessages(): void {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    }
  }

  saveMessages(): void {
    localStorage.setItem('chatMessages', JSON.stringify(this.messages));
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message = {
        user:  this.rs.loginm,
        message: this.newMessage,
        timestamp: new Date().toLocaleTimeString()
      };

      this.messages.push(message);
      this.saveMessages();  
      this.newMessage = '';  
    }
  }
  


}