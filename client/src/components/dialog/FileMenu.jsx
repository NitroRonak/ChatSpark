import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorEl}) => {
  return (
    <Menu 
        anchorEl={anchorEl}
        width={"10rem"}
        open={false}
    >
      
    </Menu>
  )
}

export default FileMenu
