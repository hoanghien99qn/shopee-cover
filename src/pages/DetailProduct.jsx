import '../assets/css/detail.css'
import React from 'react';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import { useGetProductQuery } from '../features/api/apiSlice'
import Quantity from '../components/Quantity';
import { cartAdded } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux';

function DetailProduct() {
    const match = useParams()
    const { data: item, isLoading } = useGetProductQuery(match.id)
    let currentPrice
    let currentPriceFormat
    let oldPriceFormat

    const dispatch = useDispatch()

    if (item) {
        currentPrice = item && item.price ? item.price * ((100 - item.saleOff) / 100) : ''
        currentPriceFormat = (currentPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"
        oldPriceFormat = (item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"
    }

    return (
        <div className="app_container">
            {
                isLoading ? <Loading /> :
                    <div className="grid wide">
                        <div className="detail-product">
                            <div className="row sm-gutter">
                                <div className="col l-5 c-12 m-5">
                                    <div className="product-left">
                                        <img src={item.image} alt={item.nameProduct} className="product-img" />
                                    </div>
                                </div>
                                <div className="col l-7 c-12 m-7">
                                    <div className="product-right">
                                        <div className="product-name">
                                            {item.nameProduct}
                                        </div>
                                        <div className="product-vote">
                                            <i className={`fas fa-star ${item.vote >= 1 ? 'active' : ''}`} />
                                            <i className={`fas fa-star ${item.vote >= 2 ? 'active' : ''}`} />
                                            <i className={`fas fa-star ${item.vote >= 3 ? 'active' : ''}`} />
                                            <i className={`fas fa-star ${item.vote >= 4 ? 'active' : ''}`} />
                                            <i className={`fas fa-star ${item.vote >= 5 ? 'active' : ''}`} />
                                        </div>
                                        <div className="product-price">
                                            <span className='old-price'>{oldPriceFormat}</span>
                                            <span className='current-price'>{currentPriceFormat}</span>
                                            <span className='sale-off'>{item.saleOff}% GIẢM</span>
                                        </div>
                                        <div className="product-shipping">
                                            <div className="product-shipping-left">
                                                <span>Vận Chuyển</span>
                                            </div>
                                            <div className="product-shipping-right">
                                                <p className='mt-0'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="17" viewBox="0 0 23 16" fill="none" strokeWidth="0"><path fillRule="evenodd" clipRule="evenodd" d="M21.8 12.9995H10.5641C8.74973 12.9995 7.5 11.9812 7.4202 10.0596L7.50002 1.9649L5.43267 1.46943C5.05323 1.34295 4.87256 0.832732 5.01711 0.489432C5.16166 0.146132 5.43267 -0.0745393 6 0.0233099L8.07066 0.499438C8.88364 0.754224 9.00002 1.36864 9.00002 1.83842V10.0596C9.00002 10.9449 9.60649 11.4995 10.546 11.4995H21.8C22.1975 11.4995 22.5 11.8701 22.5 12.2495C22.5 12.6109 22.1975 12.9995 21.8 12.9995ZM11 1.49944C10.4477 1.49944 10 1.94715 10 2.49944V9.49944C10 10.0517 10.4477 10.4994 11 10.4994H21C21.5523 10.4994 22 10.0517 22 9.49944V2.49944C22 1.94715 21.5523 1.49944 21 1.49944H11ZM15.1543 8.23654C14.8594 8.13183 14.5545 7.95472 14.2398 7.70561L13.7481 8.39382C14.0563 8.65602 14.389 8.86438 14.7462 9.01828C15.1036 9.17217 15.5444 9.24944 16.0688 9.24944C16.3639 9.24944 16.6441 9.20658 16.9095 9.12151C17.175 9.03643 17.4062 8.91842 17.6029 8.76748C17.7995 8.61675 17.9568 8.42992 18.0748 8.20699C18.193 7.98427 18.2519 7.73516 18.2519 7.45967C18.2519 7.15166 18.1814 6.8863 18.0404 6.66316C17.8993 6.44044 17.719 6.25023 17.4995 6.09296C17.2797 5.93547 17.0374 5.80269 16.7718 5.6946C16.5064 5.58651 16.2523 5.48982 16.0099 5.40454L15.882 5.35535C15.7572 5.30954 15.6314 5.26035 15.5033 5.20779C15.3755 5.15543 15.2609 5.09315 15.1592 5.02096C15.0576 4.94897 14.974 4.86368 14.9086 4.76551C14.8429 4.66693 14.8102 4.54913 14.8102 4.41149C14.8102 4.28039 14.8429 4.16407 14.9086 4.06232C14.974 3.96077 15.0642 3.87549 15.1788 3.80666C15.2936 3.73784 15.423 3.68718 15.5674 3.65424C15.7116 3.62152 15.8626 3.60506 16.0198 3.60506C16.3407 3.60506 16.6293 3.66396 16.885 3.78218C17.1406 3.90019 17.3405 4.00827 17.4849 4.10665L17.9667 3.41823C17.8814 3.35278 17.775 3.28227 17.6473 3.2067C17.5193 3.13154 17.3718 3.05934 17.2046 2.99052C17.0374 2.9217 16.8556 2.86428 16.6589 2.81847C16.4621 2.77266 16.2491 2.74944 16.0198 2.74944C15.7378 2.74944 15.4705 2.7906 15.2183 2.87251C14.9658 2.95464 14.7462 3.07074 14.5596 3.22169C14.3726 3.37242 14.2252 3.55101 14.1169 3.75748C14.0088 3.96394 13.9546 4.1951 13.9546 4.45075C13.9546 4.73258 14.012 4.97198 14.1268 5.16852C14.2415 5.36527 14.3924 5.53247 14.579 5.67011C14.7659 5.80775 14.9755 5.92238 15.2086 6.01422C15.441 6.10605 15.6755 6.19133 15.9115 6.26987C16.0492 6.31589 16.205 6.37162 16.3787 6.43706C16.5523 6.50272 16.7129 6.58125 16.8605 6.67308C17.0078 6.76491 17.1324 6.87469 17.2341 7.00241C17.3357 7.13034 17.3866 7.28276 17.3866 7.45967C17.3866 7.61716 17.3488 7.75311 17.2734 7.86795C17.198 7.98258 17.098 8.07758 16.9734 8.15295C16.8489 8.22852 16.7064 8.28573 16.5459 8.325C16.3851 8.36426 16.2196 8.38411 16.0492 8.38411C15.7477 8.39065 15.4492 8.34146 15.1543 8.23654ZM12.25 15.9994C12.9404 15.9994 13.5 15.4398 13.5 14.7494C13.5 14.0591 12.9404 13.4994 12.25 13.4994C11.5596 13.4994 11 14.0591 11 14.7494C11 15.4398 11.5596 15.9994 12.25 15.9994ZM21 14.7494C21 15.4398 20.4404 15.9994 19.75 15.9994C19.0596 15.9994 18.5 15.4398 18.5 14.7494C18.5 14.0591 19.0596 13.4994 19.75 13.4994C20.4404 13.4994 21 14.0591 21 14.7494ZM3.25 8.49956C2.83579 8.49956 2.5 8.83535 2.5 9.24956C2.5 9.66377 2.83579 9.99956 3.25 9.99956H5.75C6.16421 9.99956 6.5 9.66377 6.5 9.24956C6.5 8.83535 6.16421 8.49956 5.75 8.49956H3.25ZM1.5 6.74956C1.5 6.33535 1.83579 5.99956 2.25 5.99956H5.75C6.16421 5.99956 6.5 6.33535 6.5 6.74956C6.5 7.16377 6.16421 7.49956 5.75 7.49956H2.25C1.83579 7.49956 1.5 7.16377 1.5 6.74956ZM1.25 3.49956C0.835786 3.49956 0.5 3.83535 0.5 4.24956C0.5 4.66377 0.835786 4.99956 1.25 4.99956H5.75C6.16421 4.99956 6.5 4.66377 6.5 4.24956C6.5 3.83535 6.16421 3.49956 5.75 3.49956H1.25Z" fill="#D0011B"></path></svg>
                                                    <span>Xử lý đơn hàng bởi HShop</span>
                                                </p>
                                                <p>
                                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1cdd37339544d858f4d0ade5723cd477.png" width="25" height="15" className="_2K1bHr" alt="free-ship" />
                                                    <span>Miễn phí vận chuyển</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="product-quantity">
                                            <div className="product-quantity-label">Số Lượng</div>
                                            <Quantity />
                                        </div>
                                        <div className="product-action">
                                            <button className="btn product-action-btn product-action-add" onClick={() => dispatch(cartAdded(item))}>
                                                <i className="fas fa-cart-plus"></i>
                                                Thêm Vào Giỏ Hàng
                                            </button>
                                            <button className="btn product-action-btn product-action-buy">Mua Ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default DetailProduct;