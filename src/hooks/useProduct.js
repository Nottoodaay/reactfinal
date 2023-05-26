import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryProducts as fetchProductsByCategory,
  fetchHomePageProducts,
  saveProduct as saveProductHanlder,
  setSelectedProduct as selectProduct,
  fetchSingleProduct,
  rateProduct,
} from "../redux/slices";
import { useNavigate } from "react-router";

export const useProduct = () => {
  const dispatch = useDispatch();

  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const isProductLoading = useSelector((state) => state.product.loading);

  const categories = useSelector((state) => state.product.categories);

  const singleProduct = useSelector((state) => state.product.singleProduct);

  const navigate = useNavigate();

  const categoryProducts = useSelector(
    (state) => state.product.categoryProducts
  );

  const setSelectedProduct = (data) => {
    dispatch(selectProduct(data));
  };

  const getHomePageProducts = () => {
    dispatch(fetchHomePageProducts());
  };

  const fetchCategoryProducts = (url) => {
    dispatch(fetchProductsByCategory(url));
  };

  const getSingleProduct = (data) => {
    dispatch(fetchSingleProduct(data));
  };

  const saveProduct = (data) => {
    dispatch(
      saveProductHanlder({
        product: data.product,
        isUpdating: data.isUpdating,
        id: data.id,
      })
    )
      .unwrap()
      .then(() => {
        setSelectedProduct(null);
        navigate("/");
      });
  };

  const rateProducts = (data) => {
    dispatch(rateProduct(data));
  };

  return {
    homePageProducts,
    isProductLoading,
    selectedProduct,
    categories,
    categoryProducts,
    singleProduct,

    saveProduct,
    getHomePageProducts,
    setSelectedProduct,
    fetchCategoryProducts,
    getSingleProduct,
    rateProducts,
  };
};
