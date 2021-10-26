import { useParams } from "react-router"

export const routerParam = {
    useHome: () => useParams<{ id: string }>(),
    usePosttypeList: () => useParams<{ post_name: string }>(),
    useEditPostType: () => useParams<{ post_name: string, id: string }>(),
    useProfile: () => useParams<{ tab?: string }>(),
}
