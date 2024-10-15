import React from "react";
import Lottie from 'react-lottie';
import animation from "../../assets/animation.json";
import { Box, Button, Typography } from "@mui/material";

function ErrorPage() {

    return (
        <Box>
            <Box>
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: animation,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice"
                        }
                    }}
                    height={'50vh'}
                    width={'50vh'}
                />
            </Box>

            <Typography variant="h6" gutterBottom align="center">
                ¡Ups! No encontramos la página que buscas
            </Typography>

            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    href="/tic-tac-toe-politicas"
                    style={{ backgroundColor: '#07bc7d' }}
                >
                    Ir al inicio
                </Button>
            </Box>

        </Box>
    );
}

export default ErrorPage;