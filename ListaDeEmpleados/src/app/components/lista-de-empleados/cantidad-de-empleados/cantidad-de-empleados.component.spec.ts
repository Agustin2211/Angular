import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadDeEmpleadosComponent } from './cantidad-de-empleados.component';

describe('CantidadDeEmpleadosComponent', () => {
  let component: CantidadDeEmpleadosComponent;
  let fixture: ComponentFixture<CantidadDeEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadDeEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantidadDeEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
