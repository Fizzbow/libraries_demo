import { useTranslation } from "react-i18next";
import "./toggle.scss";

const langs = ["fr", "en", "cn"];

const languages = [
  {
    id: "en",
    name: "English",
  },
  {
    id: "cn",
    name: "中文",
  },
  {
    id: "fr",
    name: "Français",
  },
];

const Page1 = () => {
  const { t, i18n } = useTranslation();

  function toggle() {
    const toggle = document.querySelector(".toggle");

    toggle?.classList.toggle("on");
  }

  return (
    <main
      className="app-content flex flex-col h-full p-10"
      style={{ alignItems: "center" }}
    >
      <header className="flex mb-6 relative w-full flex-row-reverse items-center">
        <div
          className="toggle cursor-pointer flex flex-col"
          onClick={() => toggle()}
        >
          {["one", "two", "three"].map((cla) => {
            return (
              <div
                className={`${cla} h-[5px] bg-blue-600 rounded-sm transition-all`}
                key={cla}
              />
            );
          })}
        </div>
      </header>
      <div className="menu ">
        {langs.map((i) => {
          return (
            <button
              key={i}
              className="mx-2"
              onClick={() => i18n.changeLanguage(i)}
            >
              {i}
            </button>
          );
        })}
      </div>

      <section className="w-[800px] flex-1">
        <div>
          <span className="text-blue-600"> language now：</span>
          <span className="text-amber-600 font-bold text-xl">
            {" "}
            {i18n.language}
          </span>
        </div>

        <div className="font-bold text-4xl text-gray-600 mb-3">
          {t("header")}
        </div>
        <div className="font-bold text-3xl text-gray-600 mb-3">
          {t("part1.subTitle")}
        </div>

        {(t("part1.details", { returnObjects: true }) as string[]).map((i) => {
          return (
            <div key={i} className="my-1">
              {i}
            </div>
          );
        })}
      </section>

      <footer>
        <a href="https://github.com/Fizzbow/libraries_demo" target="_blank">
          github source code
        </a>
      </footer>
    </main>
  );
};

export default Page1;
