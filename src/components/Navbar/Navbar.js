import React, { useState } from 'react'
import {AppBar, Typography, Tabs, Tab, Toolbar, Button } from '@material-ui/core';
import logo from '../images/logo.jpg';



const Navbar = () => {
    const [value, setValue] = useState(0);

    const handleClickTab = (e, newValue) => {
         setValue(newValue);
    }

    return (
        <>
            <AppBar color="light" position="static">
            <Toolbar>
                <img src={logo} style={{marginLeft: "20px", width: "15%", padding: "20px"}}/>
                <Typography>
                    <Tabs onChange={handleClickTab} indicatorColor='primary' value={value}>
                        <Tab label="Home"></Tab>
                        <Tab label="About Us"></Tab>
                        <Tab label="Stores"></Tab>
                        <Tab label="Contact"></Tab>
                        <Tab label="Log in"></Tab>
                        <Button variant='contained' color='primary'>Sign in</Button>
                    </Tabs>
                    
                </Typography>
               
            </Toolbar>
              
            </AppBar>
        </>
    )
}

export default Navbar;