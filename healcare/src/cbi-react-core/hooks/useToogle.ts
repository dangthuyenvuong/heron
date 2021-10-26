import { useState } from "react"

export const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value?: boolean) {
        setValue((currentValue) => typeof value === 'boolean' ? value : !currentValue)
    }

    return [value, toggleValue]
}