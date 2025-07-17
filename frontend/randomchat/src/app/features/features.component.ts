import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
 constructor(private router:Router) {
    
    }
  start(){
    this.router.navigate(["/register"])
  }
}
