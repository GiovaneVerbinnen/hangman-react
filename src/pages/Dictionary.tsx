import { useEffect, useState } from "react";
import { Dictionary } from "./Config";

export const DictionaryPage = () => {
  const [dictionary, setDictionary] = useState<Dictionary>([]);
  useEffect(() => {
    const storedDictionary: Dictionary = JSON.parse(
      localStorage.getItem("dictionary") || "[]",
    ) as {
      word: string;
      tip: string;
    }[];
    setDictionary(storedDictionary);
  }, []);
  const handleDelete = (item: number) => {
    const newDictionary = dictionary.filter((_, i) => i !== item);
    localStorage.setItem("dictionary", JSON.stringify(newDictionary));
    setDictionary(newDictionary);
  };
  return (
    <div className="flex items-center flex-col">
      <div className="flex w-full max-w-lg flex-col items-center rounded-md text-white mb-3">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl font-bold">DictionaryPage</h1>
          <a
            href="/"
            className="button rounded-md bg-sky-500 px-4 py-2 uppercase text-white"
          >
            voltar
          </a>
        </div>
      </div>
      <ul className="flex flex-col gap-4 my-3 w-full max-w-lg">
        {dictionary.map((item, index) => (
          <li
            key={index}
            className="flex w-full items-center justify-between gap-4 rounded-md bg-gray-700 p-4
              text-white"
          >
            <div className="flex flex-col">
              <span className="text-xl font-bold">{item.word}</span>
              <span className="text-sm text-gray-400">{item.tip}</span>
            </div>
            <button
              className="rounded-md bg-red-500 px-4 py-2 text-white"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
