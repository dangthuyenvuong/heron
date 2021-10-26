import { usePermission } from "app/store/auth"

type PermissionProp = {
    permission: string
}
export const Permission: React.FC<PermissionProp> = ({ children, permission }) => {
    let { hasPermission } = usePermission()
    if (!hasPermission(permission)) return null
    return <>{children}</>
}