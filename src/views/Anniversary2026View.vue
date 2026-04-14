<script setup lang="ts">
import { onMounted, ref } from 'vue'

// --- Tab state ---
const activeTab = ref('game')
const tabs = [
  { key: 'game', label: '首页' },
  { key: 'letter', label: '信' },
  { key: 'gallery', label: '文创' },
]

// --- Game ---
function playGame() {
  if (!window.matchMedia('(min-width: 768px)').matches) {
    window.location.href = '/anniversary/2026/web-mobile/index.html'
  } else {
    window.location.href = '/anniversary/2026/web-desktop/index.html'
  }
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
const galleryItems: Record<string, { label: string; items: { src: string; name: string }[] }> = {
  badges: {
    label: '徽章',
    items: [
      { src: '/assets/gallery-2026/徽章-郁金香.webp', name: '郁金香' },
      { src: '/assets/gallery-2026/徽章-玉兰.webp', name: '玉兰' },
      { src: '/assets/gallery-2026/徽章-樱花.webp', name: '樱花' },
      { src: '/assets/gallery-2026/徽章-山茶.webp', name: '山茶' },
      { src: '/assets/gallery-2026/徽章-杜鹃.webp', name: '杜鹃' },
    ],
  },
  cards: {
    label: '透卡',
    items: [
      { src: '/assets/gallery-2026/透卡-玉兰.webp', name: '玉兰' },
      { src: '/assets/gallery-2026/透卡-樱花.webp', name: '樱花' },
    ],
  },
  charms: {
    label: '挂件',
    items: [
      { src: '/assets/gallery-2026/挂件-围观.webp', name: '围观' },
      { src: '/assets/gallery-2026/挂件-点赞.webp', name: '点赞' },
      { src: '/assets/gallery-2026/挂件-干饭.webp', name: '干饭' },
      { src: '/assets/gallery-2026/挂件-皇帝驾到.webp', name: '皇帝驾到' },
      { src: '/assets/gallery-2026/挂件-敲木鱼.webp', name: '敲木鱼' },
    ],
  },
  puzzle: {
    label: '拼图',
    items: [
      { src: '/assets/gallery-2026/拼图-主图.webp', name: '拼图主图' },
      { src: '/assets/gallery-2026/拼图-1.webp', name: '拼图分图 1' },
      { src: '/assets/gallery-2026/拼图-2.webp', name: '拼图分图 2' },
    ],
  },
  postcards: {
    label: '明信片',
    items: [
      { src: '/assets/gallery-2026/明信片-1.webp', name: '明信片 1' },
      { src: '/assets/gallery-2026/明信片-2.webp', name: '明信片 2' },
      { src: '/assets/gallery-2026/明信片-3.webp', name: '明信片 3' },
      { src: '/assets/gallery-2026/明信片-4.webp', name: '明信片 4' },
      { src: '/assets/gallery-2026/明信片-5.webp', name: '明信片 5' },
      { src: '/assets/gallery-2026/明信片-6.webp', name: '明信片 6' },
      { src: '/assets/gallery-2026/明信片-7.webp', name: '明信片 7' },
      { src: '/assets/gallery-2026/明信片-8.webp', name: '明信片 8' },
      { src: '/assets/gallery-2026/明信片-9.webp', name: '明信片 9' },
      { src: '/assets/gallery-2026/明信片-10.webp', name: '明信片 10' },
      { src: '/assets/gallery-2026/明信片-11.webp', name: '明信片 11' },
      { src: '/assets/gallery-2026/明信片-12.webp', name: '明信片 12' },
      { src: '/assets/gallery-2026/明信片-款式7正面+基础背面.webp', name: '明信片款式 7 正背面' },
    ],
  },
  others: {
    label: '其他',
    items: [
      { src: '/assets/gallery-2026/礼品袋.webp', name: '礼品袋' },
      { src: '/assets/gallery-2026/海报.webp', name: '海报' },
    ],
  },
}

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
      <section v-if="activeTab === 'game'" class="panel panel-home">
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
      <section v-if="activeTab === 'letter'" class="panel panel-letter">
        <div class="letter-paper">
          <div class="letter-header-deco"></div>
          <h2 class="letter-title">致茶友们的一封信</h2>
          <div class="letter-body">
            <p class="letter-greeting">各位亲爱的茶友：</p>
            <p>2021 年 4 月 15 日，在复旦园和煦的春风中，一只旦挞猫猫悄悄在校园的某个角落里破壳而出，并用代码为复旦大学的各位茶友搭建起一个小小的交流空间。转眼间，在各位茶友的陪伴下，这只可爱的猫猫迎来了五岁生日。</p>
            <p>五年来，猫猫迎来了五万余位作客的茶友；人声鼎沸中，五百余万条消息在茶楼里留下回响。对于每一位造访的茶友来说，茶楼或许都有着属于自己的独特意义。</p>
            <p>或许，你是茶楼的常客，每天造访已经成为习惯；或许，你心血来潮时会来听听最新校园奇谭。</p>
            <p>或许，你最爱翻阅猫猫钦点的「#旦挞精选」；或许，你最关心的是茶楼顶上的公告栏。</p>
            <p>或许，你热爱在茶楼激扬文字，是名副其实的「大水怪」；或许，你在默默潜水时注视着浪花有所感慨。</p>
            <p>或许，茶楼是你茶余饭后的快乐来源；或许，茶楼是你深夜 emo 时的温暖港湾。</p>
            <p>或许，茶楼是你分享生活智慧的闪耀平台；或许，茶楼是你手足无措时的智囊团。</p>
            <p>或许，茶楼是你碰撞思维火花的试炼场；或许，茶楼是你寻找同好的朋友圈。</p>
            <p>无论茶楼对大家来说意味着什么，旦挞猫猫都会感到非常欣慰！猫猫喜欢看到茶楼里热闹的样子，喜欢身边有熟客的陪伴，喜欢重逢阔别已久的面孔，也喜欢看到大家脸上的笑容！每当看到温馨和谐的茶楼，猫猫都会忍不住幸福地发眯起眼睛，发出咕噜咕噜的声音！（当然，猫猫最喜欢的是遵守规则、维护茶楼友好氛围的好孩子，对于不遵守规则的坏孩子猫猫也是不会客气的！）</p>
            <p>茶楼的今天离不开各位茶友的踊跃参与，也离不开各位猫猫的饲养员——旦挞团队的辛勤付出。如今，旦挞团队已经有了 70 位成员。对于旦挞团队的各位成员来说，为各位茶友提供更好的服务是我们一直以来的追求。我们喜欢看到大家在 GitHub 仓库中点亮的星星，喜欢看到维护时大家表达的支持和鼓励；喜欢看到大家对猫猫表情包、红包封面、文创物料、推送文案的夸夸和热情，喜欢看到各个社团的联动申请；喜欢看到大家对卖萌的管理员表达的善意，也喜欢看到大家在站务区、QQ 群和邮件里对团队工作提出的真诚建议。如果你也希望成为一名饲养员，那么我们非常欢迎你的加入！</p>
            <p>感谢各位茶友一直以来的支持，希望大家都能够常来坐坐，在茶楼收获更多快乐～猫猫会一直在茶楼里摇着尾巴等待你！</p>
            <div class="letter-sig">
              <p>旦挞团队</p>
              <p>旦挞猫猫（爪印代）</p>
              <p>2026 年 4 月 15 日</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ====== GALLERY ====== -->
      <section v-if="activeTab === 'gallery'" class="panel panel-gallery">
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

.panel {
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

/* ===== GALLERY PANEL ===== */
.gallery-cats {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.gallery-cat-btn {
  padding: 0.4rem 1.2rem;
  border: 1px solid var(--c-blossom);
  background: transparent;
  color: var(--c-blossom-deep);
  border-radius: 999px;
  font-family: 'ZCOOL XiaoWei', serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.06em;
}

.gallery-cat-btn:hover {
  background: var(--c-blossom-wash);
}

.gallery-cat-btn.active {
  background: var(--c-blossom-deep);
  color: white;
  border-color: var(--c-blossom-deep);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
}

.gallery-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.25s ease;
}

.gallery-cell:hover {
  transform: scale(1.04);
}

.gallery-cell img {
  width: 100%;
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(232, 160, 180, 0.12);
}

.gallery-cell-name {
  font-size: 0.8rem;
  color: var(--c-ink-light);
  margin-top: 0.4rem;
  letter-spacing: 0.04em;
}

.gallery-credit {
  text-align: center;
  font-size: 0.78rem;
  color: var(--c-ink-light);
  margin-top: 1.5rem;
  opacity: 0.6;
}

/* ===== LIGHTBOX ===== */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: lb-in 0.2s ease;
  cursor: pointer;
}

@keyframes lb-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 0.75rem;
  box-shadow: 0 16px 64px rgba(0, 0, 0, 0.3);
  cursor: default;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  transition: background 0.2s;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
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

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 0.75rem;
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
