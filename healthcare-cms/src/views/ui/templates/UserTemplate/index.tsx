
interface UserTemplateProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const UserTemplate : React.FC<UserTemplateProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}