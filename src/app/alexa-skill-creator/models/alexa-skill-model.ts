export interface IAlexaInteractionModel {
  invocations: string[];
  response: string;
}

export class AlexaInteractionModel implements IAlexaInteractionModel {
  public invocations: string[];
  public response: string;

  public constructor() {
    this.invocations = [];
    this.response = '';
  }
}

