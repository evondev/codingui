// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
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
