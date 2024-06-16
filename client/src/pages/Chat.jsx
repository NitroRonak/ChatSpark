import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { AttachFile as AttachFileIcon, Send as SendIcon } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialog/FileMenu";
import { sampleMessages } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user={
  _id:"dfdfd",
  name:"Ronaldo",
}
const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        height={"90%"}
        bgcolor={"rgb(181, 180, 182)"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessages.map((message, index) => (
            <MessageComponent message={message} user={user} key={message._id}/>
          ))
        }

      </Stack>
      <form
        style={{
          height:"10%",
        }}
      >
        <Stack direction={"row"} height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          spacing={"0.5rem"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position:"absolute",
              left:"1.5rem",
              rotate:"30deg"
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Message"/>
          <IconButton type="submit"
            sx={{
              rotate:"-30deg",
              backgroundColor:"#317ea7",
              color:"white",
              padding:"0.5rem",
              "&:hover":{
                bgcolor:"primary.dark",
              }
            }}
          >
            <SendIcon/>
          </IconButton>
        </Stack>
        <FileMenu/>
      </form>
    </>
  );
};

export default AppLayout()(Chat);
