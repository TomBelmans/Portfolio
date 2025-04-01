import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

export default async function initTranslations(
  locale: string,
  namespaces: string[],
  i18nInstance?: any,
  resources?: any
) {
  const i18n = i18nInstance || createInstance()

  await i18n
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => 
      import(`./locales/${language}/${namespace}.json`)))
    .init({
      lng: locale,
      resources,
      fallbackLng: 'en',
      supportedLngs: ['en', 'nl'],
      defaultNS: namespaces[0],
      fallbackNS: namespaces[0],
      ns: namespaces,
      preload: typeof window === 'undefined' ? ['en', 'nl'] : [],
    })

  return i18n
} 