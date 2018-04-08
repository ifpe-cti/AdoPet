import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDeDadosComponent } from './banco-de-dados.component';

describe('BancoDeDadosComponent', () => {
  let component: BancoDeDadosComponent;
  let fixture: ComponentFixture<BancoDeDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoDeDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoDeDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
