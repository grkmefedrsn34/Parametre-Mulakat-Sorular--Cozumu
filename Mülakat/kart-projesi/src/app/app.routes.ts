import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ListItemComponent } from './list-item/list-item.component';

export const appRoutes: Routes = [
  { path: '', component: CardComponent },
  { path: 'card', component: CardComponent },
  { path: 'list-item', component: ListItemComponent }
];
