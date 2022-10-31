import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HeaderSearch() {
  const Search_LIST_KEY = "searchListKey";
  const searchList = JSON.parse(localStorage.getItem(Search_LIST_KEY)) || [];
  const [searchTerm, setSearchTerm] = useState("");
  const history = useNavigate();

  const handleSearch = () => {
    if (searchList.length > 2) {
      localStorage.setItem(
        Search_LIST_KEY,
        JSON.stringify([searchTerm, ...searchList.splice(0, 2)])
      );
    } else {
      localStorage.setItem(
        Search_LIST_KEY,
        JSON.stringify([searchTerm, ...searchList])
      );
    }
    history(`/search/${searchTerm}`);
  };
  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      searchTerm.trim() !== "" && handleSearch();
    }
  };

  return (
    <div className="header__search">
      <div className="header__search-input-wrap">
        <input
          type="text"
          className="header__search-input"
          placeholder="Nhập để tìm kiếm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => handleInputChange(e)}
        />
        {searchList && (
          <div className="header__search-history">
            <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
            <ul className="header__search-history-list">
              {searchList.map((search, index) => (
                <li key={index} className="header__search-history-item">
                  <Link
                    to={`/search/${search}`}
                    className="header__search-history-link"
                  >
                    {search}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="header__search-btn" onClick={handleSearch}>
        <i className="fas fa-search header__search-btn-icon" />
      </div>
    </div>
  );
}

export default HeaderSearch;
