import React, { useState } from 'react';
import EditForm from '../components/EditForm';
import Modal from './Modal'
import { Link } from 'react-router-dom'

import { useDeleteProductMutation } from '../features/api/apiSlice'

function ProductCardAdmin(props) {

    const { item } = props
    let currentPrice = Math.round(item.price * ((100 - item.saleOff) / 100))
    let currentPriceFormat = (currentPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"
    let oldPriceFormat = (item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"

    const [isOpenEditForm, setIsOpenEditForm] = useState(false)

    const [deleteProduct, { isLoading }] = useDeleteProductMutation()

    const handleOpenModalEdit = () => {
        setIsOpenEditForm(true)
    }

    const handleCloseModalEdit = () => {
        setIsOpenEditForm(false)
    }

    const handleDeleteProduct = async () => {
        let isDelete = window.confirm("Bạn có muốn xóa sản phẩm này?")
        if (isDelete) {
            if (!isLoading) {
                try {
                    await deleteProduct(item.id)
                } catch (error) {
                    console.error('Failed to delete the product: ', error)
                }
            }
        }
    }

    return (
        <>
            <Modal isOpenForm={isOpenEditForm} onCloseModal={handleCloseModalEdit} >
                <EditForm item={item} onCloseModal={handleCloseModalEdit} />
            </Modal>
            <div className="col l-2-4 m-4 c-6 product-item">
                <div className="product-item-contain">
                    <Link to={`/detail/${item.id}`} className="product-item-link">
                        <div className="product-item-img" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        </div>
                        <div className="product-item-name">{item.nameProduct}</div>
                        <div className="product-item-price">
                            <div className="product-item-price--old-price">{oldPriceFormat}</div>
                            <div className="product-item-price-current-price">{currentPriceFormat}</div>
                        </div>
                        <div className="product-item-actions">
                            {/* product-item-actions-liked */}
                            {/* product-item-actions-not-like */}
                            <div className="product-item-actions-like product-item-actions-not-like">
                                <div className="product-item-actions-like--liked">
                                    <i className="fas fa-heart" />
                                </div>
                                <div className="product-item-actions-like--no-like">
                                    <i className="far fa-heart" />
                                </div>
                            </div>
                            <div className="product-item-actions-rating">
                                <i className={`fas fa-star ${item.vote >= 1 ? 'active' : ''}`} />
                                <i className={`fas fa-star ${item.vote >= 2 ? 'active' : ''}`} />
                                <i className={`fas fa-star ${item.vote >= 3 ? 'active' : ''}`} />
                                <i className={`fas fa-star ${item.vote >= 4 ? 'active' : ''}`} />
                                <i className={`fas fa-star ${item.vote >= 5 ? 'active' : ''}`} />
                            </div>
                        </div>
                        <div className="product-item-address">{item.address}</div>
                        <div className="product-item-favorite">
                            <i className="fas fa-check" />
                            <span className="product-item-favorite__name">Yêu thích</span>
                        </div>
                        <div className="product-item-sale-off">
                            <span className="product-item-sale-off__percent">{item.saleOff}%</span>
                            <span className="product-item-sale-off__name">GIẢM</span>
                        </div>
                    </Link>
                    <div className="action-btn">
                        <button className="edit-btn btn-ad" onClick={handleOpenModalEdit}>Edit</button>
                        <button className="delete-btn btn-ad" onClick={handleDeleteProduct}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCardAdmin;