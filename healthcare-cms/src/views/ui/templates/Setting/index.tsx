
interface SettingProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const Setting : React.FC<SettingProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}