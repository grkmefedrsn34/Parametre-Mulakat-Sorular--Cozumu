import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  @Output() featureSelected = new EventEmitter<any>();
  view: any;

  // longitude ve latitude değişkenlerini tanımlayın
  longitude: number = 29.0; // Örnek değer
  latitude: number = 41.0;  // Örnek değer

  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  ngOnDestroy(): void {
    if (this.view) {
      this.view.container = null;
    }
  }

  async initializeMap() {
    const [Map, MapView, FeatureLayer] = await loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/layers/FeatureLayer'
    ]);

    const map = new Map({
      basemap: 'streets-navigation-vector'
    });

    this.view = new MapView({
      container: 'viewDiv',
      map: map,
      center: [this.longitude, this.latitude], // Tanımlanan değişkenleri kullanın
      zoom: 10
    });

    const featureLayer = new FeatureLayer({
      url: 'YOUR_FEATURE_LAYER_URL'
    });

    map.add(featureLayer);

    this.view.on('click', (event: any) => {
      this.view.hitTest(event).then((response: any) => {
        if (response.results.length) {
          const graphic = response.results.filter((result: any) => {
            return result.graphic.layer === featureLayer;
          })[0].graphic;

          this.view.popup.open({
            title: graphic.attributes.Name,
            content: `Özet Bilgi: ${graphic.attributes.Description}`, // Popup içeriğini güncelleyin
            location: event.mapPoint
          });

          // Tıklanan objenin bilgilerini emit et
          this.featureSelected.emit(graphic.attributes);
        }
      });
    });
  }
}
