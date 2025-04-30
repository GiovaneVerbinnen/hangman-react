import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 py-3">
      <Header />
      <div className="w-full max-w-lg rounded-lg bg-gray-800 p-6">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
