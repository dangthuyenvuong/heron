
interface ActionCardProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const ActionCard : React.FC<ActionCardProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}