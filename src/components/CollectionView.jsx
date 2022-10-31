import React from "react";
import { useState } from "react";
import { useGetListsQuery } from "../features/api/apiSlice";
import Loading from "./Loading";
import ProductCard from "./ProductCard";
import SortBar from "./SortBar";

function CollectionView({ collection }) {
  const [queryCollection, setQueryCollection] = useState("");

  const handleQueryChange = (params) => {
    setQueryCollection(params);
  };

  const {
    data: list,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetListsQuery({
    collectionId: collection.id,
    params: queryCollection || "sortBy=createdAt&order=desc",
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

  return (
    <div className="shop-all-product-view">
      <h3 className="collection-heading" id={collection.name + collection.id}>
        {collection.name}
      </h3>
      <SortBar onQueryChange={handleQueryChange} collectionId={collection.id} />

      {/* Product item */}
      <div className="product row sm-gutter">{contentList}</div>

      {/* <Pagination /> */}
    </div>
  );
}

export default CollectionView;
