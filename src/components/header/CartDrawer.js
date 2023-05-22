import { Box, Drawer, styled } from "@mui/material";
import React from "react";
import { Text } from "../atoms";

const StyledCartItem = styled(Box)(() => ({
  width: 400,
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  marginBottom: 20,
}));

export const CartDrawer = ({ cartItems, isCartOpen, setIsCartOpen }) => {
  return (
    <Drawer
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      anchor="right"
    >
      {cartItems.map((item) => {
        const { product, quantity } = item;
        const { price, name, _id, image } = product;
        return (
          <StyledCartItem>
            <img
              src={image}
              alt={`${name} - img `}
              width="70px"
              height="70px"
              style={{ objectFit: "cover", borderRadius: 5 }}
            />

            <Box sx={{ paddingLeft: 2 }}>
              <Text>{name}</Text>
              <Text>{quantity}</Text>
              <Text>total:{price * quantity}</Text>
            </Box>
          </StyledCartItem>
        );
      })}
    </Drawer>
  );
};
