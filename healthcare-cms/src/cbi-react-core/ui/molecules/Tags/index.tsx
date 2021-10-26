import { PlusOutlined } from '@ant-design/icons'
import { Tag } from 'antd'
import { Input, Tooltip } from 'cbi-react-core'
import { useRef } from 'react'
import { useState } from 'react'

interface TagProp extends React.HTMLAttributes<HTMLDivElement> {

}
export const Tags: React.FC<TagProp> = () => {
    const [state, setState] = useState({
        tags: ['Unremoveable', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: ''
    })

    const editInput = useRef<any>()
    const saveInputRef = useRef<any>()

    const handleClose = (removeTag: string) => {
        const tags = state.tags.filter(tag => tag !== removeTag)
        setState({ ...state, tags })
    }

    const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, inputValue: ev.currentTarget.value })
    }

    const showInput = () => {
        setState({ ...state, inputVisible: true })
    }

    const handleInputConfirm = () => {
        const { inputValue, tags } = state
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags.push(inputValue)
        }

        setState({
            ...state,
            tags,
            inputValue: '',
            inputVisible: false
        })
    }

    const handleEditInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, editInputValue: ev.currentTarget.value })
    }

    const handleEditInputConfirm = () => {
        setState(({ tags, editInputIndex, editInputValue }) => {
            tags[editInputIndex] = editInputValue
            return {
                ...state,
                editInputIndex: -1,
                editInputValue: ''
            }
        })
    }


    const { tags, editInputValue, editInputIndex, inputVisible, inputValue } = state

    return (
        <>
            {tags.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={editInput}
                            key={tag}
                            size="small"
                            className="tag-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }

                const isLongTag = tag.length > 20;

                const tagElem = (
                    <Tag
                        className="edit-tag flex"
                        key={tag}
                        closable={index !== 0}
                        onClose={() => handleClose(tag)}
                        style={{display: 'flex'}}
                    >
                        <span
                            onDoubleClick={e => {
                                if (index !== 0) {
                                    setState({ ...state, editInputIndex: index, editInputValue: tag });
                                    editInput?.current?.focus();
                                    e.preventDefault();
                                }
                            }}
                        >
                            {tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
            {inputVisible && (
                <Input
                    ref={saveInputRef}
                    type="text"
                    size="small"
                    className="tag-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <Tag className="site-tag-plus" onClick={showInput} style={{display: 'flex'}}>
                    <PlusOutlined className="mr-1"/> New Tag
                </Tag>
            )}
        </>
    )
}