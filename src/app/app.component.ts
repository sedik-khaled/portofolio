import { Component } from '@angular/core';
import { P9Component } from "./p9/p9.component";
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
@Component({
  selector: 'app-root',
  imports: [P9Component, RouterOutlet, NavComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'last-protofolio';
}
