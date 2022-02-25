import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioMarComponent } from './envio-mar.component';

describe('EnvioMarComponent', () => {
  let component: EnvioMarComponent;
  let fixture: ComponentFixture<EnvioMarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioMarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
