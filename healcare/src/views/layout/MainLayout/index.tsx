import { Layout, Menu, Typography } from 'antd';
import {
    // DesktopOutlined,
    PieChartOutlined,
    // FileOutlined,
    // TeamOutlined,
    // UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Fragment } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
        title: 'Analytic',
        menus: [
            {
                title: 'Dashboard 1',
                icon: <PieChartOutlined />,
                link: '/dashboard1',
            },
            {
                title: 'Dashboard 2',
                icon: <PieChartOutlined />,
                link: '/dashboard2',
            },
            {
                title: 'Dashboard 3',
                icon: <PieChartOutlined />,
                link: '/dashboard3',
            }
        ],
    },
    {
        title: 'Content',
        menus: [
            {
                title: 'Post',
                link: '/post',
                subs: [
                    {
                        title: 'Add new',
                        link: ''
                    },
                    {
                        title: 'List',
                        link: ''
                    }
                ]
            },
            {
                title: 'Page',
                link: '',
                subs: [
                    {
                        title: 'Add new',
                        link: ''
                    },
                    {
                        title: 'List',
                        link: ''
                    }
                ]
            }
        ]
    },
    {
        title: 'Ecommerce',
        menus: [
            {
                title: 'Product',
                link: '',
                subs: [
                    {
                        title: 'Add new',
                        link: ''
                    },
                    {
                        title: 'List',
                        link: ''
                    }
                ]
            },
            {
                title: 'Category',
                link: ''
            },
            {
                title: 'Tag',
                link: ''
            },
            {
                title: 'Review',
                link: ''
            },
            {
                title: 'Booking',
                link: ''
            }
        ]
    }
]
export const MainLayout: React.FC = ({ children }) => {
    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider style={{ background: 'white' }} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="logo flex " style={{ padding: '17px 10px' }}>
                    <img style={{ width: 30 }} src="/images/logo.svg" alt="" />
                    <Typography.Title level={4} className="ml-3" style={{ marginBottom: 0 }}>CBI-Healthcare</Typography.Title>
                </div>
                <Menu mode="inline">
                    {
                        menus.map((e, i) => (
                            <Fragment key={i}>
                                <div className="menu-section">{e.title}</div>
                                {
                                    e.menus.map((e1, i1) => (
                                        <Fragment key={`menu${i}-${i1}`}>

                                            {
                                                e1.subs ?
                                                    <SubMenu key={`sub${i}-${i1}`} title={e1.title}>
                                                        {e1.subs.map((e2, i2) => (
                                                            <Menu.Item  key={`submenu${i}-${i1}-${i2}`} icon={e2.icon}>
                                                                <Link to={e2.link}>{e2.title}</Link>
                                                            </Menu.Item>
                                                        ))}
                                                    </SubMenu> :
                                                    <Menu.Item key={`menu${i}-${i1}`} icon={e1.icon}>
                                                        <Link to={e1.link}>{e1.title}</Link>
                                                    </Menu.Item>
                                            }
                                        </Fragment>

                                    ))
                                }
                            </Fragment>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, background: 'white' }} >aaaaaaaaa</Header>
                <Content style={{ margin: '0 16px' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}