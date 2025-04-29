import { motion } from "motion/react";
import { GameStatus } from "../types";
import { GAME_STATUS } from "../constants";
import { t } from "i18next";

type GameModalProps = {
  gameStatus: GameStatus;
  word: string;
  onNewWord: () => void;
};

function GameModal({ gameStatus, word, onNewWord }: GameModalProps) {
  if (gameStatus === GAME_STATUS.PLAYING) return null;

  const isWinner = gameStatus === GAME_STATUS.WON;
  const title = isWinner
    ? `🎉 ${t("congrats")}! 🎉`
    : `💀 ${t("game_over")} 💀`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <div className="max-w-sm rounded-md bg-white p-6 text-center text-gray-800">
        <h2 className="mb-4 text-center text-2xl font-bold">
          {title}
          {!isWinner && (
            <p className="text-xl">
              {t("the_word_was")}: {word.toUpperCase()}
            </p>
          )}
        </h2>

        <button
          onClick={onNewWord}
          className="focus:ring-pink rounded-md bg-green-400 px-4 py-2 text-gray-800 outline-none
            hover:bg-green-500 focus:ring-2 focus:ring-offset-2"
          autoFocus
        >
          {t("new_word")}
        </button>
      </div>
    </motion.div>
  );
}

export default GameModal;
