import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from '../app/Components/map/map.component';
import { TableComponent } from '../app/Components/table/table.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/map', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
