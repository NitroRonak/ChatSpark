import { useInputValidation } from "6pp"
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'
const NewGroup = () => {
  const [members, setMembers] = useState(sampleUsers)
  const [selectedMembers, setSelectedMembers] = useState([])
  const groupName = useInputValidation("")
  const selectMemberHandler = (id) => {
    setSelectedMembers((prev)=>(prev.includes(id) ? prev.filter((member)=>member !== id) : [...prev,id]))
  }

  const submitHandler = () => {}

  const closeHandler = () => {}
  
  return (
    <Dialog open>
      <Stack p={{xs:"1rem",sm:"2rem"}} width={"25rem"} spacing={"2rem"}>
        <DialogTitle 
          sx={{fontWeight:"bold"}}
          variant='h4'
        >
          New Group
        </DialogTitle>

        <TextField
          value={groupName.value}
          onChange={groupName.changeHandler}
          variant='outlined'
          size='small'
          label='Group Name'
          fullWidth
          color="primary"
        />
        <Typography variant='body1' color={"primary.main"}>Members:</Typography>
        <Stack>
          {
            members.map((user)=>(
              <UserItem 
                user={user} 
                key={user._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(user._id)}
              />
            ))
          }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant='outlined' color='error'>Cancel</Button>
          <Button variant='outlined' onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup
