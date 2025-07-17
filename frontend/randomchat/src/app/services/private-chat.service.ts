import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject, Observable,Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PrivateChatMessage } from '../models/chat';

@Injectable({ providedIn: 'root' })
export class PrivateChatService {
  
  private stompClient: Client = new Client;
  private BASE_URL = 'http://localhost:9009'; // Adjust if backend runs on a different port
  private messageSubject = new BehaviorSubject<any>(null); // Pushes incoming messages
  messages$ = this.messageSubject.asObservable(); // Components subscribe to this
  private socket = new SockJS('http://localhost:9009/chat-websocket');
  isConnected: boolean = false;
  onMessageReceived: any;
  constructor(private http: HttpClient) {}

  // WebSocket connection initialization
  connect(username: string) {
    this.stompClient = new Client({
      webSocketFactory: () =>this.socket,
      reconnectDelay: 2000, // Auto-reconnect
    });

    this.stompClient.onConnect = () => {
      console.log('✅ STOMP connected');
      // ✅ Now it's safe to subscribe or send messages
      this.isConnected = true;
      this.stompClient.subscribe(`/user/${username}/queue/messages`, (message: Message) => {
        const msg = JSON.parse(message.body);
        this.messageSubject.next(msg);// Push the message to any subscribers
      });
    };

    this.stompClient.activate(); // Open connection
  }

  // Send message through WebSocket
  getLoggedInEmail(): string | null {
    return localStorage.getItem("emailid");
  }

  setLoggedInEmail(emailid: string): void {
    localStorage.setItem('userEmail', emailid);
  }

  sendMessage(msg: any) {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.publish({
        destination: '/app/private-message',
        body: JSON.stringify(msg)
      });
    } else {
      console.warn('⛔ STOMP connection not established yet. Message not sent.');
    }
  }

  // REST call to fetch chat history from DB
  getChatHistory(sender: string, receiver: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/api/private-chat/history/${sender}/${receiver}`);
  }

  disconnect() {
    if (this.stompClient && this.stompClient.active) {
      this.stompClient.deactivate();
    }
  }
}
