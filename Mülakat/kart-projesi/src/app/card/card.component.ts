import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() addItem = new EventEmitter<void>();
  @Output() deleteCard = new EventEmitter<void>();

  addNewItem() {
    this.addItem.emit();
  }

  removeCard() {
    this.deleteCard.emit();
  }
}
