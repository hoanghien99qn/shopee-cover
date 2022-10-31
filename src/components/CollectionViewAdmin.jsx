import React from "react";
import { useGetListsQuery } from "../features/api/apiSlice";
import Loading from "./Loading";
import ProductCardAdmin from "./ProductCardAdmin";

function CollectionView({ collection, collectionArr }) {
  const {
    data: list,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetListsQuery({
    collectionId: collection.id,
    params: "sortBy=createdAt&order=desc",
  });

  let contentList;

  if (isLoading) {
    contentList = <Loading />;
  } else if (isSuccess) {
    contentList = list.map((product) => (
      <ProductCardAdmin
        key={product.id}
        item={product}
        collectionArr={collectionArr}
      />
    ));
  } else if (isError) {
    contentList = <div>{error.toString()}</div>;
  }

  return (
    <div className="shop-all-product-view">
      <h3 className="collection-heading" id={collection.name + collection.id}>
        {collection.name}
      </h3>

      {/* Product item */}
      <div className="product row sm-gutter">{contentList}</div>

      {/* <Pagination /> */}
    </div>
  );
}

export default CollectionView;
