<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Lang } from '../translations'
import { translations } from '../translations'
import heroPhotoDesktop from '../imports/IMG_2226 (desktop).PNG'
import heroPhotoMobile from '../imports/IMG_2226(mobile).PNG'
import ktLogo from '../imports/KT_logo_2_W (1).png'
import tvPlusLogo from '../imports/white flat logo TV+ (1).png'
import LanguageSwitcher from './LanguageSwitcher.vue'

const props = defineProps<{ lang: Lang }>()
const emit = defineEmits<{ 'update:lang': [lang: Lang] }>()
const t = computed(() => translations[props.lang])

const STARS = [
  { top: '9%',  left: '4%',   size: 9,  opacity: 0.85, delay: 0   },
  { top: '18%', left: '13%',  size: 5,  opacity: 0.6,  delay: 0.5 },
  { top: '7%',  left: '28%',  size: 7,  opacity: 0.7,  delay: 1.0 },
  { top: '14%', left: '53%',  size: 6,  opacity: 0.6,  delay: 0.3 },
  { top: '4%',  left: '69%',  size: 5,  opacity: 0.8,  delay: 0.8 },
  { top: '22%', left: '83%',  size: 7,  opacity: 0.7,  delay: 1.2 },
  { top: '42%', left: '7%',   size: 5,  opacity: 0.5,  delay: 0.6 },
  { top: '58%', left: '18%',  size: 8,  opacity: 0.6,  delay: 1.5 },
  { top: '68%', left: '73%',  size: 5,  opacity: 0.7,  delay: 0.4 },
  { top: '78%', left: '58%',  size: 6,  opacity: 0.5,  delay: 1.1 },
  { top: '33%', left: '46%',  size: 4,  opacity: 0.6,  delay: 0.9 },
  { top: '48%', left: '90%',  size: 6,  opacity: 0.7,  delay: 0.2 },
]

const loaded = ref(false)
onMounted(() => {
  setTimeout(() => { loaded.value = true }, 50)
})

const scrollToCTA = () => {
  document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })
}

// Split the title into phrases on any sentence punctuation (. ! ?) followed by
// a space — the last phrase is coloured yellow on its own line, the rest stay white.
const heroParts = computed(() => t.value.hero.title.split(/(?<=[.!?])\s+/))
const heroTitleFirst = computed(() => heroParts.value.slice(0, -1).join(' '))
const heroTitleLast = computed(() => heroParts.value.slice(-1)[0])
</script>

