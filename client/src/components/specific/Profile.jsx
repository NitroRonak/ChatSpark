import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon
} from "@mui/icons-material"
import moment from "moment"
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar 
        sx={{
          width:150,
          height:150,
          objectFit:"contain",
          marginBottom:"1rem",
          border:"5px solid white"
        }}
      />
      <ProfileCard text={"hello"} heading={"Bio"}/>
      <ProfileCard text={"Decon"} heading={"Username"} Icon={<UserNameIcon/>}/>
      <ProfileCard text={"Ronak"} heading={"Name"} Icon={<FaceIcon/>}/>
      <ProfileCard text={moment().format("YYYY-MM-DD hh:mma")} heading={"Joined"} Icon={<CalenderIcon/>}/>
    </Stack>
  )
}

const ProfileCard=({text,Icon,heading})=>{
  return (
    <Stack 
      direction={"row"} 
      alignItems={"center"} 
      spacing={"1rem"}
      textAlign={"center"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant='body1'>{text}</Typography>
        <Typography variant='caption'>{heading}</Typography>
      </Stack>
    </Stack>
  )
}

export default Profile
