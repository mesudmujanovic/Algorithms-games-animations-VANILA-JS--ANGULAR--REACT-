import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveGameComponent } from './interactive-game.component';

describe('InteractiveGameComponent', () => {
  let component: InteractiveGameComponent;
  let fixture: ComponentFixture<InteractiveGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteractiveGameComponent]
    });
    fixture = TestBed.createComponent(InteractiveGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
