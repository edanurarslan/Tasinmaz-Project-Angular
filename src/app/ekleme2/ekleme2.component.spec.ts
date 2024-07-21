/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ekleme2Component } from './ekleme2.component';

describe('Ekleme2Component', () => {
  let component: Ekleme2Component;
  let fixture: ComponentFixture<Ekleme2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ekleme2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ekleme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
