import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1080px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black}};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('../../static/radnikanext-medium-webfont.woff2');
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  } 
  body {
    padding: 200px 0 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    /* Can't use props.theme.black, because we're not using an instance of a styled component, we're injecting global styles */
    color: ${theme.black};
  }
`;

export { theme, StyledPage, Inner };
