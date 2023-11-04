// this interface is independent of how the text gets delivered to the client.
// this can be console.log
// this can be writing to a dom element
// or an SMS interface with Twillio or something
// it should not matter.

import { GAME_ACTIONS } from "../gameRules/GameEngineCommands.ts";
import Language from "../language/Language.ts";
import DeliveryMechanism from "./DeliveryMechanism.ts";

export default class TextDelivery {
  private _deliveryMechanism: DeliveryMechanism;
  private _language: Language;

  constructor(deliveryMechanism: DeliveryMechanism, language: Language) {
    this._deliveryMechanism = deliveryMechanism;
    this._language = language;
  }

  displayWelcomeMessage() {
    this._deliveryMechanism.deliver(this._language.welcome());
  }

  respondToUserCommand(gameAction: GAME_ACTIONS) {
    // translate the command into something our GameRules class understands
    const textResponse = this._language.getResponse(gameAction);
    this._deliveryMechanism.deliver(textResponse);
  }

  prompt() {
    return this._deliveryMechanism.prompt(">");
  }
}
