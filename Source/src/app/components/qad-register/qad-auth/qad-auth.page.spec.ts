import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QadAuthPage } from './qad-auth.page';

describe('QadAuthPage', () => {
  let component: QadAuthPage;
  let fixture: ComponentFixture<QadAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QadAuthPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QadAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
