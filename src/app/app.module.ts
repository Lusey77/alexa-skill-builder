import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlexaSkillCreatorComponent } from './alexa-skill-creator/alexa-skill-creator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStack} from "@ng-bootstrap/ng-bootstrap/modal/modal-stack";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AlexaSkillCreatorComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule
  ],
  providers: [NgbModalStack],
  bootstrap: [AppComponent]
})
export class AppModule { }
