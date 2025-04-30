import { GAME_STATUS, GUESSES } from "../constants";
import { useState } from "react";
import { useDictionary } from "./use-dictionary";

export const useHangman = () => {
  const { randomWord } = useDictionary();
  // const [currentWord, setCurrentWord] = useState(getRandomWord);
  const [remainingGuesses, setRemainingGuesses] = useState(GUESSES);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());

  const isWinner =
    randomWord
      .word!.split("")
      .every((letter: string) => guessedLetters.has(letter)) &&
    randomWord.word !== "";

  const gameStatus = () => {
    if (isWinner) return GAME_STATUS.WON;
    if (remainingGuesses === 0) return GAME_STATUS.LOST;
    return GAME_STATUS.PLAYING;
  };

  const onGuessLetter = (letter: string) => {
    if (gameStatus() !== GAME_STATUS.PLAYING || guessedLetters.has(letter)) {
      return;
    }

    setGuessedLetters((prev) => new Set([...prev, letter]));

    if (!randomWord.word!.includes(letter)) {
      setRemainingGuesses((prev) => prev - 1);
    }
  };

  const selectWord = () => {
    setGuessedLetters(new Set());
    setRemainingGuesses(GUESSES);
  };

  return {
    word: randomWord.word,
    tip: randomWord.tip,
    remainingGuesses,
    guessedLetters,
    onGuessLetter,
    gameStatus: gameStatus(),
    selectWord,
  };
};
