import { Suspense } from 'react';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

import Topbar from './components/TopBar';

const useStyles = makeStyles((theme: any) => ({
    content: {
        height: '100%',
        paddingTop: 56,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    }
}));

const Auth = (props: any) => {
    // const { route } = props;

    const classes = useStyles();

    return (
        <>
            <Topbar />
            <main className={classes.content}>
                <Suspense fallback={<LinearProgress />}>
                    {props.children}
                </Suspense>
            </main>
        </>
    );
};

export default Auth;
