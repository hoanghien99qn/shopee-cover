import React from "react";

function SortBar({ onQueryChange, collectionId }) {
  function handleQuery(type, action) {
    let argQuery = `sortBy=${type}&order=${action}`;
    onQueryChange(argQuery);
  }
  let collectionClass = "shop-sort-bar-" + collectionId;
  let containerBtn = document.getElementsByClassName(`${collectionClass}`)[0];
  if (containerBtn) {
    let btns = containerBtn.getElementsByClassName("btn-sort-bar");
    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        let currents = containerBtn.getElementsByClassName(
          "btn-sort-bar btn--primary"
        );

        if (currents.length > 0) {
          currents[0].className = currents[0].className.replace(
            " btn--primary",
            ""
          );
        }

        this.className += " btn--primary";
      });
    }
  }

  return (
    <div className={"shop-sort-bar hide-on-mobile-tablet " + collectionClass}>
      <span className="shop-sort-bar__label">Sắp xếp theo</span>
      <div className="shop-sort-bar-option">
        <div
          className="btn btn-sort-bar btn--primary"
          onClick={() => handleQuery("createdAt", "desc")}
        >
          Mới Nhất
        </div>
        <div
          className="btn btn-sort-bar"
          onClick={() => handleQuery("createdAt", "asc")}
        >
          Cũ Nhất
        </div>
        <div
          className="btn btn-sort-bar"
          onClick={() => handleQuery("price", "asc")}
        >
          Giá: Thấp đến Cao
        </div>
        <div
          className="btn btn-sort-bar"
          onClick={() => handleQuery("price", "desc")}
        >
          Giá: Cao đến Thấp
        </div>
      </div>
      {/* <div className="shop-sort-bar-controller">
        <div className="shop-sort-bar-controller__state">
          <span className="shop-sort-bar-controller__current">
            {currentPage}
          </span>
          /<span className="shop-sort-bar-controller__total">{totalPage}</span>
        </div>
        <div
          className={
            "shop-sort-bar-controller__prev-btn btn-controller " +
            (currentPage <= 1 ? "btn-disabled" : "")
          }
        >
          <i className="fas fa-chevron-left" />
        </div>
        <div
          className={
            "shop-sort-bar-controller__next-btn btn-controller " +
            (currentPage >= totalPage ? "btn-disabled" : "")
          }
        >
          <i className="fas fa-chevron-right" />
        </div>
      </div> */}
    </div>
  );
}

export default SortBar;
