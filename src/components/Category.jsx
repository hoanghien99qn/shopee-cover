import React from 'react';

function Category(props) {
    return (
        <nav className="category">
            <h3 className="category__heading">DANH MỤC</h3>
            <ul className="category-list">
                <li className="category-item">
                    <a href="/" className="category-item__link category-item__link--active">Sản Phẩm</a>
                </li>
                <li className="category-item">
                    <a href="/" className="category-item__link">Sản phẩm bán chạy</a>
                </li>
                <li className="category-item">
                    <a href="/" className="category-item__link">Sản phẩm mới</a>
                </li>
                <li className="category-item">
                    <a href="/" className="category-item__link">iPhone</a>
                </li>
            </ul>
        </nav>
    );
}

export default Category;