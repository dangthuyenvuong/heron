import { mapValueToProp } from "cbi-react-core"
import { <%= component =%> } from "./<%= component =%>.template"

const use<%= name =%> = () => {
    let meta = { 
        title: '<%= name =%>>',
        description: 'Description <%= name =%>'
     }
    return { meta }
}

export type <%= prop =%> = ReturnType < typeof use<%= name =%>>

export default mapValueToProp(<%= component =%>, use<%= name =%>)