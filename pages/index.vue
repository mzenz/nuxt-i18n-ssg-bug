<template>
  <h1>{{ t('welcome') }}</h1>
  <h2>{{ `${locale} ${t('flag')}` }}</h2>
  <button @click="cycleLocale">{{ t('nextLocale') }}</button>
  <br />
  <label>{{ t('language') }}</label>
  <select name="locales" @change="onLocaleSelected">
    <option v-for="l in availableLocales" :value="l">{{l}}</option>
  </select>

  <br />

  <span>{{ t('englishOnly') }}</span>
</template>

<script setup>
import { useI18n, useHead } from '#imports'

const { locale, t, availableLocales } = useI18n()

const onLocaleSelected = (e) => { locale.value = e.target.value }

const cycleLocale = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const title = computed(() => t('welcome'))

useHead({
  htmlAttrs: { lang: locale },
  title,
})
</script>
