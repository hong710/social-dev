import React, {useState} from 'react'
import {AppBar, Container,Box, Badge, Toolbar, styled, Typography, InputBase, Avatar, Menu, MenuItem} from '@mui/material';
import DeckIcon from '@mui/icons-material/Deck';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailIcon from '@mui/icons-material/Email';


const Search = styled('div')(({theme}) =>({
  backgroundColor:'#fff',
  borderRadius: theme.shape.borderRadius,
  padding: '0 10px',
}));

const SearchWrapper = styled('Box')(({theme}) =>({
  display: 'flex',
  justifyContent:'start',
  alignItems:'center',
  //media query
  [theme.breakpoints.up('sm')]:{

  }

}));

const NotificationWrapper = styled('Box')(({theme}) =>({
  display: 'flex',
  justifyContent:'start',
  alignItems:'center',
  //media query
  [theme.breakpoints.down('sm')]:{
    display:'none'
  }
}));

const UserWrapper = styled('Box')(({theme}) =>({
  display: 'flex',
  justifyContent:'start',
  alignItems:'center',
  //media query
  [theme.breakpoints.up('sm')]:{
  }
}));

const iconSize= {
  fontSize:'1.8rem',
  marginLeft: '15px'
}

function Navbar() {

  const [openNav, setOpenNav] = useState(false);
  return (
    <AppBar position='sticky' >
      <Container sx={{margin:'0'}}>
      <Toolbar sx={{alignItems:'center', justifyContent:'space-between', padding:'0'}}>
        <Typography variant='h6' sx={{
          display:{
            xs:"none",
            sm:"block"
          }
        }}>Social Dev</Typography>
        <DeckIcon sx={{
          display:{
            fontSize:'40px',
            xs:'block',
            sm:'none'
          }
        }} />

        <Search sx={{width:{xs:'50%',sm:'35%'}}}>
          <SearchWrapper>
            <SearchIcon color='info' disable />
            <InputBase placeholder='Search...' sx={{marginLeft:'5px'}}/>
          </SearchWrapper>
        </Search>

        <NotificationWrapper>
          <Badge badgeContent={4} color='error'>
            <NotificationsNoneIcon sx={iconSize}/>
          </Badge>

          <Badge badgeContent={4} color='error'>
            <EmailIcon  sx={iconSize}/>
          </Badge>
        </NotificationWrapper>

        <UserWrapper>
          <Avatar 
            src='https://randomuser.me/api/portraits/men/22.jpg'
            onClick={()=>setOpenNav(true) }
            />          
        </UserWrapper>        
      </Toolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={openNav}
        onClose={()=>setOpenNav(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >

        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </Container>

    </AppBar>
  )
}

export default Navbar