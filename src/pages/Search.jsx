import React from "react";
import SearchView from "../components/SearchView";
import Loading from "../components/Loading";
import { useGetCollectionsQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";

function Search() {
  const { searchTerm } = useParams();
  const {
    data: collections,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCollectionsQuery();
  let collectionsContent;

  if (isLoading) {
    collectionsContent = <Loading />;
  } else if (isSuccess) {
    collectionsContent = collections.map((collection) => (
      <SearchView
        key={collection.id}
        collection={collection}
        searchTerm={searchTerm}
      />
    ));
  } else if (isError) {
    collectionsContent = <div>{error.toString()}</div>;
  }

  return (
    <div className="app_container">
      <div className="grid wide">
        <div className="row sm-gutter">{collectionsContent}</div>
      </div>
    </div>
  );
}

export default Search;
