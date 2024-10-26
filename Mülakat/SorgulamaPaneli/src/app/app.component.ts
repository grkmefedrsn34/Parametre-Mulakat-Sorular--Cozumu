import { Component } from '@angular/core';
import { SorgulamaPaneliComponent } from '../app/sorgulama-paneli/sorgulama-paneli.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SorgulamaPaneliComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
