import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PagarPage } from './pagar.page';

describe('PagarPage', () => {
  let component: PagarPage;
  let fixture: ComponentFixture<PagarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagarPage],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
