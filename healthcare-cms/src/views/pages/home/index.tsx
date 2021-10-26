import { DatePicker } from "antd"
import { Helmet } from "react-helmet"

const Home: React.FC = () => {
    let meta = {
        title: 'Home>',
        description: 'Description Home'
    }
    return (
        <div>
            <Helmet>
                <title>{meta.title} </title>
                < meta name="description" content={meta.description} />
            </Helmet>
            <div>
                <DatePicker />
            </div>
        </div>
    )
}

export default Home