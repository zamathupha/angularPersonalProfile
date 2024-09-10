import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HearderComponent } from "./hearder/hearder.component";
import { NavComponent } from "./nav/nav.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HearderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngulerPortfolioWebside';
}
