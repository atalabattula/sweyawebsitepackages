import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitejobapplicationComponent } from './sitejobapplication.component';

describe('SitejobapplicationComponent', () => {
  let component: SitejobapplicationComponent;
  let fixture: ComponentFixture<SitejobapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitejobapplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitejobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
