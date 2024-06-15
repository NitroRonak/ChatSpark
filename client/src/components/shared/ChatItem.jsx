import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'

const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChat
}) => {
  return (
    <Link sx={{padding:"0"}} to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}>
      <div style={{
        display: "flex",
        gap:"1rem",
        alignItems:"center",
        backgroundColor:sameSender ? "black" : "unset",
        color:sameSender ? "white" : "unset",
        position:"relative",
      }}>

        <AvatarCard avatar={avatar}/>
        <Stack>
            <Typography>{name}</Typography>
            {
                newMessageAlert && (
                    <Typography>{newMessageAlert.count} new messages</Typography>
                )
            }
        </Stack>
        {
            isOnline && <Box 
                sx={{
                    width:"0.5rem",
                    height:"0.5rem",
                    backgroundColor:"green",
                    borderRadius:"50%",
                    position:"absolute",
                    right:"0.5rem",
                    top:"0.5rem"
                }}
            />
        }
      </div>
    </Link>
  )
}

export default memo(ChatItem)
