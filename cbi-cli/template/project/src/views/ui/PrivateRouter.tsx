import { useAuth } from "app/store/auth";
import { url } from "config";
import { Redirect, Route } from "react-router-dom";
export const PrivateRoute: React.FC<PrivateRouteProp> = (props) => {
    let { login } = useAuth()

    if (!login) {
        return <Route>
            <Redirect to={url.login} />
        </Route>
    }

    return <Route {...props} />

}

