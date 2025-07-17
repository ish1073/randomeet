import { Component, OnInit } from '@angular/core';
import { IcebreakerService } from '../services/icebreaker.service';

@Component({
  selector: 'app-icebreaker',
  imports: [],
  templateUrl: './icebreaker.component.html',
  styleUrl: './icebreaker.component.css'
})
export class IcebreakerComponent implements OnInit{
  prompt: string = '';

  constructor(private icebreakerService: IcebreakerService) {}

  ngOnInit(): void {
    this.getNewPrompt();
  }

  getNewPrompt(): void {
    this.prompt = this.icebreakerService.getRandomPrompt();
  }
}


