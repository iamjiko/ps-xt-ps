import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtMissionsComponent } from './ct-missions.component';

describe('CtMissionsComponent', () => {
  let component: CtMissionsComponent;
  let fixture: ComponentFixture<CtMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
