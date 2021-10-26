import { Link } from "react-router-dom";

 const SidebarLogo: React.FC = () => {
    return (
        <div className="gx-layout-sider-header">

            <div className="gx-linebar">
                <i
                    className={`gx-icon-btn icon icon-menu-fold gx-text-black`}
                />
            </div>

            <Link to="/" className="gx-site-logo flex items-center">
                <img style={{width: 40, display: 'inline-block'}} alt="" src='/images/logo.svg' /> <span className="text-black text-lg ml-2">CBI-Healthcare</span>
            </Link>

        </div>
    );
}

export default SidebarLogo