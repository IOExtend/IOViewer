import assert from 'node:assert/strict';
import { test } from 'node:test';
import { dictionaries } from '../../src/i18n.js';
import { locales, matchLocale, preferredLocale } from '../../src/locale.js';

test('chooses a supported preference, including the Chinese writing system', () => {
  assert.equal(preferredLocale(['nl-NL', 'fr-CA', 'en-GB']), 'fr');
  assert.equal(preferredLocale(['invalid_tag', 'ru-RU']), 'ru');
  assert.equal(preferredLocale(['nl-NL']), 'en');
  assert.equal(matchLocale('zh-CN'), 'zh-Hans');
  assert.equal(matchLocale('zh-TW'), 'zh-Hant');
  assert.equal(matchLocale('zh-Hant-CN'), 'zh-Hant');
  assert.equal(matchLocale('es-419'), 'es');
});

test('each language translates the complete set of viewer strings', () => {
  const keys = Object.keys(dictionaries.en).sort();
  const placeholders = value => [...value.matchAll(/\{\w+\}/g)].map(([token]) => token).sort();
  for (const locale of locales) {
    assert.deepEqual(Object.keys(dictionaries[locale]).sort(), keys, locale);
    for (const key of keys) {
      assert(dictionaries[locale][key].trim(), `${locale} ${key}`);
      assert.deepEqual(placeholders(dictionaries[locale][key]), placeholders(dictionaries.en[key]), `${locale} ${key}`);
    }
  }
});
