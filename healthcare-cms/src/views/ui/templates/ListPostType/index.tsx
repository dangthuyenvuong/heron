import { DataTable, Paginate, Title } from "cbi-react-core"
import { useMemo } from "react"
import { Filter } from "./Filter"
interface ListPostTypeProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'> {
    postType: PostType
}
export const ListPostType: React.FC<ListPostTypeProp> = ({ postType, ...ref }) => {

    const columns = useMemo(() => {
        return Object.keys(postType.fields).map(e => {
            const field  = postType.fields[e]
            if(typeof field === 'object'){
                
            }

            return {
                name: e,
                label: e
            }
        })
    }, [postType])


    return (
        <div>
            <Title>{postType.title}</Title>
            <Filter />
            <DataTable data={[]} columns={columns} />
            <Paginate />
        </div>
    )


}