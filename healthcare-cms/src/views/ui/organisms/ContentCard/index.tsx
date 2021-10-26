
interface ContentCardProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const ContentCard : React.FC<ContentCardProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}