import React from "react";
import { HeaderStyles } from "../styles/HeaderStyles";
import { FilterStyles } from "../styles/FilterStyles";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const gridItems = document.querySelectorAll(".grid__item");
    const filterItems = document.querySelectorAll(".filter-item");

    function handleFilterItems(e) {
      filterItems.forEach((el) => el.classList.remove("active"));
      const elm = e.target;
      if (!elm) return;
      elm.classList.add("active");
      const { source } = e.target.dataset;
      gridItems.length > 0 &&
        gridItems.forEach((item) => {
          const itemSource = item.getAttribute("data-source");
          if (itemSource === source || source === "all") {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
    }

    filterItems.length > 0 &&
      filterItems.forEach((item) =>
        item.addEventListener("click", handleFilterItems)
      );
  }, []);
  return (
    <>
      <HeaderStyles>
        <div className="container">
          <h1 className="logo">{`<codingui/>`}</h1>
          <p className="slogan">
            Just a simple place to share a lot of free UIs
          </p>
        </div>
      </HeaderStyles>
      <FilterStyles>
        <span className="filter-item active" data-source="all">
          All
        </span>
        <span className="filter-item" data-source="form">
          Form
        </span>
        <span className="filter-item" data-source="list">
          List
        </span>
        <span className="filter-item" data-source="noti">
          Noti
        </span>
        <span className="filter-item" data-source="overlay">
          Overlay
        </span>
        <span className="filter-item" data-source="image">
          Image
        </span>
        <span className="filter-item" data-source="progress">
          Progress
        </span>
        <span className="filter-item" data-source="singlediv">
          1 Div
        </span>
      </FilterStyles>
    </>
  );
};

export default Header;
