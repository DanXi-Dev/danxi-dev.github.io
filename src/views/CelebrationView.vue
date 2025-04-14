<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import BlessingBar from '../components/BlessingBar.vue';

function gamePage() {
    if (!window.matchMedia("(min-width: 768px)").matches) {
        window.location.href = "/web-mobile/index.html"
    } else {
        window.location.href = "/web-desktop/index.html"
    }
}

function holePage() {
    window.location.href = "/celebration/hole"
}

function recruitPage() {
    window.open("https://danxi-dev.feishu.cn/wiki/wikcn6MwNEtwXvpMWyiQN5ViBrd", "_blank")
}

function galleryPage() {
    window.location.href = "/celebration/gallery"
}

const src = ref("")

onMounted(() => {
    window.addEventListener("resize", () => {
        src.value = window.matchMedia("(min-width: 1280px)").matches ? "/assets/game-desktop.png.webp" : "/assets/game-mobile.png.webp"
    })
    src.value = window.matchMedia("(min-width: 1280px)").matches ? "/assets/game-desktop.png.webp" : "/assets/game-mobile.png.webp"
})

watch(src, () => console.log(src.value))

const imgLoaded = ref(false)
function imgLoad() {
    imgLoaded.value = true
}


</script>

<template>
    <div class="xl:w-3/4 w-full p-5  flex flex-col gap-2 m-auto">
        <BlessingBar class="w-full h-10" />
        <div class=" grid grid-cols-2 grid-rows-3 gap-9 xl:grid-cols-3 xl:grid-rows-2 w-full relative"
            style="grid-template-rows: auto auto auto;">
            <el-skeleton
                class="xl:row-span-2 xl:col-span-1 col-span-2 row-span-1 xl:h-full w-full rounded-3xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative"
                :loading="true" v-if="!imgLoaded"></el-skeleton>
            <img class="xl:row-span-2 xl:col-span-1 col-span-2 row-span-1 xl:h-full w-full rounded-3xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative"
                @click="gamePage" :src="src" @load="imgLoad">
            </img>
            <img class="w-full rounded-3xl  shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl from-cyan-200 to-blue-200"
                src="/assets/letter.png.webp">

            </img>
            <img class="w-full  rounded-3xl  shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl  from-sky-200 to-indigo-200 "
                src="/assets/gallery.png.webp" @click="galleryPage">
            </img>
            <img class="w-full rounded-3xl  shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl from-violet-200 to-fuchsia-200 "
                @click="holePage" src="/assets/board.png.webp">

            </img>
            <img class="w-full rounded-3xl  shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl from-purple-200 to-pink-200 "
                src="/assets/recruit.png.webp" @click="recruitPage">
            </img>
        </div>
    </div>
</template>

<style scoped></style>