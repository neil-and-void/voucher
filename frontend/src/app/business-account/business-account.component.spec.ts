import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAccountComponent } from './business-account.component';

describe('BusinessAccountComponent', () => {
  let component: BusinessAccountComponent;
  let fixture: ComponentFixture<BusinessAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
