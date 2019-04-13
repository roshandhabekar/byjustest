import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPresentPage } from './modal-present.page';

describe('ModalPresentPage', () => {
  let component: ModalPresentPage;
  let fixture: ComponentFixture<ModalPresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
