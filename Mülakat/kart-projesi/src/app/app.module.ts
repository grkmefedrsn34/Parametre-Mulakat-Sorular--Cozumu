import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Rota modülünü ekleyin
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Rota modülünü ekleyin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
