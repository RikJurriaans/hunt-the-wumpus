// Language class should be independent of the language.

import type NaturalLanguage from "./languages/NaturalLanguage.ts";

export default class Language {
  private _userLanguage: NaturalLanguage;

  constructor(userLanguage: NaturalLanguage) {
    this._userLanguage = userLanguage;
  }

  // setNewUserLanguage(newLanguage: NaturalLanguage) {
  // there needs to be a check here to see if the language you chose is available.
  // if the language is not available we need to respond
  // this._userLanguage =
  // }

  getTextResponse(inputText: string): string {
    const directTranslation = this._userLanguage[inputText];
    if (directTranslation) {
      // Skip the game engine if theres a simple translation.
      return directTranslation;
    }

    // if (inputText === 'change_language') {

    // }

    // Go to the game engine.
    console.log("translating to game engine");
    return "x";
  }
}
