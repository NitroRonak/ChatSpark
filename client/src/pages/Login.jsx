import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useInputValidation, useStrongPassword, useFileHandler } from "6pp";
import { usernameValidator } from "../utils/validators";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const password = useStrongPassword();
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const avatar = useFileHandler("single");
  const loginPassword = useInputValidation("");
  const loginUsername = useInputValidation("");

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(
      name.value,
      password.value,
      bio.value,
      username.value,
      avatar.value
    );
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(
      name.value,
      password.value,
      bio.value,
      username.value,
      avatar.value
    );
  };
  return (
    <div style={{backgroundColor:"rgb(5,1,20"}}>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 251, 251, 0.68)",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Sign In</Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={handleSignIn}
              >
                <TextField
                  required
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={loginUsername.value}
                  onChange={loginUsername.changeHandler}
                />

                <TextField
                  required
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={loginPassword.value}
                  onChange={loginPassword.changeHandler}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>

                <Typography>
                  Don't have an account ?
                  <Button variant="text" onClick={handleToggle}>
                    Sign Up
                  </Button>
                </Typography>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{ width: "100%", marginTop: "0.5rem" }}
                onSubmit={handleSignUp}
              >
                <Stack
                  sx={{
                    position: "relative",
                    width: "10rem",
                    margin: "0 auto",
                  }}
                >
                  <Avatar
                    sx={{
                      width: "7rem",
                      height: "7rem",
                      margin: "0 auto",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      "&:hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </IconButton>
                </Stack>

                {avatar.error && (
                  <Typography
                    color="error"
                    variant="caption"
                    width={"fit-content"}
                    display={"block"}
                    margin={"0 auto"}
                  >
                    {avatar.error}
                  </Typography>
                )}

                <TextField
                  required
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={username.value}
                  onChange={username.changeHandler}
                />

                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  label="Bio"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={bio.value}
                  onChange={bio.changeHandler}
                />

                <TextField
                  required
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>

                <Typography>
                  Already have an account ?
                  <Button variant="text" onClick={handleToggle}>
                    Sign In
                  </Button>
                </Typography>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
