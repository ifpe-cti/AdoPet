import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAnimaisEditComponent } from './meus-animais-edit.component';

describe('MeusAnimaisEditComponent', () => {
  let component: MeusAnimaisEditComponent;
  let fixture: ComponentFixture<MeusAnimaisEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAnimaisEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAnimaisEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
