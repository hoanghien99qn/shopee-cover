import React from "react";
import Loading from "./Loading";

function Category({ collectionsContent }) {
  let content;

  if (!collectionsContent) {
    content = <Loading />;
  } else {
    content = collectionsContent.map((collection, index) => {
      let classItem =
        index === 1
          ? "category-item__link"
          : "category-item__link category-item__link--active";
      return (
        <li key={collection.id} className="category-item">
          <a href={"#" + collection.name + collection.id} className={classItem}>
            {collection.name}
          </a>
        </li>
      );
    });
  }

  return (
    <nav className="category">
      <h3 className="category__heading">DANH MỤC</h3>
      <ul className="category-list">{content}</ul>
    </nav>
  );
}

export default Category;
