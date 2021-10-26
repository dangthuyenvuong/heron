
interface ImageCardProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const ImageCard : React.FC<ImageCardProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}