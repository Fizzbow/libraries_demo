import "./App.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const langs = ["en", "cn"];

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(t("title"));
  }, [i18n.language]);

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card ">
        {langs.map((lang) => {
          return (
            <button key={lang} onClick={() => i18n.changeLanguage(lang)}>
              {lang}
            </button>
          );
        })}

        <h1>{i18n.language}</h1>

        <p>{t("title")}</p>
      </div>
    </div>
  );
}

export default App;
