import { Drawer, Layout } from "antd";
import { useEffect } from "react";
import { SidebarContent } from "./SidebarContent";



const { Sider } = Layout;



export const SideBar: React.FC = () => {

    useEffect(() => {
        // window.addEventListener('resize', () => {
        //     this.props.updateWindowWidth(window.innerWidth)
        // });
    }, [])

    const onToggleCollapsedNav = () => {
        // this.props.toggleCollapsedSideNav(!this.props.navCollapsed);
    };


    const themeType = 'light'

    return (
        <Sider
            className={`gx-app-sidebar`}
            trigger={null}
            theme={themeType}
            collapsible>
            <Drawer
                className={`gx-drawer-sidebar`}
                placement="left"
                closable={false}
                onClose={onToggleCollapsedNav}
                // visible={true}
                >
                <SidebarContent />
            </Drawer>
            <SidebarContent />
        </Sider>
    )
}