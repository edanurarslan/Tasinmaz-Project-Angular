/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginekraniComponent } from './loginekrani.component';

describe('LoginekraniComponent', () => {
  let component: LoginekraniComponent;
  let fixture: ComponentFixture<LoginekraniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginekraniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginekraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
