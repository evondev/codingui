import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import { GlobalStyle } from "../styles/GlobalStyles";
import Meta from "./Meta";
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Meta />
          {this.props.children}
          <a href="#top" className="back-to-top">
            <i className="fal fa-arrow-up"></i>
          </a>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
