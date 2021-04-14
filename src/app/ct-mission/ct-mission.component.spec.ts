import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtMissionComponent } from './ct-mission.component';

describe('CtMissionComponent', () => {
  let component: CtMissionComponent;
  let fixture: ComponentFixture<CtMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
