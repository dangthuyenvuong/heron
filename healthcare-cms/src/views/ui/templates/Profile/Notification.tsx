import { Checkbox, DataTable, useTranslate } from "cbi-react-core"
import { useMemo } from "react"

const data = [
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
    {
        'id': 1,
        'title': 'Bài viết mới',
        'content': '<b>Đặng Thuyền Vương</b> đã đăng bài viết mới có tiêu đề "Làm sao để phân biệt...."'
    },
]

export const Notification: React.FC = () => {

    const { t } = useTranslate()

    const columns = useMemo(() => {
        return [
            {
                label: t('ID'),
                name: 'id',
                render: () => <Checkbox />
            },
            {
                label: t('Title'),
                name: 'title',
            },
            {
                label: t('Content'),
                name: 'content',
                render: (item: any) => <span dangerouslySetInnerHTML={{ __html: item }}></span>
            },
            {
                label: '',
                name: '',
            }
        ]
    }, [t])

    return (
        <DataTable columns={columns} data={data} />
    )
}