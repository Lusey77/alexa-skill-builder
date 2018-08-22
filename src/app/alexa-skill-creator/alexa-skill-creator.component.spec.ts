import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexaSkillCreatorComponent } from './alexa-skill-creator.component';

describe('AlexaSkillCreatorComponent', () => {
  let component: AlexaSkillCreatorComponent;
  let fixture: ComponentFixture<AlexaSkillCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexaSkillCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexaSkillCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
