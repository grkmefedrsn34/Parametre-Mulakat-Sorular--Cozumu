import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gorev } from '../models/gorev/gorev.module';
import { GorevService } from '../services/gorev.service';

@Component({
  selector: 'app-gorev-ekle',
  templateUrl: './gorev-ekle.component.html',
  styleUrls: ['./gorev-ekle.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class GorevEkleComponent {
  yeniGorev: Partial<Gorev> = {};

  constructor(private gorevService: GorevService) {}

  gorevEkle() {
    const yeniGorev: Gorev = {
      id: Date.now(),
      tur: this.yeniGorev.tur!,
      icerik: this.yeniGorev.icerik!,
      atananKisi: this.yeniGorev.atananKisi!,
      durum: 'süreçte'
    };
    this.gorevService.gorevEkle(yeniGorev);
    this.yeniGorev = {};
  }
}
