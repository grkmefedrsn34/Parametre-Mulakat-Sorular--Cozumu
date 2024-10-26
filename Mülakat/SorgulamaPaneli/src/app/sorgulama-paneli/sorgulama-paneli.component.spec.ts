import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorgulamaPaneliComponent } from './sorgulama-paneli.component';

describe('SorgulamaPaneliComponent', () => {
  let component: SorgulamaPaneliComponent;
  let fixture: ComponentFixture<SorgulamaPaneliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorgulamaPaneliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorgulamaPaneliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
