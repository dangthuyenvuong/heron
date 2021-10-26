

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Divider,
    Link,
    Avatar
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import { Page } from '../../../components';

import { RegisterForm } from './components';
import { RegisterPageProp } from ".";

const Register: React.FC<RegisterPageProp> = ({ classes }) => {

    return (
        <Page
            className={classes.root}
            title="Register"
        >
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <PersonAddIcon className={classes.icon} />
                    <Typography
                        gutterBottom
                        variant="h3"
                    >
                        Sign up
                    </Typography>
                    <Typography variant="subtitle2">
                        Sign up on the internal platform
                    </Typography>
                    <RegisterForm className={classes.registerForm} />
                    <Divider className={classes.divider} />
                    <Link
                        align="center"
                        color="secondary"
                        component={RouterLink}
                        to="/auth/login"
                        underline="always"
                        variant="subtitle2"
                    >
                        Have an account?
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
    )
}

export default Register