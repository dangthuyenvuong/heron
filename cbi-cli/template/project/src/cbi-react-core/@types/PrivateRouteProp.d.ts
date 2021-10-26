declare type PrivateRouteProp = {
    component?: readonly ComponentType<any> | ComponentType<RouteComponentProps<any, StaticContext, unknown>> | undefined,
    path?: string,
    exact?: boolean,
    auth?: boolean | string[]
} 