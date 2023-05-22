import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart as addInCart,
  removeFromCart as deleteFromCart,
} from "../redux/slices";

export const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const addToCart = (data) => {
    dispatch(addInCart(data));
  };

  const removeFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  return { addToCart, cartItems, removeFromCart };
};
