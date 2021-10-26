
import { Table } from 'antd'
import { Paginate } from 'cbi-react-core'
import { useMemo } from 'react'
import { Checkbox } from '../../atoms'
import { Filter } from './Filter'
type Column = {
    name: string,
    label: string,
    render?: (item: any) => any
    options?: {
        filter: boolean,
        sort: boolean
    }
}

type DataTableProp = {
    columns: Column[]
    data: any[],
    title?: string
    options?: {

    },
    checkbox?: boolean
}

export const DataTable: React.FC<DataTableProp> = ({ title, columns, data, checkbox = true }) => {
    const _columns = useMemo(() => {
        const _columns: any = columns.map(e => ({
            title: e.label,
            dataIndex: e.name,
            key: e.name,
            render: e.render
        }))

        if (checkbox) {
            _columns.unshift({
                dataIndex: '',
                key: 'id',
                title: '',
                render: () => <Checkbox />
            })
        }
        return _columns
    }, [columns])


    return (
        <>
            <div className="cbi-table-title">
                {title}
            </div>
            <Filter />
            <Table bordered={false} size="middle" pagination={false} columns={_columns} dataSource={data} />
            <Paginate />
        </>
    )
}