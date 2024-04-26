import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktotopbuttonComponent } from './backtotopbutton.component';

describe('BacktotopbuttonComponent', () => {
  let component: BacktotopbuttonComponent;
  let fixture: ComponentFixture<BacktotopbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacktotopbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BacktotopbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
