import { Page404 } from 'views/pages/page_not_found';
import { PosttypeLayout } from 'views/layout/PosttypeLayout';
import { MainLayout } from 'views/layout/MainLayout';
import Auth from 'views/layout/Auth';
import { lazy } from 'react';
import Login from 'views/pages/auth/login';
import Register from 'views/pages/auth/register';
import ForgotPassword from 'views/pages/auth/forgotpassword';
import { routerConfig } from 'app';

export const { RouterPage, routerName } = routerConfig([
    {
        path: '/auth',
        component: Auth,
        routers: [
            {
                path: 'login',
                component: Login,
                name: 'authLogin',
            },
            {
                path: 'register',
                component: Register,
                name: 'authRegister',
            },
            {
                path: 'forget-password',
                component: ForgotPassword,
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
            {
                path: 'posttype/:posttype_name',
                component: PosttypeLayout,
                routers: [
                    {
                        exact: true,
                        component: lazy(() => import('../views/pages/posttype/list')),
                    },
                    {
                        path: '/:id/:action?',
                        exact: true,
                        component: lazy(() => import('../views/pages/posttype/add_and_edit')),
                    },
                ]
            },
            {
                component: Page404
            }
        ]
    },

])
