import React from 'react';

function SortBar(props) {
    return (
        <div className="shop-sort-bar hide-on-mobile-tablet">
            <span className="shop-sort-bar__label">Sắp xếp theo</span>
            <div className="shop-sort-bar-option">
                <div className="btn btn-sort-bar btn--primary">Phổ Biến</div>
                <div className="btn btn-sort-bar">Mới Nhất</div>
                <div className="btn btn-sort-bar">Bán Chạy</div>
                <div className="shop-sort-bar-select">
                    <span className="shop-sort-bar-select__label">Giá</span>
                    <span className="shop-sort-bar-select__icon"><i className="fas fa-chevron-down" /></span>
                    <div className="shop-sort-bar-select--hover">
                        <div className="shop-sort-bar-select__name">Giá: Thấp đến Cao</div>
                        <div className="shop-sort-bar-select__name">Giá: Cao đến Thấp</div>
                    </div>
                </div>
            </div>
            <div className="shop-sort-bar-controller">
                <div className="shop-sort-bar-controller__state">
                    <span className="shop-sort-bar-controller__current">1</span>/
                    <span className="shop-sort-bar-controller__total">2</span>
                </div>
                <div className="shop-sort-bar-controller__prev-btn btn-controller btn-disabled"><i className="fas fa-chevron-left" /></div>
                <div className="shop-sort-bar-controller__next-btn btn-controller"><i className="fas fa-chevron-right" /></div>
            </div>
        </div>
    );
}

export default SortBar;