import { useRouter } from 'cbi-react-core';
import  { useEffect } from 'react';
import { Helmet } from 'react-helmet';


const NODE_ENV = process.env.NODE_ENV;
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;


export const Page = (props: any) => {
    const { title, children, ...rest } = props;

    const router = useRouter();

    useEffect(() => {
        if (NODE_ENV !== 'production') {
            return;
        }

        if ((window as any).gtag) {
            (window as any).gtag('config', GA_MEASUREMENT_ID, {
                page_path: router.location.pathname,
                page_name: title
            });
        }
    }, [title, router]);

    return (
        <div {...rest}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
};
