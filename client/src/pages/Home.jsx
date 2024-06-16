import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material';
import artworkchat from "../assets/Images/artworkchat.png";
import {Chat as ChatIcon} from "@mui/icons-material"
const Home = () => {
  return (
    <Box sx={{position:"relative"}}
    >
      <img
        src={artworkchat}
        style={{width:"100%",height:"100vh",objectFit:"cover",
        opacity:0.8
        }}
      />
      <ChatIcon sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"white", fontSize:"10rem"}}/>
      <Typography variant="h4"
        sx={{position:"absolute",top:"65%",left:"50%",transform:"translate(-50%,-50%)",fontWeight:"bold", color:"white"}}
      >
        Select a friend to chat
      </Typography>
    </Box>
  )
}

export default AppLayout()(Home);
