import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaMensajeriaComponent } from './empresa-mensajeria.component';

describe('EmpresaMensajeriaComponent', () => {
  let component: EmpresaMensajeriaComponent;
  let fixture: ComponentFixture<EmpresaMensajeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaMensajeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaMensajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
