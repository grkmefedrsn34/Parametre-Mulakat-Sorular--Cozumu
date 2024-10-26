import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KartModel } from '../../model/kart-model';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent {
  @Input() kart!: KartModel;
  @Output() remove = new EventEmitter<number>();

  removeKart(): void {
    this.remove.emit(this.kart.id);
  }
}
