/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EklemeComponent } from './ekleme.component';

describe('EklemeComponent', () => {
  let component: EklemeComponent;
  let fixture: ComponentFixture<EklemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EklemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EklemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
