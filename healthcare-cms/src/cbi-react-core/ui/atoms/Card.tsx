


export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...ref }) => {
    return (
        <div {...ref} className={`cbi-card${className ?? ''}`} >
            {children}
        </div>
    )
}

export const CardHeader: React.FC = ({ children }) => {
    return (
        <div className="cbi-card-header">
            {children}
        </div>
    )
}

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...ref }) => {
    return (
        <div className={`cbi-card-body ${className ?? ''}`} {...ref}>{children}</div>
    )
}

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>= ({ children, ...ref }) => {
    return (
        <div  {...ref} className={`cbi-card-footer ${ref.className ?? ''}`}>{children}</div>
    )
}