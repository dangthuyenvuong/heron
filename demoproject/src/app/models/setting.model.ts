import { BaseModel } from "./base.model";

type SettingEntity = {}
class Setting extends BaseModel<SettingEntity> {
    _url = ''
}

export default new Setting