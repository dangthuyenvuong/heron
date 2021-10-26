
interface PluginProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const Plugin : React.FC<PluginProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}