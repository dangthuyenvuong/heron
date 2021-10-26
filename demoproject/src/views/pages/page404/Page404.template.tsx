import { Helmet } from "react-helmet"
import { Page404Props } from "."


export const Page404: React.FC<Page404Props> = ({ meta }) => {
    return <div>
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
        </Helmet>
        <div>Page404</div>
    </div>

}