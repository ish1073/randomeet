import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { importProvidersFrom } from '@angular/core';
import { NavbarComponent } from './app/navbar/navbar.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  