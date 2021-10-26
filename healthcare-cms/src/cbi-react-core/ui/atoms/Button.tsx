import React, { memo, MouseEventHandler } from "react"
import { Link } from "./Link"
import { Button as ButtonA } from 'antd'

declare const ButtonType : ["default", "primary", "ghost", "dashed", "link", "text"]
declare const ButtonHtmlType : ['button' , 'submit' , 'reset']
type ButtonProp = {
    link?: string
    box?: boolean
    type?: typeof ButtonType[number]
    htmlType?: typeof ButtonHtmlType[number]
    onClick?: MouseEventHandler<HTMLButtonElement>
} & React.HTMLAttributes<HTMLElement>

export const Button = memo<ButtonProp>(({ children, onClick, type, link, box, ...ref }) => {

    // if (link) return <Link to={link} {...ref}>{children}</Link>

    return <ButtonA type={type} onClick={onClick} {...ref}>{children}</ButtonA>
})