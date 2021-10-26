


export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...ref }) => {
    return (
        <div className={`cbi-card${className ? ' ' + className : ''}`} {...ref}>
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

export const CardBody: React.FC = ({ children }) => {
    return (
        <div className="cbi-card-body">{children}</div>
    )
}

export const CardFooter: React.FC = ({ children }) => {
    return (
        <div className="cbi-card-footer">{children}</div>
    )
}