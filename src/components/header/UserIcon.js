import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";
import { getUserInitial, isUserAdmin } from "../../helpers";
import { useUser } from "../../hooks";
import { Button } from "../atoms";
import { useNavigate } from "react-router";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 10,
}));

export const UserIcon = () => {
  const { userData, logout } = useUser();
  const [anchor, setAnchor] = useState(null);

  const navigate = useNavigate();

  return (
    <Box>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>
          {getUserInitial(userData?.firstName, userData?.lastName)}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={() => {
          setAnchor(null);
        }}
      >
        <StyledBox>
          {!!userData ? (
            <Box>
              <MenuItem>
                <Button
                  onClick={() => {
                    logout();
                    setAnchor(null);
                  }}
                >
                  LogOut
                </Button>
              </MenuItem>
              <MenuItem>
                {isUserAdmin(userData) && (
                  <Button
                    onClick={() => {
                      navigate("/products/new");
                      setAnchor(null);
                    }}
                  >
                    add product
                  </Button>
                )}
              </MenuItem>
            </Box>
          ) : (
            <Box>
              <MenuItem>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  LogIn
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </Button>
              </MenuItem>
            </Box>
          )}
        </StyledBox>
      </Menu>
    </Box>
  );
};
