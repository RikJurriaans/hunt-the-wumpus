// all input comes through TextDelivery, TextDelivery uses language and language uses the game rules.
import { GAME_ACTIONS } from "./gameRules/GameEngineCommands.ts";
import Language from "./language/Language.ts";
import English from "./language/languages/english.ts";
import DenoAdapter from "./textDelivery/DenoAdapter.ts";
import TextDelivery from "./textDelivery/TextDelivery.ts";

// language translates the user comments in their language to game engine commands.

// the game engine then stores that information into the data storage.

// the game engine then sends the information back through the Language class to 'translate' the game outcome,
// into the users language. Then the language gets send through to the textdelivery class to deliver the text onto the users screen.

const denoIO = new DenoAdapter();

// The list of available languages is configured here.
// would be nice if that is configured in the language class as well.
let languageClass = {
  ENGLISH: English,
}[Deno.env.get("LANGUAGE")];
if (!languageClass) languageClass = English;

const language = new Language(new languageClass());
const textDelivery = new TextDelivery(denoIO, language);

textDelivery.displayWelcomeMessage();

while (true) {
  const userInput = textDelivery.prompt();
  const gameCommand = language.getTranslatedGameAction(userInput);

  textDelivery.respondToUserCommand(gameCommand);

  // Any other actions you need to do, like quit, you do here.
  switch (gameCommand) {
    case GAME_ACTIONS.YES_QUIT:
      denoIO.exit();
    default:
  }
}