<template>
  <section class="hero-bg" style="min-height: 100vh; position: relative; overflow: hidden;">
    <LanguageSwitcher :lang="lang" @update:lang="emit('update:lang', $event)" />

    <!-- Glow blobs -->
    <div style="position: absolute; top: -80px; right: -80px; width: 420px; height: 420px; border-radius: 50%; background: radial-gradient(circle, rgba(0,100,255,0.22) 0%, transparent 70%); pointer-events: none;" />
    <div style="position: absolute; bottom: -100px; left: -60px; width: 360px; height: 360px; border-radius: 50%; background: radial-gradient(circle, rgba(0,60,180,0.18) 0%, transparent 70%); pointer-events: none;" />
    <div style="position: absolute; top: 30%; left: 43%; width: 320px; height: 320px; border-radius: 50%; background: radial-gradient(circle, rgba(0,80,220,0.13) 0%, transparent 70%); pointer-events: none;" />

    <!-- Grid lines -->
    <svg style="position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.06; pointer-events: none;">
      <line x1="0" y1="30%" x2="100%" y2="25%" stroke="white" stroke-width="1"/>
      <line x1="0" y1="65%" x2="100%" y2="70%" stroke="white" stroke-width="1"/>
      <line x1="20%" y1="0" x2="15%" y2="100%" stroke="white" stroke-width="1"/>
      <line x1="80%" y1="0" x2="85%" y2="100%" stroke="white" stroke-width="1"/>
    </svg>

    <!-- Stars -->
    <div
      v-for="(s, i) in STARS"
      :key="i"
      class="star-twinkle"
      :style="{ position: 'absolute', top: s.top, left: s.left, width: s.size + 'px', height: s.size + 'px', animationDelay: `${s.delay}s` }"
    >
      <svg :width="s.size" :height="s.size" viewBox="0 0 10 10">
        <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" :fill="`rgba(255,255,255,${s.opacity})`"/>
      </svg>
    </div>

    <!-- Paper plane -->
    <div
      class="plane-float"
      :style="{ position: 'absolute', top: '13%', right: '36%', opacity: loaded ? 1 : 0, transition: 'opacity 1.5s ease' }"
    >
      <svg width="64" height="52" viewBox="0 0 64 52" fill="none">
        <path d="M2 26 L62 4 L46 48 L30 34 Z" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
        <path d="M30 34 L34 50 L44 38" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
        <path d="M30 34 L62 4" stroke="rgba(255,255,255,0.25)" stroke-width="1" fill="none"/>
      </svg>
    </div>

    <!-- Desktop photo — bled flush into the section's top-right corner, independent of the padded grid -->
    <img
      :src="heroPhotoDesktop"
      class="hero-photo-desktop"
      :style="{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }"
      alt="Ученица с планшетом Казахтелеком"
    />

    <!-- Single responsive grid — order controlled purely via CSS (grid-template-areas) -->
    <div class="hero-layout" style="position: relative; z-index: 10;">
      <!-- Header — logos -->
      <div class="hero-header" :style="{ opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(-8px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <img :src="ktLogo" alt="Казахтелеком" class="hero-logo" />
          <img :src="tvPlusLogo" alt="TV+" class="hero-logo" />
        </div>
      </div>

      <!-- Text — badge, heading, description -->
      <div class="hero-text">
        <!-- Badge -->
        <div class="hero-badge" :style="{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#FFD400', color: '#001060',
          borderRadius: '100px',
          fontWeight: 700, letterSpacing: '0.05em',
          textTransform: 'uppercase',
          width: 'fit-content',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.2s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s',
        }">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 1L8 4.8H12L9 7.2L10.2 11L6.5 8.6L2.8 11L4 7.2L1 4.8H5Z" fill="#001060"/>
          </svg>
          {{ t.hero.badge.replace('★ ', '') }}
        </div>

        <!-- Heading -->
        <h1 class="hero-heading" :style="{
          fontWeight: 800,
          letterSpacing: '-0.02em',
          textAlign: 'left',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.6s ease 0.35s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.35s',
        }">
          <span style="color: white; display: inline-block;">{{ heroTitleFirst }}</span><br />
          <span style="color: #FFD400; display: inline-block;">{{ heroTitleLast }}</span>
        </h1>

        <!-- Description -->
        <p class="hero-desc" :style="{
          color: 'rgba(255,255,255,0.8)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.5s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.5s',
        }">
          {{ t.hero.subtitle }}
        </p>
      </div>

      <!-- Image slot — reserves column width on desktop; holds the actual photo on mobile -->
      <div class="hero-right-col">
        <img
          :src="heroPhotoMobile"
          class="hero-photo-mobile"
          :style="{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }"
          alt="Ученица с планшетом Казахтелеком"
        />
      </div>

      <!-- CTA — button + note -->
      <div class="hero-cta" :style="{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'none' : 'translateY(18px)',
        transition: 'opacity 0.6s ease 0.65s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.65s',
      }">
        <button class="cta-yellow" @click="scrollToCTA" style="
          background: #FFD400;
          color: #001060;
          border: none;
          border-radius: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          display: block;
        ">
          {{ t.hero.btn }}
        </button>

        <!-- Note -->
        <div class="hero-note" :style="{
          display: 'flex', alignItems: 'center', gap: '8px',
          color: 'rgba(255,255,255,0.6)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease 0.8s',
        }">
          <svg class="hero-note-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="rgba(255,255,255,0.55)" stroke-width="1.4" fill="none"/>
            <path d="M1.5 5.5l6.5 4 6.5-4" stroke="rgba(255,255,255,0.55)" stroke-width="1.4" stroke-linecap="round" fill="none"/>
          </svg>
          {{ t.hero.manager }}
        </div>
      </div>
    </div>
  </section>
</template>
