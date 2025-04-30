import { GAME_STATUS } from "./constants";

export type GameStatus = (typeof GAME_STATUS)[keyof typeof GAME_STATUS];

export type Word = {
  word: string | undefined;
  tip: string | undefined;
};
export type Dictionary = Word[];
