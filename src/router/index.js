import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import LoginView from '@views/login/LoginView.vue'
import RegistView from '@views/login/RegistView.vue'

import SearchView from '@views/search/SearchView.vue'

import PersonshowView from '@views/user/PersonshowView.vue'
import PersonsettingView from '@views/user/PersonsettingView.vue'

import PrimaryView from '@views/primary/PrimaryView.vue'
import SynthesisView from '@views/primary/SynthesisView.vue'
import FocusView from '@views/primary/FocusView.vue'
import FrontView from '@views/primary/FrontView.vue'
import BackendView from '@views/primary/BackendView.vue'
import TestView from '@views/primary/TestView.vue'
import UiView from '@views/primary/UiView.vue'

import TearoomView from '@views/tearoom/TearoomView.vue'

import ResidenceView from '@views/residence/ResidenceView.vue'

import BlogwriteView from '@views/write/BlogwriteView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: "初始"
        },
        redirect: '/primary',
        component: HomeView,
        children: [
            {
                path: '/primary',
                name: 'primary',
                meta: {
                    title: '首页'
                },
                redirect: '/synthesis',
                component: PrimaryView,
                children: [
                    {
                        path: '/synthesis',
                        name: 'synthesis',
                        meta: {
                            title: '综合页'
                        },
                        component: SynthesisView
                    },
                    {
                        path: '/focus',
                        name: 'focus',
                        meta: {
                            title: '关注页'
                        },
                        component: FocusView
                    },
                    {
                        path: '/front',
                        name: 'front',
                        meta: {
                            title: '前端页'
                        },
                        component: FrontView
                    },
                    {
                        path: '/backend',
                        name: 'backend',
                        meta: {
                            title: '后端页'
                        },
                        component: BackendView
                    },
                    {
                        path: '/test',
                        name: 'test',
                        meta: {
                            title: '测试页'
                        },
                        component: TestView
                    },
                    {
                        path: '/ui',
                        name: 'ui',
                        meta: {
                            title: 'UI页'
                        },
                        component: UiView
                    },
                ]
            },
            {
                path: '/tearoom',
                name: 'tearoom',
                meta: {
                    title: '茶室'
                },
                component: TearoomView
            },
            {
                path: '/residence',
                name: 'residence',
                meta: {
                    title: '居所'
                },
                component: ResidenceView
            },
            {
                path: '/personshow',
                name: 'personshow',
                meta: {
                    title: '用户页'
                },
                component: PersonshowView
            },
            {
                path: '/personsetting',
                name: 'personsetting',
                meta: {
                    title: '设置页'
                },
                component: PersonsettingView
            },
            {
                path: '/search',
                name: 'search',
                meta: {
                    title: '搜索内容页'
                },
                component: SearchView
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页'
        },
        component: LoginView
    },
    {
        path: '/regist',
        name: 'regist',
        meta: {
            title: '注册页'
        },
        component: RegistView
    },
    {
        path: '/blogwrite',
        name: 'blogwrite',
        meta: {
            title: '文章撰写页'
        },
        component: BlogwriteView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
