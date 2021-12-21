import React from 'react';

function Pagination(props) {
    return (
        <div className="row pagination">
            <a href="true" className="pagination-link"><i className="fas fa-chevron-left" /></a>
            <a href="true" className="pagination-link pagination-link--active">1</a>
            <a href="true" className="pagination-link">2</a>
            <a href="true" className="pagination-link">...</a>
            <a href="true" className="pagination-link">5</a>
            <a href="true" className="pagination-link"><i className="fas fa-chevron-right" /></a>
        </div>
    );
}

export default Pagination;