import Http from "../Http/Http";
import { AbstractModel } from "./AbstractModel";


let http = new Http()
export default class Model<Model> extends AbstractModel<Model> {
    _http = http

}