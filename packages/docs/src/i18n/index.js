// Vue
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import router from '../router'

// Data
import languages from '@/data/i18n/languages.json'
import en from '@/lang/en'

Vue.use(VueI18n)

const fallbackLocale = 'en'

let locale = fallbackLocale

locale = document.documentElement.lang

const i18n = new VueI18n({
  fallbackLocale,
  locale,
  messages: { en },
  silentFallbackWarn: true,
})

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)

  return lang
}

function loadLanguageAsync (lang) {
  const loadedLanguages = []
  const globalLanguages = {}
  if (!loadedLanguages.includes(lang)) {
    const { locale } = languages.find(l => lang === l.alternate || lang === l.locale) || {}

    if (!locale) return Promise.reject(new Error('Language not found'))

    return import(
      /* webpackChunkName: "lang-[request]" */
      `@/lang/${locale}`
    ).then(msgs => {
      loadedLanguages.push(lang)
      globalLanguages[lang] = msgs.default
      i18n.setLocaleMessage(lang, globalLanguages[lang])

      return Promise.resolve(setI18nLanguage(lang))
    }).catch(err => {
      throw err
    })
  }

  return Promise.resolve(setI18nLanguage(lang))
}

router.beforeEach((to, from, next) => {
    loadLanguageAsync(to.params.lang)
    .then(() => next())
    .catch(() => next('/' + fallbackLocale))
})

export default i18n
