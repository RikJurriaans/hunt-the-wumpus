import { GAME_ACTIONS } from "../../gameRules/GameEngineCommands.ts";

export default interface NaturalLanguage {
  keepPlayingText: string;
  goodbyeText: string;
  areYouSureYouWantToQuit: string;
  genericPromptQuestion: string;
  quitText: string;
  helpText: string;
  noCommandFound: string;
  yes: GAME_ACTIONS;
  no: GAME_ACTIONS;
  help: GAME_ACTIONS;
  quit: GAME_ACTIONS;
}
