// all input comes through TextDelivery, TextDelivery uses language and language uses the game rules.

import Language from "./language/Language.ts";
import English from "./language/languages/english.ts";
import DenoIO from "./textDelivery/DenoIO.ts";
import TextDelivery from "./textDelivery/TextDelivery.ts";

// language translates the user comments in their language to game engine commands.

// the game engine then stores that information into the data storage.

// the game engine then sends the information back through the Language class to 'translate' the game outcome,
// into the users language. Then the language gets send through to the textdelivery class to deliver the text onto the users screen.

const denoIO = new DenoIO();

let languageClass = {
  ENGLISH: English,
}[Deno.env.get("LANGUAGE")];
if (!languageClass) languageClass = English;

const language = new Language(new languageClass());
const textDelivery = new TextDelivery(denoIO, language);

while (true) {
  textDelivery.welcome();
}
