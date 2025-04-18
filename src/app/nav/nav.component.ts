import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,Router,Route, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-nav',
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',

  animations: [
    trigger('slideInDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class NavComponent {
constructor(private router: Router) {}
  goToAbout() {
    this.router.navigate(['/about']);
  }
  goToprojects() {
    this.router.navigate(['/projects']);
  }
  goTohome() {
    this.router.navigate(['/home']);
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
