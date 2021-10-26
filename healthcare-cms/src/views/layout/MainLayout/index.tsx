import { Layout } from 'antd';
import { useTranslate } from 'cbi-react-core';
import { Suspense } from 'react';
import { SideBar } from './Sidebar';
import { TopBar } from './TopBar';

const { Content, Footer } = Layout;

const MainLayout: React.FC = ({ children }) => {
    let { t } = useTranslate()

    return (
        <Layout className="gx-app-layout">
            <SideBar />
            <Layout>
                <TopBar />
                <Content className={`gx-layout-content`}>
                    <div className="gx-main-content-wrapper">
                        <Suspense fallback={<div>Loading</div>}>
                            {children}
                        </Suspense>
                    </div>
                    <Footer>
                        <div className="gx-layout-footer-content">
                            {t('footerText')}
                        </div>
                    </Footer>
                </Content>
            </Layout>
            {/* <Customizer /> */}
        </Layout>
    )
}

export default MainLayout