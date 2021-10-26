import { useParams } from "react-router"

export const routerParam = {
    useHome: () => useParams<{ id: string }>(),
    usePosttypeList : () => useParams<{ posttype_name: string }>(),
    useAddPosttype : () => useParams<{ posttype_name: string, action: string, id: string }>()
}
