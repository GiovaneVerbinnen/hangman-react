import { Cog, PersonStanding } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Title } from "./Title";
import { NavLink } from "react-router";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header
      className="my-3 flex w-full max-w-lg items-center justify-between rounded-md bg-gray-800
        flex-wrap p-6"
    >
      <NavLink to="/">
        <div className="flex items-center gap-3">
          <PersonStanding className="text-green-400" size={48} />
          <Title />
        </div>
      </NavLink>
      <a
        className="flex gap-3 rounded-md px-6 py-3 text-white dark:bg-gray-900"
        href="/config"
      >
        <Cog size={24} />
        <p className="text-lg">{t("config")}</p>
      </a>
    </header>
  );
};
