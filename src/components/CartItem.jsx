import React from 'react';
import Quantity from '../components/Quantity';
import { deleteItem } from '../features/cart/cartSlice'
import '../assets/css/CartPage.css'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CartItem(props) {
    const { item } = props
    const dispatch = useDispatch()
    let currentPrice = Math.round(item.price * ((100 - item.saleOff) / 100))
    let payPrice = currentPrice * item.quantity
    let currentPriceFormat = (currentPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"
    let payPriceFormat = (payPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"
    let oldPriceFormat = (item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"

    return (
        <div className="cart-item">
            <div className="row sm-gutter">
                <div className="col l-6 m-6 c-6">
                    <Link to={`/detail/${item.id}`} className="cart-item-link">
                        <div className="cart-item-left">
                            <div className="cart-img" style={{ backgroundImage: `url("${item.image}")` }}></div>
                            <div className="cart-name">{item.nameProduct}</div>
                        </div>
                    </Link>
                </div>
                <div className="col l-1-5 m-1-5 c-1-5">
                    <div className="center-align center">
                        <span className="cart-old-price">{oldPriceFormat}</span>
                        <span className="cart-current-price">{currentPriceFormat}</span>
                    </div>
                </div>
                <div className="col l-1-5 m-1-5 c-1-5">
                    <div className="cart-quantity center-align center">
                        <Quantity isCartPage={true} value={item.quantity} id={item.id} />
                    </div>
                </div>
                <div className="col l-1-5 m-1-5 c-1-5">
                    <div className="center-align center">{payPriceFormat}</div>
                </div>
                <div className="col l-1-5 m-1-5 c-1-5">
                    <div className="center-align center"><span className="cart-delete" onClick={() => dispatch(deleteItem(item.id))}>Xóa</span></div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;