import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { theme, StyledPage, Inner } from './styles/PageStyles';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
