import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAnimaisComponent } from './meus-animais.component';

describe('MeusAnimaisComponent', () => {
  let component: MeusAnimaisComponent;
  let fixture: ComponentFixture<MeusAnimaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAnimaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
