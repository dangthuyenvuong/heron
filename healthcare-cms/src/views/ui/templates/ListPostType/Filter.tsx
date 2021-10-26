interface FilterProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const Filter: React.FC<FilterProp> = ({ ...ref }) => {
    return (
        <div {...ref}></div>
    )
}