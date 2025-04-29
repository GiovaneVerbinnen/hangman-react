import { t } from "i18next";
import { useHangman } from "../hooks/use-hangman";
import GameModal from "./GameModal";
import { HangmandFigure } from "./HangmanFigure";
import { Keyboard } from "./Keyboard";
import { WordDisplay } from "./WordDisplay";

export const Board = () => {
  const {
    word,
    tip,
    remainingGuesses,
    guessedLetters,
    gameStatus,
    selectWord,
    onGuessLetter,
  } = useHangman();
  return (
    <div className="flex flex-col items-center gap-8 text-white h-screen">
      <HangmandFigure remainingGuesses={remainingGuesses} />
      <div className="text-center text-gray-100">
        <p className="mb-2 text-xl sm:text-2xl">
          {t("remaining_guesses")}:{" "}
          <span className="font-bold">{remainingGuesses}</span>
        </p>

        <p className="text-lg">
          {t("tip")}: {tip}
        </p>
      </div>

      <WordDisplay word={word} guessedLetters={guessedLetters} />

      <Keyboard guessedLetters={guessedLetters} onGuessLetter={onGuessLetter} />

      <GameModal gameStatus={gameStatus} word={word} onNewWord={selectWord} />
    </div>
  );
};
