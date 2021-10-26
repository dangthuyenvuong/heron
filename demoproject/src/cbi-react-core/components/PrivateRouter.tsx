import { Redirect, Route } from "react-router-dom";
import { useAuth } from "..";
export const PrivateRoute: React.FC<PrivateRouteProp> = (props) => {
    let auth = useAuth()

    if (!auth) {
        return <Route>
            <Redirect to="/auth" />
        </Route>
    }

    return <Route {...props} />

}

