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
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="./reset.css" />
      <link rel="stylesheet" href="./util.css" />
    </Head>
  );
};

export default Meta;
