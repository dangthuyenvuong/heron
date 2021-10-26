import { DatePicker, TimePicker } from "antd"
import { useTranslate } from "cbi-react-core"
import moment from "moment"
import { useState } from "react"

interface TextSelectDatePickerProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'> {
    defaultValue?: '',
    text?: string
}
export const TextSelectDatePicker: React.FC<TextSelectDatePickerProp> = ({ defaultValue, text, ...ref }) => {
    let [value, setValue] = useState<any>()
    const [openDate, setOpenDate] = useState(false)
    const [openTime, setOpenTime] = useState(false)
    const { t } = useTranslate()

    const [timeValue, setTimeValue] = useState(moment())

    const onDateChange = (values: any) => {
        setValue(values)
        setOpenDate(false)
    }

    const onTimeChange = (values: any) => {
        setTimeValue(values)
        setOpenTime(false)
    }


    return (
        <>
            <div {...ref} className="font-normal underline cursor-pointer" onClick={() => setOpenDate(!openDate)}>{value?.format('DD-MM-YYYY') || t(text)}</div>
            <div className="cbi-text-select-date-picker">
                <DatePicker open={openDate} onChange={onDateChange} value={value} picker="date" />
            </div>
            {
                value && <> &nbsp;{t('at')}&nbsp;&nbsp;
                    <div className="font-normal underline cursor-pointer" onClick={() => setOpenTime(!openTime)}>{timeValue?.format('HH:mm:ss')}</div>
                    <div className="cbi-text-select-time-picker">
                        <TimePicker open={openTime} onChange={onTimeChange} value={timeValue} />
                    </div>
                </>
            }

        </>
    )
}