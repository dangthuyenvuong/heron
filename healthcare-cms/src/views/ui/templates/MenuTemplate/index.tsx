
interface MenuTemplateProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const MenuTemplate : React.FC<MenuTemplateProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}