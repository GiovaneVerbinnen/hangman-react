import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import "./i18n";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 py-3">
      <Header />
      <div className="w-full max-w-lg rounded-md bg-gray-800 p-6">
        <App />
      </div>
      <Footer />
    </main>
  </StrictMode>,
);
