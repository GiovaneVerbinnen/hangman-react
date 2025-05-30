import { motion } from "motion/react";
import { GUESSES } from "../constants";

type HangmanFigureProps = {
  remainingGuesses: number;
};

export const HangmandFigure = ({ remainingGuesses }: HangmanFigureProps) => {
  const parts = [
    { type: "line", x1: 140, y1: 70, x2: 140, y2: 120, id: "body" },
    { type: "line", x1: 140, y1: 85, x2: 120, y2: 100, id: "leftArm" },
    { type: "line", x1: 140, y1: 85, x2: 160, y2: 100, id: "rightArm" },
    { type: "line", x1: 140, y1: 120, x2: 120, y2: 140, id: "leftLeg" },
    { type: "line", x1: 140, y1: 120, x2: 160, y2: 140, id: "rightLeg" },
  ];
  const gallowsLines = [
    { x1: 40, y1: 180, x2: 160, y2: 180 },
    { x1: 60, y1: 20, x2: 60, y2: 180 },
    { x1: 60, y1: 20, x2: 140, y2: 20 },
    { x1: 140, y1: 20, x2: 140, y2: 50 },
  ];
  return (
    <svg width={200} height={200} viewBox="0 0 200 200">
      {gallowsLines.map((line, index) => (
        <line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          className="stroke-gray-500 stroke-[4px]"
        />
      ))}
      <motion.circle
        cx="140"
        cy="60"
        r="10"
        className="stroke-red-400 stroke-[4px]"
        initial={{ scale: 0 }}
        animate={{ scale: GUESSES - remainingGuesses > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {parts.map((part, index) => (
        <motion.line
          key={part.id}
          {...part}
          className="stroke-red-400 stroke-[4px]"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: GUESSES - remainingGuesses > index + 1 ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </svg>
  );
};
