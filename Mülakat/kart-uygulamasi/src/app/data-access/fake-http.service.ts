// src/app/data-access/fake-http.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { KartModel } from '../model/kart-model';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
  private data: KartModel[] = this.generateRandomData();

  private generateRandomData(): KartModel[] {
    const data: KartModel[] = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        id: i,
        title: `Title ${i + 1}`,
        content: `Content ${i + 1}`
      });
    }
    return data;
  }

  getData(): Observable<KartModel[]> {
    return of(this.data).pipe(delay(1000));
  }

  addData(kart: KartModel): void {
    this.data.push(kart);
  }

  removeData(id: number): void {
    this.data = this.data.filter(kart => kart.id !== id);
  }
}
