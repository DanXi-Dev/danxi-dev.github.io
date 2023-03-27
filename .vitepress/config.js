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
            message: 'We\'re from Fudan University.',
            copyright: 'Copyright © 2020 ~ present DanXi. All Rights Reserved.'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
})
