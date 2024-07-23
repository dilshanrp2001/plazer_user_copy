import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import LockOutlined from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import logo from "../src/images/logo.jpg";
import toast from "react-hot-toast";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const center = {
  position: "relative",
  top: "50%",
  left: "37%",
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log(username, password);
      const response = await axios.post(
        "http://localhost:3001/plazer-user/plazer-userLogin",
        {
          username: username,
          password: password,
        }
      );
      console.log(response);
      console.log(response.data.payload);

      if (response.data.status === 202) {
        sessionStorage.setItem("token", response.data.payload.access_token);
        console.log(response.data.payload);
        toast.success("Login Successful");
        const token = sessionStorage.getItem("token");
        console.log(token);
        setUsername("");
        setPassword("");
        // navigate("/dashboard");
      } else if (response.data.status === 409) {
        toast.error("Invalid Credentials");
      } else if (response.data.status === 404) {
        toast.error("User not found");
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "./bg.jpg",
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "#05043E",
                }}
              >
                <img src={logo} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "#C0C0C0",
                  border: "2px",
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                    <Box sx={center}>
                      <Avatar
                        sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}
                      >
                        <LockOutlined />
                      </Avatar>
                      <Typography component="h1" variant="h4">
                        Sign In
                      </Typography>
                    </Box>
                    <Box height={35} />
                    <Grid container spacing={1}>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <TextField
                          style={{
                            backgroundColor: "#8E98A8",
                            borderRadius: "27px",
                          }}
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <TextField
                          style={{
                            backgroundColor: "#8E98A8",
                            borderRadius: "27px",
                          }}
                          required
                          fullWidth
                          id="password"
                          label="Password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <Stack direction="row" spacing={2}>
                          <FormControlLabel
                            sx={{ width: "60%" }}
                            onClick={() => setRemember(!remember)}
                            control={<Checkbox checked={remember} />}
                            label="Remember me"
                          />
                          <Typography
                            variant="body1"
                            component="span"
                            onClick={() => {
                              navigate("/reset-password");
                            }}
                            style={{
                              marginTop: "10px",
                              cursor: "pointer",
                              color: "#05043E",
                            }}
                          >
                            Forget password?
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth="true"
                          size="large"
                          sx={{
                            mt: "10px",
                            mr: "20px",
                            borderRadius: 28,
                            color: "#ffffff",
                            minWidth: "170px",
                            backgroundColor: "#05043E",
                          }}
                          onClick={handleLogin}
                        >
                          Log in
                        </Button>
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <Stack direction="row" spacing={2}>
                          <Typography
                            variant="body1"
                            component="span"
                            style={{ marginTop: "10px", color: "#ff0000" }}
                          >
                            Don't have an account ? {""}
                            <span
                              style={{ color: "#05043E", cursor: "pointer" }}
                              onClick={() => {
                                navigate("/register");
                              }}
                            >
                              Sign up
                            </span>
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
