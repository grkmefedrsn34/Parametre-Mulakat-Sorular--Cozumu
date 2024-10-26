import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [];
  @Input() selectedFeature: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response.features; // Verilerinizi uygun şekilde işleyin
    });
  }

  isSelected(item: any): boolean {
    return this.selectedFeature && this.selectedFeature.id === item.attributes.id;
  }
}
