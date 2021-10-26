
interface TagCardProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const TagCard : React.FC<TagCardProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}