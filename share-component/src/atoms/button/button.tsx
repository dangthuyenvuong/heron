import React from 'react'
import styled from 'styled-components'

const ClearButtonElement = styled.button`
    border: none;
    text-decoration: none;
    ${(p: any) => p.margin && `margin: ${p.margin}`};
    ${(p: any) => p.width && `width: ${p.width}`};
    padding: 0;
`

type ButtonProp = React.HtmlHTMLAttributes<HTMLElement>

export const Button: React.FC<ButtonProp> = ({ children, ...props }) => (
    <ClearButtonElement {...props}>{children}</ClearButtonElement>
)