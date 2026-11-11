const dictionaries = {
  ru: {
    elements: 'Элементов',
    noGeometry: 'Нет геометрии',
  },
  en: {
    elements: 'Elements',
    noGeometry: 'No geometry',
  },
};

export const lang = (globalThis.navigator?.language ?? '').toLowerCase().startsWith('ru') ? 'ru' : 'en';

export function t(key) {
  const text = dictionaries[lang][key];
  if (text === undefined) throw new Error(`Missing UI string '${key}'.`);
  return text;
}
