import React, { useEffect, useState } from "react";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Container, InputAdornment, TextField, useMediaQuery, useTheme } from "@mui/material";
import '../../styles/AppCss.css'
import { Search } from "@mui/icons-material";




function DashboardHome() {
    const [dataBanner, setDataBanner] = useState([]);
    const [viewSeacrh, setViewSearch] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    const [dataHome, setDataHome] = useState([]);
    const [cargando, setCargando] = useState(false);

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));





   
    return (
        <HeaderCustom>

            <Container sx={{}} style={{
            }}>
        
            </Container>

    


        </HeaderCustom>
    );
}

export default DashboardHome;