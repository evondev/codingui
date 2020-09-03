import React from "react";
import Template from "./Template";

const UpComingUI = () => {
  return (
    <>
      <Template
        title="Upcoming UIs"
        hideCode={true}
        source="upcoming"
        html={`
        <div class="upcoming">
          Calendar, Flip card, Table, Tags
        </div>
        `}
        css={`
          .upcoming {
            color: #999;
            font-weight: 500;
          }
        `}
      ></Template>
    </>
  );
};

export { UpComingUI };
