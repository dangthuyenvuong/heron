import { mapValueToProp } from "cbi-react-core"
import { Page404 } from "./Page404.template"

const usePage404 = () => {
    let meta = { 
        title: 'Page404>',
        description: 'Description Page404'
     }
    return { meta }
}

export type Page404Props = ReturnType < typeof usePage404>

export default mapValueToProp(Page404, usePage404)