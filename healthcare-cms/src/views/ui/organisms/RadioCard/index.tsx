
interface RadioCardProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const RadioCard : React.FC<RadioCardProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}