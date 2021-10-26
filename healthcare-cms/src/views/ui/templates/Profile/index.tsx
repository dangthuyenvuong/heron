import { Breadcrumb, Tabs } from 'antd'
import { useTranslate } from 'cbi-react-core'
import { Link } from 'react-router-dom'
import { routerName, routerParam } from 'routers'
import { General } from './General'
import { Notification } from './Notification'
import { Setting } from './Setting'
import { useRouteMatch, generatePath } from 'react-router-dom'
import { ChangePassword } from './ChangePassword'
import { Activity } from './Activity'

export type User = {
    name: string,
    avatar: string
}

export const Profile: React.FC<{
    user: User
}> = ({ user }) => {

    const { t } = useTranslate()
    const { tab } = routerParam.useProfile()
    const { path } = useRouteMatch()
    console.log(tab)
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={routerName.home}>{t('Dashboard')}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    {t('Profile')}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="mt-8">
                <Tabs activeKey={tab || 'general'}>
                    <Tabs.TabPane key="general" tab={<Link to={generatePath(path, { tab: 'general' })} className="color-unset">{t('General')}</Link>}>
                        <General user={user} />
                    </Tabs.TabPane>
                    <Tabs.TabPane key="change-password" tab={<Link to={generatePath(path, { tab: 'change-password' })} className="color-unset">{t('Change Password')}</Link>}>
                        <ChangePassword user={user} />
                    </Tabs.TabPane>
                    <Tabs.TabPane key="notification" tab={<Link to={generatePath(path, { tab: 'notification' })} className="color-unset">{t('Notifications')}</Link>}>
                        <Notification />
                    </Tabs.TabPane>
                    <Tabs.TabPane key="actitivy" tab={<Link to={generatePath(path, { tab: 'actitivy' })} className="color-unset">{t('Activity')}</Link>}>
                        <Activity />
                    </Tabs.TabPane>
                    <Tabs.TabPane key="setting" tab={<Link to={generatePath(path, { tab: 'setting' })} className="color-unset">{t('Setting')}</Link>}>
                        <Setting />
                    </Tabs.TabPane>
                </Tabs>
            </div>

        </>
    )
}