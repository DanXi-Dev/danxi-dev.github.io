<script setup lang="ts">
import { ref } from 'vue'
import { galleryItems } from './anniversary2026GalleryData'
import { ROUTES } from '../config/routes'
import { goTo } from '../utils/navigation'

function goBack() {
  goTo(ROUTES.anniversary2026.base)
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
@import './galleryShared.css';
@import './lightboxShared.css';
</style>
