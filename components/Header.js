import React from "react";
import { HeaderStyles } from "../styles/HeaderStyles";
import { FilterStyles } from "../styles/FilterStyles";
import { useEffect } from "react";
import { useState } from "react";
import { firebaseApp } from "../vendors/fire";

const Header = () => {
  const [loveCount, setLoveCount] = useState(1);

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

  useEffect(() => {
    firebaseApp
      ?.database()
      ?.ref("love")
      .on("value", function (snapshot) {
        setLoveCount(snapshot.val().value + 1);
      });
  }, [loveCount]);

  const handleLove = () => {
    setLoveCount(loveCount + 1);
    firebaseApp?.database()?.ref("love").set({ value: loveCount });
    const loveIcon = document.querySelector(".love-icon");
    const loveHeart = document.querySelector(".love-heart");
    if (loveIcon && loveHeart) {
      loveIcon.classList.add("active");
      loveHeart.classList.add("active");
      setTimeout(() => {
        loveIcon.classList.remove("active");
      }, 50);
      setTimeout(() => {
        loveHeart.classList.remove("active");
      }, 250);
    }
  };

  return (
    <>
      <HeaderStyles>
        <div className="container">
          <img src="/images/logo.png" alt="codingui" className="logo" />
          <h1 className="heading">{`codingui`}</h1>
          <p className="slogan">
            Just a simple place to share a lot of free UIs
          </p>
        </div>
        {loveCount > 1 && (
          <div className="love">
            <span className="love-count">{loveCount}</span>
            <div className="love-icon" onClick={handleLove}>
              <i className="fa fa-heart"></i>
              <i className="fa fa-heart love-heart"></i>
            </div>
          </div>
        )}
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
        <span className="filter-item" data-source="loading">
          Loading
        </span>
        <span className="filter-item" data-source="text">
          Text
        </span>
      </FilterStyles>
    </>
  );
};

export default Header;
