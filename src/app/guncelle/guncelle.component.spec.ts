/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuncelleComponent } from './guncelle.component';

describe('GuncelleComponent', () => {
  let component: GuncelleComponent;
  let fixture: ComponentFixture<GuncelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuncelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
