import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";
import React, { useState } from "react";
import { Link } from "../atoms";
import { UserIcon } from "./UserIcon";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../../hooks";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "red",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    background: "yellow",
  },
  [theme.breakpoints.up("sm")]: {
    width: "calc(100% - 255px)",
    background: "teal",
  },
  padding: "0 37px 0 30px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const Header = ({ setIsDrawerOpen }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Button
            onClick={() => setIsDrawerOpen((prev) => !prev)}
            sx={{ display: { md: "none" }}}
          >
            hi
          </Button>
          <Link linkTo="/">Home</Link>
          <UserIcon />
          <Button onClick={() => setIsCartOpen(true)}>open Cart</Button>
          <CartDrawer
            isCartOpen={isCartOpen}
            cartItems={cartItems}
            setIsCartOpen={setIsCartOpen}
          />
        </StyledToolBar>
      </StyledAppBar>
    </Box>
  );
};
