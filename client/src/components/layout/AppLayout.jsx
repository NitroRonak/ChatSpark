import React from "react";
import Title from "../shared/Title";
import Grid from '@mui/material/Grid'
import Header from "./Header";
import Chatlist from "../specific/Chatlist";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
    return (props) => {
      const params=useParams();
      const chatId=params.chatId;
      const handleDeleteChat=(e,_id,groupChat)=>{
        e.preventDefault();
        console.log("Deleted Chat",_id,groupChat)
      }
    return (
      <>
        <Title />
        <Header/>

        <Grid container height={"calc(100vh - 4rem)"}>
            <Grid 
                item 
                sm={4}
                md={3}
                sx={{
                    display: { xs: "none", sm: "block" },
                    padding: "1rem",
                    backgroundColor:"#f5f4f4",
                }}
                height={"100%"}
            >
                <Chatlist chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat}/>
            </Grid>  

            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                lg={6}
                height={"100%"}
            >
                <WrappedComponent {...props} />
            </Grid>

            <Grid
                item
                md={4}
                lg={3}
                height={"100%"}
                sx={{
                    display: { xs: "none", md: "block" },
                    padding: "1rem",
                    backgroundColor:"#e8e4e4"
                }} 
            >
                <Profile/>
            </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
