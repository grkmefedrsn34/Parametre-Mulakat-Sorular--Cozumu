import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature: any;
  title = 'harita-uygulamasi';

  onFeatureSelected(feature: any) {
    this.selectedFeature = feature;
  }
}

