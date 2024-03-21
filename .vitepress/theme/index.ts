import './main.css'
import DefaultTheme from 'vitepress/theme'

let customRoutes = [{
    "path": "/version",
    "redirect": "https://github.com/DanXi-Dev/DanXi/releases"
}, {
    "path": "/privacy",
    "redirect": "/doc/app-privacy"
}, {
    "path": "/terms-and-condition",
    "redirect": "/doc/app-terms-and-condition"
}, {
    "path": "/support",
    "redirect": "https://danxi-dev.feishu.cn/wiki/wikcnrPPGDCiTODBYRkdwLlHH65"
}, {
    "path": "/about",
    "redirect": "/"
}]

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        router.onBeforeRouteChange = async (to) => {
            for (let route of customRoutes) {
                if (route.path == to) {
                    if (route.redirect.startsWith("http")) {
                        window.location.href = route.redirect
                    } else {
                        await router.go(route.redirect)
                    }
                    return false
                }
            }
        }
    }
}
