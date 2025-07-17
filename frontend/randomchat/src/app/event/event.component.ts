import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  imports: [CommonModule,FormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {
  
  events: any[] = [];
   selectedCategory = '';
  newEvent = { title: '', description: '', date: '', contact: '', category: '' };

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    if (this.selectedCategory) {
      this.eventService.getEventsByCategory(this.selectedCategory).subscribe((data) => {
        this.events = data;
      });
    }
    else{
      this.eventService.getEvents().subscribe((data) => {
        this.events = data;
      });
    }
  }


  addEvent() {
    this.eventService.addEvent(this.newEvent).subscribe(() => {
      this.loadEvents();
      this.newEvent = { title: '', description: '', date: '', contact: '', category: '' };
    });
  }
}