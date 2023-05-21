import { Box, Card, CardActions, Grid, styled } from "@mui/material";
import React from "react";
import { Button, Link, Text } from "../atoms";
import { isUserAdmin } from "../../helpers";
import { useProduct, useUser } from "../../hooks";
import { useNavigate } from "react-router";

const StyledCard = styled(Card)(() => ({
  width: 350,
  borderRadius: 3,
}));

const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0px 10px",
}));

const StyledCardActionsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProductCard = ({ product }) => {
  const { name, _id, image, price, category } = product;
  const { userData } = useUser();
  const { setSelectedProduct } = useProduct()
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/products/edit/${name}`);
    setSelectedProduct(product)
  };

  return (
    <Grid item>
      <StyledCard>
        <Link>
          <img
            src={image}
            alt={`${category}-${name}`}
            style={{ objectFit: "cover", width: "100%", height: "200px" }}
          />
          <StyledInfoContainer>
            <Text>{name}</Text>
            <Text>${price}</Text>
          </StyledInfoContainer>
        </Link>
        <CardActions>
          <StyledCardActionsContainer>
            {isUserAdmin(userData) && (
              <Button onClick={onEdit}>edit product</Button>
            )}
          </StyledCardActionsContainer>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};