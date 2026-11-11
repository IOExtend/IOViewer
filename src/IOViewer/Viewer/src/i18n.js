const dictionaries = {
  ru: {
    elements: 'Элементов',
    noGeometry: 'Нет геометрии',
    selected: 'Выбрано',
    close: 'Закрыть',
    elementGroup: 'Элемент',
    id: 'Id',
    category: 'Категория',
    type: 'Тип',
    level: 'Уровень',
    link: 'Связанный файл',
  },
  en: {
    elements: 'Elements',
    noGeometry: 'No geometry',
    selected: 'Selected',
    close: 'Close',
    elementGroup: 'Element',
    id: 'Id',
    category: 'Category',
    type: 'Type',
    level: 'Level',
    link: 'Link',
  },
};

export const lang = (globalThis.navigator?.language ?? '').toLowerCase().startsWith('ru') ? 'ru' : 'en';

export function t(key) {
  const text = dictionaries[lang][key];
  if (text === undefined) throw new Error(`Missing UI string '${key}'.`);
  return text;
}
