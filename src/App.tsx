import "./App.css";
import Page1 from "./pages/Page1";

function App() {
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
