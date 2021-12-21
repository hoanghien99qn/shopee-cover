import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import HeaderCartItem from './HeaderCartItem';
import NoCart from '../assets/img/no-cart.png'

function HeaderCart() {

    const cartList = useSelector(state => state.cart)

    return (
        <div className="header__cart">
            <div className="header__cart-wrap">
                <i className="fas fa-shopping-cart header__cart-icon" />
                <span className="header__cart-wrap-badge">{cartList.length}</span>
                {/* No cart: header__cart-list--no-cart */}
                {/* Has cart: header__cart-list--has-cart */}
                <div className={`header__cart-list ${cartList && cartList.length > 0 ? 'header__cart-list--has-cart' : 'header__cart-list--no-cart'}`}>
                    <img src={NoCart} alt="" className="header__cart-list--no-cart-img" />
                    <span className="header__cart-list--no-cart-msg">
                        Chưa có sản phẩm
                    </span>
                    <div className="header__cart-list--has-cart-had">
                        <h4 className="header__cart-heading">Sản Phẩm Mới Thêm</h4>
                        <ul className="header__cart-list-item">
                            {
                                cartList.map(item => (
                                    <HeaderCartItem key={item.id} item={item} />
                                ))
                            }
                        </ul>
                        <Link to="/cart">
                            <button className="btn btn--primary btn-cart">Xem Giỏ Hàng</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderCart;