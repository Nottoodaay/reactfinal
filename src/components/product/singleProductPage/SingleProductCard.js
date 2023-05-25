import { Box, styled } from "@mui/material";
import React from "react";
import { Text } from "../../atoms";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
}));

const StyledImage = styled("img")(() => ({
  width: "350px",
  height: "350px",
  objectFit: "cover",
}));

export const SingleProductCard = ({ product }) => {
  const { image, name, category, price, description , brand} = product;
  return (
    <StyledBox>
      <StyledImage src={image} />
      <Box>
        <Text>{name}</Text>
        <Text>{category}</Text>
        <Text>{brand}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </Box>
    </StyledBox>
  );
};
