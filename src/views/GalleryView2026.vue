<script setup lang="ts">
import { ref } from 'vue'
import { galleryItems } from './anniversary2026GalleryData'

function goBack() {
  window.location.href = '/anniversary/2026'
}

const galleryCategory = ref('badges')
const lightboxSrc = ref('')

function openLightbox(src: string) {
  lightboxSrc.value = src
}

function closeLightbox() {
  lightboxSrc.value = ''
}
</script>

<template>
  <section class="md:w-2/3 m-auto w-full pl-10 pr-10 mt-2 flex flex-col gap-3">
    <el-page-header @back="goBack">
      <template #content>
        <span class="text-large font-600 mr-3"> 赛博美术馆 </span>
      </template>
      <template #title>
        <span class="text-large font-600 mr-3"> 返回 </span>
      </template>
    </el-page-header>
    <h1 class="text-2xl font-bold">旦挞五周年文创·赛博美术馆</h1>

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

    <p class="text-gray-500 text-sm font-thin mb-2">旦挞五周年文创美工制作：@蔡欣岚 @伍芷萱 @张文惠 @幺一一</p>
  </section>

  <Teleport to="body">
    <div v-if="lightboxSrc" class="lightbox" @click="closeLightbox">
      <img :src="lightboxSrc" class="lightbox-img" @click.stop />
      <button class="lightbox-close" @click="closeLightbox">&times;</button>
    </div>
  </Teleport>
</template>

<style scoped>
.gallery-cats {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.gallery-cat-btn {
  padding: 0.4rem 1.2rem;
  border: 1px solid #e8a0b4;
  background: transparent;
  color: #c46b84;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.06em;
}

.gallery-cat-btn:hover {
  background: #fbe8ee;
}

.gallery-cat-btn.active {
  background: #c46b84;
  color: white;
  border-color: #c46b84;
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
  color: #6b5a5a;
  margin-top: 0.4rem;
  letter-spacing: 0.04em;
}

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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 0.75rem;
  }
}
</style>
