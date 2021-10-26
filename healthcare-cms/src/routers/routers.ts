import { Page404 } from 'views/pages/page_not_found';
import { PosttypeLayout } from 'views/layout/PosttypeLayout';
import Auth from 'views/layout/Auth';
import { lazy } from 'react';
import SignIn from 'views/pages/auth/siginIn';
import SignUp from 'views/pages/auth/signUp';
import ForgotPassword from 'views/pages/auth/forgotpassword';
import { routerConfig } from 'app';

export const { routerList, routerName } = routerConfig([
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
        component: lazy(() => import('../views/layout/MainLayout')),
        auth: true,
        routers: [
            // {
            //     path: '/post',
            //     component: PosttypeLayout,
            //     routers: [
            //         {
            //             path: '/new',
            //             exact: true,
            //             component: lazy(() => import('../views/pages/post/new')),
            //         },
            //         {
            //             path: '/:id/:action?',
            //             exact: true,
            //             component: lazy(() => import('../views/pages/posttype/add_and_edit')),
            //         },
            //     ]
            // },
            {
                path: 'posttype/:post_name',
                component: PosttypeLayout,
                routers: [
                    {
                        exact: true,
                        component: lazy(() => import('../views/pages/posttype/list')),
                        name: 'listPostType'
                    },
                    {
                        path: '/new',
                        exact: true,
                        component: lazy(() => import('../views/pages/posttype/add_and_edit')),
                        name: 'newPostType'
                    },
                    {
                        path: '/:id/edit',
                        exact: true,
                        component: lazy(() => import('../views/pages/posttype/add_and_edit')),
                        name: 'editPostType',
                    },
                ]
            },
            {
                path: '/profile/:tab?',
                component: lazy(() => import('../views/pages/profile')),
                name: 'profile',
            },
            {
                path: "/",
                component: lazy(() => import('../views/pages/home')),
                name: 'home',
                exact: true,
            },
            {
                component: Page404
            }
        ]
    },

])
