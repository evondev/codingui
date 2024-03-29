import React from "react";
import { HeaderStyles } from "../styles/HeaderStyles";
import { FilterStyles } from "../styles/FilterStyles";
import { useEffect } from "react";
import { useState } from "react";
import { firebaseApp } from "../vendors/fire";
import Link from "next/link";
import Head from "next/head";

const Header = () => {
  const [loveCount, setLoveCount] = useState(1);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const counterLove = parseInt(localStorage.getItem("counter")) || 1;
    setCounter(parseInt(counterLove));
  }, []);

  useEffect(() => {
    const gridItems = document.querySelectorAll(".grid-item");
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
          if (itemSource === "fixed") item.style.display = "block";
        });
    }

    filterItems.length > 0 &&
      filterItems.forEach((item) =>
        item.addEventListener("click", handleFilterItems)
      );
  });

  useEffect(() => {
    firebaseApp
      ?.database()
      ?.ref("love")
      .on("value", function (snapshot) {
        setLoveCount(snapshot.val().value + 1);
      });
  }, [loveCount]);

  const handleLove = () => {
    localStorage.setItem("counter", counter);
    if (counter >= 50) return;
    setCounter(counter + 1);
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
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1JBBGV7FXG"
        ></script>
        <script
          id="tag"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1JBBGV7FXG');
          `,
          }}
        />
      </Head>
      <HeaderStyles>
        <div className="container">
          <Link href="/">
            <a className="header-logo">
              <img src="/images/logo.png" alt="codingui" className="logo" />
            </a>
          </Link>
          <h1 className="heading">
            Coding<strong>UI</strong>
          </h1>
        </div>
        {loveCount > 1 && (
          <div className={`love ${counter >= 50 ? "point-none" : ""}`}>
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
        <span className="filter-item" data-source="button">
          Button
        </span>
        <span className="filter-item" data-source="loading">
          Loading
        </span>
        <span className="filter-item" data-source="tab">
          tab
        </span>
        <span className="filter-item" data-source="input">
          input
        </span>
        <span className="filter-item" data-source="list">
          list
        </span>
      </FilterStyles>
    </>
  );
};

export default Header;
