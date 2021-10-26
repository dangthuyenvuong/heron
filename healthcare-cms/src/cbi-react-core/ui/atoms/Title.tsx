import { Typography } from 'antd'

const TitleA = Typography.Title
type TitleProp = {
    level?: 1 | 2 | 3 | 4 | 5
} & Pick<React.HTMLAttributes<HTMLHeadingElement>, 'className' | 'style'>
export const Title: React.FC<TitleProp> = ({ level = 2, children, ...ref }) => {
    let Com: keyof JSX.IntrinsicElements = `h${level}`
    return <TitleA {...ref} level={level}>{children}</TitleA>
}
