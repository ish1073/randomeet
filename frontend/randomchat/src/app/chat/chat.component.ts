import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class ChatComponent implements OnInit,OnChanges {
  messages: { user: string; message: string; timestamp: string }[] = []
  newMessage: string = ''
  userName:  string = ''
  constructor(private rs:RegistrationService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['triggerRefresh'] && changes['triggerRefresh'].currentValue){
      this.loadMessages
    }
  }

  ngOnInit(): void {
   this.loadMessages
   this.userName=JSON.parse(localStorage.getItem('loginuser')||'{}').username
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
        user:  this.userName,
        message: this.newMessage,
        timestamp: new Date().toLocaleTimeString()
      };

      this.messages.push(message);
      this.saveMessages();  
      this.newMessage = '';  
    }
  }
  
  deleteMessage(): void {
    localStorage.removeItem('storedMessages');
  }

}