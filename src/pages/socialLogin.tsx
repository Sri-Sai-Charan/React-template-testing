import React from "react";
import { useMediaQuery, Stack } from '@mui/material';
import Google from '../assets/images/icons/google.svg';
import Twitter from '../assets/images/icons/twitter.svg';
import Facebook from '../assets/images/icons/facebook.svg';
import { Button, createTheme } from "@material-ui/core";

export default function SocialLogin() {
  const theme = createTheme();

  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const googleHandler = async () => {
    // login || singup
  };

  const twitterHandler = async () => {
    // login || singup
  };

  const facebookHandler = async () => {
    // login || singup
  };

  return (
    <Stack spacing={2}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<img src={Google} alt="google" />}
      >
        Google
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<img src={Twitter} alt="twitter" />}
      >
        Twitter
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<img src={Facebook} alt="facebook" />}
      >
        Facebook
      </Button>
    </Stack>
  );
}

