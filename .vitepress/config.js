import { defineConfig } from 'vitepress'
import nav from './nav'
// import sidebar from './sidebar'
// import socialLinks from './social-links'

export default defineConfig({
    lang: 'zh-CN',
    title: '旦夕',
    titleTemplate: '旦夕',
    description: '旦夕 - 技术启明校园',
    appearance: false,
    srcDir: 'src',
    cleanUrls: 'with-subfolders',
    outlineTitle: 'DANXI',
    themeConfig: {
        // logo: '/assets/logo.svg',
        // siteTitle: false,
        nav,
        // sidebar,
        // socialLinks,
        footer: {
            message: 'We\'re from <a href="https://www.fudan.edu.cn/" target="_blank">Fudan University</a>.<br/>本网站不涉及任何经营性业务 <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2021032046号-3</a>',
            copyright: 'Copyright © 2020 ~ present <a href="https://github.com/DanXi-Dev" target="_blank">DanXi-Dev</a> & <a href="https://github.com/OpenTreeHole" target="_blank">OpenTreeHole</a>. All Rights Reserved.'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
})
