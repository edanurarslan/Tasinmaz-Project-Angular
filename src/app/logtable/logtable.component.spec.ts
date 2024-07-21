/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogtableComponent } from './logtable.component';

describe('LogtableComponent', () => {
  let component: LogtableComponent;
  let fixture: ComponentFixture<LogtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
