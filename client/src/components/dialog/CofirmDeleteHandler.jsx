import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

const CofirmDeleteHandler = ({ open, handleClose, deleteHandler }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this group?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
            onClick={deleteHandler}
            sx={{
                "&:hover":{
                    bgcolor:"rgb(239, 236, 236)",
                    color:"green",
                    fontWeight:"bold"
                }
            }}
        >
            Yes
        </Button>
        <Button 
            onClick={handleClose}
            sx={{
                "&:hover":{
                    bgcolor:"rgb(239, 236, 236)",
                    color:"red",
                    fontWeight:"bold"
                }
            }}
        >
            No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CofirmDeleteHandler;
