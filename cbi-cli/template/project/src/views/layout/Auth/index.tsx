import { useAuth } from 'app/store/auth';
import { URLHelper } from 'cbi-react-core';
import { Redirect} from 'react-router';
import { routerName } from 'routers';

const Auth: React.FC = ({ children }) => {
    let { login } = useAuth()

    let { redirect } = URLHelper.object<{ redirect: string }>()



    if (login) return <Redirect to={redirect || ''} />

    if(window.location.pathname === '/auth') return <Redirect to={routerName.signin}/>
    return (
        <main className="auth-layout min-h-screen flex justify-center items-center">
            {children}
        </main>
    );
};

export default Auth;
