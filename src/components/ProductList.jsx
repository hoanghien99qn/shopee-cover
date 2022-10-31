import React from "react";
import { useGetListsQuery } from "../features/api/apiSlice";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

function ProductList({ collectionId, queryCollection }) {
  const {
    data: list,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetListsQuery({ collectionId, params: queryCollection });

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = list.map((product) => (
      <ProductCard key={product.id} item={product} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <div className="product row sm-gutter">{content}</div>;
}

export default ProductList;
