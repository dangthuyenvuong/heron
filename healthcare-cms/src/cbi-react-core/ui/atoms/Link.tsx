import React, { memo } from "react";
import { Link as RouterLink } from 'react-router-dom'


type LinkProp = {
    to: string
} & React.HTMLAttributes<HTMLElement>
export const Link = memo<LinkProp>(({ children, ...ref }) => {
    return <RouterLink {...ref}>{children}</RouterLink>
})