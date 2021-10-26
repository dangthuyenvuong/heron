
interface DashboardMetric extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const DashboardMetric : React.FC<DashboardMetric> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}