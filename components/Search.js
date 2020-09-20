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

export { AutocompleteSearch };
