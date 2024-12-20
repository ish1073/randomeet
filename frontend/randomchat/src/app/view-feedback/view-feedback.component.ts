import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-feedback',
  imports: [CommonModule],
  templateUrl: './view-feedback.component.html',
  styleUrl: './view-feedback.component.css'
})
export class ViewFeedbackComponent implements OnInit {
  farr:Feedback[]=[]
  constructor(private fserv:FeedbackService) {}
  ngOnInit(): void {
    this.fserv.getallfeedback().subscribe(data=>{
      if(data.length>0) {
          this.farr=data
      }
    })
  }

}
