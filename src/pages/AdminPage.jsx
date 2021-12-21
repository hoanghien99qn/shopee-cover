import './AdminPage.css'
import React, { useState } from 'react';
import AddForm from '../components/AddForm';
import ProductCardAdmin from '../components/ProductCardAdmin'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import { useGetListsQuery } from '../features/api/apiSlice'

function AdminPage(props) {

    const [isAddForm, setIsAddForm] = useState(false)

    const { data: products,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetListsQuery()


    let content

    if (isLoading) {
        content = <Loading />
    } else if (isSuccess) {
        content = products.map(product => <ProductCardAdmin key={product.id} item={product} />)
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    const handleOpenModalAdd = () => {
        setIsAddForm(true)
    }

    const handleCloseModalAdd = () => {
        setIsAddForm(false)
    }


    return (
        <div className="admin-page">
            <div className="add-form-action">
                <button className="add-form-btn" onClick={handleOpenModalAdd}>Add New Product</button>
            </div>
            <Modal isOpenForm={isAddForm} onCloseModal={handleCloseModalAdd}>
                <AddForm onCloseModal={handleCloseModalAdd} />
            </Modal>
            <div className="grid wide">
                <div className="admin-page-table row">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default AdminPage;