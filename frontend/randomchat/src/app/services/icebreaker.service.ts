import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IcebreakerService {
  private prompts: string[] = [
    "If you could travel anywhere, where would you go?",
    "What's the most adventurous thing you've ever done?",
    "If you could have dinner with any historical figure, who would it be?",
    "What's a fun fact about yourself?",
    "If you won the lottery, what’s the first thing you’d do?",
    "What's your favorite way to spend a weekend?",
    "If you could have any superpower, what would it be?",
    "What’s your favorite movie or TV show?",
    "If you could swap lives with someone for a day, who would it be?",
    "What's the best advice you've ever received?"
  ];

  constructor() {}

  getRandomPrompt(): string {
    const randomIndex = Math.floor(Math.random() * this.prompts.length);
    return this.prompts[randomIndex];
  }
}