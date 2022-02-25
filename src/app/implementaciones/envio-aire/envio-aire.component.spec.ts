import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioAireComponent } from './envio-aire.component';

describe('EnvioAireComponent', () => {
  let component: EnvioAireComponent;
  let fixture: ComponentFixture<EnvioAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioAireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
