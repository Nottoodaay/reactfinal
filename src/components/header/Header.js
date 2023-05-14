import { AppBar, Box, Toolbar, styled } from '@mui/material'
import React from 'react'
import { Link } from '../atoms'
import { UserIcon } from './UserIcon'

const StyledAppBar = styled(AppBar)(({theme})=>({
    background: "red",
    [theme.breakpoints.down('sm')]:{
        width: "100%",
        background: "yellow"
    },
    [theme.breakpoints.up("sm")]:{
        width: "calc(100% - 255px)",
        background: "teal"
    },
    padding: "0 37px 0 30px"

}))

const StyledToolBar = styled(Toolbar)(()=>({
    display:"flex",
    width: "100%",
    justifyContent: 'space-between'
})) 

export const Header = () => {
  return (
    <Box>
        <StyledAppBar>
            <StyledToolBar>
                <Link linkTo="/">Home</Link>
                <UserIcon/>
            </StyledToolBar>
        </StyledAppBar>
    </Box>
  )
}
