import React, { useEffect } from "react";
import Template from "./Template";

const AutocompleteSearch = () => {
  return (
    <>
      <Template
        title="Autocomplete search UI"
        source="form"
        html={`
        <div class="search-auto">
          <input
            type="text"
            class="search-auto-input"
            placeholder="Typing something..."
          />
          <div class="search-auto-list">
            <div class="search-auto-item">About</div>
            <div class="search-auto-item">Home</div>
            <div class="search-auto-item">Contact</div>
          </div>
        </div>
        `}
        css={`
          .search-auto {
            max-width: 50rem;
            margin: 2rem auto;
            position: relative;
          }
          .search-auto-input {
            width: 100%;
            display: block;
            padding: 1.5rem;
            font-family: "Poppins";
            color: #333;
            border-radius: 4px;
            outline: none;
            background-color: transparent;
            transition: 0.2s ease;
            border: 1px solid transparent;
            box-shadow: var(--shadow);
          }
          .search-auto-input:focus {
            border-color: #ff695b;
            box-shadow: 0 0 0 2px #ffe0dd;
          }
          .search-auto-input:focus + .search-auto-list {
            opacity: 1;
            visibility: visible;
          }
          .search-auto-list {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 1.5rem;
            box-shadow: var(--shadow);
            border-radius: 8px;
            opacity: 0;
            visibility: hidden;
            transition: 0.2s ease;
          }
          .search-auto-item {
            padding: 1.5rem;
            cursor: pointer;
            border-radius: inherit;
            transition: 0.2s ease;
          }
          .search-auto-item:hover {
            color: #ff695b;
            background-color: #fafafa;
          }
        `}
      ></Template>
    </>
  );
};

const SimpleSearch1 = () => {
  return (
    <>
      <Template
        title="Simple search 1"
        source="search"
        author=""
        authorFrom=""
        html={`
        <div class="simple-search">
          <input type="text" placeholder="Type here and hit Enter"/>
          <button><i class="fa fa-search"></i></button>
        </div>
        `}
        css={`
          .simple-search {
            width: 100%;
            display: flex;
          }
          .simple-search button {
            padding: 15px;
            color: white;
            flex-shrink: 0;
            border-radius: 8px;
            background-color: #fc8383;
            margin-left: 15px;
          }
          .simple-search input {
            width: 100%;
            padding: 15px;
            background-color: #fafafa;
            border-radius: 8px;
            -webkit-appearance: none;
            font-size: 14px;
            font-weight: 500;
          }
        `}
      ></Template>
    </>
  );
};

const SimpleSearch2 = () => {
  return (
    <>
      <Template
        title="Simple search 2"
        source="search"
        author=""
        authorFrom=""
        html={`
        <div class="simple-search">
          <input type="email" placeholder="Type your email address"/>
          <button>Send</button>
        </div>
        `}
        css={`
          .simple-search {
            width: 100%;
            display: flex;
            padding: 5px;
            background-color: white;
            border-radius: 4px;
            border: 1px solid #eee;
          }
          .simple-search button {
            padding: 10px 20px;
            color: white;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: #22c58b;
          }
          .simple-search input {
            width: 100%;
            padding: 10px;
            background-color: transparent;
            -webkit-appearance: none;
            font-size: 14px;
            font-weight: 500;
          }
        `}
      ></Template>
    </>
  );
};

const SimpleSearch3 = () => {
  return (
    <>
      <Template
        title="Simple search 3"
        source="search"
        author=""
        authorFrom=""
        html={`
        <div class="simple-search">
          <input type="text" placeholder="Find your flight"/>
          <button>Go</button>
        </div>
        `}
        css={`
          .simple-search {
            width: 100%;
            display: flex;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.05);
          }
          .simple-search button {
            padding: 15px 30px;
            color: white;
            flex-shrink: 0;
            background-color: #2cccff;
          }
          .simple-search input {
            width: 100%;
            padding: 15px;
            background-color: white;
            -webkit-appearance: none;
            font-size: 14px;
            font-weight: 500;
          }
        `}
      ></Template>
    </>
  );
};

export { AutocompleteSearch, SimpleSearch1, SimpleSearch2, SimpleSearch3 };
