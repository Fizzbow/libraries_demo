import { useTranslation } from "react-i18next";

const langs = ["en", "cn"];

const Page1 = () => {
  const { t, i18n } = useTranslation();
  return (
    <main
      className="app-content flex flex-col h-full p-20"
      style={{ alignItems: "center" }}
    >
      <nav className="flex w-full flex-row-reverse">
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
      </nav>

      <section className="w-[800px]">
        <div>
          <span className="text-blue-600"> language now：</span>
          <span className="text-amber-600"> {i18n.language}</span>
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
    </main>
  );
};

export default Page1;
