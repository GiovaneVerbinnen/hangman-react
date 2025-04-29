import { Languages, Link } from "lucide-react";
import { useTranslation } from "react-i18next";
import { WORDS } from "../constants";
import { FormEvent, useState } from "react";

export type Word = {
  word: string | undefined;
  tip: string | undefined;
};
export type Dictionary = Word[];

const lngs: {
  [key: string]: { nativeName: string };
} = {
  en: { nativeName: "🇺🇸 English" },
  "pt-BR": { nativeName: "🇧🇷 Português(BR)" },
  es: { nativeName: "🇪🇸 Español" },
  fr: { nativeName: "🇫🇷 Français" },
  // ru: { nativeName: "🇷🇺 Pусский" },
  // zh: { nativeName: "🇨🇳 官话" },
};

export const ConfigPage = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState<Word>({ word: "", tip: "" });
  const [error, setError] = useState(false);

  const dictionary: Dictionary = JSON.parse(
    localStorage.getItem("dictionary") || "[]",
  ) as {
    word: string;
    tip: string;
  }[];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newWord = {
      word: value?.word,
      tip: value?.tip,
    };
    if (!newWord.word || !newWord.tip) {
      setError(true);
      return;
    } else {
      console.log("passou aqui");
      dictionary.push(newWord);
      localStorage.setItem("dictionary", JSON.stringify(dictionary));
      setValue({ word: "", tip: "" });
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "word" | "tip",
  ) => {
    setValue({ ...value, [field]: e.target.value } as Word);
    setError(false);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-lg flex-wrap items-center justify-center gap-8 text-white">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl font-bold">{t("config")}</h1>
          <a
            href="/"
            className="button rounded-md bg-sky-600 px-4 py-2 uppercase text-white"
          >
            voltar
          </a>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <span
              className="pointer-events-none absolute left-0 top-1/4 col-start-1 row-start-1 ml-6 mt-2
                text-white"
            >
              <Languages size={24} />
            </span>
            <select
              name="select language"
              id="i18n"
              className="col-start-1 row-start-1 m-3 appearance-none rounded-md px-12 py-3 text-lg
                text-white dark:bg-gray-900"
              // className="m-3 appearance-none rounded-md bg-gray-900 p-3 text-white"
              // style={{
              //   backgroundImage:
              //     "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAABGdBTUEAALGPC/xhBQAAAQtJREFUOBG1lEEOgjAQRalbGj2OG9caOACn4ALGtfEuHACiazceR1PWOH/CNA3aMiTaBDpt/7zPdBKy7M/DCL9pGkvxxVp7KsvyJftL5rZt1865M+Ucq6pyyF3hNcI7Cuu+728QYn/JQA5yKaempxuZmQngOwEaYx55nu+1lQh8GIatMGi+01NwBcEmhxBqK4nAPZJ78K0KKFAJmR3oPp8+Iwgob0Oa6+TLoeCvRx+mTUYf/FVBGTPRwDkfLxnaSrRwcH0FWhNOmrkWYbE2XEicqgSa1J0LQ+aPCuQgZiLnwewbGuz5MGoAhcIkCQcjaTBjMgtXGURMVHC1wcQEy0J+Zlj8bKAnY1/UzDe2dbAVqfXn6wAAAABJRU5ErkJggg==')",
              //   backgroundSize: " 0.7rem",
              //   backgroundPosition: "right 0.7rem center",
              //   backgroundRepeat: "no-repeat",
              // }}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              {Object.keys(lngs).map((lng) => (
                <option
                  value={lng}
                  key={lng}
                  selected={i18n.resolvedLanguage === lng}
                  className="bg-gray-900 text-start text-lg text-white"
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? "bold" : "normal",
                  }}
                >
                  {lngs[lng].nativeName}
                </option>
              ))}
            </select>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute right-0 top-1/4 col-start-1 row-start-1 mr-6 mt-3
                h-5 w-5 text-white"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
        <div className="w-full">
          <p className="text-2xl my-3">
            Palavras Cadastradas:{" "}
            <span className="font-bold">{WORDS.length}</span>
          </p>
          <a
            href="/dictionary"
            rel="noopener noreferrer"
            className="text-xl flex items-center gap-3 border-2 border-green-600 rounded-md p-3
              bg-green-500"
          >
            <Link size={24} /> Ver Dicionário
          </a>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="word"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Cadastrar Palavra
              </label>
              <input
                type="text"
                value={value?.word}
                placeholder="Word"
                id="word"
                onChange={(e) => handleChange(e, "word")}
                className={`${
                  error === true
                    ? `block w-full rounded-md border border-red-500 bg-red-50 p-2.5 text-sm
                      text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500
                      dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500`
                    : `block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm
                      text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600
                      dark:bg-gray-700 dark:text-white dark:placeholder-gray-400
                      dark:focus:border-blue-500 dark:focus:ring-blue-500`
                  }`}
              />
            </div>
            <div>
              <label
                htmlFor="tip"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Cadastrar Dica
              </label>
              <input
                type="text"
                value={value?.tip}
                onChange={(e) => handleChange(e, "tip")}
                id="tip"
                className={`${
                  error === true
                    ? `block w-full rounded-md border border-red-500 bg-red-50 p-2.5 text-sm
                      text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500
                      dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500`
                    : `block w-full rounded-md p-2.5 text-sm text-gray-900 focus:border-blue-500
                      focus:ring-blue-500 dark:text-white dark:placeholder-gray-400
                      dark:focus:border-blue-500 dark:focus:ring-blue-500 border border-gray-600
                      dark:bg-gray-700`
                  } `}
                placeholder="Tip"
              />
            </div>
          </div>

          <button
            type="submit"
            className="min-w-full mt-3 rounded-md bg-purple-700 px-6 py-3 text-center text-sm
              font-medium uppercase text-white hover:bg-purple-800 focus:outline-none
              focus:ring-4 focus:ring-purple-300 sm:w-auto dark:bg-purple-600
              dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};
