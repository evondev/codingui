import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import Meta from "./Meta";
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
