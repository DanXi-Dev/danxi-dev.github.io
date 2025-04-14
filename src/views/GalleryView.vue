<script setup>
function goBack() {
    window.history.back()
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
        <h1 class="text-2xl font-bold">旦挞四周年文创·赛博美术馆——就在此处！</h1>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年吧唧·四款
            </h2>
            <div class="flex gap-1">
                <img src="/assets/gallery/paji-1.webp" alt="" class="w-1/4">
                <img src="/assets/gallery/paji-2.webp" alt="" class="w-1/4">
                <img src="/assets/gallery/paji-3.webp" alt="" class="w-1/4">
                <img src="/assets/gallery/paji-4.webp" alt="" class="w-1/4">
            </div>
        </section>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年表情包贴纸·五组
            </h2>
            <div class="flex gap-1">
                <img src="/assets/gallery/meme-1.webp" alt="" class="w-1/5">
                <img src="/assets/gallery/meme-2.webp" alt="" class="w-1/5">
                <img src="/assets/gallery/meme-3.webp" alt="" class="w-1/5">
                <img src="/assets/gallery/meme-4.webp" alt="" class="w-1/5">
                <img src="/assets/gallery/meme-5.webp" alt="" class="w-1/5">
            </div>
        </section>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年钥匙扣·五个
            </h2>
            <div class="flex gap-1">
                <img src="/assets/gallery/keyring-1.webp" alt="" class="w-1/5">
                <img src="/assets/gallery/keyring-2.webp" alt="" class="w-1/5">
                <img src="/assets/gallery/keyring-3.webp" alt="" class="w-1/5">
                <img src="/assets/gallery/keyring-4.webp" alt="" class="w-1/5">
                <img src="/assets/gallery/keyring-5.webp" alt="" class="w-1/5">
            </div>
        </section>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年光栅卡·六张
            </h2>
            <div class="flex gap-1 justify-center">
                <img src="/assets/gallery/card-1.webp" alt="" class="w-1/6">
                <img src="/assets/gallery/card-2.webp" alt="" class="w-1/6">
                <img src="/assets/gallery/card-3.webp" alt="" class="w-1/6">
                <img src="/assets/gallery/card-4.webp" alt="" class="w-1/6">
                <img src="/assets/gallery/card-5.webp" alt="" class="w-1/6">
                <img src="/assets/gallery/card-6.webp" alt="" class="w-1/6">
            </div>
        </section>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年立绘
            </h2>
            <div class="flex gap-1 justify-center">
                <img src="/assets/gallery/painting.webp" alt="" class="w-1/3">
            </div>
        </section>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年纸袋
            </h2>
            <div class="flex gap-1 justify-center">
                <img src="/assets/gallery/bag.webp" alt="" class="w-1/2">
            </div>
        </section>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年海报
            </h2>
            <div class="flex gap-1 justify-center">
                <img src="/assets/gallery/post.webp" alt="" class="w-1/2">
            </div>
        </section>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年横幅
            </h2>
            <div class="flex flex-col gap-1 justify-center">
                <img src="/assets/gallery/banner2.webp" alt="" class="w-full">
                <img src="/assets/gallery/banner1.webp" alt="" class="w-full">
            </div>
        </section>
        <section class="w-full rounded-3xl border-2 border-blue-200 p-5 ">
            <h2 class="text-xl font-semibold">
                四周年头图
            </h2>
            <div class="flex flex-col gap-1 justify-center">
                <img src="/assets/gallery/banner3.webp" alt="" class="w-full">
            </div>
        </section>

        <p class=" text-gray-500 text-sm font-thin mb-2">旦挞四周年文创美工制作：@MSapphire（伍芷萱） @masa（赵佳凝）
            @vickyvia114（张文惠）
        </p>
    </section>
</template>