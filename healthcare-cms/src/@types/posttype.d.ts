
declare const PostFieldType: ['string', 'editor', 'textarea', 'tags', 'categories', 'format', 'image', 'images']
declare type PostTypeField = {
    [k: string]: typeof PostFieldType[number] | {
        type: typeof PostFieldType[number],
        position?: 'right' | 'left',
        relation?: string,
        title?: string
    }
}
declare type PostType = {
    title: string,
    fields: PostTypeField
}