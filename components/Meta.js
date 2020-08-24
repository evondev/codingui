import React from "react";
import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CodingUI</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />

      <link rel="stylesheet" href="./reset.css" />
      <link rel="stylesheet" href="./util.css" />
    </Head>
  );
};

export default Meta;
