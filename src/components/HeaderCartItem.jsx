import React from 'react';

function HeaderCartItem(props) {

    const { item } = props
    let currentPrice = Math.round(item.price * ((100 - item.saleOff) / 100))
    let currentPriceFormat = (currentPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"
    // let oldPriceFormat = (item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"

    return (
        <li className="header__cart-item">
            <div className="header__cart-item-img" style={{ backgroundImage: `url("${item.image}")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            </div>
            <div className="header__cart-item-info">
                <span className="header__cart-item-info-name">{item.nameProduct}</span>
                <span className="header__cart-item-info-price">{currentPriceFormat}</span>
            </div>
        </li>
    );
}

export default HeaderCartItem;