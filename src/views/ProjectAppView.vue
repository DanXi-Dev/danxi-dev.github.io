<script setup>
import { ref } from 'vue'
import PageContainer from '../components/PageContainer.vue'
import ProductCard from '../components/ProductCard.vue'
import Saying from '../components/Saying.vue'

let showDownload = ref(false)

const latestVersion = '1.3.13'
const oldestVersion = '1.3.11'

const downloadList = [
    {
        platform: 'iOS / iPadOS / macOS (Apple Silicon)',
        channel: 'AppStore',
        link: 'https://apps.apple.com/cn/app/%E6%97%A6%E5%A4%95/id1568629997'
    }, {
        platform: 'Android',
        channel: 'Download',
        link: 'https://static.fduhole.com/danxi-latest.apk'
    }, {
        platform: 'Windows',
        channel: 'GitHub Release',
        link: 'https://github.com/DanXi-Dev/DanXi/releases/latest'
    }, {
        platform: 'Android FOSS',
        channel: 'F-Droid',
        link: 'https://f-droid.org/packages/io.github.danxi_dev.dan_xi/'
    }
]

const integratedServices = [
    {
        name: '旦夕树洞',
        slogan: '洞见自我',
        icon: '/assets/treehole.svg',
        // nav: '/project/fduhole'
        nav: 'https://www.fduhole.com'
    }, {
        name: '蛋壳课评',
        slogan: '月旦雅评',
        icon: '/assets/danke.svg',
        // nav: '/project/danke'
        nav: 'https://danke.fduhole.com'
    }, {
        name: 'FDU-Hotpot',
        slogan: '学长学姐助力的留学交流平台',
        icon: '/assets/hotpot.webp',
        // nav: '/project/hotpot'
        nav: 'https://fdu-hotpot.top'
    }
]

const userComment = [
    { name: '某本科用户', content: '用上啦！目前体验很好，终于摆脱了ehall小程序😁' },
    { name: '某20级本科用户', content: '这是要让ehall无地自容吗(꒪꒫꒪ )' },
    { name: '某用户', content: '太美好了 希望有这样的平台很久了 感谢初创团队' }
]
</script>
    
<template>
    <PageContainer>
        <!-- PAGE-1 HERO -->
        <div class="text-center">
            <img class="h-64 mx-auto" src="/assets/app.webp" alt="旦夕 app logo" />
            <h1 class="mt-10 text-6xl font-bold">旦夕 App</h1>
            <div class="mt-5 text-3xl">陪伴你的校园生活</div>
            <div class="mt-1 text-sm text-gray-400">
                <span>最新版: {{ latestVersion }}</span> <span>最低支持版本: {{ oldestVersion }}</span>
            </div>
            <div>
                <button class="mx-2 mt-5 rounded-2xl bg-gray-800 text-gray-50 px-5 py-2 hover:bg-gray-500 text-lg"
                    @click="showDownload = !showDownload">下载</button>
                <a href="https://github.com/DanXi-Dev/DanXi" target="_blank"><button
                        class="mx-2 mt-5 rounded-2xl bg-gray-800 text-gray-50 px-5 py-2 hover:bg-gray-500 text-lg">GitHub</button></a>
            </div>
        </div>
        <div class="p-5" v-show="showDownload">
            <table class="m-auto">
                <tr>
                    <td class="px-5 font-bold">DanXi</td>
                </tr>
                <tr v-for="d in downloadList">
                    <td class="px-5">{{ d.platform }}</td>
                    <td class="px-5"><a class="font-semibold" :href="d.link">{{ d.channel }}</a></td>
                </tr>
            </table>
        </div>
    </PageContainer>

    <PageContainer class="bg-gray-800 text-gray-50">
        <!-- PAGE-3 INTEGRATION -->
        <h2>校园服务</h2>
        <p>校园卡余额、课表、考试、空教室、刷锻、入校权限、校车班次、寝室电量、图书馆人数、食堂排队、教务处通知、图书馆人数...</p>
        <p>需要更多功能？欢迎 Feature Requests！</p>
    </PageContainer>

    <PageContainer class="bg-gray-50">
        <!-- PAGE-3 INTEGRATION -->
        <h2>与其他项目集成</h2>
        <p>可以在一个 app 里便捷地访问树洞、课评等服务</p>
        <div class="mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <a class="h-full" v-for="i in integratedServices" :href="i.nav">
                <ProductCard v-bind="i" />
            </a>
        </div>
    </PageContainer>


    <PageContainer>
        <!-- PAGE-5 USER -->
        <div class="my-10 grid md:grid-cols-3 sm:grid-cols-1 gap-16">
            <div v-for="i in userComment">
                <Saying v-bind="i" />
            </div>
        </div>
    </PageContainer>


    <PageContainer>
        <!-- PAGE-6 DOC -->
        <a href="/doc/app-terms-and-condition">
            <button class="px-5 py-2 text-xl hover:text-gray-500">
                使用条款
            </button>
        </a>
        <a href="/doc/app-privacy">
            <button class="px-5 py-2 text-xl hover:text-gray-500">
                隐私政策
            </button>
        </a>
    </PageContainer>
</template>
