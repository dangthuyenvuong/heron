import posttype from "config/posttype"
import { Redirect } from "react-router"
import { routerParam } from "routers"

import { AddNewPost } from "views/ui/templates"

const AddAndEdit: React.FC = () => {
    let router = routerParam.usePosttypeList()
    const post = posttype?.[router.post_name]

    if (post) {
        return <AddNewPost postType={post} />
    }

    return <Redirect to="/404-not-found"/>

}
export default AddAndEdit