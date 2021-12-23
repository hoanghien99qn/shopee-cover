import React from 'react';
import { Link } from 'react-router-dom'

function Pagination(props) {
    return (
        <div className="row pagination">
            <Link to="/" className="pagination-link"><i className="fas fa-chevron-left" /></Link>
            <Link to="/" className="pagination-link pagination-link--active">1</Link>
            <Link to="/" className="pagination-link">2</Link>
            <Link to="/" className="pagination-link">...</Link>
            <Link to="/" className="pagination-link">5</Link>
            <Link to="/" className="pagination-link"><i className="fas fa-chevron-right" /></Link>
        </div>
    );
}

export default Pagination;