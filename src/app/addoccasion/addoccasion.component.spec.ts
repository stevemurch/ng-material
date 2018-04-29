/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddOccasionComponent } from './addoccasion.component';

describe('AddOccasionComponent', () => {
  let component: AddOccasionComponent;
  let fixture: ComponentFixture<AddOccasionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOccasionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOccasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
