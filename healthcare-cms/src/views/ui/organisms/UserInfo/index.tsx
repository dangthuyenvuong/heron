import { Avatar, Popover } from "antd";
import { useTranslate } from "cbi-react-core";
import { useMemo } from "react";
import { Link } from "react-router-dom";



export const UserInfo: React.FC<{
    signOut: React.MouseEventHandler<HTMLLIElement>,
    avatar?: string
}> = ({ signOut, avatar = 'https://via.placeholder.com/150x150' }) => {
    const { t } = useTranslate()
    const defaultLink = useMemo(() => {
        return [
            {
                title: t('My Account'),
                link: '/profile'
            }
        ]
    }, [t])

    const userMenuOptions = (
        <ul className="gx-user-popover">
            {
                defaultLink.map(e => <li key={e.link}><Link className="color-unset" to={e.link}>{e.title}</Link></li>)
            }
            <li onClick={signOut}>{t('Logout')}
            </li>
        </ul>
    );

    return (
        <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
            trigger="click">
            <Avatar src={avatar}
                className="gx-avatar gx-pointer" alt="" />
        </Popover>
    )
}
