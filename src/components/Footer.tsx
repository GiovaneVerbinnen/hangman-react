import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-3 flex w-full max-w-lg justify-between">
      <p className="text-sm font-semibold text-gray-400">
        {t("made_by")}

        <a
          href="https://giovane.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-green-400">Giovane</span>
        </a>
      </p>
      <p className="px-3 text-white">
        <a
          href="https://github.com/GiovaneVerbinnen/tic-tac-toe-react"
          target="_blank"
          rel="noopener noreferrer"
          className="line-height-3 flex items-center gap-1 text-sm font-semibold text-gray-400 transition-colors hover:text-green-400"
        >
          Fork me on <Github size={16} className="text-green-400" />
        </a>
      </p>
    </div>
  );
};
