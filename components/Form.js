import React from "react";
import Template from "./Template";

const SearchForm = () => {
  return (
    <>
      <Template
        title="Search Input"
        source="form"
        html={`<div class="search-form"><i class="fal fa-search search-form__icon"></i><input type="text" placeholder="Search" class="search-form__input"/></div>`}
        css={`
          .search-form {
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
          }
          .search-form__icon {
            color: #999;
            flex-shrink: 0;
          }
          .search-form__input {
            padding: 0 1.5rem;
            flex: 1;
          }
        `}
      ></Template>
    </>
  );
};

export { SearchForm };
