import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item: any;
  @Input() template: any;
  @Input() index: number = 0;
  @Output() deleteItem = new EventEmitter<number>();

  onDeleteItem() {
    this.deleteItem.emit(this.index);
  }
}
