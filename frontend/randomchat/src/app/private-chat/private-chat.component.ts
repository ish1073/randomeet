import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { PrivateChatService } from '../services/private-chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { PrivateChatMessage } from '../models/chat';

@Component({
  selector: 'app-private-chat',
    imports: [CommonModule, FormsModule],
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit, OnDestroy {
  messages: PrivateChatMessage[] = [];
  newMessage: string = '';
  sender: string = '';
  receiver: string = '';

  constructor(public chatService: PrivateChatService,private router:Router, private route: ActivatedRoute,  private zone: NgZone) {}

  ngOnInit(): void {
    // Get sender info (from localStorage after login)
    const emailid = this.chatService.getLoggedInEmail();
    if (emailid) {
      this.sender= emailid;
      this.chatService.connect(this.sender);}
      this.receiver = this.route.snapshot.paramMap.get('receiver') || '';
      this.chatService.getChatHistory(this.sender, this.receiver).subscribe(data => {
        this.messages = data;
      });
    // Receiver could come from selection or route (hardcoded for now)
    
    
    // Start listening
    

   

    // Listen for real-time incoming messages
    this.chatService.messages$.subscribe((msg) => {
      if (msg &&
        ((msg.sender === this.sender && msg.receiver === this.receiver) ||
         (msg.sender === this.receiver && msg.receiver === this.sender))) {
          this.zone.run(() => {
            this.messages.push(msg);
          });
        this.messages.push(msg);
        console.log("Message received and pushing to array:", msg);
        this.scrollToBottom();
      }
    });
  }
  // Triggered when user sends message
  sendMessage() {
    if (this.newMessage.trim()) {
      const msg = {
        sender: this.sender,
        receiver: this.receiver,
        message: this.newMessage,
        timestamp: new Date().toISOString()
      };
      this.messages.push({ ...msg });
      this.chatService.sendMessage(msg);
      this.newMessage = ''
    }
  }
 
  scrollToBottom() {
    setTimeout(() => {
      const chatBox = document.querySelector('.chat-box');
      if (chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }, 100);
  }
  ngOnDestroy(): void {
    this.chatService.disconnect();
  }
}

