import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtFilterComponent } from './ct-filter.component';

describe('CtFilterComponent', () => {
  let component: CtFilterComponent;
  let fixture: ComponentFixture<CtFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
