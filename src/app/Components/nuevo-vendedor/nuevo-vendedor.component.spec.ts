import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVendedorComponent } from './nuevo-vendedor.component';

describe('NuevoVendedorComponent', () => {
  let component: NuevoVendedorComponent;
  let fixture: ComponentFixture<NuevoVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
