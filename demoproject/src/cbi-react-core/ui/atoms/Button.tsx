import React, { memo, MouseEventHandler } from "react"
import { Link } from "./Link"

type ButtonProp = {
    link?: string
    box?: boolean
    onPress: MouseEventHandler<HTMLButtonElement>
} & React.HTMLAttributes<HTMLElement>

export const Button = memo<ButtonProp>(({ children, onPress, link, box, ...ref }) => {

    if (link) return <Link to={link} {...ref}>{children}</Link>

    return <button onClick={onPress} {...ref}>{children}</button>
})