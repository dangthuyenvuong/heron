import { User } from "app"
import { useAuth } from "app/store/auth"
import { Profile } from "views/ui/templates"

export default () => {
    let { user } = useAuth()
    return <Profile user={user as User} />
}