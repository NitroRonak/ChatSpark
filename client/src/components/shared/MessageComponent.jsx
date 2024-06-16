import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import moment from 'moment'
import { fileFormat } from '../../lib/features'
import RenderAttachment from './RenderAttachment'
const MessageComponent = ({message,user}) => {
    const {attachments=[], content, sender, createdAt} = message
    const sameSender=sender?._id===user?._id
    const timeAgo=moment(createdAt).fromNow()
  return (
    <div
        style={{
            alignSelf:sameSender ? "flex-end" : "flex-start",
            backgroundColor:"whitesmoke",
            borderRadius:"1px 10px 0 10px",
            padding:"0.5rem",
            width:"fit-content",
        }}
    >
        {
            !sameSender && 
            <Typography
                variant="caption"
                sx={{
                    fontWeight:"bold",
                    color:"#497aac",
                }}
            >
                {sender?.name}
            </Typography>
        }
        {
            content && 
            <Typography variant="body1">
                {content}
            </Typography>
        }

        {
            attachments.length > 0 && (
                attachments.map((attachment,index)=>{
                    const url=attachment.url
                    const file=fileFormat(url)
                    return (
                        <Box key={index}>
                            <a
                                href={url}
                                target="_blank"
                                download
                                style={{
                                    color:"black"
                                }}
                            >
                                <RenderAttachment file={file} url={url}/>
                            </a>
                        </Box>
                    )
                })
            )
        }

        <Typography variant="caption" color={"text.secondary"} textAlign={"right"}>{timeAgo}</Typography>
    </div>
  )
}

export default memo(MessageComponent)
