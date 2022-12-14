import { Theme, createStyles, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import LoginForm from '@app/components/forms/login';
import { useAuth } from '@app/hooks/auth-context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  }),
);

const LoginPage: NextPage = () => {
  const router = useRouter();
  const classes = useStyles();
  const { login } = useAuth();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome back
          </Typography>
          <LoginForm
            onSubmit={async body => {
              await login(body);
              router.push('/');
              window.location.pathname = '/';
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
