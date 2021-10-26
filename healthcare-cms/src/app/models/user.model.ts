import { Model } from "cbi-react-core"

export type User = {
    name: string,
    avatar: string
}
class UserModel extends  Model<User> {
    
}

export const userModel = new UserModel()

