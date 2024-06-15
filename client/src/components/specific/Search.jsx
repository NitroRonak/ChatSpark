import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useInputValidation} from "6pp"
import {CookieSharp, Search as SearchIcon} from "@mui/icons-material"
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../../constants/sampleData'
const Search = () => {
  const [users,setUsers]=useState(sampleUsers);
  const search=useInputValidation("")
  const addFriendHandler=(id)=>{
    console.log(id)
  }
  let isLoadingSendFriendRequest=false
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"} bgcolor={"#dce8e8"} >
        <DialogTitle sx={{fontWeight:"bold"}}>
          Find People
        </DialogTitle>
        <TextField
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                <SearchIcon/>
              </InputAdornment>
            )
          }}
        />
        <List>
          {users.map((user)=>(
            <UserItem user={user} key={user._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}/>
          ))}
        </List>
      </Stack>
    </Dialog>
  )
}

export default Search
