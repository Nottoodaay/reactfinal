import React, { useEffect } from "react";
import { LoadingWrapper, GridContainer } from "../../atoms";
import { ProductCard } from "../ProductCard";
import { useProduct, useQueryParams } from "../../../hooks";
import { useParams } from "react-router";
import { Paginate } from "./Paginate";
import { Sort } from "./Sort";

export const CategoryProductList = () => {
  const { categoryProducts, fetchCategoryProducts, isProductLoading } =
    useProduct();
  const { products, totalPages } = categoryProducts;
  const { categoryName } = useParams();
  const { value: page, changeQuerryValue: changePage } = useQueryParams("page");
  const { value: sort, changeQuerryValue: changeSort } = useQueryParams("sort");

  useEffect(() => {
    fetchCategoryProducts(`${categoryName}?page=${page}&size=1&sort=${sort}`);
  }, [categoryName, page, sort]);

  useEffect(() => {
    changePage("page", 1);
  }, [sort]);

  return (
    <LoadingWrapper isLoading={isProductLoading}>
      <Sort value={sort} changeSort={changeSort} />
      <GridContainer>
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </GridContainer>
      <Paginate
        totalPages={totalPages}
        currentPage={page}
        changePage={changePage}
      />
    </LoadingWrapper>
  );
};
