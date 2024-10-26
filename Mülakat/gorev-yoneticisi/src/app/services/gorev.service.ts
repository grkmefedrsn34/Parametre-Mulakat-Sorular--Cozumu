import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gorev } from '../models/gorev/gorev.module';

@Injectable({
  providedIn: 'root'
})
export class GorevService {
  private gorevlerSubject = new BehaviorSubject<Gorev[]>([]);
  gorevler$ = this.gorevlerSubject.asObservable();

  gorevEkle(gorev: Gorev) {
    const gorevler = this.gorevlerSubject.getValue();
    gorevler.push(gorev);
    this.gorevlerSubject.next(gorevler);
  }
}
