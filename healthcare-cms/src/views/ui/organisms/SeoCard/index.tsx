
interface SeoCardProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const SeoCard : React.FC<SeoCardProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}