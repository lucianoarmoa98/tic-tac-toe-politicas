import React, { useState } from "react";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LinkedIn, WhatsApp } from "@mui/icons-material";


const Footers = ({ handlePhoneWhatsApp }) => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ marginTop: 'auto' }}>
            {mobile ? <FootersMobile /> : <FootersWeb handlePhoneWhatsApp={handlePhoneWhatsApp} />}
        </div>
    );
}

export default Footers;


const FootersMobile = () => {

    return (
        <footer style={{
            flexShrink: 0,
            padding: '10px 0',
            backgroundColor: "white",
        }}>
            <Typography variant="caption" display="block" gutterBottom align="center">
                © 2025 Paseo La Galeria. Todos los derechos reservados.
            </Typography>
        </footer>
    );
}

const FootersWeb = ({ handlePhoneWhatsApp }) => {
    return (
        <footer style={{
            position: 'absolute',
            width: '100%',
            backgroundColor: "white",
            borderTop: '0.1px solid #e0e0e0',
            padding: '10px 0'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px'
            }}>
                <div>
                  
                </div>

                <Typography variant="caption" display="block" gutterBottom>
                    © 2025 Paseo La Galeria. Todos los derechos reservados.
                </Typography>
            </div>


        </footer>
    )
}
