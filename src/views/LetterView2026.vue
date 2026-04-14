<script setup lang="ts">
import { ROUTES } from '../config/routes'
import { goTo } from '../utils/navigation'
import { letterGreeting2026, letterParagraphs2026, letterSignature2026, letterTitle2026 } from './anniversary2026LetterData'

function goBack() {
    goTo(ROUTES.anniversary2026.base)
}
</script>

<template>
    <div class="letter-page">
        <div class="letter-card">
            <h1 class="letter-title">{{ letterTitle2026 }}</h1>
            <div class="letter-body">
                <p class="greeting">{{ letterGreeting2026 }}</p>
                <p v-for="paragraph in letterParagraphs2026" :key="paragraph">{{ paragraph }}</p>

                <div class="signature">
                    <p v-for="item in letterSignature2026" :key="item">{{ item }}</p>
                </div>
            </div>
            <button class="back-btn" @click="goBack">返回五周年庆</button>
        </div>
    </div>
</template>

<style scoped>
.letter-page {
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem 1.25rem;
}

.letter-card {
    background: white;
    border-radius: 1.5rem;
    padding: 2.5rem 2rem;
    box-shadow: 0 4px 24px rgba(219, 112, 147, 0.12);
}

.letter-title {
    text-align: center;
    font-size: 1.75rem;
    font-weight: 700;
    color: #b5495b;
    margin-bottom: 2rem;
    letter-spacing: 0.08em;
}

.letter-body {
    font-size: 1rem;
    line-height: 2;
    color: #4a4a4a;
}

.letter-body p {
    margin-bottom: 0.75rem;
    text-indent: 2em;
}

.greeting {
    text-indent: 0 !important;
    font-weight: 500;
}

.signature {
    margin-top: 2rem;
    text-align: right;
}

.signature p {
    text-indent: 0 !important;
    margin-bottom: 0.25rem;
    color: #b5495b;
    font-weight: 500;
}

.back-btn {
    display: block;
    margin: 2rem auto 0;
    padding: 0.6rem 1.5rem;
    border: 1px solid #e8b4bf;
    border-radius: 2rem;
    background: transparent;
    color: #b5495b;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
}

.back-btn:hover {
    background: #b5495b;
    color: white;
}
</style>
