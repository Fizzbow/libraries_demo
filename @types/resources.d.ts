interface Translation {}

export interface Resources<Translation> {
  translation: {
    en: {
      translation: Translation;
    };
    cn: {
      translation: Translation;
    };
    fr: {
      translation: Translation;
    };
  };
}
