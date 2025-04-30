import { useEffect, useState } from "react";
import { BASE_WORDS } from "../constants";
import { Dictionary, Word } from "../types";

export const useDictionary = () => {
  const [dictionary, setDictionary] = useState<Dictionary>([]);
  const [randomWord, setRandomWord] = useState<Word>({ word: "", tip: "" });

  const resetDictionary = () => {
    localStorage.setItem("dictionary", JSON.stringify(BASE_WORDS));
    const tempDB = localStorage.getItem("dictionary");
    const tempDBParsed: Dictionary = JSON.parse(tempDB || "[]");
    setDictionary(tempDBParsed);
  };

  const database = localStorage.getItem("dictionary");
  const databaseParsed: Dictionary = JSON.parse(database || "[]");

  const isDBEmpty = database === null || database === "[]";

  useEffect(() => {
    getRandomWord(); // Atualiza randomWord após o dicionário carregar
  }, [dictionary]); // Executa uma vez após montagem

  useEffect(() => {
    if (isDBEmpty) {
      resetDictionary();
    } else {
      setDictionary(databaseParsed);
    }
  }, []);

  const deleteWord = (item: number) => {
    const newDictionary = dictionary.filter((_, i) => i !== item);
    localStorage.setItem("dictionary", JSON.stringify(newDictionary));
    setDictionary(newDictionary);

    if (newDictionary.length === 0) {
      resetDictionary();
    }
  };

  const getRandomWord = () => {
    if (dictionary.length === 0) {
      setRandomWord({ word: "", tip: "" });
      return;
    }
    const randomIndex = Math.floor(Math.random() * dictionary.length);

    const selectedWord = dictionary[randomIndex];
    if (!selectedWord) {
      setRandomWord({ word: "", tip: "" });
      return;
    }

    setRandomWord({
      word: selectedWord.word!.toLowerCase(),
      tip: selectedWord.tip,
    });
  };

  return { deleteWord, dictionary, randomWord };
};
