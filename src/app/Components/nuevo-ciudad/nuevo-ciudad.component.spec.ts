import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCiudadComponent } from './nuevo-ciudad.component';

describe('NuevoCiudadComponent', () => {
  let component: NuevoCiudadComponent;
  let fixture: ComponentFixture<NuevoCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
