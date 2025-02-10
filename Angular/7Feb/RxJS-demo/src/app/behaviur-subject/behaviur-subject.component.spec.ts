import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviurSubjectComponent } from './behaviur-subject.component';

describe('BehaviurSubjectComponent', () => {
  let component: BehaviurSubjectComponent;
  let fixture: ComponentFixture<BehaviurSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BehaviurSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviurSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
