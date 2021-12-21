import React from 'react';
import Category from './Category';
import SortBar from './SortBar';
import CategoryMobile from './CategoryMobile';
import ProductList from './ProductList';
import Pagination from './Pagination';

function Container(props) {
    return (
        <div className="app_container">
            <div className="grid wide">
                <div className="row sm-gutter">
                    {/* Danh muc */}
                    <div className="col l-2 m-0 c-0 left-container">
                        <Category />
                    </div>
                    <nav className="mobile-category">
                        <CategoryMobile />
                    </nav>
                    {/* Content */}
                    <div className="col l-10 m-12 c-12 right-container">
                        <div className="shop-all-product-view">
                            <SortBar />
                            {/* San Pham */}

                            {/* Product item */}
                            <ProductList />

                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;