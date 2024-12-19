import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  messages: { user: string; message: string; timestamp: string }[] = [];

  // Binds the input for new messages
  newMessage: string = '';
  userName: string = 'User';  // Default user name

  constructor() {}

  ngOnInit(): void {
    // Retrieve messages from localStorage
    this.loadMessages();
  }

  // Loads messages from localStorage
  loadMessages(): void {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    }
  }

  // Saves messages to localStorage
  saveMessages(): void {
    localStorage.setItem('chatMessages', JSON.stringify(this.messages));
  }

  // Adds a new message to the chat
  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message = {
        user: this.userName,
        message: this.newMessage,
        timestamp: new Date().toLocaleTimeString()
      };

      this.messages.push(message);
      this.saveMessages();  // Save updated messages to localStorage
      this.newMessage = '';  // Clear the input field
    }
  }

  // Optionally, allow users to change their username
  changeUserName(newName: string): void {
    this.userName = newName;
  }
}