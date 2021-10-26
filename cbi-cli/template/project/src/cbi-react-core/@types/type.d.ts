declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

declare type PropType <TObj, TProp extends keyof TObj> = TObj[TProp]

declare type URLGetParams = { [key: string]: string | number | boolean }

declare type Json = { [key: string]: string | number | boolean | Json }

declare type Obj = {[key: string]: any}