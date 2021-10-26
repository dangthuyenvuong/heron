import { makeStyles } from '@material-ui/styles';
import { authAction } from 'app/store/auth/auth.reducer';

import gradients from 'app/utils/gradients';
import { mapValueToProp } from 'cbi-react-core';
import { useDispatch } from 'react-redux';
import Login from './login.template';


const useStyles = makeStyles((theme: any) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  loginForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const useLogin = () => {
  const classes = useStyles();
  let dispatch = useDispatch()
  const handleButtonLogin = () => {
    dispatch(authAction.login({
      username: 'demo',
      password: '213wqe'
    }))
  }
  return {
    classes,
    handleButtonLogin
  }
};

export type LoginProp = ReturnType<typeof useLogin>


export default mapValueToProp(Login, useLogin);
