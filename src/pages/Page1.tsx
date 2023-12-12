import { useTranslation } from "react-i18next";
import "./toggle.scss";

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
    const menu = document.querySelector(".menu");

    toggle?.classList.toggle("on");
    menu?.classList.toggle("on");
  }

  return (
    <main
      className="app-content flex flex-col h-full p-10"
      style={{ alignItems: "center" }}
    >
      {/* <div className="absolute w-[50%] z[-1] rotate-12 h-[50%] bg-gradient-to-r from-yellow-200 via-pink-200 to-pink" /> */}
      <header className="flex mb-6 relative w-full flex-row-reverse items-center">
        <div
          className="toggle cursor-pointer flex flex-col"
          onClick={() => toggle()}
        >
          {["one", "two", "three"].map((cla) => {
            return (
              <div
                className={`${cla} h-[5px] bg-blue rounded-sm transition-all`}
                key={cla}
              />
            );
          })}
        </div>
      </header>
      <div className="menu shadow-md bg-blue rounded-bl-md">
        <div className="mt-20">
          {languages.map((i) => {
            const { name, id } = i;
            return (
              <div
                key={id}
                className="menu-item relative before:transition-transform transition-colors  mx-4 text-3xl font-bold my-2 cursor-pointer text-grays"
                onClick={() => {
                  i18n.changeLanguage(id);
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>

      <section className="w-[800px] flex-1">
        <div>
          <span className="text-blue"> language now：</span>
          <span className="text-yellow font-bold text-xl">{i18n.language}</span>
        </div>

        <div className="font-bold text-4xl text-gray mb-3">{t("header")}</div>
        <div className="font-bold text-3xl text-gray mb-3">
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
