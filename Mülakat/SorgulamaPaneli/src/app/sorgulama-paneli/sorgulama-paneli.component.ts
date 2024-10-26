import { Component } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sorgulama-paneli',
  templateUrl: './sorgulama-paneli.component.html',
  styleUrls: ['./sorgulama-paneli.component.css'],
  standalone: true,
  imports: [MultiSelectModule, ButtonModule, TableModule, FormsModule, ReactiveFormsModule]
})
export class SorgulamaPaneliComponent {
  criteria1 = [{ label: 'Seçenek 1', value: '1' }, { label: 'Seçenek 2', value: '2' }];
  criteria2 = [{ label: 'Seçenek 3', value: '3' }, { label: 'Seçenek 4', value: '4' }];
  criteria3 = [{ label: 'Seçenek 5', value: '5' }, { label: 'Seçenek 6', value: '6' }];
  criteria4 = [{ label: 'Seçenek 7', value: '7' }, { label: 'Seçenek 8', value: '8' }];
  criteria5 = [{ label: 'Seçenek 9', value: '9' }, { label: 'Seçenek 10', value: '10' }];

  selectedCriteria1: any[] = [];
  selectedCriteria2: any[] = [];
  selectedCriteria3: any[] = [];
  selectedCriteria4: any[] = [];
  selectedCriteria5: any[] = [];

  results: any[] = [];

  query() {
    this.results = [
      { property1: 'Değer 1', property2: 'Değer 2', property3: 'Değer 3' },
      { property1: 'Değer 4', property2: 'Değer 5', property3: 'Değer 6' }
    ];
    console.log(this.results); // Sonuçları kontrol etmek için
  }
}
