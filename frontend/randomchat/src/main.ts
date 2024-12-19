import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChatComponent } from './app/chat/chat.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
platformBrowserDynamic().bootstrapModule(ChatComponent)
.catch((err: any) => console.error(err));
