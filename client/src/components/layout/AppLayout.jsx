import React from "react";
import Title from "../shared/Title";
import Grid from '@mui/material/Grid'
import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header/>

        <Grid container height={"calc(100vh - 4rem)"} sx={{bgcolor:"rgb(5,1,20)", color:"white" }}>
            <Grid 
                item 
                sm={4}
                md={3}
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
                height={"100%"}
            >
                Sidebar
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
                    padding: "2rem",
                }}
            >
                Sidebar
            </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
