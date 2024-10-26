import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevEkleComponent } from './gorev-ekle.component';

describe('GorevEkleComponent', () => {
  let component: GorevEkleComponent;
  let fixture: ComponentFixture<GorevEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorevEkleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorevEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
