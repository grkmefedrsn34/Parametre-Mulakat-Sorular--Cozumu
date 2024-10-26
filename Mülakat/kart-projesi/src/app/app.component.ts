import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[] = [];
  cards: any[] = []; // Kartları tutmak için yeni bir dizi

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getItems();
  }

  addItem() {
    const newItem = { name: `Item ${this.items.length + 1}` };
    this.dataService.addItem(newItem);
    this.items = this.dataService.getItems(); // Listeyi güncelle
  }

  deleteItem(index: number) {
    this.dataService.deleteItem(index);
    this.items = this.dataService.getItems(); // Listeyi güncelle
  }

  addCard() {
    this.cards.push({ id: this.cards.length + 1 });
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}
