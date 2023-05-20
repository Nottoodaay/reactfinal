import { useDispatch, useSelector } from "react-redux";
import {
  fetchHomePageProducts,
  saveProduct as saveProductHanlder,
} from "../redux/slices";
import { useNavigate } from "react-router";

export const useProduct = () => {
  const dispatch = useDispatch();

  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const navigate = useNavigate();

  const getHomePageProducts = () => {
    dispatch(fetchHomePageProducts());
  };

  const saveProduct = (data) => {
    dispatch(saveProductHanlder({ product: data }))
      .unwrap()
      .then(() => navigate("/"));
  };

  return { saveProduct, homePageProducts, getHomePageProducts };
};
