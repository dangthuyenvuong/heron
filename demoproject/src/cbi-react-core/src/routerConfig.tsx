import { Route, Switch, useParams } from "react-router-dom";
import { PrivateRoute } from "../components";

type RouterConfigReponse<T extends string, P extends string> = {
    routerName: { [key in T]: string },
    renderRouter: JSX.Element,
    routerParam: { [K in T]: () => { [key in P]?: string } },
}

type RouterConfigF = <T extends string, P extends string>(routers: RouterConfig<T, P>, pathParrent?: string) => RouterConfigReponse<T, P>


export const routerConfig: RouterConfigF = (routers, pathParrent = '') => {

    let routerName: any = {}
    let routerParam: any = {}

    let list = routers.map(e => {
        let { exact, path, component: Component, routers: childRouters, auth } = e
        if (!path) path = ''
        path = pathParrent + '/' + path
        path = path.replace(/\/+/g, '/')
        let children: any = null

        if (e.name) {
            routerName[e.name] = path
            routerParam[e.name] = (() => () => useParams())()
        }

        if (childRouters) {
            let { renderRouter, routerName: name } = routerConfig(childRouters, path)
            children = renderRouter

            Object.assign(routerName, name)
        }

        if (auth) {
            return <PrivateRoute exact={exact} path={path} component={(prop: any) => <Component {...prop}>{children}</Component>} />
        }

        return <Route exact={exact} path={path} component={(prop: any) => <Component {...prop}>{children}</Component>} />
    })


    return {
        routerName,
        routerParam,
        renderRouter: (
            <Switch>
                {list}
            </Switch>
        )
    }
}


