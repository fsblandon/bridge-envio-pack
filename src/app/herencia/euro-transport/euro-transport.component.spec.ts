import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroTransportComponent } from './euro-transport.component';

describe('EuroTransportComponent', () => {
  let component: EuroTransportComponent;
  let fixture: ComponentFixture<EuroTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
