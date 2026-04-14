<script setup>
function goBack() {
    window.location.href = "/anniversary/2026"
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

        <section class="w-full rounded-3xl border-2 border-pink-200 p-5">
            <h2 class="text-xl font-semibold">五周年徽章·五款</h2>
            <div class="flex gap-1">
                <img src="/assets/gallery-2026/徽章-郁金香.webp" alt="郁金香" class="w-1/5">
                <img src="/assets/gallery-2026/徽章-玉兰.webp" alt="玉兰" class="w-1/5">
                <img src="/assets/gallery-2026/徽章-樱花.webp" alt="樱花" class="w-1/5">
                <img src="/assets/gallery-2026/徽章-山茶.webp" alt="山茶" class="w-1/5">
                <img src="/assets/gallery-2026/徽章-杜鹃.webp" alt="杜鹃" class="w-1/5">
            </div>
        </section>

        <section class="w-full rounded-3xl border-2 border-pink-200 p-5">
            <h2 class="text-xl font-semibold">五周年透卡·两款</h2>
            <div class="flex gap-1 justify-center">
                <img src="/assets/gallery-2026/透卡-玉兰.webp" alt="透卡-玉兰" class="w-1/3">
                <img src="/assets/gallery-2026/透卡-樱花.webp" alt="透卡-樱花" class="w-1/3">
            </div>
        </section>

        <section class="w-full rounded-3xl border-2 border-pink-200 p-5">
            <h2 class="text-xl font-semibold">猫猫亚克力挂件·五款</h2>
            <div class="flex gap-1">
                <img src="/assets/gallery-2026/挂件-围观.webp" alt="围观" class="w-1/5">
                <img src="/assets/gallery-2026/挂件-点赞.webp" alt="点赞" class="w-1/5">
                <img src="/assets/gallery-2026/挂件-干饭.webp" alt="干饭" class="w-1/5">
                <img src="/assets/gallery-2026/挂件-皇帝驾到.webp" alt="皇帝驾到" class="w-1/5">
                <img src="/assets/gallery-2026/挂件-敲木鱼.webp" alt="敲木鱼" class="w-1/5">
            </div>
        </section>

        <section class="w-full rounded-3xl border-2 border-pink-200 p-5">
            <h2 class="text-xl font-semibold">五周年礼品袋</h2>
            <div class="flex gap-1 justify-center">
                <img src="/assets/gallery-2026/礼品袋.webp" alt="礼品袋" class="w-1/2">
            </div>
        </section>

        <section class="w-full rounded-3xl border-2 border-pink-200 p-5">
            <h2 class="text-xl font-semibold">五周年海报</h2>
            <div class="flex gap-1 justify-center">
                <img src="/assets/gallery-2026/海报.webp" alt="海报" class="w-1/2">
            </div>
        </section>

        <section class="w-full rounded-3xl border-2 border-pink-200 p-5">
            <h2 class="text-xl font-semibold">拼图</h2>
            <div class="flex gap-1 justify-center">
                <img src="/assets/gallery-2026/拼图-主图.webp" alt="拼图主图" class="w-1/2">
                <img src="/assets/gallery-2026/拼图-1.webp" alt="拼图分图1" class="w-1/4">
                <img src="/assets/gallery-2026/拼图-2.webp" alt="拼图分图2" class="w-1/4">
            </div>
        </section>

        <section class="w-full rounded-3xl border-2 border-pink-200 p-5">
            <h2 class="text-xl font-semibold">明信片</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                <img src="/assets/gallery-2026/明信片-1.webp" alt="明信片1">
                <img src="/assets/gallery-2026/明信片-2.webp" alt="明信片2">
                <img src="/assets/gallery-2026/明信片-3.webp" alt="明信片3">
                <img src="/assets/gallery-2026/明信片-4.webp" alt="明信片4">
                <img src="/assets/gallery-2026/明信片-5.webp" alt="明信片5">
                <img src="/assets/gallery-2026/明信片-6.webp" alt="明信片6">
                <img src="/assets/gallery-2026/明信片-7.webp" alt="明信片7">
                <img src="/assets/gallery-2026/明信片-8.webp" alt="明信片8">
                <img src="/assets/gallery-2026/明信片-9.webp" alt="明信片9">
                <img src="/assets/gallery-2026/明信片-10.webp" alt="明信片10">
                <img src="/assets/gallery-2026/明信片-11.webp" alt="明信片11">
                <img src="/assets/gallery-2026/明信片-12.webp" alt="明信片12">
            </div>
            <div class="flex gap-1 justify-center mt-2">
                <img src="/assets/gallery-2026/明信片-款式7正面+基础背面.webp" alt="明信片款式7正背面" class="w-full md:w-1/2">
            </div>
        </section>

        <p class="text-gray-500 text-sm font-thin mb-2">旦挞五周年文创美工制作：@蔡欣岚 @伍芷萱 @张文惠 @幺一一</p>
    </section>
</template>
