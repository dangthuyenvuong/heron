import { Route, Switch, useParams } from "react-router-dom";
import { PrivateRoute } from "views/ui/PrivateRouter";

type RouterConfigReponse<T extends string, P extends string> = {
    routerName: { [key in T]: string },
    routerList: React.ReactNode,
    routerParam: { [K in T]: () => { [key in P]?: string } },
}

type RouterConfigOptions = <T extends string, P extends string>(routers: RouterConfig<T, P>, pathParrent?: string) => RouterConfigReponse<T, P>


export const routerConfig: RouterConfigOptions = (routers, pathParrent = '') => {

    let routerName: any = {}
    let routerParam: any = {}

    let list = routers.map(e => {
        let { exact, path, component: Component, routers: childRouters, auth } = e
        if (!path) path = ''
        path = pathParrent + '/' + path
        path = path.replace(/\/+/g, '/')
        let Children: React.ReactNode = null

        if (e.name) {
            routerName[e.name] = path
            routerParam[e.name] = (() => () => useParams())()
        }

        if (childRouters) {
            let { routerList, routerName: name } = routerConfig(childRouters, path)
            Children = routerList

            Object.assign(routerName, name)
        }

        let Router: typeof Route | typeof PrivateRoute = Route
        if (auth) {
            Router = PrivateRoute
            // return <PrivateRoute exact={exact} path={path} component={(prop: any) => <Component {...prop}>{children}</Component>} />
        }
        return <Router key={path} exact={exact} path={path} component={(prop: any) => <Component {...prop}>{Children}</Component>} />
    })

    return {
        routerName,
        routerParam,
        routerList: (
            <Switch>
                {list}
            </Switch>
        )
    }
}


