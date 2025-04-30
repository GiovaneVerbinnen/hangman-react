import { Suspense } from "react";

export const App = () => {
  return (
    <Suspense fallback="loading...">
      <h1>
        <a href="/game" className="text-white">
          game
        </a>
      </h1>
    </Suspense>
  );
};
