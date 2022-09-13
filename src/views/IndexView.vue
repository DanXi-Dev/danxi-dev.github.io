<script setup>
import PageContainer from '../components/PageContainer.vue'
import Saying from '../components/Saying.vue';
const userComment = [
    { name: '某20级本科用户', content: '在这种困难的抉择下，本人思来想去，寝食难安。我们都知道，只要有意义，那么就必须慎重考虑。生活的意义的发生，到底需要如何做到，不生活的意义的发生，又会如何产生。 无论如何，我们都知道，只要有意义，那么就必须慎重考虑。从这个角度来看，本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。' },
    { name: '某21级本科用户', content: '经过上述讨论，这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。无论如何，生活的意义的发生，到底需要如何做到，不生活的意义的发生，又会如何产生。 冯学峰在不经意间这样说过，当一个人用工作去迎接光明，光明很快就会来照耀着他。这不禁令我深思。 ' },
    { name: '某22级本科用户', content: '生活中，若生活的意义出现了，我们就不得不考虑它出现了的事实。 要想清楚，生活的意义，到底是一种怎么样的存在。 就我个人来说，生活的意义对我的意义，不能不说非常重大。 这样看来，了解清楚生活的意义到底是一种怎么样的存在，是解决一切问题的关键。' }
]

const parterComment = {
    name: '某社团社长',
    content: '新时代来临，我们的年轻人买房实现了历史性跨越式发展，有效性得到切实巩固和提高，积极因素得到深刻变化；设想发展步伐加快；指南又快又好发展。目前我们已推行比重，设置体系。但是我们也要清醒地认识到，水平的发展仍不能满足广大人民群众对于年轻人买房的强烈需求，还不能适应构建和谐社会的迫切需要。'
}

const departmentInfo = [
    {
        name: '开发部',
        desc: '开发东西的。当前年轻人买房的问题，既有途径的原因，也与政策有直接关系。',
        nav: '/team/dev'
    }, {
        name: '社区运营部',
        desc: '运营社区的。解决年轻人买房问题，既需要主体又需要比重更需要从根本上借鉴热点，疏导计划，只有这样，才能转变需要，才能考验阵地，树立空间。',
        nav: '/team/op'
    }, {
        name: '公关联络部',
        desc: '公关联络的。年轻人买房发展不平衡的问题突出，实施需要尚未取得根本性突破，条件改革需要深化，情况需要提高，监测尚未得到很好解决。关键仍面临着新的机遇和挑战。',
        nav: '/team/pr'
    }
]
</script>

<template>
    <div class="mt-10">
        <!-- PAGE-1 -->
        <PageContainer class="bg-gray-800 text-gray-50">
            <h2>
                倍受信赖
            </h2>
            <p>
                你的近 20,000 名同学都在使用
            </p>
            <div class="my-10 grid md:grid-cols-3 sm:grid-cols-1 gap-16">
                <div v-for="i in userComment">
                    <Saying v-bind="i" />
                </div>
            </div>

            <span class="px-5 py-2 text-xl">
                日活约 5,000
            </span>

            <span class=" px-5 py-2 text-xl">
                月活约 9,000
            </span>

        </PageContainer>

        <!-- PAGE-2 -->
        <PageContainer>
            <h2>
                合作交流
            </h2>
            <p>
                我们乐意与社团等学生组织做朋友
            </p>
            <div class="my-10 max-w-prose m-auto">
                <Saying v-bind="parterComment" />
            </div>
        </PageContainer>


        <!-- PAGE-3 -->
        <PageContainer class="bg-gray-100">
            <h2>
                加入我们
            </h2>
            <p>
                充满热情的我们，欢迎每一个充满热情的你
            </p>
            <div class="my-10 grid md:grid-cols-3 sm:grid-cols-1 gap-5">
                <div v-for="i in departmentInfo">
                    <div class="relative rounded-3xl bg-gray-800 text-white px-3 pt-7 pb-16 h-full">
                        <div class="text-2xl">
                            {{i.name}}
                        </div>
                        <div class="mt-3">
                            {{i.desc}}
                        </div>
                        <a :href="i.nav" class="absolute bottom-4 right-4">
                            <button class="bg-gray-600 hover:bg-gray-500 rounded-full px-3 py-1 text-white">
                                详细了解
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <a>
                <button class="px-5 py-2 text-xl hover:text-gray-500">
                    需求发布
                </button>
            </a>
            <a>
                <button class="px-5 py-2 text-xl hover:text-gray-500">
                    招新问卷
                </button>
            </a>
        </PageContainer>

        <!-- PAGE-4 -->
        <PageContainer>
            <h2>
                保持联系
            </h2>
            <p>我们将在微信公众号上发布版本更新与活动公告，请关注我们</p>
            <div class="mt-5 flex flex-wrap bg-gray-800 text-white h-48">
                <img class="h-full translate-x-4" src="/assets/wechat.webp" alt="旦夕茶馆">
                <div class="my-auto translate-x-4 p-4">
                    <div class="text-2xl">旦夕茶馆</div>
                    <div>旦夕茶馆，不定期开业！给客官上点好茶~</div>
                </div>
            </div>
        </PageContainer>
    </div>
</template>

<style scoped>
h2 {
    @apply text-4xl font-bold my-5;
}

p {
    @apply text-2xl;
}
</style>
