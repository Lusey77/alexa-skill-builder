import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AlexaInteractionModel, IAlexaInteractionModel} from "./models/alexa-skill-model";

@Component({
  selector: 'alexa-skill-creator',
  templateUrl: './alexa-skill-creator.component.html',
  styleUrls: ['./alexa-skill-creator.component.css']
})
export class AlexaSkillCreatorComponent implements OnInit {
  @Output() public close: EventEmitter<any> = new EventEmitter();
  @Output() public create: EventEmitter<IAlexaInteractionModel> = new EventEmitter<IAlexaInteractionModel>();

  protected invocation: string = '';
  protected alexaSkillModel: IAlexaInteractionModel = new AlexaInteractionModel();

  public constructor() { }

  public ngOnInit() {

  }

  public closeClicked() {
    this.close.emit();
  }

  public saveClicked() {
    console.log('Hello');
    this.verifyModel();
    this.create.emit(this.alexaSkillModel);
  }

  public addInvocation() {
    this.alexaSkillModel.invocations.push(this.invocation);
    this.invocation = '';
  }

  private verifyModel() {

  }
}


