import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,Router,Route } from '@angular/router';

@Component({
  selector: 'app-p9',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './p9.component.html',
  standalone: true,
  styleUrl: './p9.component.scss'
})

export class P9Component {
  fullText: string = "Hello, welcome to my portfolio! Iam Sedik Khaled Front-End Developer";
  displayText: string = '';
  index: number = 0;
  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayText += this.fullText[this.index];
        this.index++;
      }
    }, 200)}
  // constructor(private router: Router) {}
  // goToAbout() {
  //   this.router.navigate(['/about']);
  // }
  // goToprojects() {
  //   this.router.navigate(['/projects']);
  // }
  
}
