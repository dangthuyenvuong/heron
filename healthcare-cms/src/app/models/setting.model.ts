import { Model } from "cbi-react-core"

type SettingEntity = {}
class Setting extends Model<SettingEntity> {
    _url = ''
}

let setting = new Setting()

export default setting