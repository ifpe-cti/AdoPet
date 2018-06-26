import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAnimalComponent } from './visualizar-animal.component';

describe('VisualizarAnimalComponent', () => {
  let component: VisualizarAnimalComponent;
  let fixture: ComponentFixture<VisualizarAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
