
interface DashboardBookingProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'>{

}
export const DashboardBooking : React.FC<DashboardBookingProp> = ({...ref}) => {
    return (
        <div {...ref}></div>
    )
}