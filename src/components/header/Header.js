import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";
import React, { useState } from "react";
import { Link } from "../atoms";
import { UserIcon } from "./UserIcon";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../../hooks";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { SearchBar } from "./SearchBar";

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
            sx={{ display: { sm: "none" } }}
          >
            <BsLayoutSidebarInset size={30} color="white" />
          </Button>
          <Link linkTo="/">
            <AiOutlineHome size={30} color="black"/>
          </Link>

          <SearchBar />

          <UserIcon />
          <Button onClick={() => setIsCartOpen(true)}>
            <AiOutlineShoppingCart size={30} color="white" />
          </Button>
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
