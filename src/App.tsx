import { Suspense } from "react";
import { Board } from "./components/Board";
import { ConfigPage } from "./pages/Config";
import { DictionaryPage } from "./pages/Dictionary";

export const App = () => {
  let page;

  switch (window.location.pathname) {
    case "/":
      return (page = <Board />);
    case "/config":
      return (page = <ConfigPage />);
    case "/dictionary":
      return (page = <DictionaryPage />);
    default:
      break;
  }

  return <Suspense fallback="loading...">{page}</Suspense>;
};
