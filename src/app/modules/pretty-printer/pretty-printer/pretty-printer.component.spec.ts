import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyPrinterComponent } from './pretty-printer.component';

describe('LandingPageComponent', () => {
  let component: PrettyPrinterComponent;
  let fixture: ComponentFixture<PrettyPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
