<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { galleryItems } from './anniversary2026GalleryData'
import { letterGreeting2026, letterParagraphs2026, letterSignature2026, letterTitle2026 } from './anniversary2026LetterData'
import { ROUTES } from '../config/routes'
import { goToResponsivePage } from '../utils/navigation'

// --- Tab state ---
const activeTab = ref('game')
const tabs = [
  { key: 'game', label: '首页' },
  { key: 'letter', label: '信' },
  { key: 'gallery', label: '文创' },
]

// --- Game ---
function playGame() {
  goToResponsivePage(ROUTES.anniversary2026.webMobile, ROUTES.anniversary2026.webDesktop)
}

// --- Survey ---
function openSurvey() {
  window.open('https://danxi-dev.feishu.cn/share/base/form/shrcnjt9jP1Aqm9tyKiomJarvHf', '_blank')
}

// --- Petals ---
interface Petal {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  drift: number
  opacity: number
  rotation: number
}
const petals = ref<Petal[]>([])
let petalId = 0

function spawnPetals() {
  const arr: Petal[] = []
  for (let i = 0; i < 18; i++) {
    arr.push({
      id: petalId++,
      x: Math.random() * 100,
      size: 8 + Math.random() * 14,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 10,
      drift: -40 + Math.random() * 80,
      opacity: 0.25 + Math.random() * 0.45,
      rotation: Math.random() * 360,
    })
  }
  petals.value = arr
}

// --- Gallery state ---
const galleryCategory = ref('badges')

// --- Lightbox ---
const lightboxSrc = ref('')
function openLightbox(src: string) {
  lightboxSrc.value = src
}
function closeLightbox() {
  lightboxSrc.value = ''
}

onMounted(() => {
  spawnPetals()
})
</script>

<template>
  <div class="ann-root">
    <!-- Floating petals background -->
    <div class="petals-layer" aria-hidden="true">
      <div
        v-for="p in petals"
        :key="p.id"
        class="petal"
        :style="{
          left: p.x + '%',
          width: p.size + 'px',
          height: p.size + 'px',
          animationDelay: p.delay + 's',
          animationDuration: p.duration + 's',
          '--drift': p.drift + 'px',
          opacity: p.opacity,
          transform: 'rotate(' + p.rotation + 'deg)',
        }"
      />
    </div>

    <!-- Header -->
    <header class="ann-header">
      <div class="header-title-group">
        <h1 class="header-title">旦挞五周年</h1>
        <p class="header-sub">2021 — 2026</p>
      </div>
    </header>

    <!-- Tab navigation -->
    <nav class="tab-bar">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-btn"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </nav>

    <!-- Tab content -->
    <main class="tab-content">
      <!-- ====== GAME + SURVEY ====== -->
      <section v-if="activeTab === 'game'" class="ann-panel panel-home">
        <p class="home-greeting">感谢每一位茶友的陪伴，猫猫五岁啦！</p>
        <div class="home-cards">
          <div class="home-card" @click="playGame">
            <span class="home-card-icon">&#127918;</span>
            <h3 class="home-card-title">合成大猫猫</h3>
            <p class="home-card-desc">五周年特别小游戏<br/>合成你的专属猫猫皇帝！</p>
            <span class="home-card-link">开始游戏 &rarr;</span>
          </div>
          <div class="home-card" @click="openSurvey">
            <span class="home-card-icon">&#128203;</span>
            <h3 class="home-card-title">五周年问卷</h3>
            <p class="home-card-desc">你的反馈是旦挞进步的动力<br/>问卷很短，只需几分钟～</p>
            <span class="home-card-link">填写问卷 &rarr;</span>
          </div>
        </div>
      </section>

      <!-- ====== LETTER ====== -->
      <section v-if="activeTab === 'letter'" class="ann-panel panel-letter">
        <div class="letter-paper">
          <div class="letter-header-deco"></div>
          <h2 class="letter-title">{{ letterTitle2026 }}</h2>
          <div class="letter-body">
            <p class="letter-greeting">{{ letterGreeting2026 }}</p>
            <p v-for="paragraph in letterParagraphs2026" :key="paragraph">{{ paragraph }}</p>
            <div class="letter-sig">
              <p v-for="item in letterSignature2026" :key="item">{{ item }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ====== GALLERY ====== -->
      <section v-if="activeTab === 'gallery'" class="ann-panel panel-gallery">
        <div class="gallery-cats">
          <button
            v-for="(cat, key) in galleryItems"
            :key="key"
            class="gallery-cat-btn"
            :class="{ active: galleryCategory === key }"
            @click="galleryCategory = key as string"
          >
            {{ cat.label }}
          </button>
        </div>
        <div class="gallery-grid">
          <div
            v-for="item in galleryItems[galleryCategory].items"
            :key="item.src"
            class="gallery-cell"
            @click="openLightbox(item.src)"
          >
            <img :src="item.src" :alt="item.name" loading="lazy" />
            <span class="gallery-cell-name">{{ item.name }}</span>
          </div>
        </div>
      </section>

    </main>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="lightboxSrc" class="lightbox" @click="closeLightbox">
        <img :src="lightboxSrc" class="lightbox-img" @click.stop />
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
      </div>
    </Teleport>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&family=Noto+Serif+SC:wght@400;600&display=swap');
</style>

<style scoped>
@import './galleryShared.css';
@import './lightboxShared.css';

/* ===== FOUNDATIONS ===== */
.ann-root {
  --c-blossom: #e8a0b4;
  --c-blossom-deep: #c46b84;
  --c-blossom-pale: #fdf0f3;
  --c-blossom-wash: #fbe8ee;
  --c-ink: #3a2e2e;
  --c-ink-light: #6b5a5a;
  --c-leaf: #8fb88c;
  --c-leaf-pale: #ddecd8;
  --c-cream: #fdf8f4;
  --gallery-accent: var(--c-blossom);
  --gallery-accent-strong: var(--c-blossom-deep);
  --gallery-accent-bg: var(--c-blossom-wash);
  --gallery-text: var(--c-ink-light);

  position: relative;
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 20% 0%, var(--c-blossom-wash) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, var(--c-leaf-pale) 0%, transparent 40%),
    var(--c-cream);
  font-family: 'Noto Serif SC', 'Songti SC', 'STSongti', serif;
  color: var(--c-ink);
  overflow-x: hidden;
}

