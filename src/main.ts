/*
 * @Description: 文件内容描述
 * @Date: 2023-04-25 15:20:46
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-25 16:17:22
 * @FilePath: \vue3-lowcode\src\main.ts
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import '@/iconfont/iconfont.css'
import ElementPlus from 'element-plus'
import router from '@/routes/index'
import * as icons from "@element-plus/icons-vue"
const pinia = createPinia()
const app = createApp(App)
Object.keys(icons).forEach((key) => {
    Reflect.has(icons, key) &&
        app.component(key, icons[key as keyof typeof icons])
});

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
