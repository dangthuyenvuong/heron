
import { Menu } from "antd";
import { Link, useLocation, generatePath } from "react-router-dom";
import React from 'react'

import SidebarLogo from "./SidebarLogo";

import { CustomScrollbars } from "views/ui";
import { useTranslate } from "cbi-react-core";
import { IconPage, IconPaint, IconPost, IconProduct, IconTools } from "views/ui/atoms";
import { routerName } from "routers";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


type MenuType = {
    title: string,
    icon?: string | React.ReactNode,
    link: string,
    subs?: MenuType[]
}

type GroupMenu = {
    title: string,
    icon?: string | React.ReactNode,
    menus: MenuType[]
}

const menus: GroupMenu[] = [
    {
        title: 'Analytics',
        icon: 'icon-dasbhoard',
        menus: [
            {
                title: 'Booking',
                icon: 'icon-dasbhoard',
                link: '/analytic-booking',
            },
            {
                title: 'Register',
                icon: 'icon-auth-screen',
                link: '/analytic-register',
            }
        ],
    },

    {
        title: 'Ecommerce',
        menus: [
            {
                title: 'Product',
                link: '/product',
                icon: <IconProduct />,
                subs: [
                    {
                        title: 'Add new',
                        link: '/product/new'
                    },
                    {
                        title: 'List',
                        link: '/product'
                    }
                ]
            },
            {
                title: 'Category',
                icon: 'icon-plain-list-divider',
                link: '/category'
            },
            {
                title: 'Tag',
                icon: 'icon-tag',
                link: '/tag'
            },
            {
                title: 'Review',
                icon: 'icon-star-o',
                link: '/review'
            },
            {
                title: 'Booking',
                icon: 'icon-hotel-booking',
                link: '/booking'
            }
        ]
    },
    {
        title: 'Content',
        menus: [
            {
                title: 'Post',
                link: '/post',
                icon: <IconPost />,
                subs: [
                    {
                        title: 'Add new',
                        link: generatePath(routerName.newPostType, {post_name: 'post'})
                    },
                    {
                        title: 'List',
                        link: generatePath(routerName.listPostType, {post_name: 'post'})
                    }
                ]
            },
            {
                title: 'Page',
                link: '/page',
                icon: <IconPage />,
                subs: [
                    {
                        title: 'Add new',
                        link: generatePath(routerName.newPostType, {post_name: 'page'})
                    },
                    {
                        title: 'List',
                        link: generatePath(routerName.listPostType, {post_name: 'page'})
                    }
                ]
            }
        ]
    },
    {
        title: 'Management',
        menus: [
            {
                title: 'Appearance',
                link: '/appearance',
                icon: <IconPaint />,
                subs: [
                    {
                        title: 'Theme',
                        link: '/theme'
                    },
                    {
                        title: 'Menu',
                        link: '/menu'
                    },
                    {
                        title: 'Customize',
                        link: '/customize'
                    },
                    {
                        title: 'Widget',
                        link: '/widget'
                    }
                ]
            },
            {
                title: 'Plugins',
                icon: 'icon-widgets',
                link: '/plugin'
            },
            {
                title: 'Users',
                icon: 'icon-avatar',
                link: '/user'
            },
            {
                title: 'Tools',
                link: '/tools',
                icon: <IconTools />
            },
            {
                title: 'Setting',
                icon: 'icon-setting',
                link: '/settings'
            }
        ]
    }
]
const generateIcon = (icon: string | React.ReactNode, options?: React.HTMLAttributes<Element>) => <i {...options} className={`icon cbi-icon ${options?.className ? options.className : ''} ${typeof icon === 'string' ? icon : ''}`}>{React.isValidElement(icon) ? icon : null}</i>
export const SidebarContent: React.FC = () => {
    let { pathname } = useLocation()
    let { t } = useTranslate()

    // const selectedKeys = pathname.substring(1)
    // const defaultOpenKeys = selectedKeys.split('/')[1];
    console.log(pathname)
    return (
        <>
            <SidebarLogo />
            <div className="gx-sidebar-content">
                {/* <div className={`gx-sidebar-notifications ${this.getNoHeaderClass(navStyle)}`}>
                    <UserProfile />
                    <AppsNavigation />
                </div> */}
                <CustomScrollbars className="gx-layout-sider-scrollbar">
                    <Menu
                        // defaultOpenKeys={[defaultOpenKeys]}
                        selectedKeys={[pathname]}
                        theme={'light'}
                        mode="inline">
                        {
                            menus.map(e => (
                                <MenuItemGroup key="main" className="gx-menu-group" title={t(e.title)}>
                                    {
                                        e.menus.map(e1 =>
                                            e1.subs ? (
                                                <SubMenu key={e1.link} className="" title={<span>{e1.icon && generateIcon(e1.icon)} {t(e1.title)} </span>}>
                                                    {
                                                        e1.subs.map(e2 => (
                                                            <Menu.Item key={e2.link}>
                                                                <Link to={e2.link}>
                                                                    {e2.icon && generateIcon(e2.icon)}
                                                                    {t(e2.title)}
                                                                </Link>
                                                            </Menu.Item>
                                                        ))
                                                    }
                                                </SubMenu>
                                            ) : (
                                                <Menu.Item key={e1.link}>
                                                    <Link to={e1.link}>
                                                        {e1.icon && generateIcon(e1.icon)}
                                                        {t(e1.title)}
                                                    </Link>
                                                </Menu.Item>
                                            )
                                        )
                                    }
                                </MenuItemGroup>
                            ))
                        }


                    </Menu>
                </CustomScrollbars>
            </div>
        </>
    );
}