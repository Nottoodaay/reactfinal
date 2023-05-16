import { useDispatch } from "react-redux";
import { saveProduct as saveProductHanlder } from "../redux/slices";
import { useNavigate } from "react-router";

export const useProduct = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const saveProduct = (data) => {
    dispatch(saveProductHanlder({ product: data }))
      .unwrap()
      .then(() => navigate("/"));
  };

  return { saveProduct };
};
