import { Box, Card, CardActions, Grid, Rating, styled } from "@mui/material";
import React, { useState } from "react";
import { Button, Link, Text } from "../atoms";
import { isUserAdmin } from "../../helpers";
import { useCart, useProduct, useUser } from "../../hooks";
import { useLocation, useNavigate } from "react-router";

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
  const { name, _id, image, price, category, averageRating } = product;
  const { userData } = useUser();
  const { addToCart, cartItems, removeFromCart } = useCart();
  const { setSelectedProduct, rateProducts } = useProduct();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/products/edit/${name}`);
    setSelectedProduct(product);
  };

  const isProductInCart = cartItems?.find((item) => item.product._id === _id);

  const onRatingChange = (e) => {
    const { value } = e.target;
    rateProducts({
      productId: _id,
      userId: userData?._id,
      rating: Number(value),
      isHome: pathname === "/",
      url: `${category}${search}&size=1`,
    });
  };

  return (
    <Grid item>
      <StyledCard>
        <Link linkTo={`products/categories/${category}/${_id}`}>
          <img
            src={image}
            alt={`${category}-${name}`}
            style={{ objectFit: "fill", width: "100%", height: "200px" }}
          />
          <StyledInfoContainer>
            <Text>{name}</Text>
            <Text>${price}</Text>
          </StyledInfoContainer>
        </Link>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Rating
            value={averageRating}
            disabled={!userData}
            onChange={onRatingChange}
          />

          <StyledCardActionsContainer>
            {isProductInCart ? (
              <>
                <Button onClick={() => addToCart(product)}>+</Button>
                <Text>{isProductInCart.quantity}</Text>
                <Button onClick={() => removeFromCart(_id)}>-</Button>
              </>
            ) : (
              <Button onClick={() => addToCart(product)}>add To Cart</Button>
            )}

            {isUserAdmin(userData) && (
              <Button onClick={onEdit}>edit product</Button>
            )}
          </StyledCardActionsContainer>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};
