import "./App.css";
import { useTranslation } from "react-i18next";

const langs = ["en", "cn"];

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="app flex flex-row">
      <div className="app-content flex flex-col w-full">
        <nav className="flex w-full flex-row-reverse">
          <button>open nav</button>{" "}
        </nav>
        <h1 className="text-red-50">{i18n.language}</h1>
        <p>{t("title")}</p>
      </div>

      <div className="app-nav flex flex-col bg-slate-700 h-full w-[7rem]">
        {" "}
        {langs.map((lang) => {
          return (
            <button key={lang} onClick={() => i18n.changeLanguage(lang)}>
              {lang}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
