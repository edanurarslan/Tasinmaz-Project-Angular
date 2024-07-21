/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Guncelle2Component } from './guncelle2.component';

describe('Guncelle2Component', () => {
  let component: Guncelle2Component;
  let fixture: ComponentFixture<Guncelle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guncelle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guncelle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
