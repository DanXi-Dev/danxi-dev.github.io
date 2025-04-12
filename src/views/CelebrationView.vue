<script setup lang="ts">
import BlessingBar from '../components/BlessingBar.vue';
const mockMessage = [
    {
        content: "祝蛋挞生日快乐！",
        name: "某旦夕用户",
    }
]

function gamePage() {
    // 匹配手机长宽比
    if (window.matchMedia("(orientation: portrait)").matches) {
        window.location.href = "/web-mobile/index.html"
    } else {
        window.location.href = "/web-desktop/index.html"
    }
}

</script>

<template>
    <div class="w-full p-10 h-[64rem] flex flex-col gap-2">
        <BlessingBar class="w-full h-10" />
        <svg witdh="0" height="0">
            >
            <defs>
                <clipPath id="path" clipPathUnits="objectBoundingBox">
                    <path d="M0,0 L1,0 1,0.9 Q0.5,1 0,0.9">
                    </path>
                </clipPath>
            </defs>
        </svg>
        <div class=" grid grid-cols-2 grid-rows-3 gap-12 lg:grid-cols-3 lg:grid-rows-2 w-full flex-grow">
            <div class=" lg:row-span-2 lg:col-span-1 col-span-2 row-span-1 row rounded-xl flex flex-col justify-start items-center bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl from-[#f9d6a0] to-[#f9b3a0]"
                @click="gamePage">

                <div class="w-full h-2/3 rounded-xl bg-cover"
                    style="background-image: url(/assets/background.webp); clip-path: url(#path);">
                </div>

                <div class="flex-grow flex flex-col justify-center items-center">
                    <h1 class="text-[2rem] font-medium text-black">
                        合成大皇帝</h1>
                </div>
            </div>
            <div
                class="bg-gray-100 rounded-xl flex justify-start items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl from-cyan-200 to-blue-200 flex-col ">

                <div class="w-full h-2/3 rounded-xl bg-cover"
                    style="background-image: url(/assets/VCG211552944331.jpg); clip-path: url(#path);">
                </div>

                <div class="flex-grow flex flex-col justify-center items-center">
                    <h1 class="text-[2rem] font-medium text-black">
                        给洞友的一封信</h1>
                </div>
            </div>
            <div
                class="bg-gray-100  rounded-xl flex justify-start items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl  from-sky-200 to-indigo-200 flex-col">

                <div class="w-full h-2/3 rounded-xl bg-cover"
                    style="background-image: url(/assets/VCG211552591465.jpg); clip-path: url(#path);">
                </div>

                <div class="flex-grow flex flex-col justify-center items-center">
                    <h1 class="text-[2rem] font-medium text-black">
                        四周年文创一览</h1>
                </div>
            </div>
            <div
                class="bg-gray-100 rounded-xl flex justify-start items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl from-violet-200 to-fuchsia-200 flex-col">
                <div class="w-full h-2/3 rounded-xl bg-cover"
                    style="background-image: url(/assets/VCG211553238574.jpg); clip-path: url(#path);">
                </div>

                <div class="flex-grow flex flex-col justify-center items-center">
                    <h1 class="text-[2rem] font-medium text-black">
                        旦挞成员寄语</h1>
                </div>
            </div>
            <div
                class="bg-gray-100 rounded-xl flex justify-start items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:cursor-pointer relative bg-gradient-to-tl from-purple-200 to-pink-200 flex-col ">

                <div class="w-full h-2/3 rounded-xl bg-cover"
                    style="background-image: url(/assets/VCG211553238579.jpg); clip-path: url(#path);">
                </div>

                <div class="flex-grow flex flex-col justify-center items-center">
                    <h1 class="text-[2rem] font-medium text-black">
                        旦挞招新</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-family: var(--vp-font-family-base);
}
</style>