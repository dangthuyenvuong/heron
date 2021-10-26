import { useTranslate } from "cbi-react-core";
import languageData from "config/language";
import { useState } from "react";
import { CustomScrollbars } from 'views/ui'

import { Layout, Popover } from "antd";
import { Link } from "react-router-dom";
import { SearchBox } from "views/ui/molecules";
import { UserInfo } from "views/ui/organisms";
import { useDispatch } from "react-redux";
import { authAction } from "app/store/auth";

const { Header } = Layout;

export const TopBar: React.FC = () => {
    let [searchText, setSearchText] = useState('')
    let { selectLanguage, language, t } = useTranslate()

    let dispatch = useDispatch()

    const languageMenu = () => (
        <CustomScrollbars className="gx-popover-lang-scroll hidden-scrollbar-x">
            <ul className="gx-sub-popover">
                {languageData.map(language =>
                    <li className="gx-media gx-pointer" key={language.locale} onClick={(e) =>
                        selectLanguage(language.locale)
                    }>
                        <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`} />
                        <span className="gx-language-text">{language.name}</span>
                    </li>
                )}
            </ul>
        </CustomScrollbars>);

    const updateSearchChatUser = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(evt.currentTarget.value);
    };

    let locale = languageData.find(e => e.locale === language)


    const signOut = () => {
        dispatch(authAction.logout())
    }

    return (
        <>
            <Header>
                {/* {navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ?
                    <div className="gx-linebar gx-mr-3">
                        <i className="gx-icon-btn icon icon-menu"
                            onClick={() => {
                                this.props.toggleCollapsedSideNav(!navCollapsed);
                            }}
                        />
                    </div> : null} */}
                <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
                    <img alt="" src="/images/logo.svg" /></Link>

                <SearchBox styleName="gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg"
                    placeholder={t('Search in app...')}
                    onChange={updateSearchChatUser}
                    value={searchText} />
                <ul className="gx-header-notifications gx-ml-auto">
                    <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
                        <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={
                            <SearchBox styleName="gx-popover-search-bar"
                                placeholder={t('Search in app...')}
                                onChange={updateSearchChatUser}
                                value={searchText} />
                        } trigger="click">
                            <span className="gx-pointer gx-d-block"><i className="icon icon-search-new" /></span>
                        </Popover>
                    </li>
                    {/* {width >= TAB_SIZE ? null :
                        <Auxiliary>
                            <li className="gx-notify">
                                <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification />}
                                    trigger="click">
                                    <span className="gx-pointer gx-d-block"><i className="icon icon-notification" /></span>
                                </Popover>
                            </li>

                            <li className="gx-msg">
                                <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                                    content={<MailNotification />} trigger="click">
                                    <span className="gx-pointer gx-status-pos gx-d-block">
                                        <i className="icon icon-chat-new" />
                                        <span className="gx-status gx-status-rtl gx-small gx-orange" />
                                    </span>
                                </Popover>
                            </li>
                        </Auxiliary>
                    } */}
                    <li className="gx-language">
                        <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={languageMenu()}
                            trigger="click">
                            <span className="gx-pointer gx-flex-row gx-align-items-center">
                                <i className={`flag flag-24 flag-${locale?.icon}`} />
                                <span className="gx-pl-2 gx-language-name">{locale?.name}</span>
                                <i className="icon icon-chevron-down gx-pl-2" />
                            </span>
                        </Popover>
                    </li>
                    <li className="gx-user-nav"><UserInfo signOut={signOut} /></li>
                </ul>
            </Header>
        </>
    );
}