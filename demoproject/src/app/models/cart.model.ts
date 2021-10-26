import { BaseModel } from "./base.model";

type CartEntity = {}
class Cart extends BaseModel<CartEntity> {
    _url="cart"
}

export default new Cart