<script setup lang="ts">
import { ref, onMounted } from 'vue';

function gamePage() {
    if (!window.matchMedia("(min-width: 768px)").matches) {
        window.location.href = "/anniversary/2026/web-mobile/index.html"
    } else {
        window.location.href = "/anniversary/2026/web-desktop/index.html"
    }
}

function letterPage() {
    window.location.href = "/anniversary/2026/letter"
}

function merchPage() {
    window.location.href = "/anniversary/2026/gallery"
}

function surveyPage() {
    window.open("https://danxi-dev.feishu.cn/share/base/form/shrcnjt9jP1Aqm9tyKiomJarvHf", "_blank")
}

const src = ref("")

onMounted(() => {
    const update = () => {
        src.value = window.matchMedia("(min-width: 768px)").matches
            ? "/assets/game-2026-desktop.png"
            : "/assets/game-2026-mobile.png"
    }
    window.addEventListener("resize", update)
    update()
})

const imgLoaded = ref(false)
function imgLoad() {
    imgLoaded.value = true
}
</script>

<template>
    <div class="page-container">
        <div class="grid-layout">
            <!-- Game card: large, left side on desktop -->
            <div class="game-card card" @click="gamePage">
                <el-skeleton class="skeleton" :loading="true" v-if="!imgLoaded" />
                <img class="game-img" :src="src" @load="imgLoad" />
                <div class="card-overlay">
                    <span class="overlay-text">合成大猫猫 · 点击游玩</span>
                </div>
            </div>

            <!-- Letter card -->
            <div class="letter-card card" @click="letterPage">
                <div class="card-content">
                    <div class="card-icon">&#9993;</div>
                    <div class="card-label">致茶友们的一封信</div>
                </div>
            </div>

            <!-- Merch card -->
            <div class="merch-card card" @click="merchPage">
                <div class="card-content">
                    <div class="card-icon">&#127873;</div>
                    <div class="card-label">文创一览</div>
                </div>
            </div>

            <!-- Survey card -->
            <div class="survey-card card" @click="surveyPage">
                <div class="card-content">
                    <div class="card-icon">&#128221;</div>
                    <div class="card-label">调研问卷</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1.25rem;
}

.grid-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 1.25rem;
}

.card {
    border-radius: 1.5rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(219, 112, 147, 0.15);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(219, 112, 147, 0.3);
}

/* Game card spans left column, both rows on desktop */
.game-card {
    grid-row: 1 / 3;
    position: relative;
}

.skeleton {
    width: 100%;
    aspect-ratio: 313 / 625;
}

.game-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1rem 1.25rem;
    background: linear-gradient(transparent, rgba(181, 73, 91, 0.55));
    display: flex;
    justify-content: center;
}

.overlay-text {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

/* Text cards */
.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 1.5rem;
    height: 100%;
    min-height: 140px;
}

.card-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
}

.card-label {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.05em;
}

.letter-card {
    background: linear-gradient(135deg, #fce4ec, #f8bbd0);
    color: #880e4f;
}

.merch-card {
    background: linear-gradient(135deg, #fce4ec, #e1bee7);
    color: #6a1b9a;
}

.survey-card {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, #f3e5f5, #e8eaf6);
    color: #4a148c;
}

/* Mobile: single column */
@media (max-width: 767px) {
    .grid-layout {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

    .game-card {
        grid-row: auto;
    }

    .survey-card {
        grid-column: auto;
    }

    .skeleton {
        aspect-ratio: 720 / 480;
    }
}
</style>
