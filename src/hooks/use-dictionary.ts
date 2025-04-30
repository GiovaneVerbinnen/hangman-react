import { useEffect, useState } from "react";
import { BASE_WORDS } from "../constants";
import { Dictionary, Word } from "../pages/Config";

export const useDictionary = () => {
  const [dictionary, setDictionary] = useState<Dictionary>([]);
  const [randomWord, setRandomWord] = useState<Word>({ word: "", tip: "" });
  setTimeout(() => {
    console.log(dictionary);
  }, 1000);

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
    if (isDBEmpty) {
      resetDictionary();
    } else {
      setDictionary(databaseParsed);
    }
  }, []);

  const deleteWord = (item: number) => {
    const newDictionary = databaseParsed.filter((_, i) => i !== item);
    localStorage.setItem("dictionary", JSON.stringify(newDictionary));
    setDictionary(newDictionary);

    if (newDictionary.length === 0) {
      console.log("newDictionary.length === 0", newDictionary.length === 0);
      resetDictionary();
    }
  };

  const getRandomWord = () => {
    console.log("dictionary", dictionary);

    const randomIndex = Math.floor(Math.random() * dictionary.length);

    const word = dictionary[randomIndex].word;
    const tip = dictionary[randomIndex].tip;
    if (!word) {
      throw new Error("Word not found");
    }
    setRandomWord({
      word: word.toLowerCase(),
      tip: tip,
    });
  };

  return { getRandomWord, deleteWord, dictionary, randomWord };
};
