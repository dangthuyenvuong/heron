import { Helmet } from "react-helmet"
import { HomeProps } from "."


export const Home: React.FC<HomeProps> = ({ meta }) => {
    return <div>
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
        </Helmet>
        <div>Home</div>
    </div>

}