
interface <%= namecase =%>Prop extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const <%= namecase =%> : React.FC<<%= namecase =%>Prop> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}