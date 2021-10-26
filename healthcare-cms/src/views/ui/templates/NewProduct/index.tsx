
interface NewProductProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const NewProduct : React.FC<NewProductProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}