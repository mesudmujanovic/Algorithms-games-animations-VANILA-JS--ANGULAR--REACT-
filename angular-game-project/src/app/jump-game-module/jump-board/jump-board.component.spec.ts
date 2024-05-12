import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpBoardComponent } from './jump-board.component';

describe('JumpBoardComponent', () => {
  let component: JumpBoardComponent;
  let fixture: ComponentFixture<JumpBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JumpBoardComponent]
    });
    fixture = TestBed.createComponent(JumpBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
