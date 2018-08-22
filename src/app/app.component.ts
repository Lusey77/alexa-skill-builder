import {Component, ViewChild} from '@angular/core';
import {AlexaSkillCreatorComponent} from "./alexa-skill-creator/alexa-skill-creator.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IAlexaInteractionModel} from "./alexa-skill-creator/models/alexa-skill-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AlexaSkillCreatorComponent) public alexaSkillCreatorModal: AlexaSkillCreatorComponent;

  public interactions: IAlexaInteractionModel[] = [];

  public constructor(private modalService: NgbModal) { }

  public addNewSkill(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', centered: true, size: 'lg'});
  }

  public close() {

  }

  public create(event: IAlexaInteractionModel) {
    console.log('fix');
    this.interactions.push(event);
  }
}
