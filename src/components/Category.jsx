import React from 'react';
import { Link } from 'react-router-dom'

function Category(props) {
    return (
        <nav className="category">
            <h3 className="category__heading">DANH MỤC</h3>
            <ul className="category-list">
                <li className="category-item">
                    <Link to="/" className="category-item__link category-item__link--active">Sản Phẩm</Link>
                </li>
                <li className="category-item">
                    <Link to="/" className="category-item__link">Sản phẩm bán chạy</Link>
                </li>
                <li className="category-item">
                    <Link to="/" className="category-item__link">Sản phẩm mới</Link>
                </li>
                <li className="category-item">
                    <Link to="/" className="category-item__link">iPhone</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Category;