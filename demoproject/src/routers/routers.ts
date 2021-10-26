import { routerConfig } from 'cbi-react-core';
import { MainLayout } from 'views/layout/MainLayout';
import { lazy } from 'react';
import Auth from 'views/layout/Auth';

export const { renderRouter, routerName } = routerConfig([
    {
        path: '/auth',
        component: Auth,
        routers: [
            {
                path: 'login',
                component: lazy(() => import('../views/pages/auth/login')),
                name: 'authLogin',
            },
            {
                path: 'register',
                component: lazy(() => import('../views/pages/auth/register')),
                name: 'authRegister',
            },
            {
                path: 'forget-password',
                component: lazy(() => import('../views/pages/auth/login')),
                name: 'authForgetPassword',
            },
            {
                path: 'reset-password/:hash',
                component: lazy(() => import('../views/pages/auth/login')),
                name: 'authResetPassword',
            },
        ]
    },
    {
        component: MainLayout,
        auth: true,
        routers: [
            {
                component: lazy(() => import('../views/pages/home')),
                name: 'home',
                exact: true,
            },
        ]
    },

])
