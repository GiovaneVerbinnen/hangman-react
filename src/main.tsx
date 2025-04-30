import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import "./i18n";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Board } from "./components/Board";
import { ConfigPage } from "./pages/Config";
import { DictionaryPage } from "./pages/Dictionary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/game" element={<Board />} />
          <Route path="/config" element={<ConfigPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
