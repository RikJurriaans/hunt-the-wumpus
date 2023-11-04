// Language class should be independent of the language.

import { GameRules } from "../gameRules/GameRules.ts";
import { GAME_ACTIONS } from "../gameRules/GameEngineCommands.ts";
import type NaturalLanguage from "./languages/NaturalLanguage.ts";

export default class Language {
  private _userLanguage: NaturalLanguage;
  private _gameRules: GameRules;
  private _promptQuestion: string;

  constructor(userLanguage: NaturalLanguage) {
    this._userLanguage = userLanguage;
    this._gameRules = new GameRules();
  }

  // setNewUserLanguage(newLanguage: NaturalLanguage) {
  // there needs to be a check here to see if the language you chose is available.
  // if the language is not available we need to respond
  // this._userLanguage =
  // }

  getTranslatedGameAction(inputCommand: string): GAME_ACTIONS {
    const gameAction = this._userLanguage[inputCommand];
    if (typeof gameAction === "undefined") {
      return GAME_ACTIONS.UNRECOGNISED_COMMAND;
    }

    return gameAction;
  }

  getPromptQuestion(): string {
    if (!this._promptQuestion) {
      return this._userLanguage.genericPromptQuestion;
    }

    return this._promptQuestion;
  }

  welcome(): string {
    return this._userLanguage.helpText;
  }

  getResponse(gameAction: GAME_ACTIONS): string {
    switch (gameAction) {
      case GAME_ACTIONS.HELP:
        return this._userLanguage.helpText;
      case GAME_ACTIONS.QUIT:
        return this._userLanguage.quitText;
      case GAME_ACTIONS.YES_QUIT:
        return this._userLanguage.goodbyeText;
      case GAME_ACTIONS.NO_DONT_QUIT:
        return this._userLanguage.keepPlayingText;
      default:
        return this._userLanguage.noCommandFound;
    }
  }
}
