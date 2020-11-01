import React from "react";
import Template from "./Template";

const AvatarInfo = () => {
  return (
    <>
      <Template
        title="Avatar with Info"
        source="layout"
        html={`<div class="avatar-info">
        <img
          src="/images/torii.png"
          alt=""
        />
        <div class="avatar-info-content">
          <h3>Super cool title</h3>
          <p>
            This is something that you can call it is super cool descriptions
          </p>
        </div>
      </div>`}
        css={`
          .avatar-info {
            display: flex;
            align-items: center;
          }
          .avatar-info img {
            width: 5rem;
            height: 5rem;
            border-radius: 5rem;
            margin-right: 1.5rem;
            object-fit: cover;
            filter: none;
            flex-shrink: 0;
          }
          .avatar-info h3 {
            font-weight: bold;
            font-size: 1.4rem;
            text-transform: uppercase;
            margin-bottom: 1rem;
          }
          .avatar-info p {
            font-size: 1.4rem;
            font-weight: 300;
            line-height: 1.4;
          }
        `}
      ></Template>
    </>
  );
};

const GridImage = () => {
  return (
    <>
      <Template
        title="Grid images"
        source="list"
        author=""
        authorFrom=""
        html={`
        <div class="grid-image">
          <img loading="lazy" src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1494271823928-a80211877d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="" class="image-item"/>
        </div>
        `}
        css={`
          .grid-image {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 300px 100px 300px;
            grid-gap: 25px;
          }
          .image-item {
            border-radius: 20px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .image-item:first-child {
            grid-row: 1/2;
            grid-column: 1/3;
          }
          .image-item:nth-child(2),
          .image-item:nth-child(3) {
            grid-row: 1/3;
          }
          .image-item:nth-child(4),
          .image-item:nth-child(5) {
            grid-row: 2/-1;
          }
          .image-item:last-child {
            grid-column: 3/-1;
          }
          @media screen and (max-width: 767px) {
            .grid-image {
              grid-template-rows: 100px 20px 100px;
              grid-gap: 10px;
            }
          }
        `}
      ></Template>
    </>
  );
};

const GridImage2 = () => {
  return (
    <>
      <Template
        title="Grid images 2"
        source="list"
        author=""
        authorFrom=""
        html={`
        <div class="grid-image">
          <img loading="lazy" src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1503357960973-aa1599e849dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80" alt="" class="image-item"/>
          <img loading="lazy" src="https://images.unsplash.com/photo-1552089123-2d26226fc2b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="" class="image-item"/>
        </div>
        `}
        css={`
          .grid-image {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 250px 250px;
            grid-gap: 25px;
          }
          .image-item {
            border-radius: 20px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .image-item:first-child {
            grid-row: 1/-1;
            grid-column: 1/3;
          }
          .image-item:nth-child(2),
          .image-item:nth-child(3) {
            grid-row: 1/2;
          }
          .image-item:nth-child(4),
          .image-item:nth-child(5) {
            grid-row: 2/-1;
          }
          @media screen and (max-width: 767px) {
            .grid-image {
              grid-template-rows: 100px 100px;
              grid-gap: 10px;
            }
          }
        `}
      ></Template>
    </>
  );
};

export { AvatarInfo, GridImage, GridImage2 };
