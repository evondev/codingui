import React, { useEffect } from "react";
import Template from "./Template";

const ComplexShadow = () => {
  return (
    <>
      <Template
        title="Multi square box-shadow"
        source=""
        author=""
        authorFrom=""
        html={`
          <div class="square"></div>
        `}
        css={`
          .square {
            width: 5px;
            height: 5px;
            background-color: var(--pink);
            box-shadow: 10px 0 0 0 var(--pink), 20px 0 0 0 var(--pink),
              30px 0 0 0 var(--pink), 0 10px 0 0 var(--pink),
              10px 10px 0 0 var(--pink), 20px 10px 0 0 var(--pink),
              30px 10px 0 0 var(--pink), 0px 20px 0 0 var(--pink),
              10px 20px 0 0 var(--pink), 20px 20px 0 0 var(--pink),
              30px 20px 0 0 var(--pink), 0 30px 0 0 var(--pink),
              10px 30px 0 0 var(--pink), 20px 30px 0 0 var(--pink),
              30px 30px 0 0 var(--pink);
          }
        `}
      ></Template>
    </>
  );
};

export { ComplexShadow };
