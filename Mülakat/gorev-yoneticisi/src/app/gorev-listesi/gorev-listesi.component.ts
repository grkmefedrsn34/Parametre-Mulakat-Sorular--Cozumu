import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { Gorev } from '../models/gorev/gorev.module';
import { GorevService } from '../services/gorev.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-gorev-listesi',
  templateUrl: './gorev-listesi.component.html',
  styleUrls: ['./gorev-listesi.component.css'],
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, ChartModule]
})
export class GorevListesiComponent implements OnInit {
  gorevler: Gorev[] = [];
  chartData: any;

  constructor(private gorevService: GorevService) {}

  ngOnInit() {
    this.gorevService.gorevler$.subscribe(gorevler => {
      this.gorevler = gorevler;
      this.updateChartData();
    });
  }

  gorevDurumunuGuncelle(gorev: Gorev) {
    gorev.durum = gorev.durum === 'süreçte' ? 'onaylandı' : 'süreçte';
    this.updateChartData();
  }

  updateChartData() {
    this.chartData = {
      labels: ['Süreçte', 'Onaylandı'],
      datasets: [
        {
          data: [this.gorevler.filter(g => g.durum === 'süreçte').length, this.gorevler.filter(g => g.durum === 'onaylandı').length],
          backgroundColor: ['#42A5F5', '#66BB6A']
        }
      ]
    };
  }
}
