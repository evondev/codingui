import React from "react";
import Template from "./Template";

const UpComingUI = () => {
  return (
    <>
      {/* <p>Upcoming UIs: <span>a lot of UIs</span></p>
    <p>Images I'm using from <span>Rachelizmarvel</span> on <span>Dribbble</span></p> */}
      <Template
        title="Notice"
        hideCode={true}
        source="upcoming"
        html={`
        <div class="upcoming">
          <p>Today is <span>my birthday</span>, you can give me a gift by click heart icon on the right of bottom 🥰</p>

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
