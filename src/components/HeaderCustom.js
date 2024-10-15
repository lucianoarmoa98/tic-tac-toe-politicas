import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, ListItemText, ListItemIcon, ListItem, List, Divider, Drawer, useTheme, useMediaQuery, Button, Box, styled, CssBaseline, Badge, Typography, ListItemButton, Collapse } from '@mui/material';
import { HomeOutlined, Person, Phone, ShoppingCart, ShoppingCartCheckout, ViewCarouselOutlined, WhatsApp, Menu, LoginOutlined, FastfoodOutlined, Person2Outlined, PeopleOutline, ExpandLess, ExpandMore, MenuOpen, RedeemOutlined, LocalActivity } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import logo from '../assets/imagenes/logoVerde.png';
import Footers from './Footers';
import { PaletaColor } from '../styles/StylesConstantes';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

function HeaderCustom({ children, id }) {
    const [open, setOpen] = useState(false);
    const [openCollapse, setOpenCollapse] = useState([]);


    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    let history = useNavigate();
    let location = window.location.pathname;


    useEffect(() => {
        //obtener el numero de ordenes del localstorage
        let numberOrders = localStorage.getItem('dataCarrito');
        if (numberOrders !== null) {
            //pasar a objeto
            let numberOrdersObject = JSON.parse(numberOrders);
            //setear el valor del state global
        }


    }, []);




    //funcion para retornar titulo de la pagina, dependiendo de la ruta
    const handleTitle = () => {
        if (location === '/') {
            return 'Inicio';
        } else if (location === '/app/servicios') {
            return 'Servicios';
        } else if (location === '/app/contacto') {
            return 'Contacto';
        } else {
            return 'Inicio';
        }
    }



    //-------------------------------funciones de redireccion
    const handleRedireccion = (ruta) => {
        history(ruta);
    };


    //-------------------------------rutas
    const handleHome = () => {
        history('/');
    }


    const handleContacto = () => {
        history('/app/contacto');
    };




    const handlePhoneWhatsApp = () => {
        let url = 'https://api.whatsapp.com/send?phone=595976308922&text=Hola%20Incentiva%20Py';

        //abrir en una nueva pestaña
        window.open(url, '_blank');
    }

    const handleClose = () => {
        localStorage.removeItem('dataUser');
        history('/app/login');
        window.location.reload();
    };



    const arrayMenu = [
        {
            id: 1,
            name: 'Inicio',
            icon: <HomeOutlined style={{ color: PaletaColor.NEGRO }} />,
            // action: handleHome
            action: () => handleRedireccion('/app/admin')
        },
        {
            id: 2,
            name: 'Usuarios App',
            icon: <PeopleOutline style={{ color: PaletaColor.NEGRO }} />,
            // action: handleHome
            children: [
                {
                    id: 3,
                    name: 'Usuarios App',
                    icon: <PeopleOutline style={{ color: PaletaColor.NEGRO }} />,
                    // action: handleHome
                    action: () => handleRedireccion('/app/admin/usuarios-app')
                }
            ]
        },
         {
            id: 3,
            name: 'Paseo Plus',
            icon: <LocalActivity style={{ color: PaletaColor.NEGRO }} />,
            children: [
                {
                    id: 3,
                    name: 'Promociones',
                    icon: <RedeemOutlined style={{ color: PaletaColor.NEGRO }} />,
                    action: () => handleRedireccion('/app/admin/paseo-plus-promociones')
                }
            ]
        },
        {
            id: 4,
            name: 'Banners',
            icon: <ViewCarouselOutlined style={{ color: PaletaColor.NEGRO }} />,
            action: () => handleRedireccion('/app/admin/banners')
           
        },
        {
            id: 7,
            name: 'Cerrar Sesion',
            icon: <LoginOutlined style={{ color: PaletaColor.NEGRO }} />,
            action: handleClose
        },
    ]


    const toggleDrawer = () => () => {
        setOpen(!open);
    };


    // const DrawerList = (
    //     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    //         <List>
    //             {arrayMenu.map((item, index) => (
    //                 <ListItem key={index} disablePadding onClick={item.action}>
    //                     <ListItemButton>
    //                         <ListItemIcon>
    //                             {item.icon}
    //                         </ListItemIcon>
    //                         <ListItemText primary={item.name} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </Box>
    // );

    const MenuItem = ({ item }) => {


        return (
            <>
                <ListItem disablePadding onClick={() => {
                    if (item.children) {
                        // setOpenCollapse(!openCollapse);
                        //agregar el id del item al array si es que no existe
                        if (!openCollapse.includes(item.id)) {
                            setOpenCollapse([...openCollapse, item.id]);
                        } else {
                            //eliminar el id del item si es que existe
                            let newOpenCollapse = openCollapse.filter((id) => id !== item.id);
                            setOpenCollapse(newOpenCollapse);
                        }
                    } else if (item.action) {
                        item.action();
                    }
                }}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                        {/* {item.children ? (openCollapse ? <ExpandLess /> : <ExpandMore />) : null} */}
                        {item.children ? (openCollapse.includes(item.id) ? <ExpandLess /> : <ExpandMore />) : null}
                    </ListItemButton>
                </ListItem>

                {item.children && (
                    // <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                    <Collapse in={openCollapse.includes(item.id)} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.children.map((child, index) => (
                                <ListItem key={index} disablePadding onClick={child.action}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            {child.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={child.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                )}
            </>
        );
    };


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {arrayMenu.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </List>
        </Box>
    );




    return (
        <div style={{}}>
            <CssBaseline />


            <div style={{}}>
                <Toolbar style={{
                    // backgroundColor: PaletaColor.HEADER_COLOR,
                    backgroundColor: 'transparent',
                    padding: 10,
                }}>
                    {isMatch ? (
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{
                                        width: 60,
                                        height: undefined,
                                        aspectRatio: 1,
                                    }}
                                />
                            </div>

                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignContent: 'center',
                                    marginLeft: 5,
                                }}>
                                    <PlaceOutlinedIcon
                                        style={{
                                            color: PaletaColor.HEADER_COLOR,
                                            fontSize: 20,
                                        }}
                                    />
                                    <Typography variant="caption" style={{ color: PaletaColor.HEADER_COLOR, marginLeft: 5, }}>
                                        Asunción - Avd. Sta teresa
                                    </Typography>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    marginLeft: 5,
                                    marginTop: 5,
                                }}>
                                    <CallOutlinedIcon
                                        style={{
                                            color: PaletaColor.HEADER_COLOR,
                                            fontSize: 20,
                                        }}
                                    />
                                    <Typography variant="caption" style={{ color: PaletaColor.HEADER_COLOR, marginLeft: 5, }}>
                                        0981 123 456
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    ) : (

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: 60,
                        }}>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                height: 60,
                            }}>

                                <Box sx={{
                                    padding: 1,
                                }}>
                                    <img
                                        src={logo}
                                        alt="logo"
                                        style={{
                                            width: 180,
                                            height: undefined,
                                            aspectRatio: 1,
                                            // borderRadius: 50,
                                        }}
                                    />
                                </Box>


                            </Box>
                        </div>
                    )}
                </Toolbar>
            </div>

            <Main
                open={open}
            // onClick={handleDrawerClose}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    backgroundColor: '#f0f4fc',
                }}>
                    <Drawer
                        open={open}
                        variant="persistent"
                        anchor="left"
                    // onClose={toggleDrawer(false)}
                    >
                        {DrawerList}
                    </Drawer>

                    <div style={{ flex: 1 }}>
                        {children}
                    </div>

                    <Footers handlePhoneWhatsApp={handlePhoneWhatsApp} />
                </div>
            </Main>
        </div>
    );
}

export default HeaderCustom;