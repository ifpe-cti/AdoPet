import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAnimalComponent } from './adicionar-animal.component';

describe('AdicionarAnimalComponent', () => {
  let component: AdicionarAnimalComponent;
  let fixture: ComponentFixture<AdicionarAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
