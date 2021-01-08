import "../styles/sass/main.scss";

import App from "next/app";
import Page from "../components/Page";

class MyApp extends App {
  render() {
    const { Component, apolloClient, pageProps, router } = this.props;
    return (
      <Page>
        <>
          <Component {...pageProps} />
        </>
      </Page>
    );
  }
}

export default MyApp;
