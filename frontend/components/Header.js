import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import { StyledHeader, Logo } from './styles/HeaderStyles';
import Cart from './Cart';

// nprogress is the loader bar at the top of the pane
// for styling see `../../static/nprogress.css`

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <StyledHeader>
    {/* nprogress bar */}
    <div className="bar">
      <Logo>
        <Link href="">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <Cart />
  </StyledHeader>
);

export default Header;
