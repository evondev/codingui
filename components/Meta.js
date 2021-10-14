import React, { useEffect } from "react";
import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,user-scalable=no, initial-scale=1.0"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="./reset.css" />
      <link rel="stylesheet" href="./util.css" />
      <title>CodingUI - Download giao diện miễn phí chỉ với 1 click</title>
      <meta
        key="description"
        name="description"
        content="CodingUI là một trang web chia sẻ miễn phí các giao diện, tại đây các bạn có thể xem và copy source code đơn giản chỉ với 1 vài click."
      />
      <meta
        key="keywords"
        name="keywords"
        content="evondev, codingui, codingui.dev, frontend developer, html ui, css ui"
      />
      <meta key="author" name="author" content="evondev" />
      <meta key="url" name="url" content="https://codingui.dev" />
      <meta
        key="og-title"
        property="og:title"
        content="CodingUI - Download giao diện miễn phí chỉ với 1 click"
      />
      <meta key="url" property="og:url" content="https://codingui.dev" />
      <meta
        key="og-description"
        property="og:description"
        content="CodingUI là một trang web chia sẻ miễn phí các giao diện, tại đây các bạn có thể xem và copy source code đơn giản chỉ với 1 vài click."
      />
      <meta key="og-image" property="og:image" content="/images/og-image.jpg" />
      <link rel="shortcut icon" href={`/images/logo.png`} />
    </Head>
  );
};

export default Meta;
