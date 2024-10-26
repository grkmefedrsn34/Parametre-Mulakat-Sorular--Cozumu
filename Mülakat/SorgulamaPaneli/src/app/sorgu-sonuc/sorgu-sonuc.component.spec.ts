import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorguSonucComponent } from './sorgu-sonuc.component';

describe('SorguSonucComponent', () => {
  let component: SorguSonucComponent;
  let fixture: ComponentFixture<SorguSonucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorguSonucComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorguSonucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
