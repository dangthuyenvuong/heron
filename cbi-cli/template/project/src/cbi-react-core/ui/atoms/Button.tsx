import React, { memo, MouseEventHandler } from "react"
import { Link } from "./Link"
import { Button as ButtonA } from 'antd'

type ButtonProp = {
    link?: string
    box?: boolean
    onPress: MouseEventHandler<HTMLButtonElement>
} & React.HTMLAttributes<HTMLElement>

export const Button = memo<ButtonProp>(({ children, onPress, link, box, ...ref }) => {

    if (link) return <Link to={link} {...ref}>{children}</Link>

    return <ButtonA onClick={onPress} {...ref}>{children}</ButtonA>
})