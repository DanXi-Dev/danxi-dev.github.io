<script setup>
import PageContainer from '../components/PageContainer.vue'
import ProductCard from '../components/ProductCard.vue'
import Saying from '../components/Saying.vue'

const integratedServices = [
    {
        name: '旦夕树洞',
        slogan: '洞见自我',
        icon: '/assets/treehole.svg',
        nav: '/project/fduhole'
    }, {
        name: '蛋壳课评',
        slogan: '月旦雅评',
        icon: '/assets/danke.svg',
        nav: '/project/danke'
    }, {
        name: 'FDU-Hotpot',
        slogan: '学长学姐助力的留学交流平台',
        icon: '/assets/hotpot.webp',
        nav: '/project/hotpot'
    }
]

const userComment = [
    { name: '某本科用户', content: '用上啦！目前体验很好，终于摆脱了ehall小程序😁' },
    { name: '某20级本科用户', content: '这是要让ehall无地自容吗(꒪꒫꒪ )' },
    { name: '某用户', content: '太美好了 希望有这样的平台很久了 感谢初创团队' }
]
</script>
    
<template>
    <!-- PAGE-1 HERO -->
    <PageContainer>
        <div class="text-center">
            <img class="h-64 mx-auto" src="/assets/app.webp" alt="旦夕 app logo" />
            <h1 class="mt-10 text-6xl font-bold">旦夕 App</h1>
            <div class="mt-5 text-3xl">陪伴你的校园生活</div>
            <a href="/download"><button
                    class="mt-5 rounded-2xl bg-gray-800 text-gray-50 px-5 py-2 hover:bg-gray-500 text-lg">下载</button></a>
        </div>
    </PageContainer>

    <!-- PAGE-2 BIG FUNCTION -->
    <PageContainer class="bg-gray-800 text-gray-50">
        <p>丰富的功能，只为提供更多的方便</p>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="flex flex-col items-center">
                <img class="h-64" src="/assets/app-function-1.webp" alt="旦夕 app 功能 1" />
                <div class="mt-5 text-3xl">生活查询</div>
                <div class="mt-5 text-xl">饭卡余额、寝室电量与刷段情况一目了然</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-64" src="/assets/app-function-2.webp" alt="旦夕 app 功能 2" />
                <div class="mt-5 text-3xl">学习助手</div>
                <div class="mt-5 text-xl">考试时间与绩点一键了解，还有便捷的课表查询</div>
            </div>
        </div>
    </PageContainer>

    <!-- PAGE-3 SMALL FUNCTION -->
    <PageContainer>
        <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-3.webp" alt="旦夕 app 功能 8" />
                <div class="mt-5 text-2xl">课程</div>
                <div class="mt-5 text-lg">一键导出完整课表日程、下节提醒、自定义课表</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-4.webp" alt="旦夕 app 功能 8" />
                <div class="mt-5 text-2xl">校车</div>
                <div class="mt-5 text-lg">收发车时间立刻了解</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-5.webp" alt="旦夕 app 功能 5" />
                <div class="mt-5 text-2xl">空教室</div>
                <div class="mt-5 text-lg">找一个自习好去处</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-6.webp" alt="旦夕 app 功能 6" />
                <div class="mt-5 text-2xl">图书馆人数</div>
                <div class="mt-5 text-lg">可能是...自习的更好去处？</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-7.webp" alt="旦夕 app 功能 7" />
                <div class="mt-5 text-2xl">复旦生活码</div>
                <div class="mt-5 text-lg">可在快捷菜单中打开</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-8.webp" alt="旦夕 app 功能 8" />
                <div class="mt-5 text-2xl">刷锻</div>
                <div class="mt-5 text-lg">与体教部信息实时同步</div>
            </div>
        </div>
    </PageContainer>

    <!-- PAGE-4 INTEGRATION -->
    <PageContainer class="bg-gray-50">
        <h2>与其他项目集成</h2>
        <p>可以在一个 app 里便捷地访问树洞、课评等服务</p>
        <div class="mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <a class="h-full" v-for=" i in integratedServices" :href="i.nav">
                <ProductCard v-bind="i" />
            </a>
        </div>
    </PageContainer>

    <!-- PAGE-5 USER -->
    <PageContainer>
        <div class="my-10 grid md:grid-cols-3 sm:grid-cols-1 gap-16">
            <div v-for="i in userComment">
                <Saying v-bind="i" />
            </div>
        </div>
    </PageContainer>

    <!-- PAGE-6 DOC -->
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
    </PageContainer>
</template>
