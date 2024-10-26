import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sorgu-sonuc',
  templateUrl: './sorgu-sonuc.component.html',
  styleUrls: ['./sorgu-sonuc.component.css'],
  standalone: true
})
export class SorguSonucComponent {
  @Input() selectedCriteria: string[] = [];
}
