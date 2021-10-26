interface PaginateProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const Paginate: React.FC<PaginateProp> = ({ ...ref }) => {
    return (
        <div {...ref}></div>
    )
}