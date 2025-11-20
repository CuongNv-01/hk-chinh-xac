<template>
  <div class="language-switcher" ref="rootEl">
    <button
      class="ls-btn"
      type="button"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-haspopup="listbox"
      @click="toggle"
    >
      <i class="mdi mdi-translate me-1"></i>
      {{ currentLocale?.name }}
      <span class="chev" :class="{ open: isOpen }">▾</span>
    </button>

    <ul
      v-show="isOpen"
      class="ls-menu"
      role="listbox"
      :aria-activedescendant="`locale-${$i18n.locale}`"
    >
      <li v-for="localeItem in availableLocales" :key="localeItem.code" role="option" :id="`locale-${localeItem.code}`">
        <NuxtLink
          :to="switchLocalePath(localeItem.code)"
          class="ls-item"
          :class="{ active: localeItem.code === $i18n.locale }"
          @click="onSelect(localeItem.code)"
        >
          <span class="flag-icon me-2" :class="getFlagClass(localeItem.code)"></span>
          {{ localeItem.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

type LocaleCode = 'vi' | 'en' | 'ja'

const availableLocales = computed(() => locales.value)
const currentLocale = computed(() =>
  availableLocales.value.find(l => l.code === locale.value) || availableLocales.value[0]
)

const isOpen = ref(false)
const rootEl = ref<HTMLElement | null>(null)

const toggle = () => { isOpen.value = !isOpen.value }
const close = () => { isOpen.value = false }

const onClickOutside = (e: MouseEvent) => {
  if (!rootEl.value) return
  if (!rootEl.value.contains(e.target as Node)) close()
}

const onSelect = (code: LocaleCode) => {
  setLocale(code)
  close()
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})

const getFlagClass = (localeCode: string) => {
  const flagMap: Record<string, string> = {
    vi: '🇻🇳',
    en: '🇺🇸',
    ja: '🇯🇵'
  }
  return flagMap[localeCode] || '🌐'
}
</script>

<style scoped>
.language-switcher { position: relative; z-index: 1000; }

.ls-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #2980B9;
  color: #2980B9;
  background: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
}
.ls-btn:hover { background: #2980B9; color: #fff; }
.ls-btn .chev { margin-left: 2px; transition: transform .15s ease; }
.ls-btn .chev.open { transform: rotate(180deg); }

.ls-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  min-width: 180px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 6px 0;
  box-shadow: 0 8px 24px rgba(0,0,0,.12);
}

.ls-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;
}
.ls-item:hover { background: #f8f9fa; color: #2980B9; }
.ls-item.active { background: #2980B9; color: #fff; }

.flag-icon { font-size: 1.1em; line-height: 1; }

@media (max-width: 768px) {
  .ls-btn { font-size: 0.875rem; padding: 4px 8px; }
}
</style>