import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from "react-router-dom";

const successTheme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50',
        },
    },
});

const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "50%",
    height: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
};

const center = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
};

export default function ResetConfirmation() {
    const navigate = useNavigate();

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
                <Box sx={boxStyle}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box
                                style={{
                                    backgroundSize: "cover",
                                    height: "50vh",
                                    minHeight: "300px",
                                    backgroundColor: "#C0C0C0",
                                    border: "2px"
                                }}
                            >
                                <ThemeProvider theme={successTheme}>
                                    <Container>
                                        <Box height={35} />
                                        <Box sx={center}>
                                            <CheckCircleOutlineIcon
                                                color="primary"
                                                sx={{ fontSize: 100 }}
                                            />
                                            <Typography variant="h4" color="primary">
                                                Password Reset Successful
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary">
                                                Your password has been successfully reset.
                                            </Typography>
                                        </Box>
                                        <Box height={35} />
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sx={center}>
                                                <Typography
                                                    variant="body1"
                                                    component="span"
                                                    style={{ marginTop: "10px", color: "#05043E" }}
                                                >
                                                    Return to
                                                    <span
                                                        style={{ color: "#05043E", cursor: "pointer" }}
                                                        onClick={() => {
                                                            navigate("/");
                                                        }}
                                                    >
                                                        Login
                                                    </span>
                                                </Typography>
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
