import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Divider,
    Link,
    Avatar
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import { Page } from '../../../components';
import LoginForm from './components/LoginForm';
import { LoginProp } from '.';


const Login: React.FC<LoginProp> = ({ classes, handleButtonLogin }) => {
    return (
        <Page
            className={classes.root}
            title="Login"
        >
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <LockIcon className={classes.icon} />
                    <Typography
                        gutterBottom
                        variant="h3"
                    >
                        Sign in
                    </Typography>
                    <Typography variant="subtitle2">
                        Sign in on the internal platform
                    </Typography>
                    <LoginForm handleButtonLogin={handleButtonLogin} className={classes.loginForm} />
                    <Divider className={classes.divider} />
                    <Link
                        align="center"
                        color="secondary"
                        component={RouterLink}
                        to="/auth/register"
                        underline="always"
                        variant="subtitle2"
                    >
                        Don't have an account?
                    </Link>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image="/images/auth.png"
                    title="Cover"
                >
                    <Typography
                        color="inherit"
                        variant="subtitle1"
                    >
                        Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they
                        sold out High Life.
                    </Typography>
                    <div className={classes.person}>
                        <Avatar
                            alt="Person"
                            className={classes.avatar}
                            src="/images/avatars/avatar_2.png"
                        />
                        <div>
                            <Typography
                                color="inherit"
                                variant="body1"
                            >
                                Ekaterina Tankova
                            </Typography>
                            <Typography
                                color="inherit"
                                variant="body2"
                            >
                                Manager at inVision
                            </Typography>
                        </div>
                    </div>
                </CardMedia>
            </Card>
        </Page>
    );
};

export default Login;
