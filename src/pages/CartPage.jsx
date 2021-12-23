import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../assets/css/CartPage.css'
import CartItem from '../components/CartItem';
import { deleteAllItem } from '../features/cart/cartSlice'

import DoneComponent from '../components/DoneComponent'

function CartPage() {

    const [isHideDone, setIsHideDone] = useState(true)
    const [isErrorBuy, setIsErrorBuy] = useState(false)
    const dispatch = useDispatch()

    const cartList = useSelector(state => state.cart)

    const priceItem = item => (Math.round(item.price * ((100 - item.saleOff) / 100)) * item.quantity)

    let totalPrice = cartList.reduce((acc, currentItem) => acc + priceItem(currentItem), 0)
    let totalPriceFormat = (totalPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"

    const handleBuyItem = () => {
        if (cartList.length > 0) {
            setIsHideDone(false)
            setTimeout(() => {
                setIsHideDone(true)
                dispatch(deleteAllItem())
            }, 2000);
        } else {
            setIsErrorBuy(true)
        }
    }

    return (
        <div>
            <div className="app_container">
                <div className="grid wide">
                    <div className="cart-page">
                        <h2 className="cart-title">Giỏ Hàng</h2>
                        <div className="cart-nav">
                            <div className="row sm-gutter">
                                <div className="col l-6 m-6 c-6">
                                    <span className="txt-color">Sản Phẩm</span>
                                </div>
                                <div className="col l-1-5 m-1-5 c-1-5">
                                    <span className="center">Đơn Giá</span>
                                </div>
                                <div className="col l-1-5 m-1-5 c-1-5">
                                    <span className="center">Số Lượng</span>
                                </div>
                                <div className="col l-1-5 m-1-5 c-1-5">
                                    <span className="center">Số Tiền</span>
                                </div>
                                <div className="col l-1-5 m-1-5 c-1-5">
                                    <span className="center">Thao tác</span>
                                </div>
                            </div>
                        </div>
                        <DoneComponent hide={isHideDone} />
                        {
                            isErrorBuy ? <div className="cart-list-message-error">Vui lòng thêm sản phẩm vào giỏ hàng!</div> : ""
                        }

                        <div className="cart-list">
                            {
                                cartList.map(item => <CartItem key={item.id} item={item} />)
                            }
                            <div className="cart-total">
                                <div className="row sm-gutter">
                                    <div className="col l-6 m-6 c-6"></div>
                                    <div className="col l-1-5 m-1-5 c-1-5">
                                    </div>
                                    <div className="col l-1-5 m-1-5 c-1-5">
                                        <span className="center cart-total-label">Tổng Cộng</span>
                                    </div>
                                    <div className="col l-1-5 m-1-5 c-1-5">
                                        <span className="center cart-total-price">{totalPriceFormat}</span>
                                    </div>
                                    <div className="col l-1-5 m-1-5 c-1-5">
                                        <span className="center cart-total-buy" onClick={handleBuyItem}>Mua Hàng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CartPage;