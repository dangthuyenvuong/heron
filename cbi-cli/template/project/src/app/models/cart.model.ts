import { Model } from "cbi-react-core"

type CartEntity = {}
class Cart extends Model<CartEntity> {
    _url="cart"
}

const cart = new Cart()
export default cart