<script setup lang="ts">
import PageContainer from '../components/PageContainer.vue'
import ProductCard from '../components/ProductCard.vue'
import Saying from '../components/Saying.vue'

const userComment = [
    { name: '某用户', content: '' },
    { name: '某用户', content: '' },
    { name: '某用户', content: '' }
]
</script>

<template><!-- PAGE-1 HERO -->
    <PageContainer>
        <div class="text-center">
            <img class="h-64 mx-auto" src="/assets/danke.svg" alt="蛋壳 logo" />
            <h1 class="mt-10 text-6xl font-bold">蛋壳课评</h1>
            <div class="mt-5 text-3xl">月旦雅评</div>
            <a href="https://danke.fduhole.com" target="_blank"><button
                    class="mt-5 rounded-2xl bg-gray-800 text-gray-50 px-5 py-2 hover:bg-gray-500 text-lg">访问</button></a>
        </div>
    </PageContainer>

    <!-- PAGE-2 FUNCTION -->
    <PageContainer class="bg-gray-800 text-gray-50">
        <h2>共建课程推荐体系</h2>
        <p>蛋壳为复旦同学提供编写课评的平台。同学们可以从课程难度、工作量与考核要求等角度为课程评分。</p>
    </PageContainer>

    <!-- PAGE-3 Statistics -->
    <PageContainer>
        <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-3.webp" alt="旦挞校园助手功能 8" />
                <div class="mt-5 text-2xl">星级好课</div>
                <div class="mt-5 text-lg">快来分享你的发现</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-4.webp" alt="旦挞校园助手功能 8" />
                <div class="mt-5 text-2xl">课程风格</div>
                <div class="mt-5 text-lg">选择轻松或是挑战自我</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-5.webp" alt="旦挞校园助手功能 5" />
                <div class="mt-5 text-2xl">课评互动</div>
                <div class="mt-5 text-lg">支持或反对，表达你的观点</div>
            </div>
        </div>
    </PageContainer>

    <!-- PAGE-4 USER -->
    <PageContainer>
        <div class="my-10 grid md:grid-cols-3 sm:grid-cols-1 gap-16">
            <div v-for="i in userComment">
                <Saying v-bind="i" />
            </div>
        </div>
    </PageContainer>

    <!-- PAGE-5 DOC -->
    <PageContainer>
        <a href="">
            <button class="px-5 py-2 text-xl hover:text-gray-500">
                使用条款
            </button>
        </a>
        <a href="">
            <button class="px-5 py-2 text-xl hover:text-gray-500">
                隐私政策
            </button>
        </a>
        <a href="">
            <button class="px-5 py-2 text-xl hover:text-gray-500">
                社区公约
            </button>
        </a>
    </PageContainer>
</template>
