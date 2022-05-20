import React from 'react'
import { Button, styled } from '@mui/material';
import {Settings} from '@mui/icons-material';
import { teal, brown } from '@mui/material/colors';

const customizeBtn = {
    backgroundColor:teal[300],
    color: '#fff',
    borderColor:teal[300],
    '&:hover':{
        backgroundColor:teal[500],
        color: '#fff'
    }
}

function Demo() {
    const CustomButton = styled(Button)({
        backgroundColor:brown[300],
        color: '#fff',
        borderColor:brown[300],
        '&:hover':{
            backgroundColor:brown[500],
            color: '#fff'
        }
    });


    return (
        <div>
            <h2>1. Button</h2>
            <h3 style={{color:'blue'}}>Basic Button</h3>
            <Button variant='contained' color="primary">Primary</Button>
            <Button variant='contained' color="secondary">Secondary</Button>
            <Button variant='contained' color="error">Error</Button>
            <Button variant='contained' color="warning">Waring</Button>
            <Button variant='contained' color="info">Info</Button>
            <Button variant='contained' color="success">Success</Button>

            <h3 style={{color:'blue'}}>More Button</h3>
            <Button variant='outlined' color='success'>Outlined</Button>
            <Button  color='warning' > Text</Button>
            <Button variant='contained'  startIcon={<Settings/>}>Settings</Button>

            <h3 style={{color:'blue'}}>Customize Button</h3>
            {/* //using sx */}
            <Button variant='outlined' 
            sx={customizeBtn}>Customize</Button> 

            {/* //using styled to for button component */}
            <CustomButton>Brown Button</CustomButton>

        </div>
    )
}

export default Demo