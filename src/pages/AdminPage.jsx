import "./AdminPage.css";
import React, { useState } from "react";
import AddForm from "../components/AddForm";
import CollectionViewAdmin from "../components/CollectionViewAdmin";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import { useGetCollectionsQuery } from "../features/api/apiSlice";

function AdminPage(props) {
  const [isAddForm, setIsAddForm] = useState(false);

  const {
    data: collections,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCollectionsQuery();
  let collectionsContent;
  let collectionArr = [];

  if (isLoading) {
    collectionsContent = <Loading />;
  } else if (isSuccess) {
    collectionsContent = collections.map((collection) => {
      collectionArr.push(collection);
      return (
        <CollectionViewAdmin
          key={collection.id}
          collection={collection}
          collectionArr={collectionArr}
        />
      );
    });
  } else if (isError) {
    collectionsContent = <div>{error.toString()}</div>;
  }

  const handleOpenModalAdd = () => {
    setIsAddForm(true);
  };

  const handleCloseModalAdd = () => {
    setIsAddForm(false);
  };

  return (
    <div className="admin-page">
      <div className="add-form-action">
        <button className="add-form-btn" onClick={handleOpenModalAdd}>
          Add New Product
        </button>
      </div>
      <Modal isOpenForm={isAddForm} onCloseModal={handleCloseModalAdd}>
        <AddForm
          onCloseModal={handleCloseModalAdd}
          collectionArr={collectionArr}
        />
      </Modal>
      <div className="grid wide">
        <div className="admin-page-table">{collectionsContent}</div>
      </div>
    </div>
  );
}

export default AdminPage;
