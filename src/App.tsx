import "./App.css";
import { useTranslation } from "react-i18next";
import Page1 from "./pages/Page1";

const langs = ["en", "cn"];

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="app flex flex-col">
      <Page1 />

      {/* <div className="app-nav flex flex-col bg-slate-700 h-full w-[7rem]">
        {" "}
        {langs.map((lang) => {
          return (
            <button key={lang} onClick={() => i18n.changeLanguage(lang)}>
              {lang}
            </button>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
