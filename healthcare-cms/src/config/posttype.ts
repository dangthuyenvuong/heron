const posttype: { [k: string]: PostType } = {
    product: {
        title: 'Product',
        fields: {
            cover: {
                type: 'image',
                position: 'right'
            },
            title: 'string',
            content: 'editor',
            format: {
                type: 'format',
                position: 'right',
            },
            categories: {
                type: 'categories',
                position: 'right',
            },
            tags: {
                type: 'tags',
                position: 'right',
            },
        }
    },
    post: {
        title: 'Post',
        fields: {
            cover: {
                type: 'image',
                position: 'right'
            },
            title: 'string',
            content: 'editor',
            format: {
                type: 'format',
                position: 'right',
            },
            categories: {
                type: 'categories',
                position: 'right',
            },
            tags: {
                type: 'tags',
                position: 'right',
            },
        }
    },
    page: {
        title: 'Page',
        fields: {
            title: 'string',
            content: 'editor',
            format: {
                type: 'format',
                position: 'right',
            },
        }
    },
}




export default posttype
