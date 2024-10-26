import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GorevEkleComponent } from './gorev-ekle/gorev-ekle.component';
import { GorevListesiComponent } from './gorev-listesi/gorev-listesi.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, GorevEkleComponent, GorevListesiComponent]
})
export class AppComponent {
  title = 'gorev-yoneticisi';
}
