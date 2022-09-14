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
    { name: '某20级本科用户', content: '在这种困难的抉择下，本人思来想去，寝食难安。我们都知道，只要有意义，那么就必须慎重考虑。生活的意义的发生，到底需要如何做到，不生活的意义的发生，又会如何产生。 无论如何，我们都知道，只要有意义，那么就必须慎重考虑。从这个角度来看，本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。' },
    { name: '某21级本科用户', content: '经过上述讨论，这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。无论如何，生活的意义的发生，到底需要如何做到，不生活的意义的发生，又会如何产生。 冯学峰在不经意间这样说过，当一个人用工作去迎接光明，光明很快就会来照耀着他。这不禁令我深思。 ' },
    { name: '某22级本科用户', content: '生活中，若生活的意义出现了，我们就不得不考虑它出现了的事实。 要想清楚，生活的意义，到底是一种怎么样的存在。 就我个人来说，生活的意义对我的意义，不能不说非常重大。 这样看来，了解清楚生活的意义到底是一种怎么样的存在，是解决一切问题的关键。' }
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
                <div class="mt-5 text-3xl">大功能1</div>
                <div class="mt-5 text-xl">大功能描述1</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-64" src="/assets/app-function-2.webp" alt="旦夕 app 功能 2" />
                <div class="mt-5 text-3xl">大功能2</div>
                <div class="mt-5 text-xl">大功能描述2</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-64" src="/assets/app-function-3.webp" alt="旦夕 app 功能 3" />
                <div class="mt-5 text-3xl">大功能3</div>
                <div class="mt-5 text-xl">大功能描述3</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-64" src="/assets/app-function-4.webp" alt="旦夕 app 功能 4" />
                <div class="mt-5 text-3xl">大功能4</div>
                <div class="mt-5 text-xl">大功能描述4</div>
            </div>
        </div>
    </PageContainer>

    <!-- PAGE-3 SMALL FUNCTION -->
    <PageContainer>
        <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-5.webp" alt="旦夕 app 功能 5" />
                <div class="mt-5 text-2xl">小功能1</div>
                <div class="mt-5 text-lg">小功能描述1</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-6.webp" alt="旦夕 app 功能 6" />
                <div class="mt-5 text-2xl">小功能2</div>
                <div class="mt-5 text-lg">小功能描述2</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-7.webp" alt="旦夕 app 功能 7" />
                <div class="mt-5 text-2xl">小功能3</div>
                <div class="mt-5 text-lg">小功能描述3</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-8.webp" alt="旦夕 app 功能 8" />
                <div class="mt-5 text-2xl">小功能4</div>
                <div class="mt-5 text-lg">小功能描述4</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-9.webp" alt="旦夕 app 功能 8" />
                <div class="mt-5 text-2xl">小功能5</div>
                <div class="mt-5 text-lg">小功能描述5</div>
            </div>
            <div class="flex flex-col items-center">
                <img class="h-28" src="/assets/app-function-10.webp" alt="旦夕 app 功能 8" />
                <div class="mt-5 text-2xl">小功能6</div>
                <div class="mt-5 text-lg">小功能描述6</div>
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
