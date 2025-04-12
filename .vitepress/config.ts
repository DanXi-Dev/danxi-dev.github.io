import { defineConfig } from 'vitepress'
import nav from './nav'
// import sidebar from './sidebar'
// import socialLinks from './social-links'

export default defineConfig({
    lang: 'zh-CN',
    title: '旦挞',
    titleTemplate: '旦挞',
    description: '旦挞 - 智慧点亮校园',
    appearance: false,
    srcDir: 'src',
    cleanUrls: true,
    themeConfig: {
        logo: '/assets/logo.svg',
        siteTitle: false,
        nav,
        // sidebar,
        // socialLinks,
        footer: {
            message: 'We\'re from <a href="https://www.fudan.edu.cn/" target="_blank">Fudan University</a>.<br/>本网站不涉及任何经营性业务 <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2021032046号-3</a> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=31012102000143" rel="noreferrer" target="_blank"><img src="/assets/mps.png" style="vertical-align: middle; height: 17px; display: inline"></img>沪公网安备31012102000143</a>',
            copyright: 'Copyright © 2020 ~ present <a href="https://github.com/DanXi-Dev" target="_blank">DanXi-Dev</a> & <a href="https://github.com/OpenTreeHole" target="_blank">OpenTreeHole</a>. All Rights Reserved.'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    },
    vite: {
        server: {
            proxy: {
                "/api": {
                    target: "https://anniversary.fduhole.com",
                    changeOrigin: true
                }
            }
        }
    }
})
