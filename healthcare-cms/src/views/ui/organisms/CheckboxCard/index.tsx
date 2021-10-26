
interface CheckboxCardProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const CheckboxCard : React.FC<CheckboxCardProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}