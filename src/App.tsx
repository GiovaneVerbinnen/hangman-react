import { Suspense } from "react";
import { NavLink } from "react-router";

export const App = () => {
  return (
    <Suspense fallback="loading...">
      <div
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-500
          to-indigo-500 rounded-lg"
      >
        {" "}
        <NavLink
          to="/game"
          className="text-white bg-sky-500 px-6 py-3 rounded-lg text-2xl font-bold hover:bg-sky-600
            transition duration-300"
        >
          Play
        </NavLink>
        <p className="text-white text-2xl mt-4 p-6">
          <strong>Instruções do Jogo:</strong> Adivinhar a palavra oculta antes
          que o desenho completo do "enforcado" seja concluído. Cada letra
          errada adiciona uma parte ao boneco. Se o boneco for completado, você
          perde!
        </p>
      </div>
    </Suspense>
  );
};
