// import { routerParam } from "routers"

import posttype from "config/posttype"
import { Redirect } from "react-router"
import { routerParam } from "routers"
import { ListPostType } from "views/ui/templates"

const List: React.FC = () => {
    // let router = routerParam.useHome()
    let { post_name } = routerParam.usePosttypeList()
    const post = posttype?.[post_name]

    if (post) {
        return <ListPostType postType={post} />
    }

    return <Redirect to="/404-not-found" />


}
export default List
