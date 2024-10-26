import { Routes } from '@angular/router';
import { GorevListesiComponent } from './gorev-listesi/gorev-listesi.component';
import { GorevEkleComponent } from './gorev-ekle/gorev-ekle.component';

export const routes: Routes = [
  { path: '', component: GorevListesiComponent },
  { path: 'gorev-ekle', component: GorevEkleComponent }
];
