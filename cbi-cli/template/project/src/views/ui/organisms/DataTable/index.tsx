
import { Table } from 'antd'
import { useMemo } from 'react'
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

    }
}

export const DataTable: React.FC<DataTableProp> = ({ title, columns, data }) => {
    const _columns = useMemo(() => {
        return columns.map(e => ({
            title: e.label,
            dataIndex: e.name,
            key: e.name,
            render: e.render
        }))
    }, [columns])

    return (
        <>
            <div className="cbi-table-title">
                {title}
            </div>
            <Table pagination={false} columns={_columns} dataSource={data} />
        </>
    )
}