/* ===== PETALS ===== */
.petals-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.petal {
  position: absolute;
  top: -20px;
  border-radius: 50% 0 50% 0;
  background: radial-gradient(ellipse at 30% 30%, #f5c6d0, #e8a0b4);
  animation: petal-fall linear infinite;
}

@keyframes petal-fall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(1);
    opacity: var(--petal-opacity, 0.4);
  }
  50% {
    transform: translateY(50vh) translateX(var(--drift, 30px)) rotate(180deg) scale(0.85);
  }
  100% {
    transform: translateY(105vh) translateX(calc(var(--drift, 30px) * 1.5)) rotate(360deg) scale(0.7);
    opacity: 0;
  }
}

/* ===== HEADER ===== */
.ann-header {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 3rem 1rem 1rem;
}

.header-title {
  font-family: 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  font-weight: 600;
  color: var(--c-blossom-deep);
  letter-spacing: 0.15em;
  line-height: 1.6;
  margin: 0;
  overflow: visible;
  text-shadow: 0 2px 12px rgba(200, 107, 132, 0.18);
}

.header-sub {
  font-size: 0.95rem;
  color: var(--c-ink-light);
  letter-spacing: 0.3em;
  margin-top: 0.35rem;
  opacity: 0.7;
}

/* ===== TAB BAR ===== */
.tab-bar {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  margin: 0 auto;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 999px;
  border: 1px solid rgba(232, 160, 180, 0.25);
  box-shadow: 0 4px 24px rgba(200, 107, 132, 0.08);
}

.tab-btn {
  flex: 1;
  padding: 0.55rem 0;
  border: none;
  background: transparent;
  font-family: 'ZCOOL XiaoWei', serif;
  font-size: 1rem;
  color: var(--c-ink-light);
  cursor: pointer;
  border-radius: 999px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.08em;
}

.tab-btn:hover {
  color: var(--c-blossom-deep);
  background: rgba(232, 160, 180, 0.08);
}

