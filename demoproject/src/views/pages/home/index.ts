import { mapValueToProp } from "cbi-react-core"
import { Home } from "./Home.template"

const useHome = () => {
    let meta = { 
        title: 'Home>',
        description: 'Description Home'
     }
    return { meta }
}

export type HomeProps = ReturnType < typeof useHome>

export default mapValueToProp(Home, useHome)