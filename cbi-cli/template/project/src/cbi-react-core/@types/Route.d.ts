
type TypeOf = typeof String | typeof Number

declare type Router<T, P> = {
    component?: ComponentType<any> | ComponentType<RouteComponentProps<any, StaticContext, unknown>> | undefined,
    path?: string,
    exact?: boolean,
    auth?: boolean | string[],
    name?: T,
    routers?: Router<T, P>[],
    params?: {[key in P]?:  TypeOf},
}

declare type RouterConfig<T, P> = Router<T, P>[]


declare type RouterParam = {
}