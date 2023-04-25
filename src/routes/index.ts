/*
 * @Description: 文件内容描述
 * @Date: 2023-04-25 15:33:36
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-25 15:37:25
 * @FilePath: \vue3-lowcode\src\routes\index.ts
 */
/*
 * @Description: 文件内容描述
 * @Date: 2023-04-25 15:33:36
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-25 15:35:22
 * @FilePath: \vue3-lowcode\src\routes\index.ts
 */
import { createRouter, createWebHistory } from "vue-router";


let routes = [
    {
        path: '/',
        name: 'home',
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('@/views/homeView.vue')
    },
    //{
    //配置404页面
    //path: '/:catchAll(.*)',
    //name: '404',
    //component: () => import(''),
    //}
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 