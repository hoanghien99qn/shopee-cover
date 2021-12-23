import React from 'react';
import { Link } from 'react-router-dom'

function ProductCard(props) {
    const { item } = props
    let currentPrice = Math.round(item.price * ((100 - item.saleOff) / 100))
    let currentPriceFormat = (currentPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"
    let oldPriceFormat = (item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"

    return (
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
            </div>
        </div>
    );
}

export default ProductCard;