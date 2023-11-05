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
// Or make a helper function that gets the environment independent of the runtime.
// then it decides which language class to choose.
// A factory pattern does make sense here.
let languageClass = {
  ENGLISH: English,
}[Deno.env.get("LANGUAGE")];
if (!languageClass) languageClass = English;

const language = new Language(new languageClass());
const textDelivery = new TextDelivery(denoIO, language);
// TODO: certain commands follow each other up, like when you do quit, you want yes or no next, otherwise you can just do random shit.
// let nextExpectedCommand: GAME_ACTIONS;

// The connected caves, the number of the cave is the index+1 of the array
const connectedCaves = [
  [2, 6, 5],
  [3, 8, 1],
  [4, 10, 2],
  [5, 2, 3],
  [1, 14, 4],
  [15, 1, 7],
  [17, 6, 8],
  [7, 2, 9],
  [18, 8, 10],
  [9, 3, 11],
  [19, 10, 12],
  [11, 4, 13],
  [20, 12, 14],
  [5, 11, 13],
  [6, 16, 14],
  [20, 15, 17],
  [16, 7, 18],
  [17, 9, 19],
  [18, 11, 20],
  [19, 13, 16],
];

textDelivery.displayWelcomeMessage();

while (true) {
  const userInput = textDelivery.prompt();
  const gameCommand = language.getTranslatedGameAction(userInput);

  // Any other actions you need to do, like quit, you do here.
  switch (gameCommand) {
    case GAME_ACTIONS.YES_QUIT:
      textDelivery.respondToUserCommand(gameCommand);
      denoIO.exit();
    default:
      textDelivery.respondToUserCommand(gameCommand);
  }
}
