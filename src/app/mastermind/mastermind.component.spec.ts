import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermindComponent } from './mastermind.component';

describe('MastermindComponent', () => {
  let component: MastermindComponent;
  let fixture: ComponentFixture<MastermindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastermindComponent]
    });
    fixture = TestBed.createComponent(MastermindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
