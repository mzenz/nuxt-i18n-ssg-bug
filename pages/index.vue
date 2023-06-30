<template>
  <h1>Home</h1>
  <p>{{ t('welcome') }}</p>
  <h2>{{ t('flag') }}</h2>
  <button @click="onLanguageChange">{{ locale }}</button>
</template>

<script setup>
import { useI18n } from '#imports'

const { locale, t, availableLocales } = useI18n()

const onLanguageChange = () => {
  cycleLocale()
}

const cycleLocale = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>
