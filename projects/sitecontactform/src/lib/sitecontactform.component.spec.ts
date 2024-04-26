import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitecontactformComponent } from './sitecontactform.component';

describe('SitecontactformComponent', () => {
  let component: SitecontactformComponent;
  let fixture: ComponentFixture<SitecontactformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitecontactformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitecontactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
