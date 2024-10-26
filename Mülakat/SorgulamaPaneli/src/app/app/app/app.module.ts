import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { SorgulamaPaneliComponent } from '../../sorgulama-paneli/sorgulama-paneli.component';

@NgModule({
  imports: [
    BrowserModule,

  ],

  declarations: [],
  providers: [],

  bootstrap: []
})
export class AppModule { }

// Bootstrap standalone components
import { bootstrapApplication } from '@angular/platform-browser';
bootstrapApplication(AppComponent);
