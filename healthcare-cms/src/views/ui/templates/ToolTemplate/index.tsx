
interface ToolTemplateProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const ToolTemplate : React.FC<ToolTemplateProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}