import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ReceberPage } from './receber.page';

describe('ReceberPage', () => {
  let component: ReceberPage;
  let fixture: ComponentFixture<ReceberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceberPage],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
