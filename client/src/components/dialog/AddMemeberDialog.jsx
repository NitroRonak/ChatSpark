import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
function AddMemeberDialog({ addMember, isLoadingAddMember, chatId }) {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev)=>(prev.includes(id) ? prev.filter((member)=>member !== id) : [...prev,id]))
  }
  const submitHandlerForAddMember = () => {
    closeHandler();
  };
  const closeHandler = () => {
    setSelectedMembers([])
    setMembers([])
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"1rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} color={"primary"}>
          Add Member
        </DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((user) => (
              <UserItem user={user} key={user._id} handler={selectMemberHandler} 
              isAdded={selectedMembers.includes(user._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Button
            variant="outlined"
            color="error"
            sx={{
              "&:hover": {
                bgcolor: "#e84e4e",
                color: "white",
              },
            }}
            onClick={closeHandler}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": {
                bgcolor: "#3f70d8",
                color: "white",
              },
            }}
            disabled={isLoadingAddMember}
            onClick={submitHandlerForAddMember}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default AddMemeberDialog;
