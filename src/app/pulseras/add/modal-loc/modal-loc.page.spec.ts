import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLocPage } from './modal-loc.page';

describe('ModalLocPage', () => {
  let component: ModalLocPage;
  let fixture: ComponentFixture<ModalLocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