.tab-btn.active {
  background: var(--c-blossom-deep);
  color: white;
  box-shadow: 0 2px 12px rgba(196, 107, 132, 0.3);
}

/* ===== CONTENT AREA ===== */
.tab-content {
  position: relative;
  z-index: 1;
  max-width: 680px;
  margin: 1.5rem auto 4rem;
  padding: 0 1.25rem;
}

.ann-panel {
  display: block;
  animation: panel-in 0.4s ease-out;
}

@keyframes panel-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== HOME PANEL ===== */
.home-greeting {
  text-align: center;
  font-family: 'ZCOOL XiaoWei', serif;
  font-size: 1.05rem;
  color: var(--c-blossom-deep);
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

.home-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 480px;
  margin: 0 auto;
}

.home-card {
  background: white;
  border-radius: 1rem;
  padding: 1.75rem 1.25rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(232, 160, 180, 0.15);
  box-shadow: 0 4px 20px rgba(196, 107, 132, 0.08);
  transition: all 0.3s ease;
}

.home-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(196, 107, 132, 0.18);
  border-color: rgba(232, 160, 180, 0.3);
}

.home-card-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.home-card-title {
  font-family: 'ZCOOL XiaoWei', serif;
  font-size: 1.05rem;
  color: var(--c-blossom-deep);
  margin: 0 0 0.5rem;
  font-weight: 400;
  letter-spacing: 0.08em;
}

.home-card-desc {
  font-size: 0.82rem;
  color: var(--c-ink-light);
  line-height: 1.7;
  margin: 0 0 1rem;
}

.home-card-link {
  display: inline-block;
  font-family: 'ZCOOL XiaoWei', serif;
  font-size: 0.85rem;
  color: var(--c-blossom-deep);
  letter-spacing: 0.06em;
  transition: letter-spacing 0.25s ease;
}

.home-card:hover .home-card-link {
  letter-spacing: 0.15em;
}

/* ===== LETTER PANEL ===== */
.letter-paper {
  background: white;
  border-radius: 0.5rem;
  padding: 2.5rem 2rem 2rem;
  position: relative;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.03),
    0 8px 32px rgba(196, 107, 132, 0.07);
  border: 1px solid rgba(232, 160, 180, 0.15);
}

.letter-header-deco {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--c-blossom), var(--c-leaf), var(--c-blossom));
  border-radius: 0.5rem 0.5rem 0 0;
}

.letter-title {
  font-family: 'ZCOOL XiaoWei', serif;
  font-size: 1.5rem;
  text-align: center;
  color: var(--c-blossom-deep);
  margin: 0.5rem 0 1.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
}

.letter-body {
  font-size: 0.95rem;
  line-height: 2;
  color: var(--c-ink);
}

.letter-body p {
  margin-bottom: 0.5rem;
  text-indent: 2em;
}

.letter-greeting {
  text-indent: 0 !important;
  font-weight: 600;
  color: var(--c-ink);
}

.letter-sig {
  margin-top: 2rem;
  text-align: right;
  border-top: 1px solid var(--c-blossom-wash);
  padding-top: 1rem;
}

.letter-sig p {
  text-indent: 0 !important;
  margin-bottom: 0.15rem;
  color: var(--c-blossom-deep);
  font-weight: 600;
  font-size: 0.9rem;
}

/* ===== MOBILE ===== */
@media (max-width: 640px) {
  .ann-header {
    padding: 2rem 1rem 0.5rem;
  }

  .header-title {
    font-size: 2rem;
  }

  .tab-bar {
    margin: 0 auto;
    width: calc(100% - 2rem);
    gap: 0.15rem;
    padding: 0.5rem 0.5rem;
  }

  .tab-btn {
    font-size: 0.88rem;
    padding: 0.45rem 0;
  }

  .tab-content {
    margin-top: 1rem;
    padding: 0 0.75rem;
  }

  .letter-paper {
    padding: 1.75rem 1.25rem 1.5rem;
  }

  .letter-title {
    font-size: 1.25rem;
  }

  .home-cards {
    grid-template-columns: 1fr;
    max-width: 320px;
  }

  .home-card {
    padding: 1.25rem 1rem;
  }
}
</style>
