<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'

const product = [
    {
        cat: '校园', prod: [
            {
                // name: '旦挞 App',
                name: '旦挞校园助手',
                slogan: '陪伴你的校园生活',
                icon: '/assets/app.webp',
                nav: '/project/app',
                // }, {
                //     name: 'FDU Wiki',
                //     slogan: '复旦人的校园生存指南',
                //     icon: '/assets/danke.svg',
                //     nav: '/project/wiki'
            }
        ]
    },
    // {
    //     cat: '社区', prod: [
    //         {
    //             name: '旦挞茶楼',
    //             slogan: '洞见自我',
    //             icon: '/assets/treehole.svg',
    //             // nav: '/project/fduhole'
    //             nav: 'https://www.fduhole.com'
    //         }, {
    //             name: '蛋壳课评',
    //             slogan: '月旦雅评',
    //             icon: '/assets/danke.svg',
    //             // nav: '/project/danke'
    //             nav: 'https://danke.fduhole.com'
    //         }, {
    //             name: 'FDU-Hotpot',
    //             slogan: '学长学姐助力的留学交流平台',
    //             icon: '/assets/hotpot.webp',
    //             // nav: '/project/hotpot'
    //             nav: 'https://fdu-hotpot.top'
    //         }
    //     ],
    //     // }, {
    //     //     cat: '其他', prod: [
    //     //         {
    //     //             name: '像素画',
    //     //             slogan: '一周年纪念小游戏',
    //     //             icon: '/assets/canvas.ico',
    //     //             nav: 'project/canvas'
    //     //         }
    //     //     ]
    // }
]
</script>

<template>
    <div class="max-w-6xl m-auto p-12">
        <div class="text-5xl font-bold my-5">
            项目
        </div>
        <div v-for="t in product">
            <div class="text-xl font-bold mt-10 mb-5">{{ t.cat }}</div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                <a class="h-full" v-for=" i in t.prod" :href="i.nav">
                    <ProductCard v-bind="i" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
