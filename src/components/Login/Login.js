import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import React from "react";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = {
      backgroundColor: "#6573c3"
  }

  const btnStyle = {
      margin: '8px 0'
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style = {avatarStyle}><LockOpenIcon></LockOpenIcon></Avatar>
          <h2>Sign In</h2>
          <TextField
            label="Username"
            placeholder="Enter Your Username"
            fullWidth
          ></TextField>
          <TextField
            label="Password" type ='password'
            placeholder="Enter your password"
            fullWidth
          ></TextField>
        </Grid>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember Me"
        />
        <Button style ={btnStyle} type="submit" color="primary" fullWidth variant="contained">
          Sign In
        </Button>
        <Typography>
          <Link href="#">
            Forgot Password ?
          </Link>
        </Typography>
        <Typography>
            Do you have an account?
          <Link href="#">
            Sign Up
          </Link>
        </Typography>

      </Paper>
    </Grid>
  );
};

export default Login;
