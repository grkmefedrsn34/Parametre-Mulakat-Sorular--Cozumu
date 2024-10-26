import { Component, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { KartModel } from '../../model/kart-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  kartlar: KartModel[] = [];

  constructor(private fakeHttpService: FakeHttpService) {}

  ngOnInit(): void {
    this.fakeHttpService.getData().subscribe(data => {
      this.kartlar = data;
    });
  }

  addKart(): void {
    const newKart: KartModel = {
      id: this.kartlar.length,
      title: `Title ${this.kartlar.length + 1}`,
      content: `Content ${this.kartlar.length + 1}`
    };
    this.fakeHttpService.addData(newKart);
    this.kartlar.push(newKart);
  }

  removeKart(id: number): void {
    this.fakeHttpService.removeData(id);
    this.kartlar = this.kartlar.filter(kart => kart.id !== id);
  }
}
