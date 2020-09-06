import React from "react";
import Template from "./Template";

const UpComingUI = () => {
  return (
    <>
      <Template
        title="Notice"
        hideCode={true}
        source="upcoming"
        html={`
        <div class="upcoming">
          <p>Upcoming UIs: <span>a lot of UIs</span></p>
        </div>
        `}
        css={`
          .upcoming {
            color: white;
            font-weight: 500;
            line-height: 1.6;
            span {
              font-weight: 600;
            }
            p {
              margin-bottom: 1rem;
            }
          }
        `}
      ></Template>
    </>
  );
};

export { UpComingUI };
