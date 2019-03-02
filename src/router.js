'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import Home     from '@/views/Home.vue';
import Stories  from '@/views/Stories.vue';
import Obituary from '@/views/Obituary.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/stories',
            name: 'stories',
            component: Stories
        },
        {
            path: '/obituary',
            name: 'obituary',
            component: Obituary
        }
    ]
})
