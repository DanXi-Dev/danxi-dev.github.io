<script setup lang="ts">
import { ref, type Component } from 'vue'
import PageContainer from '../components/PageContainer.vue'
import ProductCard from '../components/ProductCard.vue'
import Saying from '../components/Saying.vue'
import IconApple from '~icons/simple-icons/apple'
import IconAndroid from '~icons/simple-icons/android'
import IconWindows from '~icons/simple-icons/windows'
import IconLinux from '~icons/simple-icons/linux'
import IconArchLinux from '~icons/simple-icons/archlinux'
import IconOSI from '~icons/simple-icons/opensourceinitiative'
import IconGitHub from '~icons/simple-icons/github'

let showDownload = ref(false)

const latestVersion = '1.5.2'
const oldestVersion = '1.5.0'

const downloadList: { icons: Component[], platform: string, subtitle: string, link: string }[] = [
    {
        icons: [IconApple],
        platform: 'iOS / iPadOS / macOS',
        subtitle: 'Download from App Store',
        link: 'https://apps.apple.com/cn/app/%E6%97%A6%E5%A4%95/id1568629997'
    }, {
        icons: [IconAndroid],
        platform: 'Android',
        subtitle: 'Download from CDN',
        link: 'https://static.fduhole.com/danxi-latest.apk'
    }, {
        icons: [IconWindows],
        platform: 'Windows',
        subtitle: 'Download from GitHub Releases',
        link: 'https://github.com/DanXi-Dev/DanXi/releases/latest'
    }, {
        icons: [IconLinux],
        platform: 'Linux Generic',
        subtitle: 'Download from GitHub Releases',
        link: 'https://github.com/DanXi-Dev/DanXi/releases/latest'
    }, {
        icons: [IconArchLinux],
        platform: 'Arch Linux',
        subtitle: 'Install from AUR',
        link: 'https://aur.archlinux.org/packages/danxi'
    }, {
        icons: [IconAndroid, IconOSI],
        platform: 'Android FOSS',
        subtitle: 'Download from F-Droid',
        link: 'https://f-droid.org/packages/io.github.danxi_dev.dan_xi/'
    }
]

const integratedServices = [
    {
        name: '旦挞茶楼',
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
            <img class="h-64 mx-auto" src="/assets/app.webp" alt="旦挞校园助手 logo" />
            <!-- <h1 class="mt-10 text-6xl font-bold">旦挞校园助手</h1> -->
            <h1 class="mt-10 text-6xl font-bold">旦挞校园助手</h1>
            <div class="mt-5 text-3xl">陪伴你的校园生活</div>
            <div class="mt-1 text-sm text-gray-400">
                <span>最新版: {{ latestVersion }}</span> <span>最低支持版本: {{ oldestVersion }}</span>
            </div>
            <div>
                <button class="mx-2 mt-5 rounded-2xl bg-gray-800 text-gray-50 px-5 py-2 hover:bg-gray-500 text-lg inline-flex items-center gap-2"
                    @click="showDownload = !showDownload">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    下载
                </button>
                <a href="https://github.com/DanXi-Dev/DanXi" target="_blank"><button
                        class="mx-2 mt-5 rounded-2xl bg-gray-800 text-gray-50 px-5 py-2 hover:bg-gray-500 text-lg inline-flex items-center gap-2">
                    <IconGitHub class="w-5 h-5" />
                    GitHub
                </button></a>
            </div>
        </div>
        <div class="mt-6 flex flex-col items-center gap-3 max-w-md mx-auto" v-show="showDownload">
            <a v-for="d in downloadList" :key="d.platform" :href="d.link"
                class="w-full flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3.5 transition hover:shadow-md hover:border-gray-400 dark:hover:border-gray-500 no-underline group">
                <span class="flex items-center justify-center gap-1.5 shrink-0 w-10 text-gray-600 dark:text-gray-300">
                    <component v-for="(icon, i) in d.icons" :key="i" :is="icon" class="w-5 h-5" />
                </span>
                <span class="flex flex-col">
                    <span class="text-sm font-medium text-gray-800 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition">{{ d.platform }}</span>
                    <span class="text-xs text-gray-400 dark:text-gray-500">{{ d.subtitle }}</span>
                </span>
            </a>
        </div>
    </PageContainer>

    <PageContainer class="bg-gray-800 text-gray-50">
        <!-- PAGE-3 INTEGRATION -->
        <h2>校园服务</h2>
        <p>校园卡余额、课表、考试、空教室、刷锻、入校权限、校车班次、寝室电量、图书馆人数、食堂排队、教务处通知、图书馆人数...</p>
        <p>需要更多功能？欢迎在 GitHub 上提交 Issue 和 Pull Request！</p>
    </PageContainer>

    <PageContainer class="bg-gray-50" v-if="false">
        <!-- PAGE-3 INTEGRATION -->
        <h2>与其他项目集成</h2>
        <p>可以在一个 app 里便捷地访问茶楼、课评等服务</p>
        <div class="mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <a class="h-full" v-for="i in integratedServices" :href="i.nav">
                <ProductCard v-bind="i" />
            </a>
        </div>
    </PageContainer>


    <PageContainer v-if="false">
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
