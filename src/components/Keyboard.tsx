import { useEffect } from "react";

const KEY_ROWS = [
  "qwertyuiop".split(""),
  "asdfghjkl".split(""),
  "zxcvbnm".split(""),
];
type KeyboardProps = {
  guessedLetters: Set<string>;
  onGuessLetter: (letter: string) => void;
};

const KEY_CLASSES = {
  guessed: "bg-gray-500 text-gray-800 cursor-not-allowed",
  unguessed: "bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900",
};

export const Keyboard = ({ guessedLetters, onGuessLetter }: KeyboardProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const letter = event.key.toLowerCase();

      if (KEY_ROWS.flat().includes(letter)) {
        onGuessLetter(letter);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onGuessLetter]);

  return (
    <div className="flex flex-col items-center gap-2">
      {KEY_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1" role="row">
          {row.map((letter) => {
            const isGuessed = guessedLetters.has(letter);

            return (
              <button
                key={letter}
                disabled={isGuessed}
                onClick={() => onGuessLetter(letter)}
                className={`transtion-colors h-8 w-8 rounded uppercase text-white focus:outline-none
                focus:ring-2 focus:ring-green-500 sm:h-10 sm:w-10
                ${isGuessed ? KEY_CLASSES.guessed : KEY_CLASSES.unguessed}`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
