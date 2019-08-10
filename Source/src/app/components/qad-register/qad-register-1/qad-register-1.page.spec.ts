import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QadRegister1Page } from './qad-register-1.page';

describe('QadRegister1Page', () => {
  let component: QadRegister1Page;
  let fixture: ComponentFixture<QadRegister1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QadRegister1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QadRegister1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
