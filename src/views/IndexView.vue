<script setup>
import PageContainer from '../components/PageContainer.vue'
import Saying from '../components/Saying.vue';
const userComment = [
    { name: '某旦夕树洞用户', content: '有了旦夕，我成功摆脱了响应极慢的小程序...尤其是复活码，体验极佳！无事氵树洞也是极好的！还能随时随地看课表~' },
    { name: 'C.Yee, 20 级本科用户', content: '在旦夕树洞，我的亲身经历：你可以纾解胸中块垒，时而得到暖心回应，倾吐本身便有意义；你可能认识有趣的人，收获友谊甚至爱情，结局好坏依然感激；你还能分享经验兴趣，体会思想碰撞共鸣，闲时欢喜忙亦游戏。但无可避免争吵攻讦、杂糅信息，一千零一面镜子，也转映着你自己。整合分辨、平和自持，愿你尽同美好相遇。' },
    { name: '某 21 级本科用户', content: '旦夕是什么？是整合信息的实时更新，是自校园树洞的自由开放，是的UI界面的不断美化，是实用功能的丰富完善，是运行管理的有条不紊。“可能是复旦最好的校园APP”' }
]

const parterComment = [
    {
        name: 'Synopt, 复旦大学 Minecraft 基岩社活动部部长',
        content: '对于刚刚成立的新社团来说，旦夕团队为基岩社提供了一个非常好的活动宣传以及成员纳新的平台。我们许多线上线下活动的推送、友校组织的联动活动等都可以在树洞中宣传。同时，通过树洞这个渠道，FDU 越来越多的 Minecraft 新玩家、老玩家都加入到了这个我们的集体中。树洞让我们认识了许许多多线上线下一起约饭一起玩游戏的好朋友。'
    },
    {
        name: '慎，复旦大学文理学社社长',
        content: '很高兴与旦夕团队进行合作。在理念上，文理学社与旦夕都致力于校园公共空间、更好大学生活的可能的建设。很感谢旦夕在学社活动、招新等方面的宣传支持，也很高兴共同促成了蛋壳平台的建立。学社期待未来与旦夕一同更好为复旦的公共空间建设努力。'
    },
    // {
    //     name: '复旦大学云聚社社长',
    //     content: 'placeholder'
    // },
    {
        name: '复旦大学武术协会社长',
        content: '我们与旦夕偶然结缘，但合作的过程非常愉快。旦夕的工作人员效率很高，也很可爱，通过旦夕平台为我们的社团活动进行宣传，吸引了更多同学的参与，扩大了我们活动的影响力。祝旦夕越办越好，也希望我们未来的合作一切顺利！'
    }
]

const departmentInfo = [
    {
        name: '开发部',
        desc: '开发部领导活跃于 GitHub 上的开源社区组织 DanXi-Dev 及 OpenTreeHole，负责团队各项产品的软件工程开发及系统运维等工作，积极探索新的业务，切实改善现有产品的稳定性与用户体验。',
        nav: '/department/dev',
        email: 'dev@fduhole.com'
    }, {
        name: '社区运营部',
        desc: '社区运营部负责团队运营的各大社区的活动策划与社区管理等工作，在团队运营的各大社区营造良好氛围、倡导积极向上的价值观、维护复旦大学学生的利益。',
        nav: '/department/op',
        email: 'admin@fduhole.com'
    }, {
        name: '公关联络部',
        desc: '公关联络部负责团队的公共关系工作，塑造正面的团队形象，积极与用户交流，听取用户的意见，回应用户的疑问，定期向用户公开透明度报告。此外，公关联络部负责团队的对外联络工作，与合作伙伴积极交流沟通。',
        nav: '/department/pr',
        email: 'pr@fduhole.com',
    }
]
</script>

<template>
    <div class="mt-10">
        <!-- PAGE-1 USER -->
        <PageContainer class="bg-gray-800 text-gray-50">
            <h2>
                备受信赖
            </h2>
            <p>
                服务你的近 20,000 名同学
            </p>
            <div class="my-10 max-w-prose m-auto">
                <div v-for="i in userComment">
                    <Saying v-bind="i" />
                </div>
            </div>

            <span class="px-5 py-2 text-xl sm:text-center">
                日活约 5,000
            </span>

            <span class=" px-5 py-2 text-xl sm:text-center">
                月活约 9,000
            </span>

        </PageContainer>

        <!-- PAGE-2 PARTNER -->
        <PageContainer>
            <h2>
                合作交流
            </h2>
            <p>
                我们乐意与社团等学生组织做朋友
            </p>
            <div class="my-10 grid md:grid-cols-3 sm:grid-cols-1 gap-16">
                <div v-for="i in parterComment">
                    <Saying v-bind="i" />
                </div>

            </div>
        </PageContainer>


        <!-- PAGE-3 MEMBER -->
        <PageContainer class="bg-gray-100">
            <h2>
                加入我们
            </h2>
            <p>
                充满热情的我们，欢迎每一个充满热情的你
            </p>
            <div class="my-10 grid md:grid-cols-3 sm:grid-cols-1 gap-5">
                <div v-for="i in departmentInfo">
                    <div class="relative rounded-3xl bg-gray-800 text-gray-50 px-3 pt-7 pb-16 h-full">
                        <div class="text-2xl font-bold">
                            {{ i.name }}
                        </div>
                        <div class="mt-3">
                            {{ i.desc }}
                        </div>
                        <a :href="i.nav" class="absolute bottom-4 right-4">
                            <button class="bg-gray-600 hover:bg-gray-500 rounded-full px-3 py-1 text-white">
                                详细了解
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <a href="https://danxi-dev.feishu.cn/wiki/wikcn6MwNEtwXvpMWyiQN5ViBrd">
                <button class="px-5 py-2 text-xl hover:text-gray-500">
                    需求发布
                </button>
            </a>
            <a href="https://wenjuan.feishu.cn/m?t=sr1SBCxuxCBi-rn2r">
                <button class="px-5 py-2 text-xl hover:text-gray-500">
                    招新问卷
                </button>
            </a>
        </PageContainer>

        <!-- PAGE-4 CONTACT -->
        <PageContainer>
            <h2>
                保持联系
            </h2>
            <p>我们将在微信公众号上发布版本更新与活动公告，请关注我们</p>
            <div class="mt-5 flex bg-gray-800 text-gray-50 lg:h-64 h-28">
                <img class="h-full" src="/assets/wechat.webp" alt="旦夕茶馆" />
                <div class="my-auto pl-1">
                    <div class="text-xl font-bold">旦夕茶馆</div>
                    <div class="flex flex-wrap">
                        <div>旦夕茶馆，</div>
                        <div>不定期开业！</div>
                        <div>给客官上点好茶~</div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div class="flex flex-wrap" v-for="i in departmentInfo">
                    <div class="font-bold w-24">{{ i.name }}</div>
                    <a :href="'mailto:' + i.email">{{ i.email }}</a>
                </div>
            </div>
        </PageContainer>
    </div>
</template>
