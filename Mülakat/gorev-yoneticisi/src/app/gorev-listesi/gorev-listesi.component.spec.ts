import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevListesiComponent } from './gorev-listesi.component';

describe('GorevListesiComponent', () => {
  let component: GorevListesiComponent;
  let fixture: ComponentFixture<GorevListesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorevListesiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorevListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
