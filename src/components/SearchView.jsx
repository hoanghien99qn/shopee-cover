import React from "react";
import { useGetListsQuery } from "../features/api/apiSlice";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

function SearchView({ collection, searchTerm }) {
  const {
    data: list,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetListsQuery({
    collectionId: collection.id,
    params: `nameProduct=${searchTerm}`,
  });

  let contentList;

  if (isLoading) {
    contentList = <Loading />;
  } else if (isSuccess) {
    contentList = list.map((product) => (
      <ProductCard key={product.id} item={product} />
    ));
  } else if (isError) {
    contentList = <div>{error.toString()}</div>;
  }

  return <>{contentList}</>;
}

export default SearchView;
