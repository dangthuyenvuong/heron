import { Page404 } from 'views/pages/page_not_found';
import { PosttypeLayout } from 'views/layout/PosttypeLayout';
import { MainLayout } from 'views/layout/MainLayout';
import Auth from 'views/layout/Auth';
import { lazy } from 'react';
import SignIn from 'views/pages/auth/siginIn';
import SignUp from 'views/pages/auth/signUp';
import ForgotPassword from 'views/pages/auth/forgotpassword';
import { routerConfig } from 'app';

export const { RouterPage, routerName } = routerConfig([
    {
        component: Auth,
        path: 'auth',
        routers: [
            {
                path: 'signin',
                component: SignIn,
                name: 'signin',
            },
            {
                path: 'signup',
                component: SignUp,
                name: 'signup',
            },
            {
                path: 'forgot-password',
                component: ForgotPassword,
                name: 'authForgotPassword',
            },
            {
                path: 'reset-password/:hash',
                component: lazy(() => import('../views/pages/auth/resetpassword')),
                name: 'authResetPassword',
            },
        ]
    },
    {
        component: MainLayout,
        auth: true,
        routers: [
            {
                path: '/profile/:tab?',
                component: lazy(() => import('../views/pages/profile')),
                name: 'profile',
            },
            {
                component: Page404
            }
        ]
    },

])
