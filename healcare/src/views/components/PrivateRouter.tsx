import { useAuth } from "app/store/auth";
import { Redirect, Route } from "react-router-dom";
export const PrivateRoute: React.FC<PrivateRouteProp> = (props) => {
    let { login } = useAuth()

    if (!login) {
        return <Route>
            <Redirect to="/auth" />
        </Route>
    }

    return <Route {...props} />

}

