import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logo from '../src/images/logo.jpg';

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
    boxshadow: 24,
};

const center = {
    position: "relative",
    top: "50%",
    left: "37%",
};

export default function ForgetPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = () => {
        
        console.log(`Password reset requested for email: ${email}`);
        
        navigate('/reset-confirmation');
    };

    return (
        <>
            <div
                style={{
                    backgroundImage: './bg.jpg',
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5",
                }}
            >
                <Box sx={boxstyle}>
                    <Grid container>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Box style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundSize: "cover",
                                height: "70vh",
                                minHeight: "500px",
                                backgroundColor: "#05043E"
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
                                    border: "2px"
                                }}>
                                <ThemeProvider theme={darkTheme}>
                                    <Container>
                                        <Box height={35} />
                                        <Box sx={center}>
                                            <Avatar sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}>
                                                <MailOutlineIcon />
                                            </Avatar>
                                            
                                            <Typography component="h1" variant="h4">
                                                Forget Password
                                            </Typography>
                                            
                                        </Box>
                                        <Box height={35} />
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                <TextField
                                                    style={{ backgroundColor: "#8E98A8", borderRadius: "27px" }}
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                                                <Button
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
                                                    onClick={handleResetPassword}
                                                >
                                                    Reset Password
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                <Stack direction="row" spacing={2}>
                                                    <Typography
                                                        variant="body1"
                                                        component="span"
                                                        style={{ marginTop: "10px", color: "#05043E" }}>
                                                        Remember your password? {""}
                                                        <span
                                                            style={{ color: "#05043E", cursor: "pointer" }}
                                                            onClick={() => {
                                                                navigate("/");
                                                            }}
                                                        >
                                                            Login
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
